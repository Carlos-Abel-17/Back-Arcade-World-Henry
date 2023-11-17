const str = 'jhfledfhnbveñ/ ljdf /lj kjbk/fmh'
const newStr = str.split('').filter(c => c!=='/').join('')
console.log(newStr);