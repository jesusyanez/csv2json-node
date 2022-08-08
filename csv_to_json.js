const csvFilePath = "./techline_data.csv";
import csv from "csvtojson";
import fs from "fs";
// convert users.csv file to JSON array
csv()
  .fromFile(csvFilePath)
  .then((users) => {
    // users is a JSON array
    // write JSON array to file
    fs.writeFile("articles.json", JSON.stringify(users, null, 4), (err) => {
      if (err) {
        throw err;
      }
    });
  })
  .catch((err) => {
    // log error if any
    console.log(err);
  });
