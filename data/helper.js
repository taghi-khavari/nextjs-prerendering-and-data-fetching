import fs from "fs";
import path from "path";

export function getProducts() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data.products;
}

export function getProductById(id) {
  const products = getProducts();
  return products.find((product) => product.id === id);
}
