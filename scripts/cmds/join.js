
module.exports = {
  config: {
    name: "join",
    version: "0.0",
    author: "Sheikh",
    countDown: 10 ,
    role: 0,
    shortDescription: {
      en: "Add user to support group",
    },
    longDescription: {
      en: "T",
    },
    category: "support",
    guide: {
      en: "{p}{n}",
    },
  },

  onStart: async function ({ api, args, message, event }) {
    const GroupId = args[0];
    const threadID = event.threadID;
    const userID = event.senderID;

    const threadInfo = await api.getThreadInfo(GroupId);
    const participantIDs = threadInfo.participantIDs;

    if (participantIDs.includes(userID)) {
      api.sendMessage(
        "You are already in the group. If you can't find it, please check your message requests or spam box.",
        threadID
      );
    } else {
      api.addUserToGroup(userID, GroupId, (err) => {
        if (err) {
          console.error("Failed to add user to support group:", err);
          api.sendMessage(
            "Sorry, I can't add you to the group. It may be because your account is set to private or you have disabled message requests. Please check your settings and try again.",
            threadID
          );
        } else {
          api.sendMessage(
            "You have been added to the group. If you can't find it in your inbox, please check your message requests or spam box.",
            threadID
          );
        }
      });
    }
  },
};
