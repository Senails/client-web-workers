# client-web-workers


В файле index.js лежит функция UseWorker.
Файл worker.js содержит воркер.

UseWorker принимает колбек и аргументы к функции, возвращает промис с результатом.
Коллбек вычисляеться в отдельном потоке и не блокирует главный поток браузера
