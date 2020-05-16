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
        // this.saldo = value value > 0 ? this.saldo + value : this.saldo;> 0 ? this.saldo + value : this.saldo;
        this.history.push = ({type:'append', value: value});
        return newSaldo;
    }

}

module.exports = BankAccount;