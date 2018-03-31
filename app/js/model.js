import sendToServer from './sendToServer';

export default class Model {
    constructor() {
        this.responseValue = null;
    }

    getModelValue() {
        return this.responseValue;
    }

    setModelValue(value) {
        this.responseValue = value;
    }

    sendRequest(query) {
        return sendToServer(query).then((res) => {
            // Полученный от сервера ответ записываем в модель
            this.setModelValue(res);
        });
    }
}
