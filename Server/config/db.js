const mongoose = require("mongoose");
const logger = require("./logger"); // Import the logger

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            "mongodb+srv://deveshpathak67:xDBFNxUnFIGiJFkm@deveshcluster.phxz3.mongodb.net/blogdb?retryWrites=true&w=majority", 
            { 
                useNewUrlParser: true, 
                useUnifiedTopology: true 
            }
        );
        logger.info(`MongoDB Connected: ${conn.connection.host}`); 
    } catch (error) {
        logger.error(`MongoDB Connection Error: ${error.message}`); 
        process.exit(1); 
    }
};

module.exports = connectDB;
