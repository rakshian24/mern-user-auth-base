const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

//routes
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = process.env.SERVER_PORT || 5000;

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use('/api/v1/users', userRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hi From Server!' })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})