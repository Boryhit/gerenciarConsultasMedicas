const prompt = require('prompt-sync')();
const Medico = require('./src/medico');
const Paciente = require('./src/paciente');
const Consulta = require('./src/consulta');
const Relatorios = require('./src/relatorios');

function menuPrincipal() {
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
            case 1: {
                menuGerenciarMedicos();
                break;
            }
            case 2: {
                menuGerenciarPacientes();
                break;
            }
            case 3: {
                menuGerenciarConsultas();
                break;
            }
            case 4: {
                menuGerenciarRelatorios();
                break;
            }
            case 5: {
                console.log('Saindo do programa. Até mais!');
                break;
            }
            default: {
                console.log('Opção inválida. Por favor, digite um número entre 1 e 5.');
            }
        }
    }
}

function menuGerenciarMedicos() {
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
            case 1: {
                const nomeMedico = prompt('Digite o nome do médico: ');
                const especialidade = prompt('Digite a especialidade do médico: ');

                Medico.adicionarMedico(nomeMedico, especialidade);

                console.log('Médico adicionado com sucesso!');
                break;
            }
            case 2: {
                if (Medico.medicos.length === 0) {
                    console.log('Nenhum médico cadastrado.');
                } else {
                    Medico.listarMedicos();
                }
                break;
            }
            case 3: {
                if (Medico.medicos.length === 0) {
                    console.log('Nenhum médico cadastrado.');
                    break;
                }
                Medico.listarMedicos();
                const idMedico = parseInt(prompt('Digite o ID do médico que deseja atualizar: '));

                const nomeAtualizado = prompt('Digite o novo nome do médico (deixe em branco para manter o atual): ');

                const especialidadeAtualizada = prompt('Digite a nova especialidade do médico (deixe em branco para manter a atual): ');

                const medicoAtualizado = {
                    nome: nomeAtualizado,
                    especialidade: especialidadeAtualizada
                };

                if (nomeAtualizado === '' && especialidadeAtualizada === '') {
                    console.log('Nenhum campo atualizado.');
                    break;
                }

                const atualizado = Medico.atualizarMedico(idMedico, medicoAtualizado);

                if (atualizado) {
                    console.log('Médico atualizado com sucesso!');
                } else {
                    console.log('Falha ao atualizar médico.');
                }
                break;
            }
            case 4: {
                if (Medico.medicos.length === 0) {
                    console.log('Nenhum médico cadastrado.');
                    break;
                }
                Medico.listarMedicos();

                const idExcluir = parseInt(prompt('Digite o ID do médico que deseja excluir: '));

                const confirmacao = prompt('Digite "sim" para confirmar: ');

                const excluido = Medico.excluirMedico(idExcluir, confirmacao);

                if (excluido) {
                    console.log('Médico excluído com sucesso!');
                } else {
                    console.log('Falha ao excluir médico.');
                }
                break;
            }
            case 5: {
                if (Medico.medicos.length === 0) {
                    console.log('Nenhum médico cadastrado.');
                    break;
                }
                Medico.listarMedicos();

                const idConsulta = parseInt(prompt('Digite o ID do médico: '));

                const medico = Medico.consultarMedico(idConsulta);

                if (medico) {
                    console.log(`ID: ${medico.id}`);
                    console.log(`Nome: ${medico.nome}`);
                    console.log(`Especialidade: ${medico.especialidade}`);
                } else {
                    console.log('Médico não encontrado.');
                }
                break;
            }
            case 6: {
                console.log('Voltando ao menu principal...');
                break;
            }
            default: {
                console.log('Opção inválida.');
            }
        }
    }
}

function menuGerenciarPacientes() {
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
            case 1: {
                const nome = prompt('Digite o nome do paciente: ');
                const dataNascimento = prompt('Digite a data de nascimento (YYYY-MM-DD): ');

                Paciente.adicionarPaciente(nome, dataNascimento);

                console.log('Paciente adicionado com sucesso!');
                break;
            }
            case 2: {
                if (Paciente.pacientes.length === 0) {
                    console.log('Nenhum paciente cadastrado.');
                } else {
                    Paciente.listarPacientes();
                }
                break;
            }
            case 3: {
                if (Paciente.pacientes.length === 0) {
                    console.log('Nenhum paciente cadastrado.');
                    break;
                }
                Paciente.listarPacientes();

                const idPaciente = parseInt(prompt('Digite o ID do paciente: '));

                const nomeAtualizado = prompt('Novo nome (deixe em branco para manter): ');

                const dataAtualizada = prompt('Nova data de nascimento (deixe em branco para manter): ');

                const pacienteAtualizado = {
                    nome: nomeAtualizado,
                    dataNascimento: dataAtualizada
                };

                const atualizado = Paciente.atualizarPaciente(idPaciente, pacienteAtualizado);

                if (atualizado) {
                    console.log('Paciente atualizado com sucesso!');
                } else {
                    console.log('Falha ao atualizar paciente.');
                }
                break;
            }
            case 4: {
                if (Paciente.pacientes.length === 0) {
                    console.log('Nenhum paciente cadastrado.');
                    break;
                }
                Paciente.listarPacientes();

                const idExcluir = parseInt(prompt('Digite o ID do paciente: '));

                const confirmacao = prompt('Digite "sim" para confirmar: ');

                const excluido = Paciente.excluirPaciente(idExcluir, confirmacao);

                if (excluido) {
                    console.log('Paciente excluído com sucesso!');
                } else {
                    console.log('Falha ao excluir paciente.');
                }
                break;
            }
            case 5: {
                if (Paciente.pacientes.length === 0) {
                    console.log('Nenhum paciente cadastrado.');
                    break;
                }
                Paciente.listarPacientes();

                const idConsulta = parseInt(prompt('Digite o ID do paciente: '));

                const paciente = Paciente.consultarPaciente(idConsulta);

                if (paciente) {
                    console.log(`ID: ${paciente.id}`);
                    console.log(`Nome: ${paciente.nome}`);
                    console.log(`Data de Nascimento: ${paciente.dataNascimento}`);
                } else {
                    console.log('Paciente não encontrado.');
                }
                break;
            }
            case 6: {
                console.log('Voltando ao menu principal...');
                break;
            }
            default: {
                console.log('Opção inválida.');
            }
        }
    }
}

function menuGerenciarConsultas() {
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
            case 1: {
                const nome = prompt('Digite o nome da consulta: ');
                const data = prompt('Digite a data (YYYY-MM-DD): ');
                const idMedico = parseInt(prompt('Digite o ID do médico: '));
                const idPaciente = parseInt(prompt('Digite o ID do paciente: '));
                const descricao = prompt('Digite a descrição: ');
                const adicionada = Consulta.adicionarConsulta(
                    nome,
                    data,
                    idMedico,
                    idPaciente,
                    descricao
                );

                if (adicionada) {
                    console.log('Consulta adicionada com sucesso!');
                } else {
                    console.log('Falha ao adicionar consulta.');
                }
                break;
            }
            case 2: {
                if (Consulta.consultas.length === 0) {
                    console.log('Nenhuma consulta cadastrada.');
                } else {
                    Consulta.listarConsultas();
                }
                break;
            }
            case 3: {
                if (Consulta.consultas.length === 0) {
                    console.log('Nenhuma consulta cadastrada.');
                    break;
                }
                Consulta.listarConsultas();

                const idConsulta = parseInt(prompt('Digite o ID da consulta: '));

                const nomeAtualizado = prompt('Novo nome: ');
                const idMedicoAtualizado = prompt('Novo ID do médico: ');
                const idPacienteAtualizado = prompt('Novo ID do paciente: ');
                const dataAtualizada = prompt('Nova data: ');
                const descricaoAtualizada = prompt('Nova descrição: ');

                const consultaAtualizada = {
                    nome: nomeAtualizado,
                    data: dataAtualizada,
                    idMedico: idMedicoAtualizado,
                    idPaciente: idPacienteAtualizado,
                    descricao: descricaoAtualizada
                };

                const atualizada = Consulta.atualizarConsulta(
                    idConsulta,
                    consultaAtualizada
                );

                if (atualizada) {
                    console.log('Consulta atualizada com sucesso!');
                } else {
                    console.log('Falha ao atualizar consulta.');
                }
                break;
            }
            case 4: {
                if (Consulta.consultas.length === 0) {
                    console.log('Nenhuma consulta cadastrada.');
                    break;
                }
                Consulta.listarConsultas();

                const idExcluir = parseInt(prompt('Digite o ID da consulta: '));

                const confirmacao = prompt('Digite "sim" para confirmar: ');

                const excluida = Consulta.excluirConsulta(idExcluir, confirmacao);

                if (excluida) {
                    console.log('Consulta excluída com sucesso!');
                } else {
                    console.log('Falha ao excluir consulta.');
                }
                break;
            }
            case 5: {
                if (Consulta.consultas.length === 0) {
                    console.log('Nenhuma consulta cadastrada.');
                    break;
                }
                Consulta.listarConsultas();

                const idConsulta = parseInt(prompt('Digite o ID da consulta: '));

                const consulta = Consulta.consultarConsulta(idConsulta);

                if (consulta) {

                    console.log(`ID: ${consulta.id}`);
                    console.log(`Nome: ${consulta.nome}`);
                    console.log(`Data: ${consulta.data}`);
                    console.log(`ID Médico: ${consulta.idMedico}`);
                    console.log(`ID Paciente: ${consulta.idPaciente}`);
                    console.log(`Descrição: ${consulta.descricao}`);

                } else {
                    console.log('Consulta não encontrada.');
                }
                break;
            }
            case 6: {
                console.log('Voltando ao menu principal...');
                break;
            }
            default: {
                console.log('Opção inválida.');
            }
        }
    }
}

function menuGerenciarRelatorios() {
    let menuRelatorios = -1;

    while (menuRelatorios !== 6) {

        console.log('\n\n-------------------RELATÓRIOS-------------------\n\n');
        console.log('1. Consultas por Data');
        console.log('2. Consultas por Médico');
        console.log('3. Consultas por Paciente');
        console.log('4. Consultas por Descrição');
        console.log('5. Consultas Mensais');
        console.log('6. Voltar');

        menuRelatorios = parseInt(prompt('Digite a opção desejada: '));

        switch (menuRelatorios) {
            case 1: {
                const data = prompt('Digite a data: ');
                Relatorios.relatorioListarConsultasPorData(data);
                break;
            }
            case 2: {
                const idMedico = parseInt(prompt('Digite o ID do médico: '));
                Relatorios.relatorioListarConsultasPorMedico(idMedico);
                break;
            }
            case 3: {
                const idPaciente = parseInt(prompt('Digite o ID do paciente: '));
                Relatorios.relatorioListarConsultasPorPaciente(idPaciente);
                break;
            }
            case 4: {
                const descricao = prompt('Digite a descrição: ');
                Relatorios.relatorioListarConsultasPorDescricao(descricao);
                break;
            }
            case 5: {
                Relatorios.relatorioListarConsultasMensais();
                break;
            }
            case 6: {
                console.log('Voltando ao menu principal...');
                break;
            }
            default: {
                console.log('Opção inválida.');
            }
        }
    }
}

menuPrincipal();