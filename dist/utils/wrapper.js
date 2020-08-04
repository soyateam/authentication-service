"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wrapAsync(middlewareFunc) {
    return (req, res, next) => {
        middlewareFunc(req, res, next).catch(next);
    };
}
exports.wrapAsync = wrapAsync;
//# sourceMappingURL=wrapper.js.map