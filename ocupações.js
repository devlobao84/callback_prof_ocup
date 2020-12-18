     const profissionais = ["João", "Bruno", "Lobão", "Eduardo", "Felipe", "Victoria", "Leticia"];
     const ocupacoes = ["Dev Back-end", "Dev Front-end","Designer", "UI - Design", "UX - Design", "Social Media"];
     const fraseMotivadora = "Somos time  que vai revolucionar o mercado!" + ' ' + "Vejam só que time de profissionais PHODA!";

          function juntarNomes(brinquedo, objeto) {
            return brinquedo + " " + objeto;
          }

          function processar(caixaLista, caixaObjeto, caixaFuncao) {

            let listaTratada = [];

            for (let i = 0; i < caixaLista.length; i++) {

              let r = Math.round(Math.random() * (caixaObjeto.length - 1))
              let site = caixaFuncao(caixaLista[i], caixaObjeto[r]);

              listaTratada.push(site);
            }

            return listaTratada;
          }

     console.log(fraseMotivadora);
     console.log(processar(profissionais, ocupacoes, juntarNomes));

/* [
  'João Dev Back-end',
  'Bruno UI - Design',
  'Lobão UI - Design',
  'Eduardo Dev Front-end',
  'Felipe Designer',
  'Victoria UX - Design',
  'Leticia UX - Design'
] */








// Dado um array ordenado de números, escreva uma função que receba um número como parâmetro e retorne a posição que esse número ocupa ou ocuparia dentro do array

//let listaA = [1, 3, 5, 7, 9, 11]
//listaA.indexOf(5)
//
//function encontrar(numero){   
//     return posicao == numero
//     for( let i = 0; i <= posicao.numero; i++){
//          
//     }     
//
//}



//retorna 2