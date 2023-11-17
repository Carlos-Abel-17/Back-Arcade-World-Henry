const { hash } = require('./hash')

const objectFilter = async (objeto) => {
    const objetoFiltrado = Object.fromEntries(
        Object.entries(objeto)
          .filter(([clave, valor]) => valor !== null && valor !== undefined && valor !== "")
      );
    
    let { password } = objetoFiltrado
    try {
        if(password) {
            password = await hash(password)
            return {...objetoFiltrado, password};
        }
        return objetoFiltrado
    } catch (error) {
        console.log(error);
    }
}

module.exports = objectFilter