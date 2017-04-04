module.exports.getDatetime = () => {
   return new Date().toISOString().replace('T', ' ').split('.')[0];
}

module.exports.getHexaString = size => {
   let value = '';

   while(value.length < size){
      value += Math.random().toString(16).substr(2, 16);
   }

   return value.substr(0, size);
}

module.exports.getNumber = size => {
   return Math.floor(Math.random() * (Math.pow(10, size) - 0));
}
