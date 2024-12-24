<script setup>
    import { reactive } from 'vue';

    const estado = reactive({
    primeiroNumero: '',
    segundoNumero: '',
    operacoes: {
    soma: (a, b) => a + b,
    subtracao: (a, b) => a - b,
    multiplicacao: (a, b) => a * b,
    divisao: (a, b) => (b !== 0 ? a / b : 'Divisao por zero'),
    },
    resultado: 0,
});

const calculaResultado = () => {
    const { primeiroNumero, segundoNumero, operacaoMatematica } = estado;
    const num1 = parseFloat(primeiroNumero);
    const num2 = parseFloat(segundoNumero);
    estado.resultado = !isNaN(num1) && !isNaN(num2) ? estado.operacoes[operacaoMatematica](num1, num2) : 'Entrada inválida';
};
</script>

<template>
    <div class="container">
<h1 class="mt-5 mb-3">Calculadora Aritmética</h1>
<input class="form-control" type="text" v-model="estado.primeiroNumero" @input="calculaResultado" />
<input type="text" class="form-control mt-2" v-model="estado.segundoNumero" @input="calculaResultado" />

<select class="mt-3 mb-1" v-model="estado.operacaoMatematica" @change="calculaResultado">
    <option value="soma">Soma</option>
    <option value="subtracao">Subtração</option>
    <option value="multiplicacao">Multiplicação</option>
    <option value="divisao">Divisão</option>
</select>
<p>
    Resultado: {{ estado.resultado }}
</p>
</div>
</template>
