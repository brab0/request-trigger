const config = require('./config.json');
const schema = require('./schema.json');
const DataStructure = require('./src/DataStructure');
const Shooter = require('./src/Shooter');

var count = 0;

const startRepeat = count => {
	setTimeout(() => {

		const obj = new DataStructure(schema, count);
		count++;

		Shooter.fire(obj.get(), config.target, () => {
			if(count < config.loopCount){
				startRepeat(count);
			} else{
				console.log(`${count} requisições realizadas!`);
			}
		});
	}, config.timeout);
};

console.log(`...disparando ${config.loopCount} ${config.target.method}s para: ${config.target.hostname}:${config.target.port}${config.target.path}`);

startRepeat(count);
