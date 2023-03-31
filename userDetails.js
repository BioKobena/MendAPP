const mongoose = require('mongoose');
const userDetailsSchema = new mongoose.Schema({ 
    uname: { type: 'string', required: true}, 
    email: { type: 'string', required: true}, 
    phone: { type: 'string', required: true},
}, {
    collection: "userInfo"
})

mongoose.model("userInfo", userDetailsSchema)