// function isJavaScripFile(filename) {
//   if (typeof filename !== "string") {
//     return "Please provide me a valid file name (String)";
//   } else {
//     // if (filename.toLowerCase().endsWith(".js") === true) {
//     //   return true;
//     // } else {
//     //   return false;
//     // }

//     return filename.toLowerCase().endsWith(".js");
//   }
// }
function isJavaScripFile(filename) {
  if (typeof filename !== "string") {
    return "Please provide me a valid file name (String)";
  } else {
    const arr = filename.split(".");
    const lastElement = arr.pop();

    return lastElement.toLowerCase() === "js";

    // if (lastElement.toLowerCase() === "js") {
    //   return true;
    // } else {
    //   return false;
    // }
  }
}
console.log(isJavaScripFile("hello.world.bd.js"));
