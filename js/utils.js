import {COUNT_PHOTOS, MESSAGES, NAMES} from './constant.js';

const photos = [];

const getRandomInt = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

const generateComments = () =>{
  const comments = [];
  const numComments = getRandomInt(0,30);
  for (let i=0; i <= numComments - 1; i++){
    const comment = {
      id: i,
      avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES)
    };

    comments.push(comment);
  }
  return comments;
};

export const getPhotoArray = () =>{
  for (let i = 1; i <= COUNT_PHOTOS; i++) {
    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: `Description of Photo ${i}`,
      likes: getRandomInt(15, 200),
      comments: generateComments()
    };
    photos.push(photo);
  }
  return photos;
};

export const onDocumentKeydown = (evt, closeFunc) => {
  if (evt.key === 'Escape') {
    closeFunc(evt);
  }
};
