module.exports = {
	// function for handling errors - higher order fuunction that returns anonymous function with req,res,next parameters
	errorHandler: fn => (req, res, next) => {
		// Promise.resolve returns a thenable promise, the function it takes as an argument is going to be an async function
		// Await is basically .then
		Promise.resolve(fn(req, res, next)).catch(next);
	}
};
