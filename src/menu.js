import Main from './img/main.jpg'

const menuPage = (() => {
    let content = document.getElementById('content');
    const writeMenuPage = () => {
        let main = document.createElement('div');
        main.setAttribute('id', 'main');
        content.appendChild(main);
        writeHeader(main);
    }

    const writeHeader = (main) => {
        let header = document.createElement('div');
        header.setAttribute('id', 'header');
        let text = document.createElement('h1');
        text.textContent = 'Explore our menu.';
        header.appendChild(text);
        main.appendChild(header);
        writeMain(main);
    }

    const writeMain = (main) => {
        let body = document.createElement('div');
        body.setAttribute('id', 'body');
        body.textContent = 'Developed by James Beard winning chef Kermit the Frog, our menu boasts a number of surprising options.';
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

    return {writeMenuPage};
})();

export default menuPage;