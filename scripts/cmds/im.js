const axios = require('axios');

// Define the array of bad words
const badWords = ["sex", "hentai", "pussy", "dick", "xxx", "porn", "nude", "sexy", "🍑", "🔞", "👅", "🫦", "💋", "🔥", "🤒", "🥵", "🤭", "puti", "lado", "ass", "fuck", "suck", "puti", "breast", "dickless", "kera", "vagina", "fanny", "banana", "🍌", "hot", "yuri", "boobs", "xnxx", "🥒", "🩸", "🤤", "cucumber", "🖕"];

module.exports = {
  config: {
    name: "im",
    version: "1.1",
    author: "OtinXSandip // modified by Sahadat",
    countDown: 10,
    role: 0,
    shortDescription: {
      en: 'Text to Image'
    },
    longDescription: {
      en: "Text to image"
    },
    category: "ai",
    guide: {
      en: '{pn} your prompt | Type' +
        ' here are supported models:'
    }
  },

  onStart: async function ({ api, event, args, message, usersData }) {
    const text = args.join(" ");
    if (!text) {
      return message.reply("Please provide a prompt.");
    }   

    // Split the text into words
    const words = text.split(/[\s,]+/);
    
    // Find if any banned words are used
    const bannedWord = words.find(word => badWords.includes(word.toLowerCase()));
    if (bannedWord) {
      return message.reply(`Sorry, but you are not allowed to use the word "${bannedWord}".`);
    }
        
    let prompt, model;
    if (text.includes("|")) {
      const [promptText, modelText] = text.split("|").map((str) => str.trim());
      prompt = promptText;
      model = modelText;
    } else {
      prompt = text;
      model = 2;
    }
    message.reply("✅| Creating your Imagination...", async (err, info) => {
      let ui = info.messageID;
api.setMessageReaction("⏳", event.messageID, () => {}, true);
      try {
        const response = await axios.get(`https://sandip-gen.onrender.com/sdxl?prompt=${encodeURIComponent(prompt)}&model=${model}`);
api.setMessageReaction("✅", event.messageID, () => {}, true);
        const img = response.data.combinedImageUrl;
        message.unsend(ui);
        message.reply({
          body: `
Your Imagination Is Created 🌟\nPlease reply with the image number (1, 2, 3, 4 Or All) to get the corresponding image in high resolution.`,
          attachment: await global.utils.getStreamFromURL(img)
        }, async (err, info) => {
          let id = info.messageID;
          global.GoatBot.onReply.set(info.messageID, {
            commandName: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
            imageUrls: response.data.imageUrls 
          });
        });
      } catch (error) {
        console.error(error);
        api.sendMessage(`Error: ${error}`, event.threadID);
      }
    });
  },


  onReply: async function ({ api, event, Reply, usersData, args, message }) {
  const reply = args[0].toUpperCase(); // Convert the reply to uppercase
  const { author, messageID, imageUrls } = Reply;
  if (event.senderID !== author) return;
  try {
    if (reply === "ALL") {
      // Prepare all images as attachments in a single message
      const attachments = await Promise.all(Object.keys(imageUrls).map(async (key) => {
        const img = imageUrls[key];
        return await global.utils.getStreamFromURL(img);
      }));

      // Send all images in one message
      await message.reply({ attachment: attachments });
    } else if (parseInt(reply) >= 1 && parseInt(reply) <= 4) {
      // If the user replies with a number between 1 and 4, send the corresponding image
      const img = imageUrls[`image${parseInt(reply)}`];
      await message.reply({ attachment: await global.utils.getStreamFromURL(img) });
    } else {
      // If the reply is neither "ALL" nor a number between 1 and 4, send an error message
      await message.reply("Invalid input. Please reply with a number between 1 and 4 or 'ALL' to get all images.");
      return;
    }
    // Attempt to unsend the original reply message
    await message.unsend(Reply.messageID); 
  } catch (error) {
    console.error(error);
    await api.sendMessage(`Error: ${error}`, event.threadID);
    // Even in case of error, try to unsend the original message to clean up
    await message.unsend(Reply.messageID); 
  }
},
     
};
