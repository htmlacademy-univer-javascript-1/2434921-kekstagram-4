import { getPhoto } from './create-pictures.js';
import { renderThumbnail } from './modules/render-thumbnail.js';
import { addEventListenerToPicture } from './modules/render-big-picture.js';

const pictures = getPhoto();

renderThumbnail(pictures);
addEventListenerToPicture(pictures);
