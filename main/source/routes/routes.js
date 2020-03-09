
module.exports = (app) => {
    const controller = require('../controller/controller');

    app.post('/value', controller.getConversion)
    app.get('/unitType', controller.getUnits)

}