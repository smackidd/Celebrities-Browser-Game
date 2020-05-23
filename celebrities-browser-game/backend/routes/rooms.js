const router = require('express').Router();
let Room = require('../models/rooms.model');

router.route('/').get((req,res) => {
    Room.find()
        .then(room => res.json(room))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req,res) => {
    const roomname = req.body.roomname; 
    const password = req.body.password;
    const users = req.body.users;

    const newRoom = Room({
        roomname,
        password,
        users
    });

    newRoom.save()
        .then(() => res.json('Room added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
    Room.findById(req.params.id)
        .then(room => res.json(room))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
    Room.findByIdAndDelete(req.params.id)
        .then(() => res.json('Room deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/update/:id').post((req,res) => {
    Room.findById(req.params.id)
        .then(room => {
            room.username = req.body.roomname;
            room.password = req.body.password;
            room.users = req.body.users;

            room.save()
                .then(() => res.json('Room updated!'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;