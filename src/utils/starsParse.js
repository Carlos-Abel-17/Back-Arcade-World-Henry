const starsParse = (arr) => {
    const parse = Array(5)
    const five = arr.filter( s => s === 5).length
    const four = arr.filter( s => s === 4).length
    const three = arr.filter( s => s === 3).length
    const two = arr.filter( s => s === 2).length
    const one = arr.filter( s => s === 1).length

    parse[0] = five? Number((five/arr.length).toFixed(2)): 0
    parse[1] = four? Number((four/arr.length).toFixed(2)): 0
    parse[2] = three? Number((three/arr.length).toFixed(2)): 0
    parse[3] = two? Number((two/arr.length).toFixed(2)): 0
    parse[4] = one? Number((one/arr.length).toFixed(2)): 0

    return parse
}

//const arr = []

//console.log(starsParse(arr));

module.exports = starsParse