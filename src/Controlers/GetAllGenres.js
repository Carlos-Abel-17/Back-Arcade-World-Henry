const { genre } = require("../db");
const GetALLGenres = async () => {
    const Generos = await genre.findAll();
    return Generos.map((g) => g.name);
}

module.exports = GetALLGenres;