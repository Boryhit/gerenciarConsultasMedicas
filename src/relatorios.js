const prompt = require('prompt-sync')();
const Consulta = require('./consulta');
const Medico = require('./medico');
const Paciente = require('./paciente');

function relatorioListarMedicosPorNome (nome)
{
    
    const medicosEncontrados = Medico.listarMedicos().filter(medico => medico.nome.toLowerCase().includes(nome.toLowerCase()));
    if (medicosEncontrados.length === 0) {
        console.log('Nenhum médico encontrado com esse nome.');
    } else {
        console.log('\n\n-------------------MÉDICOS ENCONTRADOS-------------------\n\n');
        medicosEncontrados.forEach(medico => {
            console.log(`ID: ${medico.id}`);
            console.log(`Nome do Médico: ${medico.nome}`);
            console.log(`Especialidade: ${medico.especialidade}`);
            console.log('----------------');
        });
    }
}

function relatorioListarMedicosPorEspecialidade (especialidade)
{
    const medicosEncontrados = Medico.listarMedicos().filter(medico => medico.especialidade.toLowerCase().includes(especialidade.toLowerCase()));
    if (medicosEncontrados.length === 0) {
        console.log('Nenhum médico encontrado com essa especialidade.');
    } else {
        console.log('\n\n-------------------MÉDICOS ENCONTRADOS-------------------\n\n');
        medicosEncontrados.forEach(medico => {
            console.log(`ID: ${medico.id}`);
            console.log(`Nome do Médico: ${medico.nome}`);
            console.log(`Especialidade: ${medico.especialidade}`);
            console.log('----------------');
        });
    }
}

function relatorioListarPacientesPorNome (nome)
{
    const pacientesEncontrados = Paciente.listarPacientes().filter(paciente => paciente.nome.toLowerCase().includes(nome.toLowerCase()));
    if (pacientesEncontrados.length === 0) {
        console.log('Nenhum paciente encontrado com esse nome.');
    } else {
        console.log('\n\n-------------------PACIENTES ENCONTRADOS-------------------\n\n');
        pacientesEncontrados.forEach(paciente => {
            console.log(`ID: ${paciente.id}`);
            console.log(`Nome do Paciente: ${paciente.nome}`);
            console.log(`Data de Nascimento: ${paciente.dataNascimento}`);
            console.log('----------------');
        });
    }
}

function relatorioListarPacientesPorDataNascimento (dataNascimento)
{
    const pacientesEncontrados = Paciente.listarPacientes().filter(paciente => paciente.dataNascimento === dataNascimento);
    if (pacientesEncontrados.length === 0) {
        console.log('Nenhum paciente encontrado com essa data de nascimento.');
    } else {
        console.log('\n\n-------------------PACIENTES ENCONTRADOS-------------------\n\n');
        pacientesEncontrados.forEach(paciente => {
            console.log(`ID: ${paciente.id}`);
            console.log(`Nome do Paciente: ${paciente.nome}`);
            console.log(`Data de Nascimento: ${paciente.dataNascimento}`);
            console.log('----------------');
        });
    }
}

function relatorioListarConsultasPorData (data)
{
    const consultasEncontradas = Consulta.pesquisarPorData(data);
    if (consultasEncontradas.length === 0) {
        console.log('Nenhuma consulta encontrada para essa data.');
    } else {
        console.log('\n\n-------------------CONSULTAS ENCONTRADAS-------------------\n\n');
        consultasEncontradas.forEach(consulta => {
            console.log(`ID: ${consulta.id}`);
            console.log(`Nome do Consulta: ${consulta.nome}`);
            console.log(`Data: ${consulta.data}`);
            console.log(`ID do Médico: ${consulta.idMedico}`);
            console.log(`ID do Paciente: ${consulta.idPaciente}`);
            console.log(`Descrição: ${consulta.descricao}`);
            console.log('----------------');
        });
    }
}

function relatorioListarConsultasPorMedico (idMedico)
{
    const consultasEncontradas = Consulta.pesquisarPorData(null, idMedico);
    if (consultasEncontradas.length === 0) {
        console.log('Nenhuma consulta encontrada para esse médico.');
    } else {
        console.log('\n\n-------------------CONSULTAS ENCONTRADAS-------------------\n\n');
        consultasEncontradas.forEach(consulta => {
            console.log(`ID: ${consulta.id}`);
            console.log(`Nome do Consulta: ${consulta.nome}`);
            console.log(`Data: ${consulta.data}`);
            console.log(`ID do Médico: ${consulta.idMedico}`);
            console.log(`ID do Paciente: ${consulta.idPaciente}`);
            console.log(`Descrição: ${consulta.descricao}`);
            console.log('----------------');
        });
    }
}

function relatorioListarConsultasPorPaciente (idPaciente)
{
    const consultasEncontradas = Consulta.pesquisarPorData(null, null, idPaciente);
    if (consultasEncontradas.length === 0) {
        console.log('Nenhuma consulta encontrada para esse paciente.');
    } else {
        console.log('\n\n-------------------CONSULTAS ENCONTRADAS-------------------\n\n');
        consultasEncontradas.forEach(consulta => {
            console.log(`ID: ${consulta.id}`);
            console.log(`Nome do Consulta: ${consulta.nome}`);
            console.log(`Data: ${consulta.data}`);
            console.log(`ID do Médico: ${consulta.idMedico}`);
            console.log(`ID do Paciente: ${consulta.idPaciente}`);
            console.log(`Descrição: ${consulta.descricao}`);
            console.log('----------------');
        });
    }
}

function relatorioListarConsultasPorDescricao (descricao)
{
    const consultasEncontradas = Consulta.listarConsultas().filter(consulta => consulta.descricao.toLowerCase().includes(descricao.toLowerCase()));
    if (consultasEncontradas.length === 0) {
        console.log('Nenhuma consulta encontrada para essa descrição.');
    } else {
        console.log('\n\n-------------------CONSULTAS ENCONTRADAS-------------------\n\n');
        consultasEncontradas.forEach(consulta => {
            console.log(`ID: ${consulta.id}`);
            console.log(`Nome do Consulta: ${consulta.nome}`);
            console.log(`Data: ${consulta.data}`);
            console.log(`ID do Médico: ${consulta.idMedico}`);
            console.log(`ID do Paciente: ${consulta.idPaciente}`);
            console.log(`Descrição: ${consulta.descricao}`);
            console.log('----------------');
        });
    }
}

function relatorioListarConsultasMensais ()
{
    const relatorio = {};
    Consulta.listarConsultas().forEach(consulta => {
        const mesAno = consulta.data.substring(0, 7); // Extrai o mês e ano (YYYY-MM)
        if (!relatorio[mesAno]) {
            relatorio[mesAno] = 0;
        }
        relatorio[mesAno]++;
    });
    console.log('\n\n-------------------RELATÓRIO DE CONSULTAS MENSAIS-------------------\n\n');
    for (const mesAno in relatorio) {
        console.log(`${mesAno}: ${relatorio[mesAno]} consultas`);
    }
}

module.exports = {
    relatorioListarMedicosPorNome,
    relatorioListarMedicosPorEspecialidade,
    relatorioListarPacientesPorNome,
    relatorioListarPacientesPorDataNascimento,
    relatorioListarConsultasPorData,
    relatorioListarConsultasPorMedico,
    relatorioListarConsultasPorPaciente,
    relatorioListarConsultasMensais
}