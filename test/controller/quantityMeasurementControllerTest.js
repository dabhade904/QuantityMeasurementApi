const chai = require('chai')
const chaiHttp = require('chai-http')
const fs = require('fs')
chai.should()
chai.use(chaiHttp)
var app = require('../../server');
var file = fs.readFileSync('/home/admin1/quantityBackend/test/unitType.json')
var units = JSON.parse(file)
console.log("JSON Data--------->", units);

 describe("Test Api unitValue ", () => {
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
                res.should.have.status(200);
                done();
            })
    })

    it('given data when special symbol should retern status cade', done => {
        chai
            .request(app)
            .post('/unitValue@@##$')
            .send(units.nullValue)
            .end((err, res) => {
                res.should.have.status(404);
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

    it('given Api given data not in proper should return status code', done => {
        chai
            .request(app)
            .post('/unitValue')
            .send(units.wrongUnit)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    })

    it('given Api given data not in proper should return status code', done => {
        chai
            .request(app)
            .post('/unitValue')
            .send(units.typeNotMatch)
            .end((err, res) => {
                res.should.have.status(500);
                done();
            })
    })

    it("given Api when return value in object should return status code", done => {
        chai
            .request(app)
            .post("/unitValue")
            .send(units.properData)
            .end((err, res) => {
                res.body.should.be.a('object');
                done();
            });
    })

    it("given Api when return value in object should return status code ", done => {
        chai
            .request(app)
            .post("/unitValue")
            .send(units.whenUnitTypeEmpty)
            .end((err, res) => {
                res.body.should.be.a('object');
                done();
            });
    })

    it("given Api when return value in object should return status code", done => {
        chai
            .request(app)
            .post("/unitValue")
            .send(units)
            .end((err, res) => {
                res.body.should.be.a('object');
                done();
            });
    })

    
 });

describe("Test Api unitType key ", () => {
    it("given Api in proper should return status code", done => {
        chai
            .request(app)
            .get("/unitType/LENGTH")
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    })

    it("given Api is not proper should return status code    ", done => {
        chai
            .request(app)
            .get("/unitTypeL")
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    })

    it('given Api is null should retern status cade', done => {
        chai
            .request(app)
            .post('/')
              .end((err, res) => {
                res.should.have.status(404);
                done();
            })
    })

    it('given Api in special symbol should retern status cade', done => {
        chai
            .request(app)
            .post('/unitType@@##$')
            .end((err, res) => {
                res.should.have.status(404);
                done();
            })
    })

    it('given Api is not proper should retern status cade', done => {
        chai
            .request(app)
            .post('/unit  Type')
            .end((err, res) => {
                res.should.have.status(404);
                done();
            })
    })

    it('given when Api in number should retern status cade', done => {
        chai
            .request(app)
            .post('/3278947892')
            .end((err, res) => {
                res.should.have.status(404);
                done();
            })
    })

});

describe("Test Api type ", () => {
    it("given Api in proper should return status code", done => {
        chai
            .request(app)
            .get("/type")
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    })

    it("given Api in numbet should return status code  ", done => {
        chai
            .request(app)
            .get("/312r134")
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    })

    it('given Api null should retern status cade', done => {
        chai
            .request(app)
            .post('/')
              .end((err, res) => {
                res.should.have.status(404);
                done();
            })
    })

    it('given Api special symbol should retern status cade', done => {
        chai
            .request(app)
            .post('/type@@##$')
            .end((err, res) => {
                res.should.have.status(404);
                done();
            })
    })

    it('given Api not proper should retern status cade', done => {
        chai
            .request(app)
            .post('/ty pe')
            .end((err, res) => {
                res.should.have.status(404);
                done();
            })
    })
})
