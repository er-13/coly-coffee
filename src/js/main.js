function openModal(id) {
    document.getElementById(id).style.display = "block";
    // Блокируем прокрутку страницы на фоне
    document.body.style.overflow = "hidden"; 
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
    // Возвращаем прокрутку
    document.body.style.overflow = "auto";
}

// Закрытие при клике вне окна
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Новая функция для кнопки "Добавить в заказ"
function addToCart(itemName) {
    alert('Отличный выбор! "' + itemName + '" добавлен в ваш виртуальный заказ. Перейдите в личный кабинет для оформления.');
    
    // Автоматически закрываем все открытые окна после добавления
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
    document.body.style.overflow = "auto";
}