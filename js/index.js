import axios from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import debounce from "lodash.debounce";
import "../css/styles.css";

const refs = {
  input: document.querySelector(".search-box"),
  list: document.querySelector(".word-list"),
};
const DEBOUNCE_DELAY = 500;
const { hostname, protocol } = window.location;
const { PORT = 3001 } = process.env;
let checkLanguage = true;

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

const handleInput = async () => {
  const word = refs.input.value;
  checkLanguage = /^[А-ЯІЇЄҐа-яіїєґʼ]+$/u.test(word);
  if (!word) {
    restoreHtml();
    return;
  }

  if (!checkLanguage) {
    refs.input.classList.add("input-error");
    return;
  } else {
    refs.input.classList.remove("input-error");
  }

  const suggests = await getWordList(word);
  renderWordList(suggests);
};

const renderWordList = (suggests) => {
  if (!suggests || !suggests.length) return;
  refs.list.innerHTML = "";

  const markup = suggests
    .map(({ Heading }) => {
      return `<li class="word-list__inem" data-id = "${Heading}" >${Heading}</li>`;
    })
    .join("");
  refs.list.innerHTML = markup;
  refs.list.addEventListener("click", () => {
    refs.input.value = event.target.getAttribute("data-id");
    refs.list.innerHTML = "";
  });
};

const restoreHtml = () => {
  refs.input.value = "";
  refs.list.innerHTML = "";
  checkLanguage = true;
  refs.input.classList.remove("input-error");
};

refs.input.focus();
refs.input.addEventListener("input", debounce(handleInput, DEBOUNCE_DELAY));
refs.input.addEventListener("focus", restoreHtml);