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

    describe('#append', () => {
        it('Deberia sumar al saldo de la cuenta', () => {
            let current = 500.0;
            let value1 = -200.0;
            let value2 = 200.0;
            let account = new BankAccount(current)
            assert.equal(current, account.append(value1));
            assert.equal(700.0, account.append(value2));
        })
    })

    describe('#substract', () => {
        it('Deberia retirar al saldo de la cuenta', () => {
            let current = 500.0;
            let value1 = -200.0;
            let value2 = 200.0;
            let account = new BankAccount(current)
            assert.equal(current, account.substract(value1));
            assert.equal(300.0, account.substract(value2));
        })
    })

    describe('#merge', () => {
        it('Deberia combinar los historiales de las cuentas', () => {
            let current1 = 500.0;
            let account1 = new BankAccount(current1);

            let current2 = 500.0;
            let account2 = new BankAccount(current2);

            let value1 = 200.0;
            let value2 = -200.0;

            account1.append(value1);
            account1.append(value2);

            account2.substract(value2);

            account1.merge(account2);

            let history = [{type:'append', value:200, newSaldo:700}, {type:'append', value:-200, newSaldo:700}, {type:'substract', value:-200, newSaldo:500}];

            assert.deepEqual(history, account1.getHistory());

            // assert.equal(700, account.getSaldo(value1));
            // assert.equal(history, account.getHistory(value2));
        })
        it('Deberia mostrar el saldo positivo combinado de las cuentas', () => {
            let current1 = 500.0;
            let account1 = new BankAccount(current1);

            let current2 = 500.0;
            let account2 = new BankAccount(current2);

            let value1 = 200.0;
            let value2 = -200.0;

            account1.append(value1);
            account1.append(value2);

            account2.substract(value2);

            account1.merge(account2);

            assert.deepEqual(1200, account1.getSaldo());
        })
        it('Deberia mostrar el saldo negativo combinado de las cuentas', () => {
            let current1 = 500.0;
            let account1 = new BankAccount(current1);

            let current2 = 500.0;
            let account2 = new BankAccount(current2);

            let value1 = 200.0;
            let value3 = 1500.0;

            account1.append(value1);
            account2.substract(value3);

            account1.merge(account2);

            assert.deepEqual(-300, account1.getSaldo());
        })
    })

    describe('#history', () =>{
        it('Deberia regresar el historial de la cuenta', () => {
            let current = 500.0;
            let account = new BankAccount(current)
            account.append(200);
            account.substract(300)
            let history = [{type:'append', value:200, newSaldo:700}, {type:'substract', value:300, newSaldo: 400}];
            assert.deepEqual(history, account.getHistory());
        })
    })

})