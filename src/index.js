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
            menuItem.setAttribute('class', 'item');
            menuItem.textContent = `${id}`;
            navbar.appendChild(menuItem);
        }
        newMenuItem('home');
        newMenuItem('menu');
        newMenuItem('contact');
    }

    /*
    establish classes for active and inactive
        how do you want to handle removing classes from previously active tabs? tab swithcer utility
    default to "home" showing on page load
    event listener for each tab
    onclick tab, send id and show content only for that tab
        reset content (tab id) => remove all children
        if home run home
        if menu run menu
        if contact run contact
    */
    return {writeNavbar}
})();


navbar.writeNavbar();
mainPage.writeMainPage();