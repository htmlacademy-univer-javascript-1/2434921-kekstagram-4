const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const thumbnailsContainer = document.querySelector('.picture');

const getThumbnailFromTemplate = (pictureInfo) => {
  const picture = thumbnailTemplate.cloneNode(true);
  picture.querySelector('.picture_img').scr = pictureInfo.url;
  picture.querySelector('.picture_img').alt = pictureInfo.description;
  picture.querySelector('.picture_img').textContent = pictureInfo.comments.length;
  picture.querySelector('.picture_img').textContent = pictureInfo.likes;
  picture.dataset.id = pictureInfo.id;
  return picture;
};

const renderThumbnail = (picturesInfo) => {
  const fragment = document.createDocumentFragment();
  for (const pictureInfo of picturesInfo){
    const newThumbnail = getThumbnailFromTemplate(pictureInfo);
    fragment.append(newThumbnail);
  }
  thumbnailsContainer.appendChild(fragment);
};

export{renderThumbnail};
