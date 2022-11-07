import Main from './img/main.jpg'

const mainPage = (() => {
    let content = document.getElementById('content');
    const writeMainPage = () => {
        let main = document.createElement('div');
        main.setAttribute('id', 'main');
        content.appendChild(main);
        writeHeader(main);
    }

    const writeHeader = (main) => {
        let header = document.createElement('div');
        header.setAttribute('id', 'header');
        let text = document.createElement('h1');
        text.textContent = 'Pizza means family.';
        header.appendChild(text);
        main.appendChild(header);
        writeMain(main);
    }

    const writeMain = (main) => {
        let body = document.createElement('div');
        body.setAttribute('id', 'body');
        body.textContent = 'As second-generation pizzaiolo, we pride ourselves on creating delicious, wholesome pizzas for a variety of tastes.';
        main.appendChild(body);
        writeSidebar(main);
    }

    const writeSidebar = (main) => {
        let sidebar = document.createElement('div');
        sidebar.setAttribute('id', 'sidebar');
        let img = new Image();
        img.src = Main;
        sidebar.appendChild(img);
        main.appendChild(sidebar);
    }

    return {writeMainPage};
})();

export default mainPage;