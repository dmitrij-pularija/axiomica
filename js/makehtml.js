export function makehtml(
  largeImageURL,
  webformatURL,
  tags,
  likes,
  views,
  comments,
  downloads,
  user,
  userImage,
  show
) {
  let addStyle = "";
  if (!show) {
    addStyle = " visually-hidden";
  }

  return `
  <div class="photo-card">
    <a href="${largeImageURL}" class="gallery__link">
    <img class="gallery__image" src="${webformatURL}" alt="${tags}" loading="lazy" />
  <div class="overlay${addStyle}">
  <div class="info-card">
  <img class="user__image" src="${userImage}" loading="lazy" />
  <h3 class="user__name">${user}</h3>
  </div>
  </div>
  <div class="info">
    <p class="info-item">
    <svg width="15" height="15" class="likes__icon">
    <use href="./img/icons.svg#heart"></use>
  </svg><b>${likes}</b>
    </p>
    <p class="info-item">
    <svg width="18" height="18" class="views__icon">
    <use href="./img/icons.svg#eye"></use>
  </svg><b>${views}</b>
    </p>
    <p class="info-item">
    <svg width="15" height="15" class="comments__icon">
    <use href="./img/icons.svg#chat"></use>
  </svg><b>${comments}</b>
    </p>
    <p class="info-item">
    <svg width="15" height="15" class="downloads__icon">
    <use href="./img/icons.svg#download"></use>
  </svg><b>${downloads}</b>
    </p>
  </div></a></div>`;
}
