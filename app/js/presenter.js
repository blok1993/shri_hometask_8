import Model from './model';
import SmartLogger from './smartLogger';

export default class Presenter {
    constructor(view) {
        this.view = view;
        this.model = new Model();
        this.logger = new SmartLogger(view);
    }

    keyPressed() {
        // В данном обработчике можно, например,
        // валидировать значение в поле ввода
        const userInput = this.view.getUserInput();

        // Очищаем поле в случае обнаружения в нем символа '@'
        if (userInput.indexOf('@') !== -1) {
            this.view.setUserInput('');
        }
    }

    sendRequestTrigger() {
        const userInput = this.view.getUserInput();

        this.logger.log('Вызываем метод sendRequest из Model ' +
                        'для отправки данных на сервер.');

        return this.model.sendRequest(userInput).then(() => {
            this.logger.log('Получен ответ от сервера (берем его из Model).');
            const response = this.model.getModelValue();

            this.logger.log('Отображаем ответ от сервера. ' +
                            'Передаем сигнал во View для отрисовки.');
            this.view.setServerAnswer(response);
        });
    }
}
