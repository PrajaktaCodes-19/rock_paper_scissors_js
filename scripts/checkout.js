import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts,loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

//import '../data/cart-class.js';
//import '../data/backend-practice.js';

async function loadPage(){
    //throw 'error1';
    try{
    await loadProductsFetch();
    const val = await new Promise((resolve,reject)=>{
        // throw 'error2';
        loadCart(()=>{
        //reject('error3');
        resolve('value3');
        });
    })

    }catch(error){
        console.log('unexpected error. please try again later.');     
    }
    renderOrderSummary();
    renderPaymentSummary();
}

loadPage();
/*
Promise.all([
   loadProductsFetch()
    ,
        new Promise((resolve)=>{
            loadCart(()=>{
            resolve();
            });
        })

]).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
})

*/
/*new Promise((resolve)=>{
console.log('string promise');
loadProducts(()=>{
    console.log('finished loading');
    resolve('value1');
});

}).then((value)=>{
    console.log(value);
return new Promise((resolve)=>{
    loadCart(()=>{
    resolve();
    });
});

}).then(()=>{
renderOrderSummary();
renderPaymentSummary();
});*/


/*loadProducts(()=>{
    loadCart(()=>{
    renderOrderSummary();
    renderPaymentSummary();
    });
});
*/
