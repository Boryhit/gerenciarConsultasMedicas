let medicos = [];
let sequencialIdMedico = 1;

const João = {
    id: 1,
    nome: 'João',
    especialidade: 'Cardiologia'
}

const Maria = {
    id: 2,
    nome: 'Maria',
    especialidade: 'Dermatologia'
}

const Carlos = {
    id: 3,
    nome: 'Carlos',
    especialidade: 'Ortopedia'
}

medicos.push(João);
sequencialIdMedico++;

medicos.push(Maria);
sequencialIdMedico++;

medicos.push(Carlos);
sequencialIdMedico++;

function adicionarMedico (nomeMedico, especialidade)
{
    const id = sequencialIdMedico;
    medicos.push({
        id,
        nome: nomeMedico,
        especialidade: especialidade
    });
    sequencialIdMedico++;
    return true;
}

function listarMedicos ()
{
    console.log('\n\n-------------------LISTA DE MÉDICOS-------------------\n\n')
    medicos.forEach(medico => {
        console.log(`ID: ${medico.id}`);
        console.log(`Nome do Médico: ${medico.nome}`);
        console.log(`Especialidade: ${medico.especialidade}`);
        console.log('----------------');
    })
}

function atualizarMedico (id, novoMedico)
{
    listarMedicos();
    const index = medicos.findIndex(medico => medico.id === id);
    if (index === -1) {
        console.log('Médico não encontrado. Por favor, digite um ID válido.');
        return false;
    } else {
        medicos[index].nome = novoMedico.nome || medicos[index].nome;
        medicos[index].especialidade = novoMedico.especialidade || medicos[index].especialidade;
        return true;
    }       
}

function excluirMedico (id, confirmacao)
{
    listarMedicos();
    const index = medicos.findIndex(medico => medico.id === id);
    if (confirmacao.toLowerCase() === 'sim') {
         if (index !== -1) {
            medicos.splice(index, 1);
            console.log('Médico excluído com sucesso!');
            return true;
        } else {
            console.log('Médico não encontrado. Por favor, digite um ID válido.');
            return false;
        }
    } else {
        console.log('Exclusão cancelada.');
        return false;
    }
}

function consultarMedico (id)
{    const medico = medicos.find(medico => medico.id === id);
    if (!medico) {
        console.log('Médico não encontrado. Por favor, digite um ID válido.');
        return null;
    }
    return medico;
}
    

module.exports = {
    medicos,
    adicionarMedico,
    listarMedicos,
    atualizarMedico,
    excluirMedico,
    consultarMedico
}