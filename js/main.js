import { getPhoto } from './modules/create-pictures.js';
import { renderThumbnail } from './modules/render-thumbnail.js';
import { addEventListenerToPicture } from './modules/render-big-pictures.js';

const pictures = [];
for (let i = 0; i < 25; i++) {
  pictures.push(getPhoto());
}

renderThumbnail(pictures);
addEventListenerToPicture(pictures);
