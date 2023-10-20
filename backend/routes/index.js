var express = require("express");
var router = express.Router();
var axios = require("axios");

require("dotenv").config();

/* GET home page. */
router.get("/", async function (req, res, next) {
  // const searchQuery = "asfasdf";
  const searchQuery = req.query.q || "";
  const response = await axios.get(
    `https://serpapi.com/search.json?engine=google&q=${searchQuery}&location=India&google_domain=google.com&gl=us&hl=en&api_key=${process.env.API_KEY}`
  );
  await axios.post(
    "http://localhost:8983/solr/results/update?commit=true",
    response.data.organic_results.map(({ title, link, snippet }) => ({
      title,
      link,
      snippet,
    }))
  );
  res.send(response.data);
});

module.exports = router;
