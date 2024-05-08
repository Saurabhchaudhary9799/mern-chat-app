const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    console.log(process.env.PORT)
    const conn = await mongoose.connect('mongodb+srv://saurabh:saurabh@cluster0.t0izdgc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;

