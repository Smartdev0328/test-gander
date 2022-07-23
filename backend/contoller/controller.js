
exports.addNumbers = (req, res) => {
	// Save User to Database
	console.log(req.body);
	let numberA=parseInt(req.body.firstNumber);
	let numberB=parseInt(req.body.secondNumber);
	res.json({ result: numberA+numberB});
}
