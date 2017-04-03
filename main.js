const config = require('./config.json');

var count = 0;

const startRepeat = count => {
	setTimeout(() => {

		if(count <= config.loopCount){
			count++;
			startRepeat(count);
		} else{
			console.log(`${count} requisições realizadas com sucesso!`);
		}

	}, config.timeout);
};

console.log(`fazendo requisições para o endpoint ${config.endpoint}`);

startRepeat(count);
