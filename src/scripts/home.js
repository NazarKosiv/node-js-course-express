const container = document.querySelector('.main-section-content');

const content = (function content() {
    const el = document.createElement('div');
    const text = document.createTextNode('Some fancy text from home page :D');

    el.appendChild(text);
    el.classList.add('main-section-content__item');

    return el;
})();

container.appendChild(content);
