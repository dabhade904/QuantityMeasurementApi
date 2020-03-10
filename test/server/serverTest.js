const chai = require('chai')
const chaiHttp = require('chai-http')
const fs = require('fs')
chai.should()
chai.use(chaiHttp)
var app = require('../../server');
var file = fs.readFileSync('/home/admin1/quantityBackend/test/unitType.json')
var units = JSON.parse(file)
console.log("JSON Data--------->", units);

describe("Test Api ", () => {
    it('given data when in proper should retern status cade', done => {
        chai
            .request(app)
            .post('/unitValue')
            .send(units.properData)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    })

    it('given data when null should retern status cade', done => {
        chai
            .request(app)
            .post('/unitValue')
            .send(units.nullValue)
            .end((err, res) => {
                res.should.have.status(500);
                done();
            })
    })

    it('given data when empty should retern status cade', done => {
        chai
            .request(app)
            .post('/unitValue')
            .send(units.emptyData)
            .end((err, res) => {
                res.should.have.status(500);
                done();
            })
    })

    it('given data when empty should retern status cade', done => {
        chai
            .request(app)
            .post('/unitValue')
            .send(units.wrongUnit)
            .end((err, res) => {
                res.should.have.status(500);
                done();
            })
    })

    it('given data when typeNotMatch should retern status cade', done => {
        chai
            .request(app)
            .post('/unitValue')
            .send(units.typeNotMatch)
            .end((err, res) => {
                res.should.have.status(500);
                done();
            })
    })

    it("test case to check is a object", done => {
        chai
            .request(app)
            .post("/unitValue")
            .send(units.properData)
            .end((err, res) => {
                res.body.should.be.a('object');
                done();
            });
    })

    it("test case to check is a object", done => {
        chai
            .request(app)
            .post("/unitValue")
            .send(units)
            .end((err, res) => {
                res.body.should.be.a('object');
                done();
            });
    })

    it("test case to check Api ", done => {
        chai
            .request(app)
            .get("/unitType/LENGTH")
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    })

    it("test case to check Api     ", done => {
        chai
            .request(app)
            .get("/unitType/L")
            .end((err, res) => {
                res.should.have.status(500);
                done();
            });
    })

    it("test case to check Api   ", done => {
        chai
            .request(app)
            .get("/type")
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    })
})
