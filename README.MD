Olá, mais um projeto relacionado com a faculdade. Onde desta vez eu resolvi criar um algoritmo para gerar tabela verdade com Javascript. Escolhi JavaScript pois a sintaxe é muito facil e queria implementar com HTML e CSS.
OBS.: tambem resolvi fazer com Javascript por que eu escrevia o codigo em casa e na faculdade, mas como não possuia alguma forma de copiar o codigo pelo git na faculdade, entao eu apenas copiava e colava o codigo e por isso eu "versionei" com comentarios e com 3 arquivos. :D

Existem 3 versoes do projeto, (fiz dessa forma pois eu alternava entre meu computador pessoal e computador da faculdade.) O original 'script.js' foi o começo de tudo e quandoe eu decidi fazer este projeto eu pensei em primeiro "solucionar" ou nesse caso, rodar. Então eu comecei primeiro escrevendo de uma forma que eu conseguisse imprimir a tabela pelo console e só depois eu "refatorava" e "limpava" o codigo de novo.

'script.js'
A primeira tabela foi a de 2 proposições onde imprimia até 4 linhas. cada proposição é um array e dependendo da resposta do usuario é definido um numero de linhas. para 'preencher' cada proposiçao é feito um loop onde o fim é a quantidade total de linhas.

Da linha 21 a 29 é feita a primeira coluna, onde é alternado de 1 em 1 imprimindo:
V, F, V, F,
Da linha 50 a 100 é feita a segunda coluna, alternando de 2 em 2 imprimindo:
(tambem deixei comentado cada "versao" que eu fiz e melhorei)
V, V, F, F,
Da linha 100 a 120 é feita a terceira coluna, alternando de 4 em 4 imprimindo:
V, V, F, F,
(Há duas versoes desta)
Da linha 126 a 137 é feita a quarta coluna, alternando de 8 em 8 imprimindo:
V, V, V, V, V, V, V, V,

Na segunda parte do codigo é montando a tabela, onde tem outro while e imprime cada coluna no console.
Note que esta primeira parte do codigo há MUITO codigo repetido, e a cada "versao" eu melhoro ele, mas há ainda certas dependencias que precisam ser modificada e alterada sempre, como por exemplo: o numero de linhas a ser impressa em cada FOR.

'function.js'
Nesta versão eu coloquei tudo em uma Função, corteis as versões antigas e fiz pequenas alteraçoes para deixar o codigo menos dependente de modificações. O tamanho diminuiu para menos da metade e cortei muitos loops desnecessarios. Agora tudo pode ser chamado por uma unica funçao 'montandoTabela()' que é passado como parametro o numero de proposições. O codigo esta mais "automatico" e cada coluna e nº de linhas é definido automaticamente apenas informando o nº de proposição.

em 'montandoTabela()' é chamada outra funçao 'gerarProp()' onde é definido o numero total de linhas, e dependendo da resposta do usuario ele preenche cada coluna chamando outra funçao 'Prop()' cada vez que o Prop é chamado a 'quantLinhaOperador' define o padrão que será impresso a tabela é feita em ordem decrescente da direita para esquerda: 8, 4, 2, 1.

Mas tambem há certos problemas, onde manualmente teria que definir mais comandos para mais operadores, gerando mais codigos repetidos e desnecessarios.

'function_2.js'
Por fim a ultima versão, menor ainda (cerca de 20 linhas a menos totalizando 60) e com mais complexo.
Agora as proposições e posição são definidas por uma MATRIZ, onde sera mais otimizado ainda e independe de mais codigos manuais a serem repetidos. Assim é passado somente o Numero de Proposição e todo o resto é calculado automaticamente.

O unico defeito neste código é o script para imprimir na tela que ainda, está manual, onde eu preciso definir um comportamento diferente para cada tipo de impressão.

Tambem foi implementado com HTML e CSS, onde o console não sera mais necessario e poderá imprimir até 4 proposições na tela.
