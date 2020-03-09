const assert = require('chai').assert;
const sinon = require('sinon').assert;
const service = require('../../main/source/service/service')
describe("quantity measurement sinon testing services", function () {

    it('Given zero inch should return zero inch', () => {
        var data1 = {
            firstUnit: "INCH",
            secondUnit: "INCH",
            unitValue: 0
        }
        service.unitMeasurement(data1, (err, data) => {
            if (err) {
                console.log(err);
            }
            assert.equal(data, 0);
        });
    })

    it('given Inch and Feet should return ', () => {
        var data2 = {
            firstUnit: "INCH",
            secondUnit: "FEET",
            unitValue: 1
        }
        service.unitMeasurement(data2, (err, data) => {
            if (err) {
                console.log(err);
            }
            assert.equal(data, 1)
        })
    })

});



describe('data with correct value', function () {
    it('given correct object of inch value should return 1 feet', function () {
        var data1 = {
            firstUnit: "INCH",
            secondUnit: "FEET",
            unitValue: 12
        }
        service.unitMeasurement(data1, (err, data) => {
            if (err) {
                console.log(err);
            }
            data = Math.round(data)
            assert.equal(data, 1)
        })
    })

    it('given null unit values should return err', function () {
        data2 = {
            firstUnit: "",
            secondUnit: "",
            unitValue: 0
        }
        service.unitMeasurement(data2, (err, data) => {
            if (err) {
                console.log(err);
            }

        })
        assert(data2, undefined)
    })
})
