const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/checkout');

let checkoutSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    password: String,
    address: String,
    city_state_zip: String,
    creditNum: Number,
    creditExp: Number,
    billingZip: Number
});

let checkoutEntry = mongoose.model('checkoutEntry', checkoutSchema);

const saveEntry = function(data){
  let entry = new checkoutEntry({
    name: data.name,
    email: data.email,
    phone: data.number,
    password: data.password,
    address: data.address,
    city_state_zip: data.city_state_zip,
    creditNum: data.credit,
    creditExp: data.expiry,
    billingZip: data.billingZip
  });
  entry.save()
  .then(()=>{
    console.log('save complete');
  })
};


module.exports.saveEntry = saveEntry;