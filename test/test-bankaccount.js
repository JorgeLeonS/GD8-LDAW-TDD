const assert = require('assert');
const BankAccount = require('../app/BankAccount');

//Pruebas de operaciones con vectores
describe('BankAccount', () =>{

    describe('#getCurrent', () => {
        it('Deberia regresar el saldo de la cuenta', () => {
            let current=500.0;
            let account = new BankAccount(current)
            assert.equal(account.getSaldo(), current);
        })
    })

})