const Consulta = require('./consulta');

// CONSULTAS POR DATA

function relatorioListarConsultasPorData(data)
{
    const consultasEncontradas =
        Consulta.pesquisarPorData(data);

    if (consultasEncontradas.length === 0) {

        console.log('Nenhuma consulta encontrada para essa data.');

    } else {

        console.log('\n\n-------------------CONSULTAS ENCONTRADAS-------------------\n\n');

        consultasEncontradas.forEach(consulta => {

            console.log(`ID: ${consulta.id}`);
            console.log(`Nome da Consulta: ${consulta.nome}`);
            console.log(`Data: ${consulta.data}`);
            console.log(`ID do Médico: ${consulta.idMedico}`);
            console.log(`ID do Paciente: ${consulta.idPaciente}`);
            console.log(`Descrição: ${consulta.descricao}`);
            console.log('----------------');

        });
    }
}

// CONSULTAS POR MÉDICO

function relatorioListarConsultasPorMedico(idMedico)
{
    const consultasEncontradas =
        Consulta.pesquisarConsultaPorMedico(idMedico);

    if (consultasEncontradas.length === 0) {

        console.log('Nenhuma consulta encontrada para esse médico.');

    } else {

        console.log('\n\n-------------------CONSULTAS ENCONTRADAS-------------------\n\n');

        consultasEncontradas.forEach(consulta => {

            console.log(`ID: ${consulta.id}`);
            console.log(`Nome da Consulta: ${consulta.nome}`);
            console.log(`Data: ${consulta.data}`);
            console.log(`ID do Médico: ${consulta.idMedico}`);
            console.log(`ID do Paciente: ${consulta.idPaciente}`);
            console.log(`Descrição: ${consulta.descricao}`);
            console.log('----------------');

        });
    }
}

// CONSULTAS POR PACIENTE

function relatorioListarConsultasPorPaciente(idPaciente)
{
    const consultasEncontradas =
        Consulta.pesquisarConsultaPorPaciente(idPaciente);

    if (consultasEncontradas.length === 0) {

        console.log('Nenhuma consulta encontrada para esse paciente.');

    } else {

        console.log('\n\n-------------------CONSULTAS ENCONTRADAS-------------------\n\n');

        consultasEncontradas.forEach(consulta => {

            console.log(`ID: ${consulta.id}`);
            console.log(`Nome da Consulta: ${consulta.nome}`);
            console.log(`Data: ${consulta.data}`);
            console.log(`ID do Médico: ${consulta.idMedico}`);
            console.log(`ID do Paciente: ${consulta.idPaciente}`);
            console.log(`Descrição: ${consulta.descricao}`);
            console.log('----------------');

        });
    }
}

// CONSULTAS POR DESCRIÇÃO

function relatorioListarConsultasPorDescricao(descricao)
{
    const consultasEncontradas = Consulta.consultas.filter(
        consulta =>
            consulta.descricao.toLowerCase().includes(descricao.toLowerCase())
    );

    if (consultasEncontradas.length === 0) {

        console.log('Nenhuma consulta encontrada para essa descrição.');

    } else {

        console.log('\n\n-------------------CONSULTAS ENCONTRADAS-------------------\n\n');

        consultasEncontradas.forEach(consulta => {

            console.log(`ID: ${consulta.id}`);
            console.log(`Nome da Consulta: ${consulta.nome}`);
            console.log(`Data: ${consulta.data}`);
            console.log(`ID do Médico: ${consulta.idMedico}`);
            console.log(`ID do Paciente: ${consulta.idPaciente}`);
            console.log(`Descrição: ${consulta.descricao}`);
            console.log('----------------');

        });
    }
}

// RELATÓRIO MENSAL

function relatorioListarConsultasMensais()
{
    const relatorio = {};

    Consulta.consultas.forEach(consulta => {

        const mesAno = consulta.data.substring(0, 7);

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

// EXPORTS

module.exports = {
    relatorioListarConsultasPorData,
    relatorioListarConsultasPorMedico,
    relatorioListarConsultasPorPaciente,
    relatorioListarConsultasPorDescricao,
    relatorioListarConsultasMensais
};