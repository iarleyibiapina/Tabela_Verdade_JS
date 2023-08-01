var proposicaoUm = [];
var proposicaoDois = [];
var proposicaoTres = [];
var proposicaoDoisVersaoDois = [];
var proposicaoTresVersaoUm = [];
var proposicaoQuatroVersaoUm = [];

//1.3 suprema
// teste versao de usuario definir quantidade de PROPOSIÇOES

// numero de proposicoes
let repostaUsuario;
// numero de linhas
quantLinha = Math.pow(2, repostaUsuario);
// numero de V e F impresso.
if (repostaUsuario <= 2) {
  quantOperador = quantLinha / 2;
} else {
  quantOperador = quantLinha / 4;
}
var loopPro = 0;
while (loopPro < quantLinha) {
  for (let loopI = 0; loopI < quantOperador; loopI++) {
    proposicaoDoisVersaoDois[loopPro] = "V";
    loopPro++;
  }
  for (let loopI = 0; loopI < quantOperador; loopI++) {
    proposicaoDoisVersaoDois[loopPro] = "F";
    loopPro++;
  }
}

var proposicaoCincoVersaoUm = [];

// CONDIÇAO Q / ALTERANDO
for (var pj = 0; pj < 16; pj++) {
  if (pj % 2 == 0) {
    proposicaoUm[pj] = "V";
  } else {
    proposicaoUm[pj] = "F";
  }
}

// versoes codigo P de 2x2
// 1.0 = 19 linhas, 3 variaveis, 1 while, 4 for, preciso especificar posicoes de cada linha
// 1.1 = 10 linhas, 1 variavel, 1 while, definir apenas a quantidade de linha.
// 1.2 = 11 linhas, 3 variaveis, 1 while, 2 for, posso definir a quantidade de vezes que o V ou F sera impresso e reciclar no 4x4 linhas
// 1.3 =

// CONDIÇAO P / DE 2x2
// 1.0
pl = 0;
while (pl < 8) {
  for (var pl2 = 0; pl2 < 2; pl2++) {
    proposicaoDois[pl2] = "V";
  }
  pl++;
  for (var pl3 = 2; pl3 < 4; pl3++) {
    proposicaoDois[pl3] = "F";
  }
  pl++;
  for (var pl2 = 4; pl2 < 6; pl2++) {
    proposicaoDois[pl2] = "V";
  }
  pl++;
  for (var pl3 = 6; pl3 < 8; pl3++) {
    proposicaoDois[pl3] = "F";
  }
  pl++;
}

/* 1.1
let PropTres = [];
let loopPro = 0;
while (loopPro < 8) {
  PropTres[loopPro] = "V";
  loopPro += 1;
  PropTres[loopPro] = "V";
  loopPro += 1;
  PropTres[loopPro] = "F";
  loopPro += 1;
  PropTres[loopPro] = "F";
  loopPro += 1;
}
*/

// 1.2
loopPro = 0;
while (loopPro < 16) {
  for (let loopI = 0; loopI < 2; loopI++) {
    proposicaoDoisVersaoDois[loopPro] = "V";
    loopPro++;
  }
  for (let loopI = 0; loopI < 2; loopI++) {
    proposicaoDoisVersaoDois[loopPro] = "F";
    loopPro++;
  }
}

// CONDIÇAO R / de 4 em 4

//1.0
for (var pl = 0; pl < 1; pl++) {
  for (var pl4 = 0; pl4 < 4; pl4++) {
    proposicaoTres[pl4] = "V";
  }
  for (var pl5 = 4; pl5 < 8; pl5++) {
    proposicaoTres[pl5] = "F";
  }
}

// 1.1
loopPro = 0;
while (loopPro < 16) {
  for (let loopI = 0; loopI < 4; loopI++) {
    proposicaoTresVersaoUm[loopPro] = "V";
    loopPro++;
  }
  for (let loopI = 0; loopI < 4; loopI++) {
    proposicaoTresVersaoUm[loopPro] = "F";
    loopPro++;
  }
}

// CONDIÇAO S / de 8 em 8
loopPro = 0;
while (loopPro < 16) {
  for (let loopI = 0; loopI < 8; loopI++) {
    proposicaoQuatroVersaoUm[loopPro] = "V";
    loopPro++;
  }
  for (let loopI = 0; loopI < 8; loopI++) {
    proposicaoQuatroVersaoUm[loopPro] = "F";
    loopPro++;
  }
}

// MONTANDO TABELA
//
tabela = 0;
console.log("|P | Q|");
while (tabela < 4) {
  console.log(
    "| " + proposicaoDois[tabela] + " | " + proposicaoUm[tabela] + "|"
  );
  tabela++;
  continue;
}
console.log("-");
//1.0
tabela = 0;
console.log("|R |P | Q|");
while (tabela < 8) {
  console.log(
    "|" +
      proposicaoTres[tabela] +
      " | " +
      proposicaoDois[tabela] +
      " | " +
      proposicaoUm[tabela] +
      "|"
  );
  tabela++;
  continue;
}
console.log("-");
//1.1
tabela = 0;
console.log("|R 1.1 |P 1.2 | Q|");
while (tabela < 8) {
  console.log(
    "|" +
      proposicaoTresVersaoUm[tabela] +
      "     | " +
      proposicaoDoisVersaoDois[tabela] +
      "     | " +
      proposicaoUm[tabela] +
      "|"
  );
  tabela++;
  continue;
}
console.log("-");
// 1.2 teste 16 linhas.
tabela = 0;
console.log("|S | R | P | Q |");
while (tabela < 16) {
  console.log(
    "|" +
      proposicaoQuatroVersaoUm[tabela] +
      " | " +
      proposicaoTresVersaoUm[tabela] +
      " | " +
      proposicaoDoisVersaoDois[tabela] +
      " | " +
      proposicaoUm[tabela] +
      "|"
  );
  tabela++;
  continue;
}
// condiçao E

tabela = 0;
console.log("CONDIÇAO 'E' COM PROPOSIÇAO 'P' E 'Q' ");
while (tabela < 4) {
  if (proposicaoDois[tabela] === "V" && proposicaoUm[tabela] === "V") {
    console.log("| V |");
  } else {
    console.log("| F |");
  }
  console.log("");
  tabela++;
}
// CONDIÇAO OU
tabela = 0;
console.log("CONDIÇAO 'OU' COM PROPOSIÇAO 'P' E 'Q' ");
while (tabela < 4) {
  if (proposicaoDois[tabela] === "V" || proposicaoUm[tabela] === "V") {
    console.log("| V |");
  } else {
    console.log("| F |");
  }
  console.log("");
  tabela++;
}
