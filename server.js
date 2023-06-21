const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const { BASE_URL, API_KEY, PORT = 3001 } = process.env;
let tokenExpirationTime = null;

const setHeader = async () => {
  if (Date.now() > tokenExpirationTime) {
    const { data } = await axios.post(
      `${BASE_URL}/api/v1.1/authenticate`,
      {},
      {
        headers: {
          Authorization: `Basic ${API_KEY}`,
        },
      }
    );
    tokenExpirationTime = Date.now() + 23 * 60 * 60 * 1000;
    axios.defaults.headers.common.Authorization = `Bearer ${data}`;
  }
};

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.get(
  `${BASE_URL}/api/v1/WordList`,
  async ({ query: { prefix, srcLang, pageSize } }, res) => {
    try {
      await setHeader();
      const {
        data: { Headings },
      } = await axios.get(`${BASE_URL}/api/v1/WordList`, {
        params: {
          prefix,
          srcLang,
          dstLang: srcLang,
          pageSize,
        },
      });

      const data = Headings.map(({ Heading }) => ({ Heading }));
      return res.status(200).json(data);
    } catch (error) {
      error.response.data.Message && console.log(error.response.data.Message);
      if (error.response.status === 404 || error.response.status === 500) {
        return res.status(200).json([]);
      } else {
        next(error);
      }
    }
  }
);

app.use((_, res, __) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, _, res, __) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});