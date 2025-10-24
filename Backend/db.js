const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://Ayush:mili2022@cluster0.jc5nzxe.mongodb.net/IMS?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;