module.exports = {
  config: {
    name: "offbot",
    version: "1.0",
    author: "SHS",
    countDown: 45,
    role: 2,
    shortDescription: "Turn off bot",
    longDescription: "Turn off bot",
    category: "owner",
    guide: "{p}{n}"
  },
  onStart: async function ({event, api}) {
    const permission = ["100041931226770"];
  if (!permission.includes(event.senderID)) {
    api.sendMessage("You don't have enough permission to use this command. Only Sahadat Hossen can do it.", event.threadID, event.messageID);
    return;
  }
    api.sendMessage("Successfully Turned Off Bot System ✅",event.threadID, () =>process.exit(0))}
};
