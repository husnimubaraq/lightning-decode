const express = require("express");
const {parsePaymentRequest} = require('invoices')
const router = express.Router();

router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Testing",
    message: "HOME!",
  });
});

router.get('/:address', (req, res) => {
    const requestDetails = parsePaymentRequest({
      request: req.params.address,
      // request: 'lnbc400n1p3x5wk0pp5gfwxwh9elvrzzcx7gclua2hg7m0l5s3f7m8yh58z9wyq7jrk8kksdqufa4jq2rkd9sjqnzw2pq4jtnrdu5scqzpgxqyz5vqsp59hue56pjtxjck6a3v7jszexrzpx2l5qdpnugkewtl4csz73ttccs9qyyssqzyz6h9nx754dkpqeqmyz6gxhytgnxf43d2px375vsdp0apdqd7nx65q67fhfhw9v9azet209x5xplsg7lxulp2v6vffsnefvkf543dsqkxw2z9'
      // request: 'lnbc2500u1pvjluezpp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqdq5xysxxatsyp3k7enxv4jsxqzpuaztrnwngzn3kdzw5hydlzf03qdgm2hdq27cqv3agm2awhz5se903vruatfhq77w3ls4evs3ch9zw97j25emudupq63nyw24cg27h2rspfj9srp'
    });
    res.json(requestDetails)
  })

module.exports = router;