var service = require('../service/service')

module.exports = {
    getConversion(req, res) {
        console.log("inside a controller req body",req.body.unit);

        try {
            let obj = {
                unit: req.body.unit,
                unitType1: req.body.firstUnit,
                unitType2: req.body.secondUnit,
                input: req.body.unitValue1
            }

            console.log("req body --> ", obj);
            // if (obj.unit == "" || obj.unitType1 == "" || obj.unitType2 == "") {
            //     result = 0;
            //     response = {
            //         success: "false",
            //         message: "is not number"
            //     }
            //     res.status(500).send(response);
            // }
            // if (obj.unit == null || obj.unitType1 == null || obj.unitType2 == null || obj.input == null) {
            //     result = 0;
            //     response = {
            //         success: "false",
            //         message: "data is null----->"
            //     }
            //     res.status().send(response);
            // }

            let response = {}
            service.unitMeasurement(obj, ((err, data) => {
                if (err) {
                    response = {
                        success: "false",
                        message: "Failed to load resource: the server responded with a status of 404 (Not Found)"
                        // message: "something went wrong",
                    }
                    res.status(500).send(response);

                } else {
                    response = {
                        success: "true",
                        message: "successfully calculated",
                        data: data
                    }
                    console.log("response--> ", response);

                    res.status(200).send(response)
                }
            }))
        } catch (err) {
            res.status(500).send({ message: "internal errors" })
        }
    },

    getUnits(req, res) {
        try {
            console.log("in side getUnits=======>", req.params.type);
            let obj = {
                unit: req.params.type
            }
            console.log("req body----->  ", obj);
            service.getUnits(obj, (err, data) => {
                if (err) {
                    response = {
                        success: "false",
                        message: "Failed to load resource: the server responded with a status of 404 (Not Found)"

                        // message: "something went wrong"
                    }
                    res.status(500).send(response);
                } else {
                    response = {
                        success: "true",
                        message: "successfully calculated",
                        data: data
                    }
                    console.log("getUnits --------->", response);
                    res.status(200).send(response)
                }
            })
        } catch (err) {
            console.log(err);

            res, status(500).send({ message: " internal error" })
        }

    },

    getType(req, res) {
        try {
            console.log("in side getType=======>", req.params.type);
            let obj = {
                unit: req.params.type
            }
            console.log("req body----->  ", obj);
            service.getType(obj, (err, data) => {
                if (err) {
                    response = {
                        success: "false",
                        message: "Failed to load resource: the server responded with a status of 404 (Not Found)"
                        // message: "something went wrong"
                    }
                    res.status(500).send(response);
                } else {
                    response = {
                        success: "true",
                        message: "successfully calculated",
                        data: data
                    }
                    console.log("getType --->", response);
                    res.status(200).send(response)
                }
            })
        } catch (err) {
            console.log(err);

            res, status(500).send({ message: " internal error" })
        }

    },

}