"use strict";
var Neuron = (function () {
    function Neuron() {
        this.voltage = 0.0;
    }
    ;
    Neuron.prototype.getVoltage = function () {
        return this.voltage;
    };
    Neuron.prototype.setVoltage = function (volts) {
        this.voltage = volts;
    };
    Neuron.prototype.fire = function (volts) {
        this.setVoltage(volts);
    };
    Neuron.prototype.receiveVoltage = function () {
    };
    return Neuron;
}());
//# sourceMappingURL=Neuron.js.map