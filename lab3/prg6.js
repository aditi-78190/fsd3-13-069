import http from "http";
import { getAllProducts } from "./products.js";

const server = http.createServer((req, res) => {

  // GET Products
  if (req.url === "/api/v1/products" && req.method === "GET") {

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    const data = getAllProducts();

    res.end(JSON.stringify({
      count: data.length,
      data: data
    }));

  }

  // POST Product
  else if (req.url === "/" && req.method === "POST") {

    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {

      const product = JSON.parse(body);

      console.log("Received product:", product);

      res.statusCode = 201;
      res.setHeader("Content-Type", "application/json");

      res.end(JSON.stringify({
        msg: "product added",
        product: product
      }));
    });

  }

  // PUT Product
  else if (
    req.url.startsWith("/products/") &&
    req.method === "PUT"
  ) {

    const productID = req.url.split("/").pop();

    console.log("Update Product id:", productID);

    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {

      const product = JSON.parse(body);

      product.id = productID;

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");

      res.end(JSON.stringify({
        msg: "product updated",
        product: product
      }));
    });

  }

  // DELETE Product
  else if (req.url === "/api/v1/products" && req.method === "DELETE") {

    res.statusCode = 200;
    res.end("DELETE Request");

  }

  // Not Found
  else {

    res.statusCode = 404;
    res.end("Request not found");
  }

});

server.listen(5000, () => {
  console.log("prg6 is running on port 5000");
});