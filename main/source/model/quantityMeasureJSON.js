module.exports = {
    getUnitValues() {
        var unitTypes = {
            "LENGTH": {
                "INCH":
                {
                    "FEET": 12,
                    "INCH": 1,
                    "YARD": 36,
                    "CENTIMETER": 0.393701
                },
                "FEET":
                {
                    "FEET": 1,
                    "INCH": 0.083333,
                    "YARD": 3,
                    "CENTIMETER": 0.0328084
                },
                "YARD":
                {
                    "FEET": 0.3333,
                    "INCH": 0.0277778,
                    "YARD": 1,
                    "CENTIMETER": 0.0109361
                },
                "CENTIMETER": {
                    "FEET": 30.48,
                    "INCH": 2.5,
                    "YARD": 91.44,
                    "CENTIMETER": 1
                }
            },
            "VOLUME": {
                "GALLON": {
                    "GALLON": 1,
                    "LITRE": 0.264172,
                    "MILLILITER": 0.000264172
                },
                "LITRE": {
                    "GALLON": 1000,
                    "LITRE": 1,
                    "MILLILITER": 0.001
                },
                "MILLILITER": {
                    "GALLON": 3785,
                    "LITRE": 1000,
                    "MILLILITER": 1
                }
            },
            "WEIGHT": {
                "KILOGRAM":
                {
                    "GRAM": 0.001,
                    "KILOGRAM": 1,
                    "TONNE": 1000
                },
                "GRAM": {
                    "GRAM": 1,
                    "KILOGRAM": 1000,
                    "TONNE": 1000000
                },
                "TONNE": {
                    "GRAM": 0.000001,
                    "KILOGRAM": 0.001,
                    "TONNE": 1
                }
            },
            "TEMPARATURE": {
                "FAHRENHEIT": {
                    "FAHRENHEIT": 1,
                    "CELSIUS": 0.4716
                },
                "CELSIUS": {
                    "FAHRENHEIT": 2.12,
                    "CELSIUS": 1
                }
            }
        }
        return unitTypes;
    }
}