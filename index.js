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
