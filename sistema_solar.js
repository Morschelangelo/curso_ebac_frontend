function Corpocelestial(nome, massa, raio) {
    this.nome = nome;
    this.massa = massa;
    this.raio = raio;
}

function Planeta(nome, massa, raio, numeroDeLuas) {
    Corpocelestial.call(this, nome, massa, raio);
    this.numeroDeLuas = numeroDeLuas;
}

function Estrela(nome, massa, raio, temperatura) {
    Corpocelestial.call(this, nome, massa, raio);
    this.temperatura = temperatura;
}

const Sol = new Estrela("Sol", 1.989e30, 696340, 5778);
const Mercurio = new Planeta("Mercurio", 3.3011e24, 2439.7, 0);
const Terra = new Planeta("Terra", 5.972e24, 3963.19, 1);
const Venus = new Planeta("Venus", 4.8685e24, 3760.41, 0);
const Marte = new Planeta("Marte", 6.39e23, 2110.29, 2);
const Jupiter = new Planeta("Jupiter", 1.8986e27, 44423.07, 75);
const Saturno = new Planeta("Saturno", 5.6846e26, 44423.07, 145);
const Urano = new Planeta("Urano", 8.6849e25, 15881.63, 27);
const Netuno = new Planeta("Netuno", 1.0244e26, 15387.64, 14);

console.log(Sol);
console.log(Mercurio);
console.log(Venus);
console.log(Terra);
console.log(Marte);
console.log(Jupiter);
console.log(Saturno);
console.log(Netuno);
