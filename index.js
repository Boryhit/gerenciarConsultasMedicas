const prompt = require('prompt-sync')();
const Medico = require('./src/medico');
const Paciente = require('./src/paciente');
const Consulta = require('./src/consulta');
const Relatorios = require('./src/relatorios');


function menuPrincipal ()
{
    let menu = -1;

    while (menu !== 5) {
        console.log('\n\n-----GERENCIAMENTO DE CONSULTAS MÉDICAS-----\n\n');
        console.log('1. Gerenciar Médicos');
        console.log('2. Gerenciar Pacientes');
        console.log('3. Gerenciar Consultas');
        console.log('4. Relatórios');
        console.log('5. Sair');

        menu = parseInt(prompt('Digite o número da opção desejada: '));

        switch (menu) {
            case 1:
                menuGerenciarMedicos();
                break;
            case 2:
                menuGerenciarPacientes();
                break;
            case 3:
                menuGerenciarConsultas();
                break;
            case 4:
                menuGerenciarRelatorios();
                break;
            case 5:
                console.log('Saindo do programa. Até mais!');
                break;
            default:
                console.log('Opção inválida. Por favor, digite um número entre 1 e 4.');
        }
    }
}

function menuGerenciarMedicos ()
{
    let menuMedicos = -1;

    while (menuMedicos !== 6) {
        console.log('\n\n-------------------GERENCIAMENTO DE MÉDICOS-------------------\n\n');
        console.log('1. Adicionar Médico');
        console.log('2. Listar Médicos');
        console.log('3. Atualizar Médico');
        console.log('4. Excluir Médico');
        console.log('5. Consultar Médico por ID');
        console.log('6. Voltar ao Menu Principal');

        menuMedicos = parseInt(prompt('Digite o número da opção desejada: '));

        switch (menuMedicos) {
            case 1:
                const nomeMedico = prompt('Digite o nome do médico: ');
                const especialidade = prompt('Digite a especialidade do médico: ');
                Medico.adicionarMedico(nomeMedico, especialidade);
                console.log('Médico adicionado com sucesso!');
                break;
            case 2:
                Medico.listarMedicos();
                break;
            case 3:
                Medico.listarMedicos();
                const idMedico = parseInt(prompt('Digite o ID do médico que deseja atualizar: '));
                const nomeMedicoAtualizado = prompt('Digite o novo nome do médico (deixe em branco para manter o atual): ');
                const especialidadeAtualizada = prompt('Digite a nova especialidade do médico (deixe em branco para manter a atual): ');
                const medicoAtualizado = {
                    nome: nomeMedicoAtualizado,
                    especialidade: especialidadeAtualizada
                };
                if (nomeMedicoAtualizado === '' && especialidadeAtualizada === '') {
                    console.log('Nenhum campo atualizado. Por favor, digite pelo menos um campo para atualizar.');
                    break;
                }
                const atualizado = Medico.atualizarMedico(idMedico, medicoAtualizado);
                if (atualizado) {
                    console.log('Médico atualizado com sucesso!');
                } else {
                    console.log('Falha ao atualizar médico. Verifique o ID e tente novamente.');
                }
                break;
            case 4:
                Medico.listarMedicos();
                const idMedicoExcluir = parseInt(prompt('Digite o ID do médico que deseja excluir: '));
                const confirmacaoExclusao = prompt('Tem certeza que deseja excluir este médico? Digite "sim" para confirmar: ');
                const excluido = Medico.excluirMedico(idMedicoExcluir, confirmacaoExclusao);
                if (excluido) {
                    console.log('Médico excluído com sucesso!');
                } else {
                    console.log('Falha ao excluir médico. Verifique o ID e a confirmação e tente novamente.');
                }
                break;
            case 5:
                Medico.listarMedicos();
                const idMedicoConsulta = parseInt(prompt('Digite o ID do médico que deseja consultar: '));
                const medico = Medico.consultarMedico(idMedicoConsulta);
                if (medico) {
                    console.log(`ID: ${medico.id}`);
                    console.log(`Nome do Médico: ${medico.nome}`);
                    console.log(`Especialidade: ${medico.especialidade}`);
                } else {
                    console.log('Médico não encontrado. Por favor, digite um ID válido.');
                }
                break;
            case 6:
                console.log('Voltando ao Menu Principal...');
                break;
            default:
                console.log('Opção inválida. Por favor, digite um número entre 1 e 6.');
        }
    }
}

function menuGerenciarPacientes ()
{
    let menuPacientes = -1;

    while (menuPacientes !== 6) {
        console.log('\n\n-------------------GERENCIAMENTO DE PACIENTES-------------------\n\n');
        console.log('1. Adicionar Paciente');
        console.log('2. Listar Pacientes');
        console.log('3. Atualizar Paciente');
        console.log('4. Excluir Paciente');
        console.log('5. Consultar Paciente por ID');
        console.log('6. Voltar ao Menu Principal');

        menuPacientes = parseInt(prompt('Digite o número da opção desejada: '));

        switch (menuPacientes) {
            case 1:
                const nomePaciente = prompt('Digite o nome do paciente: ');
                const dataNascimento = prompt('Digite a data de nascimento do paciente (YYYY-MM-DD): ');
                Paciente.adicionarPaciente(nomePaciente, dataNascimento);
                console.log('Paciente adicionado com sucesso!');
                break;
            case 2:
                Paciente.listarPacientes();
                break;
            case 3:
                Paciente.listarPacientes();
                const idPaciente = parseInt(prompt('Digite o ID do paciente que deseja consultar: '));
                const nomePacienteAtualizado = prompt('Digite o novo nome do paciente (deixe em branco para manter o atual): ');
                const dataNascimentoAtualizada = prompt('Digite a nova data de nascimento do paciente (YYYY-MM-DD, deixe em branco para manter a atual): ');
                const pacienteAtualizado = {
                    nome: nomePacienteAtualizado,
                    dataNascimento: dataNascimentoAtualizada
                };
                if (nomePacienteAtualizado === '' && dataNascimentoAtualizada === '') {
                    console.log('Nenhum campo atualizado. Por favor, digite pelo menos um campo para atualizar.');
                    break;
                }
                const atualizado = Paciente.atualizarPaciente(idPaciente, pacienteAtualizado);
                if (atualizado) {
                    console.log('Paciente atualizado com sucesso!');
                } else {
                    console.log('Falha ao atualizar paciente. Verifique o ID e tente novamente.');
                }
                break;
            case 4:
                Paciente.listarPacientes();
                const idPacienteExcluir = parseInt(prompt('Digite o ID do paciente que deseja excluir: '));
                const confirmacaoExclusaoPaciente = prompt('Tem certeza que deseja excluir este paciente? Digite "sim" para confirmar: ');
                const excluido = Paciente.excluirPaciente(idPacienteExcluir, confirmacaoExclusaoPaciente);
                if (excluido) {
                    console.log('Paciente excluído com sucesso!');
                } else {
                    console.log('Falha ao excluir paciente. Verifique o ID e a confirmação e tente novamente.');
                }
                break;
            case 5:
                Paciente.listarPacientes();
                const idPacienteConsulta = parseInt(prompt('Digite o ID do paciente que deseja consultar: '));
                const paciente = Paciente.consultarPaciente(idPacienteConsulta);
                if (paciente) {
                    console.log(`ID: ${paciente.id}`);
                    console.log(`Nome do Paciente: ${paciente.nome}`);
                    console.log(`Data de Nascimento: ${paciente.dataNascimento}`);
                } else {
                    console.log('Paciente não encontrado. Por favor, digite um ID válido.');
                }
                break;
            case 6:
                console.log('Voltando ao Menu Principal...');
                break;
            default:
                console.log('Opção inválida. Por favor, digite um número entre 1 e 6.');
        }
    }
}

function menuGerenciarConsultas ()
{
    let menuConsultas = -1;

    while (menuConsultas !== 6) {
        console.log('\n\n-------------------GERENCIAMENTO DE CONSULTAS-------------------\n\n');
        console.log('1. Adicionar Consulta');
        console.log('2. Listar Consultas');
        console.log('3. Atualizar Consulta');
        console.log('4. Excluir Consulta');
        console.log('5. Consultar Consulta por ID');
        console.log('6. Voltar ao Menu Principal');

        menuConsultas = parseInt(prompt('Digite o número da opção desejada: '));

        switch (menuConsultas) {
            case 1:
                const nomeConsulta = prompt('Digite o nome da consulta: ');
                const data = prompt('Digite a data da consulta (YYYY-MM-DD): ');
                const idMedico = parseInt(prompt('Digite o ID do médico para esta consulta: '));
                const idPaciente = parseInt(prompt('Digite o ID do paciente para esta consulta: '));
                const descricao = prompt('Digite uma descrição para a consulta: ');
                const consultaAdicionada = Consulta.adicionarConsulta(nomeConsulta, data, idMedico, idPaciente, descricao);
                if (consultaAdicionada) {
                    console.log('Consulta adicionada com sucesso!');
                } else {
                    console.log('Falha ao adicionar consulta. Verifique os dados e tente novamente.');
                }
                break;
            case 2:
                Consulta.listarConsultas();
                break;
            case 3:
                Consulta.listarConsultas();
                const Consultaid = parseInt(prompt('Digite o ID da consulta que deseja atualizar: '));
                const nomeConsultaAtualizado = prompt('Digite o novo nome da consulta (deixe em branco para manter o atual): ');
                const idMedicoAtualizado = prompt('Digite o novo ID do médico para esta consulta (deixe em branco para manter o atual): ');
                const idPacienteAtualizado = prompt('Digite o novo ID do paciente para esta consulta (deixe em branco para manter o atual): ');
                const dataConsultaAtualizada = prompt('Digite a nova data da consulta (YYYY-MM-DD, deixe em branco para manter a atual): ');
                const descricaoAtualizada = prompt('Digite uma nova descrição para a consulta (deixe em branco para manter a atual): ');
                const consultaAtualizada = {
                    nome: nomeConsultaAtualizado,
                    data: dataConsultaAtualizada,
                    idMedico: idMedicoAtualizado,
                    idPaciente: idPacienteAtualizado,
                    descricao: descricaoAtualizada
                };
                if (nomeConsultaAtualizado === '' && dataConsultaAtualizada === '' && idMedicoAtualizado === '' && idPacienteAtualizado === '' && descricaoAtualizada === '') {
                    console.log('Nenhum campo atualizado. Por favor, digite pelo menos um campo para atualizar.');
                    break;
                }
                const atualizada = Consulta.atualizarConsulta(Consultaid, consultaAtualizada);
                if (atualizada) {
                    console.log('Consulta atualizada com sucesso!');
                } else {
                    console.log('Falha ao atualizar consulta. Verifique o ID e os dados e tente novamente.');
                }
                break;
            case 4:
                Consulta.listarConsultas();
                const idConsultaExcluir = parseInt(prompt('Digite o ID da consulta que deseja excluir: '));
                const confirmacaoExclusaoConsulta = prompt('Tem certeza que deseja excluir esta consulta? Digite "sim" para confirmar: ');
                const excluida = Consulta.excluirConsulta(idConsultaExcluir, confirmacaoExclusaoConsulta);
                if (excluida) {
                    console.log('Consulta excluída com sucesso!');
                } else {
                    console.log('Falha ao excluir consulta. Verifique o ID e tente novamente.');
                }
                break;
            case 5:
                Consulta.listarConsultas();
                const idConsulta = parseInt(prompt('Digite o ID da consulta que deseja consultar: '));
                const consulta = Consulta.consultarConsulta(idConsulta);
                if (consulta) {
                    console.log(`ID: ${consulta.id}`);
                    console.log(`Nome da Consulta: ${consulta.nome}`);
                    console.log(`Data: ${consulta.data}`);
                    console.log(`ID do Médico: ${consulta.idMedico}`);
                    console.log(`ID do Paciente: ${consulta.idPaciente}`);
                    console.log(`Descrição: ${consulta.descricao}`);
                } else {
                    console.log('Consulta não encontrada. Por favor, digite um ID válido.');
                }
                break;
            case 6:
                console.log('Voltando ao Menu Principal...');
                break;
            default:
                console.log('Opção inválida. Por favor, digite um número entre 1 e 6.');
        }
    }
}

function menuGerenciarRelatorios ()
{
    let menuRelatorios = -1;

    while (menuRelatorios !== 5) {
        console.log('\n\n-------------------GERENCIAMENTO DE RELATÓRIOS-------------------\n\n');
        console.log('1. Listar Consultas por Data');
        console.log('2. Listar Consultas por Médico');
        console.log('3. Listar Consultas por Paciente');
        console.log('4. Listar Consultas por Descrição');
        console.log('5. Listar Consultas Mensais');
        console.log('6. Voltar ao Menu Principal');

        menuRelatorios = parseInt(prompt('Digite o número da opção desejada: '));

        switch (menuRelatorios) {
            case 1:
                const data = prompt('Digite a data para listar as consultas (YYYY-MM-DD): ');
                Relatorios.relatorioListarConsultasPorData(data);
                break;
            case 2:
                Medico.listarMedicos();
                const idMedico = parseInt(prompt('Digite o ID do médico para listar as consultas: '));
                Relatorios.relatorioListarConsultasPorMedico(idMedico);
                break;
            case 3:
                Paciente.listarPacientes();
                const idPaciente = parseInt(prompt('Digite o ID do paciente para listar as consultas: '));
                Relatorios.relatorioListarConsultasPorPaciente(idPaciente);
                break;
            case 4:
                const descricao = prompt('Digite a descrição para listar as consultas: ');
                Relatorios.relatorioListarConsultasPorDescricao(descricao);
                break;
            case 5:
                Relatorios.relatorioListarConsultasMensais();
                break;
            case 6:
                console.log('Voltando ao Menu Principal...');
                break;
            default:
                console.log('Opção inválida. Por favor, digite um número entre 1 e 6.');
        }
    }
}

menuPrincipal();
