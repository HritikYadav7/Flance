const mongoose = require('mongoose')
const { Schema } = mongoose;

const gigSchema = new Schema({
  userId:{
    type : String,
    required: true,
  },
  title: {
    type : String,
    required: true,
  },
  desc:{
    type : String,
    required: true,
  },
  totalStars:{
    type : Number,
    default: 0,
  },
  starNumber:{
    type : Number,
    default: 0,
  },
  cat:{
    type : String,
    required: false,
    default: "design"
  },
  price:{
    type : Number,
    required: true,
  },
  cover:{
    type : String,
    required: true,
  },
  images:{
    type : [String],
    required: true,
  },
  shortTitle:{
    type : String,
    required: true,
  },
  shortDesc:{
    type : String,
    required: true,
  },
  deliveryTime:{
    type : String,
    required: true,
  },
  revisionNumber:{
    type : String,
    required: false,
  },
  features:{
    type : [String],
    required: false,
  },
  sales:{
    type : [String],
    default: 0,
  },
}, {
    timestamps:true
});

module.exports = mongoose.model("Gig", gigSchema)
// export default mongoose.model("Gig", gigSchema)