// Все кнопки и блоки с изображениями
const buttons = document.querySelectorAll('.country button');
const imageBlocks = document.querySelectorAll('.photography > div:not(.country)');

// Назначаем обработчик события на каждую кнопку
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Получаем название страны из кнопки
    const country = button.textContent.toLowerCase();

    // Перебираем все блоки и показываем нужный
    imageBlocks.forEach(block => {
      if (block.classList.contains(country)) {
        block.style.display = 'block'; // Показываем блок
      } else {
        block.style.display = 'none'; // Скрываем остальные
      }
    });
  });
});

// По умолчанию показываем только итальянские картинки
imageBlocks.forEach(block => {
  if (!block.classList.contains('italy')) {
    block.style.display = 'none';
  }
});



const burgerMenu = document.querySelector(".burgerMenu");
const navMenu = document.querySelector("header nav");

// Событие для открытия/закрытия меню
burgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


// Получаем элементы
const moreAboutMeButton = document.querySelector('.more-about-me');
const newPage = document.getElementById('new-page');
const backToMainButton = document.getElementById('back-to-main');
const mainContent = document.querySelector('.estetikball');

// Показ новой "страницы"
moreAboutMeButton.addEventListener('click', (e) => {
  e.preventDefault(); // Отключаем переход по ссылке
  mainContent.style.display = 'none'; // Скрываем основной контент
  newPage.style.display = 'block'; // Показываем новую "страницу"
});

// Возврат к основному контенту
backToMainButton.addEventListener('click', () => {
  newPage.style.display = 'none'; // Скрываем новую "страницу"
  mainContent.style.display = 'flex'; // Показываем основной контент
});


function openModal() {
    document.getElementById("projectsModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("projectsModal").style.display = "none";
  }
  
  // Закрытие модального окна при клике за пределами окна
  window.onclick = function(event) {
    if (event.target == document.getElementById("projectsModal")) {
      closeModal();
    }
  }
  
  