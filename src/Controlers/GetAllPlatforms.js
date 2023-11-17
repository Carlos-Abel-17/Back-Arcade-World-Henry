const { platform } = require("../db");

const GetALLPlatforms = async () => {
    const plataformas = await platform.findAll();
    return plataformas.map(p => p.name);
}

module.exports = GetALLPlatforms;
