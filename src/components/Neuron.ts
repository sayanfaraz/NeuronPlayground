import {ODESolver} from "./ODESolver";
declare var odex: any;

class Neuron {
    // ATTRIBUTES---------------------------------------------------------------
    voltage:number = 0.0;
    readonly a:number = -0.7;
    readonly b: number = 0.8;
    readonly tau: number = 1/0.08;

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
    receiveVoltage(inputVolts:number) {
        
    }

    // FitzHugh–Nagumo Eqn 1
    fitzHughNagumoEqn1(t_n:number, V_n:number, w_n:number, I_n:number):number {
        return V_n - Math.pow(V_n, 3)/3 - w_n + I_n;
    }

    // FitzHugh–Nagumo Eqn 2
    fitzHughNagumoEqn2(t_n:number, V_n:number, w_n:number, I_n:number):number {
        return V_n - this.a - this.b*w_n;
    }

}
