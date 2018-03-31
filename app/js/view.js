import Presenter from './presenter';
import SmartLogger from './smartLogger';

export default class View {
    constructor(appViewEl) {
        this.appViewEl = appViewEl;
        this.addListeners(this.appViewEl);

        this.presenter = new Presenter(this);

        this.logger = new SmartLogger(this);
    }

    addListeners() {
        this.appViewEl.querySelector('.view-stub__input')
            .addEventListener('keyup', this.keyPressed.bind(this));

        this.appViewEl.querySelector('.view-stub__apply')
            .addEventListener('click', this.buttonClicked.bind(this));
    }

    keyPressed() {
        this.logger.log('Пользователь изменил содержимое input.');
        this.presenter.keyPressed();
    }

    buttonClicked() {
        this.logger.log('Нажали на кнопку отправки.');
        this.presenter.sendRequestTrigger();
    }

    getUserInput() {
        return this.appViewEl.querySelector('.view-stub__input').value;
    }

    setUserInput(val) {
        return this.appViewEl.querySelector('.view-stub__input').value = val;
    }

    addLogRecord(logElement) {
        this.appViewEl.querySelector('.log-list').appendChild(logElement);
    }

    setServerAnswer(label) {
        this.appViewEl.querySelector('.view-stub__label').innerText = label;
    }
}

// Рабочая область приложения (та, с которой взаимодействуем)
const appViewContainer = document.querySelector('.application-container');

new View(appViewContainer);
