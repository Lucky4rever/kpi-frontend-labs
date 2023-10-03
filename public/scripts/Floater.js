function Floater() {
  console.log('A component to add control menus for other pages');
};

Floater.prototype.createStyles = function() {
  const styles = document.createElement('style');
  styles.innerHTML = `
    .floater {
      position: fixed;
      top: calc(50% - 5rem);
      right: 2rem;
      height: 5rem;
      width: fit-content;

      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      font-family: system-ui, -apple-system, 
        "Segoe UI", Roboto, Helvetica, Arial, 
        sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    }

    .floater img.floater__img {
      width: 2rem;
      aspect-ratio: 1 / 1;
    }

    .floater > .floater__link {
      display: block;
      color: #52C556;
      font-size: 0.8rem;
      text-decoration: none;
      text-shadow: 1px -1px #EEFFF0;
    }
  `;

  return styles;
};

Floater.prototype.createElement = function() {
  const floater = document.createElement('div');
  floater.className = 'floater';

  const logoLink = document.createElement('a');
  logoLink.href = '/';
  const logo = document.createElement('img');
  logo.src = `../icons/Logo.svg`;
  logo.className = 'floater__img';
  logo.draggable = false;
  logoLink.appendChild(logo);

  const mainPageLink = document.createElement('a');
  mainPageLink.href = '/';
  mainPageLink.className = 'floater__link';
  mainPageLink.text = 'Home Page';

  const gitLink = document.createElement('a');
  gitLink.href = 'https://github.com/Lucky4rever/kpi-frontend-labs/';
  gitLink.className = 'floater__link';
  gitLink.text = 'GitHub';

  floater.appendChild(logoLink);
  floater.appendChild(mainPageLink);
  floater.appendChild(gitLink);

  return floater;
};

Floater.prototype.render = function() {
  console.log('Rendering floater...');

  document.body.appendChild(Floater.prototype.createStyles());
  document.body.appendChild(Floater.prototype.createElement());

  console.log('Done!');
};



Floater.prototype.render();
