import Main from './img/main.jpg'

const contactPage = (() => {
    let content = document.getElementById('content');
    const writeContactPage = () => {
        let main = document.createElement('div');
        main.setAttribute('id', 'main');
        content.appendChild(main);
        writeHeader(main);
    }

    const writeHeader = (main) => {
        let header = document.createElement('div');
        header.setAttribute('id', 'header');
        let text = document.createElement('h1');
        text.textContent = 'Contact Us';
        header.appendChild(text);
        main.appendChild(header);
        writeMain(main);
    }

    const writeMain = (main) => {
        let body = document.createElement('div');
        body.setAttribute('id', 'body');
        body.textContent = 'Email us. Call us. Just do not blame us.'
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

    return {writeContactPage};
})();

export default contactPage;