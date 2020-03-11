var quantity = require('../model/quantityMeasuremenData');

module.exports = {
    unitMeasurement(obj, callback) {
        console.log("inside a service obj--->", obj);
        unit = obj.unit
        unitType1 = obj.unitType1
        unitType2 = obj.unitType2
        input = obj.input
        var result;

        console.log(input);
        console.log(unitType1);
        console.log(unitType2);
        console.log(unit);

        if (unit == "" || unitType1 == "" || unitType2 == "" || input == "") {
            console.log("Data is empty------->");
        } else if (unit == null || unitType1 == null || unitType2 == null || input == null) {
            console.log("Data is null------->");
        } else if (unit == undefined || unitType1 == undefined || unitType2 == undefined || input == undefined) {
            console.log("Data is undefined------>");
        } else {
            var result = quantity.getUnitValues()[unit][unitType2][unitType1] * input
            console.log("service", Math.round(result));
        }
        return callback(null, result);
    },

    getUnits(obj, callback) {
        console.log(obj);
        var unit = obj.unit
        var keys = Object.keys(quantity.getUnitValues()[unit])
        console.log("asdFGHJ", keys);
        return callback(null, keys);
    },

    getType(obj, callback) {
        console.log("inside a service", obj);
        var keys = Object.keys(quantity.getUnitValues());
        console.log("get Types", keys);
        return callback(null, keys)
    }
}