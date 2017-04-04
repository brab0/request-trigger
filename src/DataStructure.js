const Helper = require('./Helper');

module.exports = class DataStructure{
   constructor(ds, iteration){
      this.ds = ds;
      this.obj = {};
      this.iteration = iteration;
      this.make();
   }

   make(){
      var i = 0;

      for (var prop in this.ds) {
         this.obj[prop] = this.generateValue(this.ds[prop]);
      }
   }

   get(){
      return this.obj;
   }

   generateValue(prop){
      let value;

      if(prop.type){
         switch(prop.type){
            case 'datetime':
               return Helper.getDatetime();
               break;
            case 'hexa':
               return Helper.getHexaString(prop.size);
               break;
            case 'number':
               return Helper.getNumber(prop.size);
               break;
         }
      } else if (prop.data){
         let index = this.iteration % prop.data.length;

         return prop.data[index];
      } else if (prop.ref){
         let item = this.obj[prop.ref];

         if(prop.range){
            item = item.substring(prop.range.start, prop.range.end);
         }

         return item;
      }

      return null;
   }


}
