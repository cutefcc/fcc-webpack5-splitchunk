const name = "cutefcc";
// import data1 from "./data1.js";
// import data2 from "./data2.js";
// import data3 from "./data3.js";
import * as $ from "jquery";

import("./data1.js").then((data1) => {
  console.log(data1);
});
import("./data2.js").then((data2) => {
  console.log(data2);
});
import("./data3.js").then((data3) => {
  console.log(data3);
});
// import("jquery").then(($) => {
//   console.log($);
// });

console.log("name", name);
// console.log("data1", data1);
// console.log("data2", data2);
// console.log("data3", data3);
