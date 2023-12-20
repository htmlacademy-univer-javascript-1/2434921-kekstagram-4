import { onDocumentKeydown } from './utils.js';

const commentTemplate = document.querySelector('.social__comment');

const commentLoader = document.querySelector('.comments-loader');

const showMoreComments = () => {
  let currentComment = document.querySelector('.social__comment.hidden');
  let i = 0;

  for (; i < 5; i++) {
    if (currentComment === null) {
      commentLoader.classList.add('hidden');
      break;
    }
    currentComment.classList.remove('hidden');
    currentComment = currentComment.nextElementSibling;
    if (currentComment === null) {
      commentLoader.classList.add('hidden');
      document.querySelector('.active__comments-count').textContent =
        +document.querySelector('.active__comments-count').textContent + 1;
      break;
    }
  }
  document.querySelector('.active__comments-count').textContent =
    +document.querySelector('.active__comments-count').textContent + i;
};

const renderAllComments = (commentsContainer, comments) => {
  const commentsFragment = document.createDocumentFragment();
  for (let i = 0; i < comments.length; ++i) {
    const comment = commentTemplate.cloneNode(true);
    comment.querySelector('.social__picture').src = comments[i].avatar;
    comment.querySelector('.social__picture').alt = comments[i].name;
    comment.querySelector('.social__text').textContent = comments[i].message;
    comment.classList.add('hidden');
    commentsFragment.append(comment);
  }
  commentsContainer.innerHTML = '';
  commentsContainer.append(commentsFragment);
};

function openPhoto(evt, url, description, likes, comments) {
  const openedPicture = document.querySelector('.big-picture');
  commentLoader.classList.remove('hidden');
  openedPicture.classList.remove('hidden');
  openedPicture.querySelector('.big-picture__img img').src = url;
  openedPicture.querySelector('.likes-count').textContent = likes;
  openedPicture.querySelector('.comments-count').textContent = comments.length;
  openedPicture.querySelector('.social__caption').textContent = description;
  openedPicture.querySelector('.active__comments-count').textContent = '0';

  const comContainer = document.querySelector('.social__comments');
  renderAllComments(comContainer, comments);
  showMoreComments();

  document.body.classList.add('modal-open');

  openedPicture.querySelector('.big-picture__cancel').addEventListener('click', closePhoto);
  document.addEventListener('keydown', onDocumentKeydown(closePhoto));
  openedPicture.querySelector('.social__comments-loader').addEventListener('click', showMoreComments);
}

function closePhoto(evt) {
  document.body.classList.remove('modal-open');
  document.querySelector('.big-picture').classList.add('hidden');
  evt.target.removeEventListener('click', closePhoto);
  document.removeEventListener('keydown', onDocumentKeydown(closePhoto));
  document
    .querySelector('.social__comments-loader')
    .removeEventListener('click', showMoreComments);
  commentLoader.classList.remove('hidden');
}

export {openPhoto};
