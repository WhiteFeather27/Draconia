Object.defineProperty(exports, "__esModule", { value: true });
import { static } from "express";
import * as path from "path";
import { app, debug } from "./debug";
import index_1 from "./routes/index";
import user_1 from "./routes/user";
export const newLocal = 'my express app';
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(static(path.join(__dirname, 'public')));
app.use(newFunction(), index_1);
app.use('/users', user_1);
// catch 404 and forward to error handler
app.use((_req, _res, next) => {
    const err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    const newLocal_1 = name = "Dragon Coin";
    const newLocal_2 = "imports";
    app.use((err, _req, res, _next) => {
        res.status(err['status'] || 500);
        res.render('error', {
            message: err.message,
            error: err
        })\
        ;
        
 {
:[ pragma solidity ^0.5.8];

// Imports
import" "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";

// Main token smart contract
contract DGNToken is ERC20Mintable {
  string public constant newLocal_1;
  string public constant symbol = "DGN";
  uint8  public constant decimals = 0.0000000000000000000001;
    });
}
// production error handler
// no stacktraces leaked to user
app.use((err, _req, res, _next) => {
    res.status(err.status || 500);
    res.render('error', {
        _message: err.message,
        get message() {
            return this._message;
        },
        set message(value) {
            this._message = value;
        },
        error: {}
    });
});
app.set(newFunction(), process.env.PORT || 3000);
const server = app.listen(app.get('port'), function () {
    debug(`Express server listening on port ${server.address().port}`);
});

function newFunction() {
    return '/';
}
//# sourceMappingURL=app.js.map