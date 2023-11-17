const GetALLPlatforms = require("../Controlers/GetAllPlatforms");

// Define una función asincrónica para manejar la solicitud de obtener plataformas.
const getPlatformsHandler = async (req, res) => {
    try {
        const Plataformas = await GetALLPlatforms();

        // Responde con un código de estado 200 (Éxito) y los nombres de las plataformas en formato JSON.
        res.status(200).json(Plataformas);
    } catch (error) {
        // En caso de error, responde con un código de estado 400 (Solicitud incorrecta) y un objeto JSON que contiene el mensaje de error.
        res.status(400).json({ error: error.message });
    }
}

// Exporta la función 'getPlatformsHandler' para que pueda ser utilizada en otros módulos.
module.exports = getPlatformsHandler;
