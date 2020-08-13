const express = require('express');
const router = express.Router();
const auth = require('../../Middleware/auth');

// Item model
const Item = require('../../models/Item');

// Since we know that this file can access by /api/routes therefore our current route will br /api/route
// @route GET api/items
// @description get All items
// @access Public
router.get('/', (req, res) => {
    Item.find()
        .sort({date : -1})
        .then(items => res.json(items))
});

// @route POST api/items
// @description create an item
// @access Private
router.post('/', auth, (req, res) => {
    //console.log(req.headers);
    const newItem = new Item({
        name: req.headers.name
    });

    newItem.save().then(item => res.json(item));
});

// @route DELETE api/items/:id
// @description Delete items
// @access Private
router.delete('/:id', auth, (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({sucess: true})))
    .catch(err => res.status(404).json({sucess: false}));
})

module.exports = router;
