angular.module('finance3', [])
  .factory('currencyConverter', ['$http', function($http) {
    var urls =
          'http://get.com',
        currencies = ['USD', 'EUR', 'CNY'],
        usdToForeignRates = {};
    refresh();
    return {
      currencies: currencies,
      convert: convert,
      refresh: refresh()
    };
 
    function convert(amount, inCurr, outCurr) {
      return amount * usdToForeignRates[outCurr] * 1 / usdToForeignRates[inCurr];
    }
 
    function refresh() {
      
    }
  }]);