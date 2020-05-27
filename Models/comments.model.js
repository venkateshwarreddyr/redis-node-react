const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("comments", commentsSchema);

// module.exports = {
//   CommentsModel,
// };
