import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config({ path: "./config.env" });
const { SERVER_PORT, NODE_ENV } = process.env;

const app = express();
const port = SERVER_PORT || 5000;

app.use(express.json());
if (NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use('/api/v1/users', userRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is running!' });
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})