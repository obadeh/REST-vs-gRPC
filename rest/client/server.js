const request = require("request");
const http = require("http");

// note that we used keep alive header to more performance
http.globalAgent.keepAlive = true;

// const REQUEST_COUNT = process.env.REQUEST_COUNT;
// number of request hits
const REQUEST_COUNT = 50000;
const SERVER_BASE_URL =
  process.env.SERVER_BASE_URL || "http://localhost:3001";

const requestAsync = endpoint =>
  new Promise((resolve, reject) => {
    request(`${SERVER_BASE_URL}${endpoint}`, (err, res, body) =>
      err ? reject(err) : resolve(body)
    );
  });

const benchmark = async endpoint => {
  const startTime = process.hrtime();
  for (let i = 1; i <= REQUEST_COUNT; i++) {
    await requestAsync(endpoint);
  }
  const endTime = process.hrtime(startTime);
  console.log(
    `Done ${REQUEST_COUNT.toLocaleString()} ${endpoint} in ${endTime[0]} s ${(
      endTime[1] / 1e6
    ).toFixed(4)} ms`
  );
};

(async () => {
  await benchmark("/empty");
  await benchmark("/books/1");
  await benchmark("/books");
})();
