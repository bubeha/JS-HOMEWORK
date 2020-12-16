const divs = document.getElementsByTagName('p');
console.log(divs);
const rootDiv = document.getElementsByTagName('div')[0];
console.log(rootDiv);
const childDiv = document.getElementById('jumbotron-text');
console.log(childDiv);
const divInRoot = document.querySelectorAll('.primary-content p');
console.log(divInRoot);
const button = document.getElementById('alertBtn');
button.addEventListener('click', () => {
    alert('Thanks for visiting Bikes for Refugees!');
})
const buttonChangeColor = document.getElementById('bgrChangeBtn');
const bodyBgColor = document.body;
buttonChangeColor.addEventListener('click', () => {
    bodyBgColor.style.backgroundColor = 'blue';
});

const buttonAddText = document.getElementById('addTextBtn');
const paragraph = document.createElement('p');
const buttons = document.getElementsByClassName('buttons')[0]
const firstButton = document.querySelector('.buttons a')
buttonAddText.addEventListener('click', () => {
    paragraph.textContent = "Read more below"
    buttons.insertBefore(paragraph, firstButton);
});





// Обе работают просто чуть иначе написаны
// 1 
const buttonLargeLinks = document.getElementById('largerLinksBtn');
const allLargeLinks = document.querySelectorAll('.buttons a')
buttonLargeLinks.addEventListener("click", () => {
    allLargeLinks.forEach(item => item.style.fontSize = '2em');
});


// 2
// const buttonLargeLinks = document.getElementById('largerLinksBtn');
// const allLargeLinks = document.querySelectorAll('.buttons')
// buttonLargeLinks.addEventListener('click', () => {
//     allLargeLinks.forEach(item => {
//         item.style.fontSize = 2 + 'em';
//     });
// });


