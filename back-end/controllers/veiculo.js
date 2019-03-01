const Veiculo = require('../models/Veiculo')(/* construtor */);

const controller = {};

/*
   Toda função de controller que for chamada
   por uma rota deve ter os parâmetros req(uest)
   e res(ponse).
*/
controller.novo = function(req, res) {
   Veiculo.create(req.body).then(
      // Callback se ser certo
      function() {
         // HTTP 201: Criado
         res.sendStatus(201).end();
      },
      // Callback se der errado
      function(erro) {
         console.error(erro); // Exibe o erro no terminal
         // HTTP 500: Erro interno do servidor
         res.sendStatus(500).end();
      }
   );
}

module.exports = controller;