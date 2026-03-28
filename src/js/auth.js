document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    // ТВОИ ДАННЫЕ АДМИНА
    const ADMIN_NICK = "admin"; 
    const ADMIN_PASS = "coly2024"; 

    if (user === ADMIN_NICK && pass === ADMIN_PASS) {
        // Если зашел ты (Админ) - сохраняем и кидаем на страницу входа, где покажем админку
        // Но в учебных целях перенаправим на admin.html (которую мы доработаем позже)
        alert('Привет, Шеф! Переходим в панель управления.');
        window.location.href = 'admin.html'; 
    } else {
        // Если зашел обычный гость
        localStorage.setItem('coly_user', user); // Сохраняем имя для кабинета
        alert('Добро пожаловать в CoLy, ' + user + '!');
        window.location.href = 'profile.html'; // КИДАЕМ В ЛИЧНЫЙ КАБИНЕТ
    }
});