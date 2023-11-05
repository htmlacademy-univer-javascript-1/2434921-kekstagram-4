const photos = [];
const photosUrl = [];
const photosId = [];
const commentId = [];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = [
  'Миша',
  'Антон',
  'Аня',
  'Толя',
  'Коля',
  'Женя',
  'Ира',
  'Катя',
  'Соня',
  'Зоя'
];
const DESCRIPTIONS = [
  'Описание 1',
  'Описание 2',
  'Описание 3',
  'Описание 4',
  'Описание 5',
  'Описание 6',
  'Описание 7',
  'Описание 8',
  'Описание 9',
  'Описание 10',
  'Описание 11',
  'Описание 12',
  'Описание 13',
  'Описание 14',
  'Описание 15',
  'Описание 16',
  'Описание 17',
  'Описание 18',
  'Описание 19',
  'Описание 20',
  'Описание 21',
  'Описание 22',
  'Описание 23',
  'Описание 24',
  'Описание 25'
];
function getRandomNumber (max, min){
  return Math.round(Math.random() * (+max - +min + 1) * min);
}
function getUniqRandomNumber (max, min, arr){
  let current = Math.random() * (+max - +min + 1) * min;
  while (arr.includes(current)){
    current = Math.random() * (+max - +min + 1) * min;
  }
  arr.push(current);
  return Math.round(current);
}
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
