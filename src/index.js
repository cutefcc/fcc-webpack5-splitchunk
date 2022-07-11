const name = "cutefcc";
import data from "./data.js";

import("./data2.js").then((data2) => {
  console.log(data2);
});

console.log("name", name);
console.log("data", data);
