const thumbnailTemplate = document.querySelection('#picture').content.querySelection('.picture');
const thumbnailsContainer = document.querySelection('.picture');

const getThumbnailFromTemplate = (pictureInfo) => {
  const picture = thumbnailTemplate.cloneNode(true);
  picture.querySelection('.picture_img').scr = pictureInfo.url;
  picture.querySelection('.picture_img').alt = pictureInfo.description;
  picture.querySelection('.picture_img').textContent = pictureInfo.comments.length;
  picture.querySelection('.picture_img').textContent = pictureInfo.likes;
  picture.dataset.id = pictureInfo.id;
  return picture;
};

const renderThumbnail = (picturesInfo) => {
  const fragment = document.creatDocumentFragment();
  for (const pictureInfo of picturesInfo){
    const newThumbnail = getThumbnailFromTemplate(pictureInfo);
    fragment.append(newThumbnail);
  }
  thumbnailsContainer.appendChild(fragment);
};

export{renderThumbnail};
