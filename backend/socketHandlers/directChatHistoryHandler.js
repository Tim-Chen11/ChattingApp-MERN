const Conversation = require("../models/conversation");
const chatUpdates = require("./updates/chat");

const directChatHistoryHandler = async (socket, data) => {
  try {
    const { userId } = socket.user;
    const { receiverUserId } = data;

    console.log("backend directChatHistoryHandler");

    const conversation = await Conversation.findOne({
      participants: { $all: [userId, receiverUserId] },
      type: "DIRECT",  //when click the avartar the message will not spontaneously pop out, plz delete this row to fix it 
    });

    console.log(conversation.type)

    if (conversation) {
      console.log("if conversation");
      chatUpdates.updateChatHistory(conversation._id.toString(), socket.id);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = directChatHistoryHandler;
