const { Router } = require('express');
const express = require('express');
const route = express.Router();
const { Pickup, validatePickup } = require('../models/Pickup');
const Joi = require('joi');

route.post('/list', async (req, res) => {
    const pickups = await Pickup.find();
    return res.status(200).send({
        count : pickups.length,
        data : pickups
    });

});


module.exports = route;