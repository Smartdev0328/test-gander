
module.exports = function(app) {
 
    const controller = require('../contoller/controller');
	app.post('/api/add-numbers', controller.addNumbers);

}