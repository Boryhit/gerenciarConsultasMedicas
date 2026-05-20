let pacientes = [];
let sequencialIdPaciente = 1;

function adicionarPaciente (nomePaciente, dataNascimento)
{
    const id = sequencialIdPaciente;
    pacientes.push({
        id,
        nome: nomePaciente,
        dataNascimento: dataNascimento
    })
    sequencialIdPaciente++;
}

function listarPacientes ()
{
    console.log('\n\n-------------------LISTA DE PACIENTES-------------------\n\n')
    pacientes.forEach(paciente => {
        console.log(`ID: ${paciente.id}`);
        console.log(`Nome do Paciente: ${paciente.nome}`);
        console.log(`Data de Nascimento: ${paciente.dataNascimento}`);
        console.log('----------------');
    })
}

function atualizarPaciente (id, novoPaciente)
{
    listarPacientes();
    const index = pacientes.findIndex(paciente => paciente.id === id);
    if (index === -1) {
        console.log('Paciente não encontrado. Por favor, digite um ID válido.');
        return false;
    } else {
        pacientes[index].nome = novoPaciente.nome || pacientes[index].nome;
        pacientes[index].dataNascimento = novoPaciente.dataNascimento || pacientes[index].dataNascimento;
        return true;
    }           
} 

function excluirPaciente (id, confirmacao)
{
    const index = pacientes.findIndex(paciente => paciente.id === id);
    if (confirmacao.toLowerCase() === 'sim') {
         if (index !== -1) {
            pacientes.splice(index, 1);
            console.log('Paciente excluído com sucesso!');
            return true;
        } else {
            console.log('Paciente não encontrado. Por favor, digite um ID válido.');
            return false;
        }
    } else {
        console.log('Exclusão cancelada.');
        return false;
    }
}

function consultarPaciente (id)
{    const paciente = pacientes.find(paciente => paciente.id === id);
    if (!paciente) {
        console.log('Paciente não encontrado. Por favor, digite um ID válido.');
        return null;
    }
    return paciente;
}
    

module.exports = {
    pacientes,
    adicionarPaciente,
    listarPacientes,
    atualizarPaciente,
    excluirPaciente,
    consultarPaciente
}