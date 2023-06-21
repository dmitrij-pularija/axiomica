import axios from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";
const { hostname, protocol } = window.location;
const { PORT = 3001 } = process.env;

const getWordList = async (word) => {
  try {
    const { data } = await axios.get(
      `${protocol}//${hostname}:${PORT}/api/v1/WordList`,
      {
        params: {
          prefix: word,
          srcLang: 1058,
          pageSize: 10,
        },
      }
    );
    return data;
  } catch ({ message }) {
    Notify.failure(message, {
      useIcon: true,
      cssAnimationStyle: "from-top",
      position: "center-top",
      borderRadius: "25px",
      width: "250px",
    });
  }
};

export default getWordList;