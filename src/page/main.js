const twitterLink = 'https://twitter.com/sinimawath';
const githubLink = 'https://github.com/SinimaWath';

const HeaderTemplate = `
<header class="header">
  <h1 class="header__title">Тарасов Блог</h1>
  <div class="header__social">
    <a href="${twitterLink}" class="social__link">
      <div class="social__icon social__icon_twitter"></div>
    </a>
    <a href="${githubLink}" class="social__link">
      <div class="social__icon social__icon_github"></div>
    </a>
  </div>
  <div class="header__settings">
  </div>
</header>
`;


const Header = (root) => {
  root.insertAdjacentHTML('beforeend', HeaderTemplate);
};

export const MainPage = (root) => {
  if (!root) {
    throw new Error('MainPage: no root');
  }

  root.innerHTML = '';
  Header(root);
};
