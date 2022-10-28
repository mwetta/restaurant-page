const mainPage = (() => {
    let content = document.getElementById('content');
    const writeMainPage = () => {
        let home = document.createElement('div');
        home.setAttribute('id', 'home');
        content.appendChild(home);
        writeHeader(home);
    }

    const writeHeader = (home) => {
        let header = document.createElement('div');
        header.setAttribute('id', 'header');
        header.textContent = 'Pizza means family.'  
        home.appendChild(header);
        writeMain(home);
    }

    const writeMain = (home) => {
        let main = document.createElement('div');
        main.setAttribute('id', 'main');
        main.textContent = 'As second-generation pizzaiolo, we pride ourselves on creating delicious, wholesome pizzas for a variety of tastes.';
        home.appendChild(main);
    }

    return {writeMainPage};
})();

export default mainPage;