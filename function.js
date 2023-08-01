var proposicaoUm = [];
var proposicaoDois = [];
var proposicaoTres = [];
let respostaUsuario;
let quantLinhaTotal;
let quantLinhaOperador = 1;

//Automatizar mais: criar matriz. onde prop[] = propUm[], propDois[], propTres[].

function gerarProp(respostaUsuario) {
  quantLinhaTotal = Math.pow(2, respostaUsuario);

  for (let loopk = 1; loopk < respostaUsuario; loopk++) {
    quantLinhaOperador = quantLinhaOperador * 2;
  }

  if (respostaUsuario == 3) {
    Prop(proposicaoTres, quantLinhaOperador);
    quantLinhaOperador = quantLinhaOperador / 2;
    Prop(proposicaoDois, quantLinhaOperador);
    quantLinhaOperador = quantLinhaOperador / 2;
    Prop(proposicaoUm, quantLinhaOperador);
  }
  if (respostaUsuario == 2) {
    Prop(proposicaoDois, quantLinhaOperador);
    quantLinhaOperador = quantLinhaOperador / 2;
    Prop(proposicaoUm, quantLinhaOperador);
  }
}

function Prop(proposicao, quantLinhaOperador) {
  let loopPro = 0;
  while (loopPro < quantLinhaTotal) {
    for (let loopI = 0; loopI < quantLinhaOperador; loopI++) {
      proposicao[loopPro] = "V";
      loopPro++;
    }
    for (let loopI = 0; loopI < quantLinhaOperador; loopI++) {
      proposicao[loopPro] = "F";
      loopPro++;
    }
  }
}

//----------------------------------------------------------------
function montandoTabela(respostaUsuario) {
  gerarProp(respostaUsuario);
  let tabela = 0;
  if (respostaUsuario == 2) {
    console.log("| P | Q |");
  } else if (respostaUsuario == 3) {
    console.log("| P | Q | R |");
  }
  while (tabela < quantLinhaTotal) {
    if (respostaUsuario == 2) {
      console.log(
        "| " + proposicaoDois[tabela] + " | " + proposicaoUm[tabela] + "|"
      );
    } else if (respostaUsuario == 3) {
      console.log(
        "| " +
          proposicaoTres[tabela] +
          " | " +
          proposicaoDois[tabela] +
          " | " +
          proposicaoUm[tabela] +
          "|"
      );
    }
    tabela++;
    continue;
  }
}

console.log(montandoTabela(3));
