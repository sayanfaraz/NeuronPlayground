export class ODESolver {

    backwardsEulerODE(
        t_n:number, delta_t:number,

        v_n:number, g: (t_n:number, x_n:number)=>number,

        x_n:number, f:(t_n:number, x_n:number)=>number
    ) : [number, number] {
        // Define return vars
        var ret_x= 0.0;
        var ret_v = 0.0;

        // Calculate x_n+1, v_n+1
        ret_x = x_n + f(t_n, v_n) * delta_t;
        ret_v = v_n + g(t_n, ret_x) * delta_t;

        // Return tuple
        return [ret_x, ret_v];
    }
}
