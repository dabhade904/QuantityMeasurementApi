const assert = require('chai').assert;
const sinon = require('sinon').assert;
const service = require('../../main/source/service/service')
describe("quantity measurement sinon testing services", function () {

    it('Given zero inch should return zero inch', () => {
        var data1 = {
            unit: "LENGTH",
            unitType1: "INCH",
            unitType2: "INCH",
            input: 0
        }
        service.unitMeasurement(data1, (err, data) => {
            if (err) {
                console.log(err);
            }
            assert.equal(data,null);
        });
    })

        it('given correct object of inch value should return 1 feet', () => {
            var data2 = {
                unit: "LENGTH",
                unitType1: "INCH",
                unitType2: "FEET",
                input: 12
            }
            service.unitMeasurement(data2, (err, data) => {
                if (err) {
                    console.log(err);
                } 
                result = Math.round(data);
                assert.equal(result,1)
            })
        })
});

describe('data with correct value', function () {
        it('given null unit values should return err', function () {
            data2 = {
                unit: "LENGTH",
                unitType1: "INCH",
                unitType2: "YARD",
                input: 1
            }
            service.unitMeasurement(data2, (err, data) => {
                if (err) {
                    console.log(err);
                }
                assert(data, 0.0277778)
            })
        })

    it('given null empty values should return err', function () {
        data2 = {
            unit: "",
            unitType1: "",
            unitType2: "",
            input: ""
        }
        service.unitMeasurement(data2, (err, data) => {
            if (err) {
                assert.equal(err, "")
            }
        })
    })

    it('given null undifined values should return err', function () {
        data2 = {
            unit: undefined,
            unitType1: undefined,
            unitType2: undefined,
            input: undefined
        }
        service.unitMeasurement(data2, (err, data) => {
            if (err) {
                assert.equal(err,undefined)
            }
        })
    })

    it('given null unit values should return err', function () {
        data2 = {
            unit: null,
            unitType1:null,
            unitType2: null,
            input: 0
        }
        service.unitMeasurement(data2, (err, data) => {
            if (err) {
                assert.equal(err, null)
            }
        })
    })

    it('given Inch and Feet should return ', () => {
        var data2 = {
            unit: "LENGTH",
            unitType1: "FEET",
            unitType2: "INCH",
            input: 2
        }
        service.unitMeasurement(data2, (err, data) => {
            if (err) {
                console.log(err);
            }
            assert.equal(data,24)
        })
    })

    it('given gallon and litre should return correct value ', () => {
        var data2 = {
            unit: "VOLUME",
            unitType1: "GALLON",
            unitType2: "LITRE",
            input: 3
        }
        service.unitMeasurement(data2, (err, data) => {
            if (err) {
                console.log(err);
            }
            assert.equal(data,3000)
        })
    })
})
