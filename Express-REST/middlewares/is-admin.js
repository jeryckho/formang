module.exports = (req, res, next) => {
	if (req.headers.authorization === '123') {
		return next();
	}
	res.statusCode = 403;
	res.json({ msg: 'not authorized' });
};
