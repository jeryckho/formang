'use strict';

const { Router } = require('express');
const contactCtrl = require('../controllers/contact');
const isAdmin = require('../middlewares/is-admin');
const bodyParser = require('body-parser');

const router = Router();

router.get('/',
	contactCtrl.list
);

router.get('/:id',
	contactCtrl.show
);

router.put('/:id',
	isAdmin,
	bodyParser.json(),
	contactCtrl.update
);

router.delete('/:id',
	isAdmin,
	contactCtrl.remove
);

router.post('/',
	isAdmin,
	bodyParser.json(),
	contactCtrl.create
);

module.exports = router;
