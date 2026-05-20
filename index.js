const prompt = require('prompt-sync');
const Medico = require('./src/medico');



// listarMedicos();
//     const novoMedico = [];
//     const id = parseInt (prompt('Digite o ID do médico que deseja atualizar: '));
//     if (isNaN(id)) {
//         console.log('ID inválido. Por favor, digite um número válido.');
//         return;
//     } else {
//         const novoMedico = [];
//     }
//     if (id < 1 || id > medicos.length) {
//         console.log('ID não encontrado. Por favor, digite um ID válido.');
//         return;
//     } else {
//         const novoNomeMedico = prompt('Digite o novo nome do médico: ');
//         const novaEspecialidade = prompt('Digite a nova especialidade do médico: ');
//         const medicoAtualizado = atualizarMedico(id, {
//             nome: novoNomeMedico,
//             especialidade: novaEspecialidade
//         });

//         if (medicoAtualizado) {
//         console.log('Médico atualizado com sucesso!');
//     }
// }
