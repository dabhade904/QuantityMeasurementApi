var assert = require('chai').assert;
var quantityService = require('../../main/source/service/service')
var sinon = require('sinon');
var data = require('/home/admin1/quantityBackend/main/source/model/quantityMeasuremenData.js')

var data1 = {
    unit: "LENGHT",
    firstUnit: "INCH",
    secondUnit: "INCH",
    unitValue1: 0
}

var data2 = {
    unit: "LENGHT",
    firstUnit: "INCH",
    secondUnit: "FEET",
    unitValue1: 1
}

var data3 = {
    unit: "WEIGHT",
    firstUnit: "KG",
    secondUnit: "GRAM",
    unitValue1: null
}

var data4 = {
    unit: "LENGHT",
    firstUnit: "INCH",
    secondUnit: "INCH",
    unitValue1: " "
}

describe('Quantity measurement sinon testing', function () {
    beforeEach(function () {
        sinon.stub(data, 'getUnitValues').returns(data1);
    })

    afterEach(function () {
        data.getUnitValues.restore();
    })

    it('Given zero inch should return zero inch', () => {
        sinon.stub(data, 'getUnitValues').returns(data1);

        quantityService.unitMeasurement(data1, (err, data) => {
            if (err) {
                console.log(err);
            }
            assert.equal(data, 0);
        });
        data.getUnitValues.restore();
    })

    it('given 1 feet should return 12 inch', function () {
        sinon.stub(data, 'getUnitValues').returns(data2);

        quantityService.unitMeasurement(data2, (err, data) => {
            if (err) {
                console.log(err);
            }
            assert.equal(inch1, in2);

        });
        jsonFile.getUnitValues.restore();
    })

    it('given feet empty feet value should return undefined', function () {
        sinon.stub(data, 'getUnitValues').returns(data5);

        quantityService.unitMeasurement(data5, (err, data) => {
            if (err) {
                console.log(err);
            }
            assert.equal(inch, undefined)

        })
        data.getUnitValues.restore();
    })


    it('given string value of feet should refurn undefined', function () {
        sinon.stub(data, 'getUnitValues').returns(data4);

        quantityService.unitMeasurement(data4, (err, data) => {
            if (err) {
                console.log(err);
            }
            assert.equal(inch, undefined);

        })
        data.getUnitValues.restore();
    })

    it('given null feet value should return undefined', function () {
        sinon.stub(data, 'getUnitValues').returns(data3);

        quantityService.unitMeasurement(data3, (err, data) => {
            if (err) {
                console.log(err);
            }
            assert.equal(inch1, undefined);

        });
        data.getUnitValues.restore();
    })
});