const mongoose = require('mongoose');

module.exports = function() {

   const schema = mongoose.Schema({
      modelo: {
         type: String,
         required: true
      },
      marca: {
         type: String,
         required: true
      },
      ano_fabricacao: {
         type: Number,
         required: true
      },
      ano_modelo: {
         type: Number,
         required: true
      }

   });

   /*
      PARÂMETROS DE mongoose.model()
      1º -> nome do modelo (inicial maiúscula)
      2º -> constante que descreve o modelo (schema)
      3º -> nome da coleção (collection) no MongoDB
            que armazenará os objetos derivados do modelo
            (inicial minúscula, no plural)
   */
   return mongoose.model('Veiculo', schema, 'veiculos');

}