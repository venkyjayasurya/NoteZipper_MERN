const express = require("express");
// Include notes static database
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware")
const cors = require("cors")


// Initialize express app
const app = express();
app.use(express.json());
app.use(cors()) //Applying cors policy
// Configure dotenv to use in the file
dotenv.config();

// Call the connectDB function to connect mongodb
connectDB();

app.get("/", (req, res) => {
  res.send("API is running");
});

// Route
app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes)


app.use(notFound);
app.use(errorHandler);

// Use process.env to access the .env variables, if it is not accessed we are setting the PORT to 5000
const PORT = process.env.PORT || 5000;

// Express app get or send the requests and responses to the port for which we use listen method to set PORT
app.listen(PORT, console.log(`Server Started on ${PORT}`));
