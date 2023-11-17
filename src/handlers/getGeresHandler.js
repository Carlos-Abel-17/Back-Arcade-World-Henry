const GetALLGenres = require("../Controlers/GetAllGenres")
// Controlador para manejar la solicitud de obtención de géneros de videojuegos
const getGenresHandler = async (req, res) => {
  try {
    
    const Generos = await GetALLGenres ()

    // Responde con un código de estado 200 y los géneros en formato JSON
    res.status(200).json(Generos);
  } catch (error) {
    
    // En caso de un error, responde con un código de estado 400 y un mensaje de error
    res.status(400).json({ error: error.message });
  }
};

// Exporta el controlador para su uso en otros módulos
module.exports = getGenresHandler;