import mainPage from './home.js'
import menuPage from './menu.js'
import contactPage from './contact.js'
import errorPage from './error.js'

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
                    console.log('will remove main');
                    main.removeChild(main.firstChild);
                }
            content.removeChild(main);
            writeNewPage(id);
        }

        const writeNewPage = (pageName) => {
            console.log(pageName);
            if (pageName == 'menu') {
                console.log('trigger menu');
                menuPage.writeMenuPage();
            } else if (pageName == 'contact') {
                console.log('trigger contact');
                contactPage.writeContactPage();
            } else if (pageName == 'home') {
                console.log('trigger main page');
                mainPage.writeMainPage();
            } else {
                console.log('trigger error');
                errorPage.writeErrorPage();
            }
        }

        newMenuItem('home');
        newMenuItem('menu');
        newMenuItem('contact');
    }
    return {writeNavbar}
})();


navbar.writeNavbar();
mainPage.writeMainPage();