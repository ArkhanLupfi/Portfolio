const toggle = document.getElementById('toggleDark');
const elementsToToggle = [
  document.body,
  document.querySelector('nav'),
  document.querySelector('a'),
  document.getElementById('nav-dark'),
  document.getElementById('nav-dark1'),
  document.getElementById('nav-dark2'),
  document.getElementById('nav-dark3'),
  document.getElementById('nav-dark4'),
  document.getElementById('Interface'),
  document.getElementById('homeimgdark'),
  document.getElementById('about'),
  document.getElementById('description'),
  document.getElementById('skills'),
  document.getElementById('Myservices'),
  document.getElementById('Myportfolio'),
  document.getElementById('cardbody'),
  document.getElementById('cardbody1'),
  document.getElementById('cardbody2'),
  document.getElementById('cardbody3'),
  document.getElementById('cardbody4'),
  document.getElementById('cardbody5')
];

toggle.addEventListener('click', function () {
  toggle.classList.toggle('bi-brightness-high-fill');
  const isDarkMode = toggle.classList.toggle('bi-moon-fill');
  elementsToToggle.forEach(element => {
    if (isDarkMode) {
      element.style.background = 'white';
      element.style.color = 'black';
      if (element.id === 'description') {
        element.style.color = '#808080';
      }
    } else {
      element.style.background = '#333';
      element.style.color = 'white';
      if (element.id.includes('cardbody')) {
        element.style.color = 'black';
      }
    }
    element.style.transition = '0.1s';
  });
});
