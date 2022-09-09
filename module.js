const moment = require('moment');

class Module {
    _name = "";


    constructor(_name) {
        this._name = _name;
    }

    getGreetingMessage() {
        return `Hello, ${this._name}!\n`;
    }

}

module.exports.MyModule = Module;