const sendToServer = (msg) => {
    // В качестве примера всегда возвращаем resolve.
    return new Promise((resolve) => {
        resolve('Данные "' + msg + '" были успешно приняты сервером.');
    });
};

export default sendToServer;
