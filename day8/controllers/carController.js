var CarModel = require('../models/carModel.js');

/**
 * carController.js
 *
 * @description :: Server-side logic for managing cars.
 */
module.exports = {

    /**
     * carController.list()
     */
    list: function (req, res, next) {
        console.log('car list')
        // return false;
        CarModel.find(function (err, cars) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting car.',
                    error: err
                });
            }

            console.log(cars)

            // return res.json({
            //     name: 'blha'
            // })
            // return res.render('index', { title: 'asdasd', cars: cars });
            // return res.json(cars)
        });
    },

    /**
     * carController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        CarModel.findOne({ _id: id }, function (err, car) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting car.',
                    error: err
                });
            }

            if (!car) {
                return res.status(404).json({
                    message: 'No such car'
                });
            }

            return res.json(car);
        });
    },

    /**
     * carController.create()
     */
    create: function (req, res) {
        console.log(req.body)

        const car = new CarModel({
            carDoor: req.body.carDoor,
            color: req.body.color,
            tire: req.body.tire,
            headlight: req.body.headlight
        });

        car.save(function (err, car) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating car',
                    error: err
                });
            }

            // return res.status(201).render('car', car);
            return res.status(201).json(car);
        })
    },

    /**
     * carController.update()
     */
    update: function (req, res) {
        var id = req.params.carId; //60b305e0cdfe0f088f545ebe

        console.log(id)

        CarModel.findOne({ _id: id }, function (err, car) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting car',
                    error: err
                });
            }

            if (!car) {
                return res.status(404).json({
                    message: 'No such car'
                });
            }

            console.log(car)


            car.carDoor = req.body.carDoor ? req.body.carDoor : car.carDoor;
            car.color = req.body.color ? req.body.color : car.color;
            car.tire = req.body.tire ? req.body.tire : car.tire;
            car.headlight = req.body.headlight ? req.body.headlight : car.headlight;

            car.save(function (err, car) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating car.',
                        error: err
                    });
                }

                return res.json(car);
            });
        });
    },

    /**
     * carController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        CarModel.findByIdAndRemove(id, function (err, car) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the car.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};


