require('./src/bot');
const express = require('express');
const mockTweet = require("./src/mock/tweet.json");
const app = express();

app.use(express.static('public'));

app.get("/", hello);
app.post("/api/comment", mockResponse); /* callback should be comment() in ./src/mock */
app.post("/api/like", mockResponse); /* callback should be like() in ./src/mock */
app.post("/api/retweet", mockResponse); /* callback should be retweet() in ./src/mock */
app.post("/api/follow", mockResponse); /* callback should be follow() in ./src/mock */

function hello(req, res) {
  res.json({ greeting: "Hello, I am a Twitter bot created by ExpenseNG.com" });
}

function mockResponse(req, res) {
  res.json(mockTweet);
}

const listener = app.listen(process.env.PORT, function () {
  console.rofl('Your app is listening on port ' + listener.address().port);
});
