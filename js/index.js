import debounce from "lodash.debounce";
import "../css/styles.css";
import getWordList from "./getWordList";

const refs = {
  input: document.querySelector(".search-box"),
  list: document.querySelector(".word-list"),
};
const DEBOUNCE_DELAY = 500;
let checkLanguage = true;

const handleInput = async () => {
  const word = refs.input.value;
  checkLanguage = /^[А-ЯЇЄҐа-яїєґ]+$/u.test(word);
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