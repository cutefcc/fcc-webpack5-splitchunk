const name = "cutefcc";
import data from "./data.js";
import data2 from "./data2.js";
import * as $ from "jquery";

// import("./data2.js").then((data2) => {
//   console.log(data2);
// });
import("jquery").then(($) => {
  console.log($);
});

console.log("name", name);
console.log("data", data);
