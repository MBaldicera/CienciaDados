const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/transporte/transporte-dados-globais.json';

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json();
    const trabalhadores = (dados.total_trabalhadores_mundo/1e9);
    const pessoasTransporte = (dados.total_pessoas_que_necessitam_transporte_para_trabalho/1e9);
    const horas = parseInt(dados.tempo_medio_deslocamento_para_trabalho);
    const minutos = Math.round((dados.total_pessoas_mundo)*100);

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML = `O mundo tem <span>${dados.total-mundo}</span>  
    bilhões de pessoas, dessas pessoas, aproximadamente <span>${dados.trabalhadores-mundo}</span> 
    bilhões estão empregadas e passam em média <span>${dados.tempo-medio}</span> 
    horas por dia trabalhando. Temos, portanto, mais da metade da população mundial que não exerce trabalhos 
    com vínculos empregatícios legais. O que pode significar que há longevidade e desse modo, muitas pessoas aposentadas. 
    Porém, também pode significar muitos postos de trabalho chamados informais.`

    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais();