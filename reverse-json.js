import fs from "fs";

let rawdata = fs.readFileSync("./articles.json");
let json = JSON.parse(rawdata);
json.reverse();
console.log(json);

fs.writeFile("articles_desc.json", JSON.stringify(json, null, 4), (err) => {
  if (err) {
    throw err;
  }
});
