import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import path from "path";
import { fileURLToPath } from "url";
import adminRoute from "./routes/adminRoute.js";
// import authMiddleware from './middlewares/authMiddleware.js'
import aboutMeRoute from "./routes/aboutMeRoute.js";
import skillsRoute from "./routes/skillsRoute.js";
import serviceRoute from "./routes/serviceRoute.js";
import experienceRoute from "./routes/experienceRoute.js";
import projectRoute from "./routes/projectRoute.js";
import studyRoute from "./routes/studiesRoute.js";
import certificateRoute from "./routes/certificateRoute.js";
import contactRoute from "./routes/contactRoute.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 4001;

// To get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve images from /public folder
app.use("/images", express.static(path.join(__dirname, "public/images")));

//middleware
app.use(cors({ origin: 'https://ruportfolio.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));
app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//database connection
connectDB();

//routes
app.use("/api", adminRoute);
app.use("/about", aboutMeRoute);
app.use("/skills", skillsRoute);
app.use("/service", serviceRoute);
app.use("/experience", experienceRoute);
app.use("/project", projectRoute);
app.use("/study", studyRoute);
app.use("/certificate", certificateRoute);
app.use("/api", contactRoute)

//server start
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
