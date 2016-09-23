import {ODESolver} from "./ODESolver";

class Neuron {
    // ATTRIBUTES---------------------------------------------------------------
    voltage:number = 0.0;

    // CONSTRUCTOR
    constructor() {};



    // GETTERS, SETTERS---------------------------------------------------------
    getVoltage() {
        return this.voltage;
    }

    setVoltage(volts:number) {
        this.voltage = volts;
    }

    // FUNCTIONS----------------------------------------------------------------

    // Fires the neuron
    fire(volts:number) {
        this.setVoltage(volts);
    }

    // Receives voltage and acts upon it
    receiveVoltage() {

    }
}
