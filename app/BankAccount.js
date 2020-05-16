class BankAccount{

    constructor(saldo){
        this.saldo = saldo;
        this.history = [];
    }

    getSaldo(){
        return this.saldo;
    }

    append(value){
        let newSaldo = value > 0 ? this.saldo + value : this.saldo;
        this.saldo = newSaldo;
        this.history.push({type:'append', value: value, newSaldo: newSaldo});
        return newSaldo;
    }

    substract(value){
        let newSaldo = value > 0 ? this.saldo - value : this.saldo;
        this.saldo = newSaldo;
        this.history.push({type:'substract', value: value, newSaldo: newSaldo});
        return newSaldo;
    }

    getHistory(){
        return this.history;
    }

    merge(newAccount){
        this.saldo = this.saldo+newAccount.saldo;
        this.history = this.history.concat(newAccount.getHistory());
    }

}

module.exports = BankAccount;