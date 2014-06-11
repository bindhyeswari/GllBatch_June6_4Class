/**
 * Created by mishrab on 6/11/14.
 */

console.log('coming from test.js');

var date = new Date();
console.log(date.toString() +
    '\n' + date.toJSON()
);

//alert(date);

var obj = {
    'customer-id' :32
};
var serializedinfo = JSON.stringify(obj['customer-id']);

console.log(serializedinfo);
console.log(JSON.parse(serializedinfo));

function Person(){

}

var p = new Person();

console.log(Person instanceof Function);


// epoch time
