const express = require('express');
const route = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller')

/**
 * @cdescription root route 
 * @method GET /
 */

route.get('/',services.homeRoutes)



/**
 * @cdescription root add_user 
 * @method GET /
 */

route.get('/add_user',services.add_user)



/**
 * @cdescription root update_user  
 * @method GET /
 */

route.get('/update-user',services.update_user)


//api

route.post('/api/users',controller.create)
route.get('/api/users',controller.find)
route.put('/api/users/:id',controller.update)
route.delete('/api/users/:id',controller.delete)




//export routes
module.exports = route