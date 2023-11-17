const GetAllVideogames = require("../Controlers/VGControlers/GetAllVideogames");
const getVGbyName = require('../Controlers/VGControlers/getVGbyName')
const getGameById = require('../Controlers/VGControlers/getGameById')
const objectFilter = require('../utils/objectFilter')
const { Videogame, platform, genre, User } = require('../db')
const { validate } = require('uuid')
const formaterGame = require('../Controlers/VGControlers/formaterGame')

// Controlador para obtener todos los videojuegos con información detallada

const getGamesHandler = async (req, res) => {
    const { name } = req.query;
    try {
        if (!name){
            const AllGames = await GetAllVideogames();
            return  res.status(200).json(AllGames)
        }

        const games = await getVGbyName(name)
        res.status(200).json(games)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getGamebyIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        //validaciones:
        if(!validate(id)) return res.json({error: "ya pero esto no es uuid (ﾉ*･ω･)ﾉ"})

        ///
        const gameById = await getGameById(id)
        if (!gameById) return res.json({error: "juego no encontrado"})
        res.status(200).json(gameById)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const postGameHandler = async (req, res) => {
    const gameData = await objectFilter(req.body);
    const { name, description, price, released, genreIds, platformIds } = gameData
    try {
        if(!name || !description || !price || !released) return res.json({ error: "faltan datos para crear el videojuego"});

        const newgame = await Videogame.create(gameData)
        await newgame.addGenre(genreIds)
        await newgame.addPlatform(platformIds)

        const gameById = await getGameById(newgame.id)
        res.status(200).json(gameById)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const updateGameHandler = async (req, res) => {
  try {
    const dataToUpdate = await objectFilter(req.body);//
    const { id, genreIds, platformIds } = dataToUpdate;
    if (!id) return res.json({
        error: "id del juego no recibida",
      });

    if (!validate(id)) return res.json({ error: "id recibida no es formato uuid" });

    const game = await Videogame.findByPk(id, {include: [
        { model: platform},
        { model: genre }
    ]});

    if (!game) return res.json({ error: "juego no encontrado" });

    if(genreIds){
        const prevGenresIds = game.genres.map( g => g.id)
        await game.removeGenre(prevGenresIds)
        await game.addGenre(genreIds)
    }

    if(platformIds){
        const prevPlatIds = game.platforms.map( p => p.id)
        await game.removePlatform(prevPlatIds)
        await game.addPlatform(platformIds)
    }

    await Videogame.update(dataToUpdate, {
      where: { id },
    })

    const gameById = await getGameById(id)
    res.status(200).json(gameById)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getALLgamesHandler = async (req, res) => {
    try {
        const games = await Videogame.findAll({
            include: [
                { model: genre },
                { model: platform },
                { model: User }
            ]
        });
    
        const gamesParsed = games.map(vg => formaterGame(vg));
        res.status(200).json(gamesParsed)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getGamesHandler,
    getGamebyIdHandler,
    postGameHandler,
    updateGameHandler,
    getALLgamesHandler
};
