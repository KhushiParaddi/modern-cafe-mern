import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const app = express();
const PORT = 5000;
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//  Serve static files from backend/public
const staticPath = path.join(__dirname, "public");
app.use(express.static(staticPath));
console.log(" Static folder path:", staticPath);


app.use(cors());
app.use(express.json()); 


const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "restaurant";

async function startServer() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const menuCollection = db.collection("menu");
    const contactCollection = db.collection("contacts"); 

    
    const count = await menuCollection.countDocuments();
    if (count === 0) {
      await menuCollection.insertMany([
        {
          name: "Espresso",
          description: "Rich and bold single shot of pure coffee.",
          price: 120,
          image: "/espresso.jpg",
        },
        {
          name: "Latte",
          description: "Smooth espresso with steamed milk.",
          price: 150,
          image: "/latte.jpg",
        },
        {
          name: "Cappuccino",
          description: "Classic blend of espresso and foamed milk.",
          price: 140,
          image: "/cappuccino.jpg",
        },
        {
          name: "Mocha",
          description: "Espresso with chocolate and milk.",
          price: 160,
          image: "/mocha.jpg",
        },
      ]);
      console.log("Default menu inserted");
    }

    // API route to get menu
    app.get("/api/menu", async (req, res) => {
      try {
        const menu = await menuCollection.find().toArray();
        res.json(menu);
      } catch (err) {
        console.error("Error fetching menu:", err);
        res.status(500).json({ error: "Failed to fetch menu" });
      }
    });

    // API route to handle contact/reservations
    app.post("/api/contact", async (req, res) => {
      try {
        const data = req.body;

        // Simple validation
        if (!data.name || !data.email) {
          return res.status(400).json({ message: "Name and email are required" });
        }

        await contactCollection.insertOne({
          ...data,
          createdAt: new Date(),
        });

        console.log(" New contact/reservation:", data);
        res.json({ message: "Reservation saved successfully!" });
      } catch (err) {
        console.error(" Error saving contact:", err);
        res.status(500).json({ message: "Server error" });
      }
    });

    // Start server
    app.listen(PORT, () => {
      console.log(` Server running on http://localhost:${PORT}`);
      console.log(" Espresso exists:", fs.existsSync(path.join(staticPath, "espresso.jpg")));
    });
  } catch (err) {
    console.error(" MongoDB connection failed:", err);
  }
}

startServer();
