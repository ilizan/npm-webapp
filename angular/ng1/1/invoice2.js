angular.module('invoice3', ['finance3'])
    .controller('InvoiceController', ['currencyConverter', function (currencyConverter) {
        this.qty = 1;
        this.cost = 2;
        this.inCurr = 'EUR';
        this.currencies = currencyConverter.currencies;
        
        this.total = function total(outCurr) {
            return currencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr);
        };

        this.jg = 0;
        this.pay = function pay() {
            // alert(this.qty * this.cost);
            this.jg = this.qty * this.cost;
        };
    }]);