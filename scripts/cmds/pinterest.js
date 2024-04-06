const axios = require('axios');
const fs = require('fs-extra');
const MAX_IMAGE_LIMIT = 50;

module.exports = {
  config: {
    name: 'pinterest',
    aliases: ['pin'],
    version: '1.2',
    author: 'SiAM | Modified by RUBISH',
    countDown: 0,
    role: 0,
    category: '𝗨𝗧𝗜𝗟𝗜𝗧𝗬',
    shortDescription: {
      en: "Search for images on Pinterest",
    },
    longDescription: {
      en: "Pinterest image search ",
    },
    guide: {
      en: "{pn} 'keyword' -'number of search results'\nExample: {pn} 'cats' -10\nIf no number is provided, the command will return the first 5 images.",
    },
  },

  onStart: async function ({ api, args, event, message }) {
    const { getPrefix } = global.utils;
    const p = getPrefix(event.threadID);

    let keyword = args.join(' ');
    let numberSearch = 5;
    const match = keyword.match(/(.+?)\s*-?(\d+)?$/);
    if (match) {
      keyword = match[1].trim();
      if (match[2]) {
        numberSearch = parseInt(match[2]);
      }
    }

    if (!keyword) {
      api.sendMessage("⚠ | Please provide a keyword.\nExample: Pinterest 'naruto' -6", event.threadID, event.messageID);
      return;
    }

    if (numberSearch > MAX_IMAGE_LIMIT) {
      api.sendMessage(`⚠ | Maximum Image search Limit -> ${MAX_IMAGE_LIMIT} images`, event.threadID, event.messageID);
      return;
    }

    try {
      const res = await axios.get(`https://mesbah-apis.onrender.com/api/v1/pinterest?search=${encodeURIComponent(keyword)}`);
      const data = res.data.data;
      let num = 0;
      const img = [];

      for (let i = 0; i < numberSearch && i < data.length; i++) {
        const path = __dirname + `/tmp/${num += 1}.jpg`;
        const imageUrl = data[i];
        const getImage = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        fs.writeFileSync(path, Buffer.from(getImage.data, 'binary'));
        img.push(fs.createReadStream(path));
      }

      api.sendMessage({
        body: `

Total Image: "${numberSearch}"
Searched: "${keyword}"
`,
        attachment: img
      }, event.threadID, event.messageID);

      for (let ii = 1; ii < num; ii++) {
        fs.unlinkSync(__dirname + `/tmp/${ii}.jpg`);
      }
    } catch (err) {
      console.error(err);
      api.sendMessage("⚠ | There is a problem when scraping images from Pinterest.\n\nPlease try with a different search input or change the spelling...!", event.threadID, event.messageID);
      return;
    }
  }
};
