const fs = require("fs");
const http = require("http");
fs.writeFile(
  "index.html",
  "<h1> Hello World </h1>\n<p> This is Guru Prakash... </p>",
  (err) => {
    console.log(err);
  }
);
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  fs.readFile("index.html", { encoding: "utf-8" }, (err, data) => {
    res.write(data);
    res.end();
  });
});
server.listen(5000, () => console.log("Server has started"));
