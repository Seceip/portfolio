let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

document.querySelectorAll('.project-card').forEach((card) => {
        const img = card.querySelector('.project-image img');
        const right = card.querySelector('.arrow.right');
        const left = card.querySelector('.arrow.left');

        const images = card.dataset.images
          .split(',')
          .map(name => '/images/' + name.trim());

        let index = 0;

        right.addEventListener('click', () => {
          index = (index + 1) % images.length;
          img.src = images[index];
        });

        left.addEventListener('click', () => {
          index = (index - 1 + images.length) % images.length;
          img.src = images[index];
        });
      });