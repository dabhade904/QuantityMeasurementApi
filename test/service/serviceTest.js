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
            assert.equal(data,0);
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

    it('given null unit values should return err', function () {
        data2 = {
            unit: "",
            firstUnit: "",
            secondUnit: "",
            unitValue: ""
        }
        service.unitMeasurement(data2, (err, data) => {
            if (err) {
                assert.equal(err, "data is empty")
            }
        })
    })

    it('given Inch and Feet should return ', () => {
        var data2 = {
            unit: "LENGTH",
            firstUnit: "FEET",
            secondUnit: "INCH",
            unitValue: 2
        }
        service.unitMeasurement(data2, (err, data) => {
            if (err) {
                console.log(err);
            }
            assert.equal(data)
        })
    })
})
