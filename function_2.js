// OBS.: ao pontos negativos, precisa adicionar o array na matriz e ao imprimir cada resultado.

var matriz = [[], [], [], []];
let respostaUsuario;
let quantLinhaTotal;
let quantLinhaOperador = 1;

let resultado = window.prompt("Numero de proposições: ", 2);

function gerarProp(respostaUsuario) {
  quantLinhaTotal = Math.pow(2, respostaUsuario);

  //define o padrao de repetiçao de proposiçao na ordem inversa e decrescente, 8/4/2/1
  for (let loopk = 1; loopk < respostaUsuario; loopk++) {
    quantLinhaOperador = quantLinhaOperador * 2;
  }
  // se 2 = 2, 3 = 4, 4 = 8
  //console.log(quantLinhaOperador);

  for (let loopM = 0; loopM < respostaUsuario; loopM++) {
    let loopPro = 0;
    while (loopPro < quantLinhaTotal) {
      // numero de V ou F repetida em cada proposiçao
      for (let loopI = 0; loopI < quantLinhaOperador; loopI++) {
        //matriz[][loopPro]
        matriz[loopM][loopPro] = "V";
        loopPro++;
      }
      for (let loopI = 0; loopI < quantLinhaOperador; loopI++) {
        //matriz[][loopPro]
        matriz[loopM][loopPro] = "F";
        //   matriz[loopPro] = "F";
        loopPro++;
      }
    }
    quantLinhaOperador = quantLinhaOperador / 2;
  }
}
//----------------------------------------------------------------
function montandoTabela(respostaUsuario) {
  gerarProp(respostaUsuario);
  document.write("<h1>Tabela com " + respostaUsuario + " proposiçoes</h1>");
  let tabela = 0;
  if (respostaUsuario == 2) {
    document.write("| P | Q |");
  } else if (respostaUsuario == 3) {
    document.write("| P | Q | R |");
  } else if (respostaUsuario == 4) {
    document.write("| P | Q | R | S |");
  }
  while (tabela < quantLinhaTotal) {
    //----------------------------------------------------------------
    if (respostaUsuario == 2) {
      let tabelaMatriz = 0;
      document.write("<li>| " + matriz[tabelaMatriz][tabela] + " | ") +
        ++tabelaMatriz +
        document.write(matriz[tabelaMatriz][tabela] + "| </li>");
    } else if (respostaUsuario == 3) {
      let tabelaMatriz = 0;
      document.write("<p>| " + matriz[tabelaMatriz][tabela] + " | ") +
        ++tabelaMatriz +
        document.write(matriz[tabelaMatriz][tabela] + " | ") +
        ++tabelaMatriz +
        document.write(matriz[tabelaMatriz][tabela] + "| </p>");
    } else if (respostaUsuario == 4) {
      let tabelaMatriz = 0;
      document.write("<p>| " + matriz[tabelaMatriz][tabela] + " | ") +
        ++tabelaMatriz +
        document.write(matriz[tabelaMatriz][tabela] + " | ") +
        ++tabelaMatriz +
        document.write(matriz[tabelaMatriz][tabela] + " | ") +
        ++tabelaMatriz +
        document.write(matriz[tabelaMatriz][tabela] + "| </p>");
    }
    //------------------------------------------------------------------
    tabela++;
    continue;
  }
}
montandoTabela(resultado);
