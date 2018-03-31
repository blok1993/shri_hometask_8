export default class SmartLogger {
    constructor(view) {
        this.view = view;
    }

    log(text) {
        // Логируем действия в консоль
        console.log(text);

        // Логируем действия на экран
        let logElement = document.createElement('li');
        logElement.innerText = text;

        this.view.addLogRecord(logElement);
    }
}
