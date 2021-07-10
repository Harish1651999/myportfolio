let navToggle = document.querySelector('.nav-toggle');
let linkItem = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    linkItem.classList.toggle('links');
});
