
module.exports = (app) => {
    const controller = require('../controller/controller');

    app.post('/value', controller.getConversion)
    app.get('/unitType/:type', controller.getUnits)
    app.get('/type',controller.getType)
}