import express from 'express';

const app = express();

// Home page
app.get("/", (req, res) => {
    res.send("<h1>Hello EXPRESS</h1>");
});

// About page
app.get("/about", (req, res) => {
    res.send("<h2>About Page</h2>");
});

const products =[
    { id: 1, name: "marker", qty: 100, price: 15 },
    { id: 2, name: "duster", qty: 50, price: 10 },
];

// Products 
app.get("/products", (req,res) => {
    // res.status(200).send(products);
     res.status(200).JSON(products);
});

// 404 - Page not found
app.use((req, res) => {
    res.status(404).send("<h1>Page not Found</h1>");
});

// Start server
app.listen(3333, () => {
    console.log("prg1 is running at 3333");
});