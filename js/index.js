// Selectors
const header = document.querySelector('header')
const logo = document.querySelector('.logo-heading');
const nav = document.querySelector('nav')
const home = nav.firstElementChild
const about = home.nextElementSibling;
const blog = about.nextElementSibling;
const contact = blog.nextElementSibling;
const bus = document.querySelector('img');
const welcome = document.querySelector('.intro h2');
const btn1 = document.querySelector('.btn');
const btn2 = document.querySelector('.destination').nextElementSibling.querySelector('.btn');
const btn3 = document.querySelector('.destination').nextElementSibling.nextElementSibling.querySelector('.btn');
const btns = [btn1, btn2, btn3];

// Event Listeners
Array.from(nav.children).forEach(x => x.addEventListener('mouseover',grayFont));
Array.from(nav.children).forEach(x => x.addEventListener('mouseout', blackFont));
Array.from(nav.children).forEach(x => x.addEventListener('focusin',dottedBorder));
Array.from(nav.children).forEach(x => x.addEventListener('focusout',noBorder))
btns.forEach(x => x.addEventListener('click',signUp));
window.addEventListener('wheel',showModal);
window.addEventListener('keydown',hideModal);

// Create Modal
const modal = document.createElement('div');
const modalTitle = document.createElement('h2');
modalTitle.textContent = "Before you go...";
modalTitle.style.fontSize = "5rem";
const modalP1 = document.createElement('p');
modalP1.textContent = "Subscribe to our newsletter for all the latest updates!";
modalP1.style.fontSize = "3rem";
modalP1.style.textAlign = "center";
const modalP2 = document.createElement('p');
modalP2.textContent = "To close this window, press Escape"
modal.appendChild(modalTitle);
modal.appendChild(modalP1);
modal.appendChild(modalP2)
document.body.appendChild(modal);
modal.style.display = "none";
modal.style.position = "fixed";
modal.style.top = "50%";
modal.style.left = "50%";
modal.style.transform = "translate(-50%, -50%)";
modal.style.zIndex = '1';
modal.style.width = '30vw';
modal.style.height = '60vh';
modal.style.backgroundColor = "#ffebcd";

// Event Handlers
function grayFont(e) {
    e.target.style.color = "gray";
}

function blackFont(e) {
    e.target.style.color = "#212529";
}

function signUp (e) {
    alert("You have signed up!");
}

function showModal(e) {
    if (e.deltaY < 0) {
        modal.style.display = "flex";
        modal.style.flexDirection = "column";
        modal.style.justifyContent = "space-evenly";
        modal.style.alignItems = "center";
    }
}

function hideModal(e) {
    if (e.key === "Escape") {
        modal.style.display = "none";
    }
}

function dottedBorder(e) {
    e.target.style.border = "2px gray dotted";
}

function noBorder(e) {
    e.target.style.border = "";
}