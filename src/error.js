import Main from './img/main.jpg'

const errorPage = (() => {
    let content = document.getElementById('content');
    const writeErrorPage = () => {
        let main = document.createElement('div');
        main.setAttribute('id', 'main');
        content.appendChild(main);
        writeHeader(main);
    }

    const writeHeader = (main) => {
        let header = document.createElement('div');
        header.setAttribute('id', 'header');
        let text = document.createElement('h1');
        text.textContent = 'Error!';
        header.appendChild(text);
        main.appendChild(header);
        writeMain(main);
    }

    const writeMain = (main) => {
        let body = document.createElement('div');
        body.setAttribute('id', 'body');
        body.textContent = 'The page you were looking for does not exist';
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

    return {writeErrorPage};
})();

export default errorPage;