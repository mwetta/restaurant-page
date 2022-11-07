import mainPage from './home.js'
import './style.css'
const content = document.querySelector('#content');

const navbar = (() => {

    const writeNavbar = () => {
        let navbar = document.createElement('div');
        navbar.setAttribute('id', 'navbar');
        content.appendChild(navbar);
        const newMenuItem = (id) => {
            let menuItem = document.createElement('div');
            menuItem.setAttribute('id', `${id}`);
            menuItem.classList.add('inactive');
            menuItem.classList.add('inactive');
            menuItem.addEventListener('click', () => {
                let activeItems = document.querySelectorAll('.active'); 
                activeItems.forEach((activeItem) => {
                    activeItem.classList.remove('active');
                    activeItem.classList.add('inactive');
                })
                menuItem.classList.remove('inactive');
                menuItem.classList.add('active');
                rewriteContent(menuItem.id);
            })
            menuItem.textContent = `${id}`;
            navbar.appendChild(menuItem);
        }

        const rewriteContent = (id) => {
            let main = document.getElementById('main');
            console.log(main);
                while (main.firstChild) {
                    main.removeChild(main.firstChild);
                }
            console.log(id);
        }

        newMenuItem('home');
        newMenuItem('menu');
        newMenuItem('contact');
    }
    return {writeNavbar}
})();


navbar.writeNavbar();
mainPage.writeMainPage();