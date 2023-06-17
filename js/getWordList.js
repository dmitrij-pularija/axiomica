import axios from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";

axios.defaults.baseURL = "https://test-lingvo-api.onrender.com";

const getWordList = async (word) => {
  try {
    const { data } = await axios.get("api/v1/WordList", {
      params: {
        prefix: word,
        srcLang: 1058,
        pageSize: 10,
      },
    });
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