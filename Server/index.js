const express = require("express");
const connectDB = require("./config/db");
const morgan = require("morgan");
const logger = require("./config/logger"); 
const blogRoutes = require("./routes/blog.routes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(morgan("dev"));
// Log every incoming request
// app.use((req, res, next) => {
//     logger.info(`${req.method} ${req.url}`);
//     next();
// });

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/admin/blogs", blogRoutes);

// Start the server
app.listen(PORT, () => logger.info(`Server running on http://localhost:${PORT}`));
