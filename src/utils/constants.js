// Ошибки: страница логина
export const INCORRECT_PASSWORD = "Вы ввели неправильный логин или пароль.";
export const AUTH_ERROR =
    "При авторизации произошла ошибка. Токен не передан или передан не в том формате.";
export const INCORRECT_TOKEN =
    "При авторизации произошла ошибка. Переданный токен некорректен.";

// Ошибки: страница регистрации
export const BAD_EMAIL = "Пользователь с таким email уже существует.";
export const REG_ERROR = "При регистрации пользователя произошла ошибка.";

// Ошибки: страница обновления профиля
export const UPDATE_ERROR = "При обновлении профиля произошла ошибка.";
export const UPDATE_SUCCESS = "Данные успешно сохранены.";

// Ошибка при происке
export const REQUEST_ERROR =
    "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз";

// Валидация имени и ЭП
export const REGEX_EMAIL = "^\\S+@\\S+\\.\\S+$";
export const REGEX_NAME = "^[а-яА-ЯёЁa-zA-Z\\s\\-]+$";

// Размеры экрана
export const BIG_WIDTH_SIZE = 1280;
export const MIDDLE_WIDTH_SIZE = 769;
export const MOBILE_WIDTH_SIZE = 420;
export const OLD_PHONE_WIDTH_SIZE = 220;

// Количество колонок
export const BIG_WIDTH_COLUMNS = 16;
export const MIDDLE_WIDTH_COLUMNS = 12;
export const MOBILE_WIDTH_COLUMNS = 8;
export const OLD_PHONE_WIDTH_COLUMNS = 5;

// Количество карточек
export const BIG_WIDTH_CARDS = 4;
export const MIDDLE_WIDTH_CARDS = 3;
export const MOBILE_WIDTH_CARDS = 2;

// Длительность короткометражек
export const SHORTS_DURATION = 40;
