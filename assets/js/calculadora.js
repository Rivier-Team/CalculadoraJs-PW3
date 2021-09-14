function calcula() {
   let valor = calc.txt.value.split(' ')

   if (valor[1] === '%') {
      let equacao = (valor[0] * (valor[2] / 100)).toFixed(3)
      return eval(equacao)

   } if (valor[0] === '' && valor[1] === '√') { // ex: √ 9 = 3
      let equacao = (Math.sqrt(valor[2])).toFixed(3)
      return eval(equacao)

   } if (valor[0] === valor[0] && valor[1] === '√') { // ex: 2 √ 9 = 6 
      let equacao = (valor[0] * (Math.sqrt(valor[2]))).toFixed(3)
      return eval(equacao)

   } if (valor[1] === '^') {
      let equacao = (valor[0] ** valor[2]).toFixed(3)
      return eval(equacao)

   } if (valor[1] === 'log') {
      let equacao = (Math.log10(valor[2])).toFixed(3)
      return eval(equacao)

   } if (valor[1] === '(%)') {
      let equacao = (valor[0] % valor[2]).toFixed(3)
      return eval(equacao)


   } else { return eval(calc.txt.value); }
}

function del() {
   let num = calc.txt.value.split('  ').toString()
   return num.substring(0, (num.length - 1))
}
