// Selectors
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const cards = Array.from(document.querySelectorAll('.destination'));
const btn1 = document.querySelector('.btn');
const btn2 = document.querySelector('.destination').nextElementSibling.querySelector('.btn');
const btn3 = document.querySelector('.destination').nextElementSibling.nextElementSibling.querySelector('.btn');
const btns = [btn1, btn2, btn3];
const imgList = Array.from(document.querySelectorAll('img'));
imgList.forEach(x => x.style.opacity = 1);
const pList = Array.from(document.querySelectorAll('p'));
const h2List = Array.from(document.querySelectorAll('h2'));
const h4List = Array.from(document.querySelectorAll('h4'));
const textList = pList.concat(h2List,h4List);

// Event Listeners
Array.from(nav.children).forEach(x => x.addEventListener('mouseover', grayFont));
Array.from(nav.children).forEach(x => x.addEventListener('mouseout', blackFont));
Array.from(nav.children).forEach(x => x.addEventListener('focusin', dottedBorder));
Array.from(nav.children).forEach(x => x.addEventListener('focusout', noBorder));
btns.forEach(x => x.addEventListener('click', signUp));
cards.forEach(x => x.addEventListener('click', addBoxShadow))
window.addEventListener('wheel', showModal);
window.addEventListener('keydown', hideModal);
window.addEventListener('resize', decreaseOpacity);
imgList.forEach(x => x.addEventListener('dblclick', swapSource));
textList.forEach(x => x.addEventListener('copy', changeText));

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
modalP2.textContent = "To close this window, press Escape";
modal.appendChild(modalTitle);
modal.appendChild(modalP1);
modal.appendChild(modalP2);
document.body.appendChild(modal);
modal.style.boxSizing = "border-box";
modal.style.padding = "10px";
modal.style.display = "none";
modal.style.position = "fixed";
modal.style.top = "50%";
modal.style.left = "50%";
modal.style.transform = "translate(-50%, -50%)";
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
    e.stopPropagation();
}

function showModal(e) {
    if (e.deltaY < 0) {
        modal.style.display = "flex";
        modal.style.flexDirection = "column";
        modal.style.justifyContent = "space-evenly";
        modal.style.alignItems = "center";
        window.removeEventListener('wheel',showModal);
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

function decreaseOpacity(e) {
    imgList.forEach(x => {
        x.style.opacity -= 0.1;
    })
}

function swapSource(e) {
    console.log(e.target)
    let other;
    do {
        other = imgList[Math.floor(Math.random() * 4)];
        console.log(other)
    } while (other === e.target)
    const third = e.target.src;
    e.target.src = other.src;
    other.src = third;
}

function changeText(e) {
    console.log(e)
    e.target.textContent = "Why are you trying to copy this? Please don't.";
}

function addBoxShadow(e) {
    e.target.parentElement.style.boxShadow = "0 0 5px gray";
}