"use strict";
var ODESolver = (function () {
    function ODESolver() {
    }
    ODESolver.prototype.backwardsEulerODE = function (t_n, delta_t, v_n, g, x_n, f) {
        var ret_x = 0.0;
        var ret_v = 0.0;
        ret_x = x_n + f(t_n, v_n) * delta_t;
        ret_v = v_n + g(t_n, ret_x) * delta_t;
        return [ret_x, ret_v];
    };
    return ODESolver;
}());
exports.ODESolver = ODESolver;
//# sourceMappingURL=ODESolver.js.map