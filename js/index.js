import debounce from "lodash.debounce";
import "../css/styles.css";
import { fetchCountries } from "./fetchCountries";
import { messages } from "./messages";

const refs = {
  search: document.getElementById("search-box"),
  list: document.querySelector(".country-list"),
  info: document.querySelector(".country-info"),
  box: document.querySelector(".input__box"),
};
const DEBOUNCE_DELAY = 500;

function searchContry() {
  const countryName = refs.search.value.trim();
  if (countryName === "") {
    restoreHtml();
    return;
  }

  if (!/^[A-z]+$/.test(countryName)) {
    return messages("error");
  }

  fetchCountries(countryName)
    .then((contrys) => renderContryList(contrys))
    .catch((error) => messages("error"));
}

function renderContryList(contrys) {
  if (contrys.length === 1) {
    countryInfo(contrys[0]);
  }

  if (contrys.length > 1 && contrys.length <= 10) {
    countryList(contrys);
  }

  if (contrys.length > 10) {
    messages("info");
  }
}

function countryList(contrys) {
  refs.info.innerHTML = "";
  const markup = contrys
    .map((contry, index) => {
      return `<li class="country-list__inem" data-id = "${index}" ><img src="${contry.flags.svg}" width="35" height="25" class="flag"/>
        ${contry.name.official}
      </li>`;
    })
    .join("");
  refs.list.innerHTML = markup;
  refs.list.addEventListener("click", () => {
    countryInfo(contrys[Number(event.target.getAttribute("data-id"))]);
  });
}

// function countryInfo(contrys) {
//   refs.list.innerHTML = "";
//   refs.search.blur();
//   refs.info.innerHTML = `
//   <h2>${contrys.name.official}</h2>
//   <div class="info__box">
//   <img src="${contrys.flags.svg}" height="100"/>
//   <ul class="info__list">
//   <li class="info__item">Capital: ${contrys.capital}</li>
//   <li class="info__item">Area: ${(contrys.area / 1000).toFixed(
//     2
//   )} thousand km²</li>
//   <li class="info__item">Population: ${(contrys.population / 1000000).toFixed(
//     2
//   )} mln people</li>
//   <li class="info__item">Languages: ${Object.values(contrys.languages)}</li>
// </ul>
// </div>`;
// }

function restoreHtml() {
  refs.search.value = "";
  // refs.info.innerHTML = "";
  refs.list.innerHTML = "";
}

refs.search.focus();
refs.search.addEventListener("input", debounce(searchContry, DEBOUNCE_DELAY));
refs.search.addEventListener("focus", restoreHtml);
// wordList