import { products } from "./data.js";
import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send(`
        <h1>Home Page</h1>
        <a href="/api/products">Browse Products</a>
    `);
});

// Get all products
app.get("/api/products", (req, res) => {

    const modiProducts = products.map(
        ({ reviews, description, ...rest }) => rest
    );

    res.status(200).json({
        count: modiProducts.length,
        data: modiProducts
    });
});

// Get product by ID
app.get("/api/products/:id", (req, res) => {

    const { id } = req.params;

    res.send(`will show product ${id}`);
});

// 404 Route
app.use((req, res) => {
    res.status(404).send("Route Not Found");
});

app.listen(3333, () => {
    console.log("prg4 is running...");
});