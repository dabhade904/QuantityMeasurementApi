var quantityJSON = require('../model/quantityMeasureJSON');


module.exports = {
    unitMeasurement(obj, callback) {
        unit = obj.unit
        unitType1 = obj.unitType1
        unitType2 = obj.unitType2
        var input = obj.input
        var result;

        console.log(obj, 'data value');

        var keys = Object.keys(quantityJSON.getUnitValues());
        var result = quantityJSON.getUnitValues()[keys[unit]][unitType2][unitType1] * input
        //  var result = quantityJSON.getUnitValues()[unit][unitType2][unitType1] * input

        console.log("service", result);
        return callback(null, result);
    },

    getUnits(obj, callback) {
        console.log(obj);

        // var unitKeysVal = obj.type;
        // console.log(unitKeysVal);
        var keys=Object.keys(quantityJSON.getUnitValues())
        console.log("sdfghjk",keys);
         return callback(null, keys);
    },


    getType(obj,callback){
        console.log();
        var keys=Object.keys(quantityJSON.getUnitValues()[0]);
        console.log(keys);
        return callback(null,keys)

    }
}
