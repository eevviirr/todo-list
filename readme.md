-- Инструкция запуска проекта --

    Docker
    - в терминале, находясь в корневой дериктории прокта, написать:
        1. docker-compose build
        2. docker-compose up

    No Docker
    - в терминале, находясь в папке server и в папке client, написать:
        1. npm run start - для сервера (при этом нужно запустить базу данный mongodb)
        2. npm run preview - для клиента