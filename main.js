const config = require('./config.json');
const schema = require('./schema.json');
const DataStructure = require('./src/DataStructure');

var count = 0;

const shot = (obj, cb) => {
	console.log(obj.get())
	cb();
}

const startRepeat = count => {
	setTimeout(() => {

		const obj = new DataStructure(schema, count);
		count++;

		shot(obj, () => {
			if(count < config.loopCount){
				startRepeat(count);
			} else{
				console.log(`${count} requisições realizadas com sucesso!`);
			}
		});
	}, config.timeout);
};

console.log(`...fazendo requisições para o endpoint ${config.endpoint}`);

startRepeat(count);
