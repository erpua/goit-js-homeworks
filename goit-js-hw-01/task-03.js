const ADMIN_PASSWORD = 'jqueryismyjam';

let message;

const adminLoginRequest = prompt('запрашивается пароль');

if (!adminLoginRequest) {
  message = 'Отменено пользователем!';
  alert(message);
} else if (adminLoginRequest !== ADMIN_PASSWORD) {
  message = 'Доступ запрещен, неверный логин!';
  alert(message);
} else {
  message = 'Добро пожаловать!';
  alert(message);
}
