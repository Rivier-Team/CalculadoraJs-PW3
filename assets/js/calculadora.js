// DEFININDO CLASSE PARA CADA span
const spans = document.querySelectorAll('span')
spans.forEach((item) => { item.classList.add("num") })

simbolos = [
   spans[0], spans[1], spans[2], spans[3], 
   spans[4], spans[5], spans[9], spans[10], 
   spans[14], spans[15], spans[19],spans[23]
]
simbolos.forEach((item) => { item.classList.add("simbolos") })

// "Realizando cálculos que a função eval não realiza sozinha
// (com exceção do cálculo de resto (%))."
function calcula() {
   let valor = calc.txt.value.split(' ')
   let resultado = calc.txt.value

   if (valor[1] === '%') {
      let equacao = (valor[0] * (valor[2] / 100)).toFixed(4)
      return eval(equacao)

   } if (valor[0] === '' && valor[1] === '√') { // ex: √ 9 = 3
      let equacao = (Math.sqrt(valor[2])).toFixed(3)
      return eval(equacao)

   } if (valor[0] === valor[0] && valor[1] === '√') { // ex: 2 √ 9 = 6 
      let equacao = (valor[0] * (Math.sqrt(valor[2]))).toFixed(4)
      return eval(equacao)

   } if (valor[1] === '^') {
      let equacao = (valor[0] ** valor[2]).toFixed(4)
      return eval(equacao)

   } if (valor[1] === 'log') {
      let equacao = (Math.log10(valor[2])).toFixed(4)
      return eval(equacao)

   } if (valor[1] === '(%)') {
      let equacao = (valor[0] % valor[2]).toFixed(4)
      return eval(equacao)

   } if (valor[1] === '/') {
      let equacao = (valor[0] / valor[2]).toFixed(4)
      return eval(equacao)

   } else { return eval(resultado); }
}


function del() {
   let num = calc.txt.value.split('  ').toString()
   return num.substring(0, (num.length - 1))
}


function expandir() {
   const calcValores = document.querySelector('.value').classList.toggle("ativo")
   const conteudos = document.querySelectorAll('.num')

   const array = []
   conteudos.forEach((item) => { array.push(item)})
   
   const conteudoExpandido = [
      array[20], array[19],array[15],
      array[10], array[5], array[0]
   ]
   conteudoExpandido.forEach((item) => { item.classList.toggle("ativo") })
}