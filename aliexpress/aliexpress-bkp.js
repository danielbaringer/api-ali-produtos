/**
 * Module dependencies.
 */

ApiClient = require('../index.js').ApiClient;

var client = new ApiClient({
    'appkey':'31052595',
    'appsecret':'659e2faeb6344204167c005187d314ce',
    'url':'http://gw.api.taobao.com/router/rest'
});

var tabsCategorias = function(switchTab){

    let switchCat = switchTab

    switch (switchCat) {
        case 'eletronicos':
          return 'TM-Tab1';
          break;
        case 'computadores':
          return 'TM-Tab2';
          break;
        case 'celulares':
            return 'TM-Tab3';
            break;
        case 'carros':
            return 'TM-Tab4';
            break;
        case 'esportes':
            return 'TM-Tab5';
            break;        
        default:
            return 'TM-Tab1';
      }

}

class ModuloAliExpress{

    constructor() {
    }

    hotProducts(switchTab){

        let getCat = tabsCategorias(switchTab);
        console.log(getCat);

        return new Promise(function (resolve, reject) { 
            client.executeWithHeader('aliexpress.affiliate.featuredpromo.products.get',
            {
                'promotion_name':getCat,
                'page_no':1,
                'page_size':100,
                'start_time':'2017-03-21 00:00:00',
                'end_time':'2021-03-23 23:59:59',
                'session':'70000100f25719047abee9303ca8ee5d2e84f19cdd4edfb48d5e917a3e9a4aca99aaf042153472040'
            },
            {},
            function (error, response){
                if(error){                
                    var respError = error
                    reject(respError); 
                }
                else{
                    var result = response.resp_result.result.products; 
                    //console.log('Processing Request'); 
                    resolve(result); 
                }
            })
        });
    }
}

module.exports = new ModuloAliExpress()


/*
async hotProducts(){

        return new Promise(function (resolve, reject) { 
            client.executeWithHeader('aliexpress.affiliate.featuredpromo.products.get',
            {
                'promotion_name':'big pool',
                'page_no':1,
                'page_size':100,
                'start_time':'2017-03-21 00:00:00',
                'end_time':'2021-03-23 23:59:59',
                'session':'70000100f25719047abee9303ca8ee5d2e84f19cdd4edfb48d5e917a3e9a4aca99aaf042153472040'
            },
            {},
            function (error, response){
                if(error){                
                    var respError = error
                    reject(respError); 
                }
                else{
                    var result = response.resp_result.result.products; 
                    //console.log('Processing Request'); 
                    resolve(result); 
                }
            })
        });

*/