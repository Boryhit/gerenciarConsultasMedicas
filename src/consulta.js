const { consultarMedico, medicos } = require('./medico');
const { consultarPaciente, pacientes } = require('./paciente');

let consultas = [];
let sequencialIdConsulta = 1;

// CONSULTAS DE TESTE

const consulta1 = {
    id: 1,
    nome: 'Consulta Rotina',
    data: '2026-06-01',
    idMedico: 1,
    idPaciente: 1,
    descricao: 'Avaliação geral'
};

const consulta2 = {
    id: 2,
    nome: 'Consulta Pele',
    data: '2026-06-02',
    idMedico: 2,
    idPaciente: 2,
    descricao: 'Análise dermatológica'
};

const consulta3 = {
    id: 3,
    nome: 'Consulta Joelho',
    data: '2026-06-03',
    idMedico: 3,
    idPaciente: 3,
    descricao: 'Dor no joelho'
};

consultas.push(consulta1);
sequencialIdConsulta++;

consultas.push(consulta2);
sequencialIdConsulta++;

consultas.push(consulta3);
sequencialIdConsulta++;

// ADICIONAR CONSULTA

function adicionarConsulta(nomeConsulta, data, idMedico, idPaciente, descricao)
{
    const medico = consultarMedico(idMedico);
    const paciente = consultarPaciente(idPaciente);

    if (!medico) {
        console.log('Médico não encontrado.');
        return false;
    }

    if (!paciente) {
        console.log('Paciente não encontrado.');
        return false;
    }

    const dataConsulta = new Date(data);

    if (isNaN(dataConsulta.getTime())) {
        console.log('Data inválida. Use o formato YYYY-MM-DD.');
        return false;
    }

    const consultasEncontradas =
        pesquisarPorData(data, idMedico, idPaciente);

    if (consultasEncontradas.length > 0) {
        console.log('Já existe uma consulta para essa data, médico e paciente.');
        return false;
    }

    const id = sequencialIdConsulta;

    consultas.push({
        id,
        nome: nomeConsulta,
        data: dataConsulta.toISOString().split('T')[0],
        idMedico: medico.id,
        idPaciente: paciente.id,
        descricao
    });

    sequencialIdConsulta++;

    return true;
}

// PESQUISAR CONSULTA POR DATA

function pesquisarPorData(data, idMedico, idPaciente)
{
    return consultas.filter(consulta => {

        const dataMatch =
            data ? consulta.data === data : true;

        const medicoMatch =
            idMedico ? consulta.idMedico === idMedico : true;

        const pacienteMatch =
            idPaciente ? consulta.idPaciente === idPaciente : true;

        return dataMatch && medicoMatch && pacienteMatch;
    });
}

// PESQUISAR CONSULTA POR MÉDICO

function pesquisarConsultaPorMedico(idMedico)
{
    return consultas.filter(
        consulta => consulta.idMedico === idMedico
    );
}

// PESQUISAR CONSULTA POR PACIENTE

function pesquisarConsultaPorPaciente(idPaciente)
{
    return consultas.filter(
        consulta => consulta.idPaciente === idPaciente
    );
}

// LISTAR CONSULTAS

function listarConsultas()
{
    console.log('\n\n-------------------LISTA DE CONSULTAS-------------------\n\n');

    consultas.forEach(consulta => {
        console.log(`ID: ${consulta.id}`);
        console.log(`Nome da Consulta: ${consulta.nome}`);
        console.log(`Data: ${consulta.data}`);
        console.log(`ID do Médico: ${consulta.idMedico}`);
        console.log(`ID do Paciente: ${consulta.idPaciente}`);
        console.log(`Descrição: ${consulta.descricao}`);
        console.log('----------------');
    });
}

// ATUALIZAR CONSULTA

function atualizarConsulta(id, novaConsulta)
{
    const index =
        consultas.findIndex(consulta => consulta.id === id);

    if (index === -1) {
        console.log('Consulta não encontrada.');
        return false;
    }

    consultas[index].nome =
        novaConsulta.nome || consultas[index].nome;

    consultas[index].data =
        novaConsulta.data || consultas[index].data;

    // Atualizar médico
    if (novaConsulta.idMedico !== '') {

        const idMedico = parseInt(novaConsulta.idMedico);

        if (!medicos.some(medico => medico.id === idMedico)) {
            console.log('Médico não encontrado.');
            return false;
        }

        consultas[index].idMedico = idMedico;
    }

    // Atualizar paciente
    if (novaConsulta.idPaciente !== '') {

        const idPaciente = parseInt(novaConsulta.idPaciente);

        if (!pacientes.some(paciente => paciente.id === idPaciente)) {
            console.log('Paciente não encontrado.');
            return false;
        }

        consultas[index].idPaciente = idPaciente;
    }

    consultas[index].descricao =
        novaConsulta.descricao || consultas[index].descricao;

    return true;
}

// EXCLUIR CONSULTA

function excluirConsulta(id, confirmacao)
{
    const index =
        consultas.findIndex(consulta => consulta.id === id);

    if (confirmacao.toLowerCase() === 'sim') {

        if (index !== -1) {

            consultas.splice(index, 1);

            console.log('Consulta excluída com sucesso!');

            return true;
        }

        console.log('Consulta não encontrada.');

        return false;
    }

    console.log('Exclusão cancelada.');

    return false;
}

// CONSULTAR CONSULTA

function consultarConsulta(id)
{
    return consultas.find(
        consulta => consulta.id === id
    );
}

// EXPORTS

module.exports = {
    consultas,
    adicionarConsulta,
    listarConsultas,
    atualizarConsulta,
    excluirConsulta,
    consultarConsulta,
    pesquisarPorData,
    pesquisarConsultaPorMedico,
    pesquisarConsultaPorPaciente
};