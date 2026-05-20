const { consultarMedico } = require('./medico');
const { consultarPaciente } = require('./paciente');

let consulta = [];
let sequencialIdConsulta = 1;

function adicionarConsulta (nomeConsulta, data, idMedico, idPaciente, descricao)
{
    const medico = consultarMedico(idMedico);
    const paciente = consultarPaciente(idPaciente);

    if (!medico) {
        return false;
    }
    
    if (!paciente) {
        return false;
    }

    const id = sequencialIdConsulta;
    consulta.push({
        id,
        nome: nomeConsulta,
        data: new Date(data),
        idMedico: medico.id,
        idPaciente: paciente.id,
        descricao: descricao
    })
    sequencialIdConsulta++;

}

function listarConsultas ()
{
    console.log('\n\n-------------------LISTA DE ConsultaS-------------------\n\n')
    consulta.forEach(consulta => {
        console.log(`ID: ${consulta.id}`);
        console.log(`Nome do Consulta: ${consulta.nome}`);
        console.log(`Data: ${consulta.data}`);
        console.log(`ID do Médico: ${consulta.idMedico}`);
        console.log(`ID do Paciente: ${consulta.idPaciente}`);
        console.log(`Descrição: ${consulta.descricao}`);
        console.log('----------------');
    })
}

function atualizarConsulta (id, novoConsulta)
{
    listarConsultas();
    const index = consulta.findIndex(consulta => consulta.id === id);
    if (index === -1) {
        console.log('Consulta não encontrado. Por favor, digite um ID válido.');
        return false;
    }

    consulta[index].nome = novoConsulta.nome || consulta[index].nome;
    consulta[index].data = novoConsulta.data || consulta[index].data;

     if (!medico) {
        return false;
    }
    consulta[index].idMedico = novoConsulta.idMedico || consulta[index].idMedico;

    if (!paciente) {
        return false;
    }
    consulta[index].idPaciente = novoConsulta.idPaciente || consulta[index].idPaciente;
    
    consulta[index].descricao = novoConsulta.descricao || consulta[index].descricao;
    return true;
           
} 

function excluirConsulta (id, confirmacao)
{
    const index = consulta.findIndex(consulta => consulta.id === id);
    if (confirmacao.toLowerCase() === 'sim') {
         if (index !== -1) {
            consulta.splice(index, 1);
            console.log('Consulta excluído com sucesso!');
            return true;
        } else {
            console.log('Consulta não encontrado. Por favor, digite um ID válido.');
            return false;
        }
    } else {
        console.log('Exclusão cancelada.');
        return false;
    }
}
    

module.exports = {
    adicionarConsulta,
    listarConsultas,
    atualizarConsulta,
    excluirConsulta
}