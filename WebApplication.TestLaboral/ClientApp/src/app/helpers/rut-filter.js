"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RutValidator = void 0;
function RutValidator() {
    return function (control) {
        var valor = control.value.replace('.', '');
        valor = control.value.replace('.', '');
        valor = valor.replace('-', '');
        valor = valor.replace(/\./g, '');
        valor = valor.replace(/-/g, '');
        var cuerpo = valor.slice(0, -1);
        var dv = valor.slice(-1).toUpperCase();
        if (cuerpo.length < 7 || dv.length < 1) {
            return { 'RutInvalido': true };
        }
        var suma = 0;
        var multiplo = 2;
        for (var i = 1; i <= cuerpo.length; i++) {
            var index = multiplo * valor.charAt(cuerpo.length - i);
            suma = suma + index;
            if (multiplo < 7) {
                multiplo = multiplo + 1;
            }
            else {
                multiplo = 2;
            }
        }
        var dvEsperado = 11 - (suma % 11);
        dv = (dv == 'K') ? 10 : dv;
        dv = (dv == 0) ? 11 : dv;
        if (dvEsperado != dv) {
            return { 'RutInvalido': true };
        }
        return null;
    };
}
exports.RutValidator = RutValidator;
//# sourceMappingURL=rut-filter.js.map