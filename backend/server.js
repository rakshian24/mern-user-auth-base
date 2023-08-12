const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });
const { SERVER_PORT, NODE_ENV, MONGO_DB_USERNAME, MONGO_DB_PASSWORD, MONGO_DB_NAME, MONGO_DB_CLUSTER_NAME } = process.env;
const mongoConnectionUri = `mongodb+srv://${MONGO_DB_USERNAME}:${MONGO_DB_PASSWORD}@${MONGO_DB_CLUSTER_NAME}.2hu3aoz.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(mongoConnectionUri).then(() => {
  console.log("Database connected!")
});

//routes
const userRoutes = require("./routes/userRoutes");


const app = express();
const port = SERVER_PORT || 5000;

app.use(express.json());

if (NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use('/api/v1/users', userRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hi From Server!' })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})