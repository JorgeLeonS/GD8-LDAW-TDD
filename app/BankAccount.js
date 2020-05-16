class BankAccount{

    constructor(saldo){
        this.saldo = saldo;
    }

    getSaldo(){
        return this.saldo;
    }
}

module.exports = BankAccount;