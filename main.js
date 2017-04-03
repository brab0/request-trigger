const config = require('./config.json');

const startRepeat = count => {
	setTimeout(() => {
		console.log(count)
		startRepeat(++count)
	}, config.timeout);
};

startRepeat(0);
