const { consultarMedico } = require('./medico');
const { consultarPaciente } = require('./paciente');

let consultas = [];
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

    const dataConsulta = new Date(data);
    if (isNaN(dataConsulta.getTime())) {
        console.log('Data inválida. Por favor, digite uma data válida no formato YYYY-MM-DD.');
        return false;
    }

    const consultasEncontradas = pesquisarConsultaPorData(data, idMedico, idPaciente);

    if (consultasEncontradas.length > 0) {
        console.log('Já existe uma consulta agendada para esta data, médico e paciente. Por favor, escolha outra data ou verifique os agendamentos existentes.');
        return false;
    }

    const id = sequencialIdConsulta;
    consultas.push({
        id,
        nome: nomeConsulta,
        data: dataConsulta.toISOString().split('T')[0],
        idMedico: medico.id,
        idPaciente: paciente.id,
        descricao: descricao
    })
    sequencialIdConsulta++;

}

function pesquisarConsultaPorData (data, idMedico, idPaciente)
{
    const dataConsulta = new Date(data);
    if (isNaN(dataConsulta.getTime())) {
        console.log('Data inválida. Por favor, digite uma data válida no formato YYYY-MM-DD.');
        return [];
    }

    const consultasEncontradas = consultas.filter(consulta => {
        const dataMatch = consulta.data === dataConsulta.toISOString().split('T')[0];
        const medicoMatch = idMedico ? consulta.idMedico === idMedico : true;
        const pacienteMatch = idPaciente ? consulta.idPaciente === idPaciente : true;
        return dataMatch && medicoMatch && pacienteMatch;
    });
    return consultasEncontradas;
}

function listarConsultas ()
{
    console.log('\n\n-------------------LISTA DE ConsultaS-------------------\n\n')
    consultas.forEach(consulta => {
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
    const index = consultas.findIndex(consulta => consulta.id === id);
    if (index === -1) {
        console.log('Consulta não encontrado. Por favor, digite um ID válido.');
        return false;
    }

    consultas[index].nome = novoConsulta.nome || consultas[index].nome;
    consultas[index].data = novoConsulta.data || consultas[index].data;

     if (!medico) {
        return false;
    }
    consultas[index].idMedico = novoConsulta.idMedico || consultas[index].idMedico;

    if (!paciente) {
        return false;
    }
    consultas[index].idPaciente = novoConsulta.idPaciente || consultas[index].idPaciente;
    
    consultas[index].descricao = novoConsulta.descricao || consultas[index].descricao;
    return true;
           
} 

function excluirConsulta (id, confirmacao)
{
    listarConsultas();
    const index = consultas.findIndex(consulta => consulta.id === id);
    if (confirmacao.toLowerCase() === 'sim') {
         if (index !== -1) {
            consultas.splice(index, 1);
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
    consultas,
    adicionarConsulta,
    listarConsultas,
    atualizarConsulta,
    excluirConsulta
}