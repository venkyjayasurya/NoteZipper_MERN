const express = require("express");
// Include notes static database
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware")

// Initialize express app
const app = express();
app.use(express.json());

// Configure dotenv to use in the file
dotenv.config();

// Call the connectDB function to connect mongodb
connectDB();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  // returns only a single note which is passed in url parameters
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

// Route
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

// Use process.env to access the .env variables, if it is not accessed we are setting the PORT to 5000
const PORT = process.env.PORT || 5000;

// Express app get or send the requests and responses to the port for which we use listen method to set PORT
app.listen(PORT, console.log(`Server Started on ${PORT}`));
