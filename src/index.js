const alunos = [
    { nome: 'Adão', nota: 8 },
    { nome: 'Eva', nota: 5 },
    { nome: 'Abrão', nota: 7 },
    { nome: 'Saarah', nota: 4 },
    { nome: 'Israel', nota: 6 }
];

const filtrarAlunosAprovados = (alunos) => 
    alunos.filter(aluno => aluno.nota >= 6);

const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);
