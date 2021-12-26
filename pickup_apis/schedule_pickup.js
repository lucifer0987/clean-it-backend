const express = require('express');
const route = express.Router();
const { Pickup, validatePickup } = require('../models/Pickup');

route.post('/schedule', async (req, res) => {
    const {error} = validatePickup(req.body);
    if(error){
        return res.status(400).send({
            success : false,
            message : error.details[0].message
        });
    }
    
    let pickup = new Pickup({
        email : req.body.email,
        name : req.body.name,
        address1 : req.body.address1,
        phone : req.body.phone,
        pincode : req.body.pincode,
        state : req.body.state, 
        city : req.body.city,
        pickupdate : req.body.pickupdate,
        pickuptime : req.body.pickuptime,
        items : req.body.items
    });

    const new_pickup = await pickup.save();
    return res.status(200).send({
        success : true,
        message : "your request has been approved",
        ID : new_pickup._id
    });

});



module.exports = route