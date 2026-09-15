const express = require('express');
const app = express(); // ✅ ADICIONE ISTO!
const router = express.Router();
const AlunoController = require('./src/controllers/alunoController.js');
const PORT = process.env.PORT || 3000;

// Middleware (se precisar)
app.use(express.json());

// Mapeamento Limpo e Semântico (API REST)
router.get('/', AlunoController.listar);
router.post('/', AlunoController.cadastrar);
router.put('/:id', AlunoController.editar);
router.delete('/:id', AlunoController.remover);

// ✅ Usar o router no app
app.use(router);

// ✅ Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});