import{photos, photosUrl, photosId, commentId, MESSAGES, NAMES, DESCRIPTIONS} from './constant.js';
import{getRandomNumber, getUniqRandomNumber} from './utils.js';
function getComments (){
  const comments = [];
  const quantity = getRandomNumber(1, 30);
  for(let i = 0; i < quantity; i++){
    comments.push({
      id: getUniqRandomNumber(1, 1000, commentId),
      avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
      message: MESSAGES[getRandomNumber(0, 5)],
      name: NAMES[getRandomNumber(0, 8)]
    });
  }
  return comments;
}
function getPhoto () {
  return {
    id: getUniqRandomNumber(1, 25, photosId),
    url: `photos/${getUniqRandomNumber(1, 25, photosUrl)}.jpg`,
    description: DESCRIPTIONS[getRandomNumber(0, 10)],
    likes: getRandomNumber(15, 200),
    comments: getComments()
  };
}
for (let index = 0; index < 25; index++){
  photos.push(getPhoto());
}
export {getPhoto};
