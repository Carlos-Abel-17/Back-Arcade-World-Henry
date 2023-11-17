const genres = [
  "Action",
  "Indie",
  "Adventure",
  "RPG",
  "Strategy",
  "Shooter",
  "Casual",
  "Simulation",
  "Puzzle",
  "Arcade",
  "Platformer",
  "Massively Multiplayer",
  "Racing",
  "Sports",
  "Fighting",
  "Family",
  "Board Games",
  "Educational",
  "Card",
];

const platform_s = [
  "PlayStation",
  "Commodore / Amiga",
  "PC",
  "Android",
  "PlayStation 3",
  "Xbox 360",
  "iOS",
  "Nintendo Switch",
  "Wii",
  "macOS",
  "PlayStation 4",
  "Xbox One",
  "Linux",
  "Nintendo 3DS",
  "PS Vita",
  "PlayStation 5",
  "Xbox Series S/X",
  "Wii U",
  "Web",
  "Xbox",
  "Nintendo DS",
  "PlayStation 2",
  "GameCube",
  "Classic Macintosh",
  "Nintendo 64",
  "SEGA Saturn",
  "Game Boy Advance",
  "PSP",
  "Dreamcast",
  "Game Boy Color",
];

const games = [
  {
    id: 3498,
    name: "Grand Theft Auto V",
    description:
      "The video game Grand Theft Auto V is an exciting title that belongs to the Action and Adventure genres. It is available for play on PC, PlayStation and Xbox. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Adventure genres. Whether you prefer playing on PC, PlayStation and Xbox, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "PlayStation 5",
      "Xbox Series S/X",
      "PC",
      "PlayStation 4",
      "PlayStation 3",
      "Xbox 360",
      "Xbox One",
    ],
    image:
      "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
    released: "2013-09-17",
    rating: 4.47,
    origin: "API",
    genres: ["Action", "Adventure"],
  },
  {
    id: 3328,
    name: "The Witcher 3: Wild Hunt",
    description:
      "The video game The Witcher 3: Wild Hunt is an exciting title that belongs to the Action, Adventure and RPG genres. It is available for play on PC, PlayStation, Xbox and Nintendo. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action, Adventure and RPG genres. Whether you prefer playing on PC, PlayStation, Xbox and Nintendo, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "Xbox Series S/X",
      "PlayStation 4",
      "Nintendo Switch",
      "PC",
      "Xbox One",
      "PlayStation 5",
    ],
    image:
      "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
    released: "2015-05-18",
    rating: 4.66,
    origin: "API",
    genres: ["Action", "Adventure", "RPG"],
  },
  {
    id: 4200,
    name: "Portal 2",
    description:
      "The video game Portal 2 is an exciting title that belongs to the Shooter and Puzzle genres. It is available for play on PC, PlayStation, Xbox, Apple Macintosh and Linux. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Shooter and Puzzle genres. Whether you prefer playing on PC, PlayStation, Xbox, Apple Macintosh and Linux, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "PlayStation 3",
      "PC",
      "Xbox 360",
      "Linux",
      "macOS",
      "Xbox One",
    ],
    image:
      "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
    released: "2011-04-18",
    rating: 4.61,
    origin: "API",
    genres: ["Shooter", "Puzzle"],
  },
  {
    id: 4291,
    name: "Counter-Strike: Global Offensive",
    description:
      "The video game Counter-Strike: Global Offensive is an exciting title that belongs to the Action and Shooter genres. It is available for play on PC, PlayStation and Xbox. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Shooter genres. Whether you prefer playing on PC, PlayStation and Xbox, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PC", "Xbox 360", "PlayStation 3"],
    image:
      "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
    released: "2012-08-21",
    rating: 3.56,
    origin: "API",
    genres: ["Action", "Shooter"],
  },
  {
    id: 5286,
    name: "Tomb Raider (2013)",
    description:
      "The video game Tomb Raider (2013) is an exciting title that belongs to the Action and Adventure genres. It is available for play on PC, PlayStation, Xbox and Apple Macintosh. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Adventure genres. Whether you prefer playing on PC, PlayStation, Xbox and Apple Macintosh, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "PlayStation 4",
      "macOS",
      "PC",
      "Xbox One",
      "Xbox 360",
      "PlayStation 3",
    ],
    image:
      "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
    released: "2013-03-05",
    rating: 4.05,
    origin: "API",
    genres: ["Action", "Adventure"],
  },
  {
    id: 13536,
    name: "Portal",
    description:
      "The video game Portal is an exciting title that belongs to the Adventure and Puzzle genres. It is available for play on PC, PlayStation, Xbox, Android, Apple Macintosh, Linux and Nintendo. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Adventure and Puzzle genres. Whether you prefer playing on PC, PlayStation, Xbox, Android, Apple Macintosh, Linux and Nintendo, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "Android",
      "PlayStation 3",
      "Xbox 360",
      "Linux",
      "macOS",
      "PC",
      "Nintendo Switch",
    ],
    image:
      "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    released: "2007-10-09",
    rating: 4.51,
    origin: "API",
    genres: ["Adventure", "Puzzle"],
  },
  {
    id: 12020,
    name: "Left 4 Dead 2",
    description:
      "The video game Left 4 Dead 2 is an exciting title that belongs to the Action and Shooter genres. It is available for play on PC, Xbox, Apple Macintosh and Linux. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Shooter genres. Whether you prefer playing on PC, Xbox, Apple Macintosh and Linux, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["macOS", "Linux", "PC", "Xbox 360"],
    image:
      "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
    released: "2009-11-17",
    rating: 4.09,
    origin: "API",
    genres: ["Action", "Shooter"],
  },
  {
    id: 5679,
    name: "The Elder Scrolls V: Skyrim",
    description:
      "The video game The Elder Scrolls V: Skyrim is an exciting title that belongs to the Action and RPG genres. It is available for play on PC, PlayStation, Xbox and Nintendo. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and RPG genres. Whether you prefer playing on PC, PlayStation, Xbox and Nintendo, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PC", "Nintendo Switch", "Xbox 360", "PlayStation 3"],
    image:
      "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
    released: "2011-11-11",
    rating: 4.42,
    origin: "API",
    genres: ["Action", "RPG"],
  },
  {
    id: 28,
    name: "Red Dead Redemption 2",
    description:
      "The video game Red Dead Redemption 2 is an exciting title that belongs to the Action and Adventure genres. It is available for play on PC, PlayStation and Xbox. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Adventure genres. Whether you prefer playing on PC, PlayStation and Xbox, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PC", "PlayStation 4", "Xbox One"],
    image:
      "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
    released: "2018-10-26",
    rating: 4.59,
    origin: "API",
    genres: ["Action", "Adventure"],
  },
  {
    id: 4062,
    name: "BioShock Infinite",
    description:
      "The video game BioShock Infinite is an exciting title that belongs to the Action and Shooter genres. It is available for play on PC, PlayStation, Xbox, Linux and Nintendo. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Shooter genres. Whether you prefer playing on PC, PlayStation, Xbox, Linux and Nintendo, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "PlayStation 4",
      "Xbox 360",
      "Nintendo Switch",
      "Linux",
      "PC",
      "PlayStation 3",
      "Xbox One",
    ],
    image:
      "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
    released: "2013-03-26",
    rating: 4.38,
    origin: "API",
    genres: ["Action", "Shooter"],
  },
  {
    id: 802,
    name: "Borderlands 2",
    description:
      "The video game Borderlands 2 is an exciting title that belongs to the Action, Shooter and RPG genres. It is available for play on PC, PlayStation, Xbox, Android, Apple Macintosh and Linux. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action, Shooter and RPG genres. Whether you prefer playing on PC, PlayStation, Xbox, Android, Apple Macintosh and Linux, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "PlayStation 3",
      "macOS",
      "PC",
      "Android",
      "Linux",
      "PS Vita",
      "Xbox 360",
    ],
    image:
      "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
    released: "2012-09-18",
    rating: 4.01,
    origin: "API",
    genres: ["Action", "Shooter", "RPG"],
  },
  {
    id: 3439,
    name: "Life is Strange",
    description:
      "The video game Life is Strange is an exciting title that belongs to the Adventure genres. It is available for play on PC, PlayStation, Xbox, iOS, Android, Apple Macintosh and Linux. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Adventure genres. Whether you prefer playing on PC, PlayStation, Xbox, iOS, Android, Apple Macintosh and Linux, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "PC",
      "Linux",
      "PlayStation 3",
      "macOS",
      "iOS",
      "Xbox 360",
      "Android",
      "PlayStation 4",
      "Xbox One",
    ],
    image:
      "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
    released: "2015-01-29",
    rating: 4.11,
    origin: "API",
    genres: ["Adventure"],
  },
  {
    id: 13537,
    name: "Half-Life 2",
    description:
      "The video game Half-Life 2 is an exciting title that belongs to the Action and Shooter genres. It is available for play on PC, Xbox, Android, Apple Macintosh and Linux. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Shooter genres. Whether you prefer playing on PC, Xbox, Android, Apple Macintosh and Linux, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PC", "macOS", "Xbox 360", "Linux", "Xbox", "Android"],
    image:
      "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
    released: "2004-11-16",
    rating: 4.49,
    origin: "API",
    genres: ["Action", "Shooter"],
  },
  {
    id: 4286,
    name: "BioShock",
    description:
      "The video game BioShock is an exciting title that belongs to the Action and Shooter genres. It is available for play on PC, PlayStation, Xbox and Apple Macintosh. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Shooter genres. Whether you prefer playing on PC, PlayStation, Xbox and Apple Macintosh, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PlayStation 3", "macOS", "PC", "Xbox 360"],
    image:
      "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
    released: "2007-08-21",
    rating: 4.36,
    origin: "API",
    genres: ["Action", "Shooter"],
  },
  {
    id: 32,
    name: "Destiny 2",
    description:
      "The video game Destiny 2 is an exciting title that belongs to the Action, Shooter, Adventure and Massively Multiplayer genres. It is available for play on PC, PlayStation, Xbox and Web. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action, Shooter, Adventure and Massively Multiplayer genres. Whether you prefer playing on PC, PlayStation, Xbox and Web, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "Xbox One",
      "PC",
      "PlayStation 4",
      "Web",
      "Xbox Series S/X",
      "PlayStation 5",
    ],
    image:
      "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
    released: "2017-09-06",
    rating: 3.54,
    origin: "API",
    genres: ["Action", "Shooter", "Adventure", "Massively Multiplayer"],
  },
  {
    id: 1030,
    name: "Limbo",
    description:
      "The video game Limbo is an exciting title that belongs to the Adventure, Indie, Puzzle and Platformer genres. It is available for play on PC, PlayStation, Xbox, iOS, Android, Apple Macintosh, Linux and Nintendo. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Adventure, Indie, Puzzle and Platformer genres. Whether you prefer playing on PC, PlayStation, Xbox, iOS, Android, Apple Macintosh, Linux and Nintendo, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "Linux",
      "PS Vita",
      "Android",
      "Xbox One",
      "Nintendo Switch",
      "iOS",
      "PC",
      "macOS",
      "Xbox 360",
      "PlayStation 3",
      "PlayStation 4",
    ],
    image:
      "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
    released: "2010-07-21",
    rating: 4.15,
    origin: "API",
    genres: ["Adventure", "Indie", "Puzzle", "Platformer"],
  },
  {
    id: 58175,
    name: "God of War (2018)",
    description:
      "The video game God of War (2018) is an exciting title that belongs to the Action, Adventure and RPG genres. It is available for play on PC and PlayStation. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action, Adventure and RPG genres. Whether you prefer playing on PC and PlayStation, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PC", "PlayStation 4"],
    image:
      "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
    released: "2018-04-20",
    rating: 4.57,
    origin: "API",
    genres: ["Action", "Adventure", "RPG"],
  },
  {
    id: 3070,
    name: "Fallout 4",
    description:
      "The video game Fallout 4 is an exciting title that belongs to the Action and RPG genres. It is available for play on PC, PlayStation and Xbox. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and RPG genres. Whether you prefer playing on PC, PlayStation and Xbox, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Xbox One", "PC", "PlayStation 4"],
    image:
      "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
    released: "2015-11-09",
    rating: 3.8,
    origin: "API",
    genres: ["Action", "RPG"],
  },
  {
    id: 2454,
    name: "DOOM (2016)",
    description:
      "The video game DOOM (2016) is an exciting title that belongs to the Action and Shooter genres. It is available for play on PC, PlayStation, Xbox and Nintendo. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Shooter genres. Whether you prefer playing on PC, PlayStation, Xbox and Nintendo, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Xbox One", "PC", "Nintendo Switch", "PlayStation 4"],
    image:
      "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg",
    released: "2016-05-13",
    rating: 4.38,
    origin: "API",
    genres: ["Action", "Shooter"],
  },
  {
    id: 3939,
    name: "PAYDAY 2",
    description:
      "The video game PAYDAY 2 is an exciting title that belongs to the Action and Shooter genres. It is available for play on PC, Xbox and Linux. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Shooter genres. Whether you prefer playing on PC, Xbox and Linux, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Linux", "PC", "Xbox One"],
    image:
      "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
    released: "2013-08-13",
    rating: 3.51,
    origin: "API",
    genres: ["Action", "Shooter"],
  },
  {
    id: 11859,
    name: "Team Fortress 2",
    description:
      "The video game Team Fortress 2 is an exciting title that belongs to the Action and Shooter genres. It is available for play on PC, Apple Macintosh and Linux. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Shooter genres. Whether you prefer playing on PC, Apple Macintosh and Linux, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PC", "macOS", "Linux"],
    image:
      "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
    released: "2007-10-10",
    rating: 3.67,
    origin: "API",
    genres: ["Action", "Shooter"],
  },
  {
    id: 278,
    name: "Horizon Zero Dawn",
    description:
      "The video game Horizon Zero Dawn is an exciting title that belongs to the Action, Adventure and RPG genres. It is available for play on PC and PlayStation. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action, Adventure and RPG genres. Whether you prefer playing on PC and PlayStation, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PlayStation 4", "PC"],
    image:
      "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
    released: "2017-02-28",
    rating: 4.29,
    origin: "API",
    genres: ["Action", "Adventure", "RPG"],
  },
  {
    id: 41494,
    name: "Cyberpunk 2077",
    description:
      "The video game Cyberpunk 2077 is an exciting title that belongs to the Action, Adventure and RPG genres. It is available for play on PC, PlayStation and Xbox. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action, Adventure and RPG genres. Whether you prefer playing on PC, PlayStation and Xbox, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "PlayStation 4",
      "PC",
      "Xbox Series S/X",
      "PlayStation 5",
      "Xbox One",
    ],
    image:
      "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
    released: "2020-12-10",
    rating: 4.14,
    origin: "API",
    genres: ["Action", "Adventure", "RPG"],
  },
  {
    id: 4459,
    name: "Grand Theft Auto IV",
    description:
      "The video game Grand Theft Auto IV is an exciting title that belongs to the Action and Adventure genres. It is available for play on PC, PlayStation and Xbox. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Adventure genres. Whether you prefer playing on PC, PlayStation and Xbox, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Xbox 360", "PlayStation 3", "Xbox One", "PC"],
    image:
      "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
    released: "2008-04-29",
    rating: 4.26,
    origin: "API",
    genres: ["Action", "Adventure"],
  },
  {
    id: 422,
    name: "Terraria",
    description:
      "The video game Terraria is an exciting title that belongs to the Action, Indie and Platformer genres. It is available for play on PC, PlayStation, Xbox, iOS, Android, Apple Macintosh, Linux and Nintendo. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action, Indie and Platformer genres. Whether you prefer playing on PC, PlayStation, Xbox, iOS, Android, Apple Macintosh, Linux and Nintendo, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "Xbox 360",
      "Wii U",
      "Nintendo 3DS",
      "Xbox One",
      "PlayStation 4",
      "iOS",
      "PC",
      "macOS",
      "Linux",
      "Nintendo Switch",
      "PlayStation 3",
      "PS Vita",
      "Android",
    ],
    image:
      "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
    released: "2011-05-16",
    rating: 4.06,
    origin: "API",
    genres: ["Action", "Indie", "Platformer"],
  },
  {
    id: 3272,
    name: "Rocket League",
    description:
      "The video game Rocket League is an exciting title that belongs to the Sports, Racing and Indie genres. It is available for play on PC, PlayStation, Xbox, Apple Macintosh, Linux and Nintendo. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Sports, Racing and Indie genres. Whether you prefer playing on PC, PlayStation, Xbox, Apple Macintosh, Linux and Nintendo, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "Nintendo Switch",
      "Linux",
      "macOS",
      "Xbox One",
      "PC",
      "PlayStation 4",
    ],
    image:
      "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
    released: "2015-07-07",
    rating: 3.94,
    origin: "API",
    genres: ["Sports", "Racing", "Indie"],
  },
  {
    id: 10213,
    name: "Dota 2",
    description:
      "The video game Dota 2 is an exciting title that belongs to the Action and Massively Multiplayer genres. It is available for play on PC, Apple Macintosh and Linux. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Massively Multiplayer genres. Whether you prefer playing on PC, Apple Macintosh and Linux, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Linux", "macOS", "PC"],
    image:
      "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg",
    released: "2013-07-09",
    rating: 3.06,
    origin: "API",
    genres: ["Action", "Massively Multiplayer"],
  },
  {
    id: 766,
    name: "Warframe",
    description:
      "The video game Warframe is an exciting title that belongs to the Action, Shooter and Massively Multiplayer genres. It is available for play on PC, PlayStation, Xbox and Nintendo. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action, Shooter and Massively Multiplayer genres. Whether you prefer playing on PC, PlayStation, Xbox and Nintendo, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "Xbox Series S/X",
      "PlayStation 5",
      "PlayStation 4",
      "Xbox One",
      "Nintendo Switch",
      "PC",
    ],
    image:
      "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
    released: "2013-03-25",
    rating: 3.42,
    origin: "API",
    genres: ["Action", "Shooter", "Massively Multiplayer"],
  },
  {
    id: 29028,
    name: "Metro 2033",
    description:
      "The video game Metro 2033 is an exciting title that belongs to the Action and Shooter genres. It is available for play on PC and Xbox. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Shooter genres. Whether you prefer playing on PC and Xbox, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Xbox 360", "PC"],
    image:
      "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
    released: "2010-03-16",
    rating: 3.94,
    origin: "API",
    genres: ["Action", "Shooter"],
  },
  {
    id: 3192,
    name: "Metal Gear Solid V: The Phantom Pain",
    description:
      "The video game Metal Gear Solid V: The Phantom Pain is an exciting title that belongs to the Action and Shooter genres. It is available for play on PC, PlayStation and Xbox. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Shooter genres. Whether you prefer playing on PC, PlayStation and Xbox, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Xbox One", "PlayStation 3", "PlayStation 4", "Xbox 360", "PC"],
    image:
      "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
    released: "2015-09-01",
    rating: 4.16,
    origin: "API",
    genres: ["Action", "Shooter"],
  },
  {
    id: 7689,
    name: "Rise of the Tomb Raider",
    description:
      "The video game Rise of the Tomb Raider is an exciting title that belongs to the Action genres. It is available for play on PC, PlayStation, Xbox and Apple Macintosh. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action genres. Whether you prefer playing on PC, PlayStation, Xbox and Apple Macintosh, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Xbox One", "PC", "macOS", "PlayStation 4"],
    image:
      "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
    released: "2015-11-10",
    rating: 4.03,
    origin: "API",
    genres: ["Action"],
  },
  {
    id: 3287,
    name: "Batman: Arkham Knight",
    description:
      "The video game Batman: Arkham Knight is an exciting title that belongs to the Action genres. It is available for play on PC, PlayStation and Xbox. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action genres. Whether you prefer playing on PC, PlayStation and Xbox, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PC", "Xbox One", "PlayStation 4"],
    image:
      "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg",
    released: "2015-06-23",
    rating: 4.23,
    origin: "API",
    genres: ["Action"],
  },
  {
    id: 16944,
    name: "The Witcher 2: Assassins of Kings Enhanced Edition",
    description:
      "The video game The Witcher 2: Assassins of Kings Enhanced Edition is an exciting title that belongs to the RPG genres. It is available for play on PC, Xbox and Apple Macintosh. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of RPG genres. Whether you prefer playing on PC, Xbox and Apple Macintosh, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["macOS", "PC", "Xbox 360"],
    image:
      "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg",
    released: "2012-04-16",
    rating: 4.16,
    origin: "API",
    genres: ["RPG"],
  },
  {
    id: 23027,
    name: "The Walking Dead: Season 1",
    description:
      "The video game The Walking Dead: Season 1 is an exciting title that belongs to the Action and Adventure genres. It is available for play on PC, PlayStation, Xbox, iOS, Android, Apple Macintosh and Nintendo. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Adventure genres. Whether you prefer playing on PC, PlayStation, Xbox, iOS, Android, Apple Macintosh and Nintendo, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "Android",
      "PS Vita",
      "macOS",
      "PC",
      "iOS",
      "PlayStation 4",
      "PlayStation 3",
      "Xbox 360",
      "Nintendo Switch",
      "Xbox One",
    ],
    image:
      "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
    released: "2012-04-23",
    rating: 4.34,
    origin: "API",
    genres: ["Action", "Adventure"],
  },
  {
    id: 19103,
    name: "Half-Life 2: Lost Coast",
    description:
      "The video game Half-Life 2: Lost Coast is an exciting title that belongs to the Action genres. It is available for play on PC, Apple Macintosh and Linux. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action genres. Whether you prefer playing on PC, Apple Macintosh and Linux, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["macOS", "Linux", "PC"],
    image:
      "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg",
    released: "2005-10-27",
    rating: 3.45,
    origin: "API",
    genres: ["Action"],
  },
  {
    id: 416,
    name: "Grand Theft Auto: San Andreas",
    description:
      "The video game Grand Theft Auto: San Andreas is an exciting title that belongs to the Action and Adventure genres. It is available for play on PC, PlayStation, Xbox, iOS, Android and Apple Macintosh. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Adventure genres. Whether you prefer playing on PC, PlayStation, Xbox, iOS, Android and Apple Macintosh, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "Xbox One",
      "Android",
      "Xbox",
      "iOS",
      "PC",
      "macOS",
      "Xbox 360",
      "PlayStation 2",
      "PlayStation 3",
      "PlayStation 4",
    ],
    image:
      "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
    released: "2004-10-26",
    rating: 4.51,
    origin: "API",
    genres: ["Action", "Adventure"],
  },
  {
    id: 11973,
    name: "Middle-earth: Shadow of Mordor",
    description:
      "The video game Middle-earth: Shadow of Mordor is an exciting title that belongs to the Action and RPG genres. It is available for play on PC, PlayStation, Xbox, Apple Macintosh and Linux. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and RPG genres. Whether you prefer playing on PC, PlayStation, Xbox, Apple Macintosh and Linux, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "Linux",
      "Xbox One",
      "Xbox 360",
      "PlayStation 3",
      "PlayStation 4",
      "macOS",
      "PC",
    ],
    image:
      "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg",
    released: "2014-09-30",
    rating: 3.89,
    origin: "API",
    genres: ["Action", "RPG"],
  },
  {
    id: 17822,
    name: "The Witcher: Enhanced Edition Director's Cut",
    description:
      "The video game The Witcher: Enhanced Edition Director's Cut is an exciting title that belongs to the Action and RPG genres. It is available for play on PC and Apple Macintosh. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and RPG genres. Whether you prefer playing on PC and Apple Macintosh, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PC", "macOS"],
    image:
      "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg",
    released: "2008-09-16",
    rating: 4.06,
    origin: "API",
    genres: ["Action", "RPG"],
  },
  {
    id: 290856,
    name: "Apex Legends",
    description:
      "The video game Apex Legends is an exciting title that belongs to the Action, Shooter, Adventure and Massively Multiplayer genres. It is available for play on PC, PlayStation, Xbox, Apple Macintosh and Nintendo. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action, Shooter, Adventure and Massively Multiplayer genres. Whether you prefer playing on PC, PlayStation, Xbox, Apple Macintosh and Nintendo, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PlayStation 4", "Nintendo Switch", "macOS", "PC", "Xbox One"],
    image:
      "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg",
    released: "2019-02-04",
    rating: 3.65,
    origin: "API",
    genres: ["Action", "Shooter", "Adventure", "Massively Multiplayer"],
  },
  {
    id: 19710,
    name: "Half-Life 2: Episode One",
    description:
      "The video game Half-Life 2: Episode One is an exciting title that belongs to the Action and Shooter genres. It is available for play on PC, Xbox, Android, Apple Macintosh and Linux. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Shooter genres. Whether you prefer playing on PC, Xbox, Android, Apple Macintosh and Linux, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Linux", "PC", "Xbox 360", "Android", "macOS"],
    image:
      "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg",
    released: "2006-06-01",
    rating: 4.38,
    origin: "API",
    genres: ["Action", "Shooter"],
  },
  {
    id: 4427,
    name: "BioShock 2",
    description:
      "The video game BioShock 2 is an exciting title that belongs to the Action and Shooter genres. It is available for play on PC, PlayStation, Xbox, Apple Macintosh and Nintendo. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Shooter genres. Whether you prefer playing on PC, PlayStation, Xbox, Apple Macintosh and Nintendo, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "PlayStation 4",
      "Xbox One",
      "Nintendo Switch",
      "PC",
      "macOS",
      "Xbox 360",
      "PlayStation 3",
    ],
    image:
      "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
    released: "2010-02-09",
    rating: 4.07,
    origin: "API",
    genres: ["Action", "Shooter"],
  },
  {
    id: 19709,
    name: "Half-Life 2: Episode Two",
    description:
      "The video game Half-Life 2: Episode Two is an exciting title that belongs to the Action, Shooter and Puzzle genres. It is available for play on PC, Xbox, Android, Apple Macintosh and Linux. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action, Shooter and Puzzle genres. Whether you prefer playing on PC, Xbox, Android, Apple Macintosh and Linux, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Android", "Linux", "macOS", "PC", "Xbox 360"],
    image:
      "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
    released: "2007-10-10",
    rating: 4.45,
    origin: "API",
    genres: ["Action", "Shooter", "Puzzle"],
  },
  {
    id: 9767,
    name: "Hollow Knight",
    description:
      "The video game Hollow Knight is an exciting title that belongs to the Action, Indie and Platformer genres. It is available for play on PC, PlayStation, Xbox, Apple Macintosh, Linux and Nintendo. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action, Indie and Platformer genres. Whether you prefer playing on PC, PlayStation, Xbox, Apple Macintosh, Linux and Nintendo, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "PlayStation 4",
      "Linux",
      "macOS",
      "PC",
      "Nintendo Switch",
      "Xbox One",
    ],
    image:
      "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
    released: "2017-02-23",
    rating: 4.41,
    origin: "API",
    genres: ["Action", "Indie", "Platformer"],
  },
  {
    id: 41,
    name: "Little Nightmares",
    description:
      "The video game Little Nightmares is an exciting title that belongs to the Action and Platformer genres. It is available for play on PC, PlayStation, Xbox and Nintendo. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Platformer genres. Whether you prefer playing on PC, PlayStation, Xbox and Nintendo, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PlayStation 4", "PC", "Xbox One", "Nintendo Switch"],
    image:
      "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg",
    released: "2017-04-27",
    rating: 4.04,
    origin: "API",
    genres: ["Action", "Platformer"],
  },
  {
    id: 10035,
    name: "Hitman",
    description:
      "The video game Hitman is an exciting title that belongs to the Action, Shooter and Simulation genres. It is available for play on PC, PlayStation, Xbox, Apple Macintosh and Linux. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action, Shooter and Simulation genres. Whether you prefer playing on PC, PlayStation, Xbox, Apple Macintosh and Linux, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PlayStation 4", "Linux", "macOS", "PC", "Xbox One"],
    image:
      "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg",
    released: "2016-03-11",
    rating: 3.92,
    origin: "API",
    genres: ["Action", "Shooter", "Simulation"],
  },
  {
    id: 2551,
    name: "Dark Souls III",
    description:
      "The video game Dark Souls III is an exciting title that belongs to the Action and RPG genres. It is available for play on PC, PlayStation and Xbox. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and RPG genres. Whether you prefer playing on PC, PlayStation and Xbox, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Xbox One", "PlayStation 4", "PC"],
    image:
      "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
    released: "2016-04-11",
    rating: 4.4,
    origin: "API",
    genres: ["Action", "RPG"],
  },
  {
    id: 4252,
    name: "Mirror's Edge",
    description:
      "The video game Mirror's Edge is an exciting title that belongs to the Action genres. It is available for play on PC, PlayStation and Xbox. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action genres. Whether you prefer playing on PC, PlayStation and Xbox, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Xbox 360", "PlayStation 3", "PC"],
    image:
      "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg",
    released: "2008-11-11",
    rating: 4.07,
    origin: "API",
    genres: ["Action"],
  },
  {
    id: 3612,
    name: "Hotline Miami",
    description:
      "The video game Hotline Miami is an exciting title that belongs to the Action, Shooter, Arcade and Indie genres. It is available for play on PC, PlayStation, Xbox, Linux and Nintendo. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action, Shooter, Arcade and Indie genres. Whether you prefer playing on PC, PlayStation, Xbox, Linux and Nintendo, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "Linux",
      "Nintendo Switch",
      "Xbox One",
      "PlayStation 4",
      "PS Vita",
      "PC",
    ],
    image:
      "https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg",
    released: "2012-10-22",
    rating: 4.38,
    origin: "API",
    genres: ["Action", "Shooter", "Arcade", "Indie"],
  },
  {
    id: 3790,
    name: "Outlast",
    description:
      "The video game Outlast is an exciting title that belongs to the Action, Adventure and Indie genres. It is available for play on PC, PlayStation, Xbox, Apple Macintosh, Linux and Nintendo. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action, Adventure and Indie genres. Whether you prefer playing on PC, PlayStation, Xbox, Apple Macintosh, Linux and Nintendo, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "Xbox One",
      "PlayStation 4",
      "Nintendo Switch",
      "macOS",
      "PC",
      "Linux",
    ],
    image:
      "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg",
    released: "2013-09-03",
    rating: 3.73,
    origin: "API",
    genres: ["Action", "Adventure", "Indie"],
  },
  {
    id: 1447,
    name: "Deus Ex: Mankind Divided",
    description:
      "The video game Deus Ex: Mankind Divided is an exciting title that belongs to the Action and RPG genres. It is available for play on PC, PlayStation, Xbox, Apple Macintosh and Linux. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and RPG genres. Whether you prefer playing on PC, PlayStation, Xbox, Apple Macintosh and Linux, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Xbox One", "Linux", "macOS", "PlayStation 4", "PC"],
    image:
      "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg",
    released: "2016-08-22",
    rating: 3.97,
    origin: "API",
    genres: ["Action", "RPG"],
  },
  {
    id: 10754,
    name: "BioShock Remastered",
    description:
      "The video game BioShock Remastered is an exciting title that belongs to the Shooter genres. It is available for play on PC, PlayStation, Xbox, Apple Macintosh and Nintendo. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Shooter genres. Whether you prefer playing on PC, PlayStation, Xbox, Apple Macintosh and Nintendo, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PlayStation 4", "Nintendo Switch", "macOS", "PC", "Xbox One"],
    image:
      "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg",
    released: "2016-09-15",
    rating: 4.24,
    origin: "API",
    genres: ["Shooter"],
  },
  {
    id: 4161,
    name: "Far Cry 3",
    description:
      "The video game Far Cry 3 is an exciting title that belongs to the Action and Shooter genres. It is available for play on PC, PlayStation and Xbox. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Shooter genres. Whether you prefer playing on PC, PlayStation and Xbox, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Xbox One", "Xbox 360", "PlayStation 3", "PC", "PlayStation 4"],
    image:
      "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
    released: "2012-11-28",
    rating: 4.24,
    origin: "API",
    genres: ["Action", "Shooter"],
  },
  {
    id: 58134,
    name: "Marvel's Spider-Man",
    description:
      "The video game Marvel's Spider-Man is an exciting title that belongs to the Action and Adventure genres. It is available for play on PC and PlayStation. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Adventure genres. Whether you prefer playing on PC and PlayStation, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PC", "PlayStation 5", "PlayStation 4"],
    image:
      "https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg",
    released: "2018-09-07",
    rating: 4.46,
    origin: "API",
    genres: ["Action", "Adventure"],
  },
  {
    id: 4332,
    name: "Spec Ops: The Line",
    description:
      "The video game Spec Ops: The Line is an exciting title that belongs to the Action and Shooter genres. It is available for play on PC, PlayStation and Xbox. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Shooter genres. Whether you prefer playing on PC, PlayStation and Xbox, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Xbox 360", "PlayStation 3", "Xbox One", "PC"],
    image:
      "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg",
    released: "2012-06-26",
    rating: 4.09,
    origin: "API",
    genres: ["Action", "Shooter"],
  },
  {
    id: 11936,
    name: "Half-Life 2: Deathmatch",
    description:
      "The video game Half-Life 2: Deathmatch is an exciting title that belongs to the Action genres. It is available for play on PC, Apple Macintosh and Linux. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action genres. Whether you prefer playing on PC, Apple Macintosh and Linux, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Linux", "macOS", "PC"],
    image:
      "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
    released: "2004-11-01",
    rating: 3.28,
    origin: "API",
    genres: ["Action"],
  },
  {
    id: 13668,
    name: "Amnesia: The Dark Descent",
    description:
      "The video game Amnesia: The Dark Descent is an exciting title that belongs to the Action, Adventure and Indie genres. It is available for play on PC, Apple Macintosh and Linux. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action, Adventure and Indie genres. Whether you prefer playing on PC, Apple Macintosh and Linux, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Linux", "macOS", "PC"],
    image:
      "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
    released: "2010-09-08",
    rating: 3.64,
    origin: "API",
    genres: ["Action", "Adventure", "Indie"],
  },
  {
    id: 18080,
    name: "Half-Life",
    description:
      "The video game Half-Life is an exciting title that belongs to the Action and Shooter genres. It is available for play on PC, PlayStation, Apple Macintosh, Linux and SEGA. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Shooter genres. Whether you prefer playing on PC, PlayStation, Apple Macintosh, Linux and SEGA, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Dreamcast", "Linux", "macOS", "PC", "PlayStation 2"],
    image:
      "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
    released: "1998-11-08",
    rating: 4.39,
    origin: "API",
    genres: ["Action", "Shooter"],
  },
  {
    id: 19487,
    name: "Alan Wake",
    description:
      "The video game Alan Wake is an exciting title that belongs to the Action, Shooter and Adventure genres. It is available for play on PC and Xbox. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action, Shooter and Adventure genres. Whether you prefer playing on PC and Xbox, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Xbox 360", "Xbox One", "PC"],
    image:
      "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
    released: "2010-05-14",
    rating: 4.11,
    origin: "API",
    genres: ["Action", "Shooter", "Adventure"],
  },
  {
    id: 4386,
    name: "Saints Row: The Third",
    description:
      "The video game Saints Row: The Third is an exciting title that belongs to the Action and Adventure genres. It is available for play on PC, PlayStation, Xbox and Linux. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Adventure genres. Whether you prefer playing on PC, PlayStation, Xbox and Linux, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Linux", "PC", "Xbox One", "Xbox 360", "PlayStation 3"],
    image:
      "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
    released: "2011-11-15",
    rating: 3.95,
    origin: "API",
    genres: ["Action", "Adventure"],
  },
  {
    id: 3696,
    name: "Wolfenstein: The New Order",
    description:
      "The video game Wolfenstein: The New Order is an exciting title that belongs to the Action and Shooter genres. It is available for play on PC, PlayStation and Xbox. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Shooter genres. Whether you prefer playing on PC, PlayStation and Xbox, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Xbox One", "PC", "Xbox 360", "PlayStation 3", "PlayStation 4"],
    image:
      "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg",
    released: "2014-05-19",
    rating: 4.18,
    origin: "API",
    genres: ["Action", "Shooter"],
  },
  {
    id: 10533,
    name: "Path of Exile",
    description:
      "The video game Path of Exile is an exciting title that belongs to the Action, RPG, Massively Multiplayer and Indie genres. It is available for play on PC, PlayStation and Xbox. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action, RPG, Massively Multiplayer and Indie genres. Whether you prefer playing on PC, PlayStation and Xbox, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Xbox One", "PlayStation 4", "PC"],
    image:
      "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg",
    released: "2013-10-23",
    rating: 3.64,
    origin: "API",
    genres: ["Action", "RPG", "Massively Multiplayer", "Indie"],
  },
  {
    id: 654,
    name: "Stardew Valley",
    description:
      "The video game Stardew Valley is an exciting title that belongs to the RPG, Simulation and Indie genres. It is available for play on PC, PlayStation, Xbox, iOS, Android, Apple Macintosh, Linux and Nintendo. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of RPG, Simulation and Indie genres. Whether you prefer playing on PC, PlayStation, Xbox, iOS, Android, Apple Macintosh, Linux and Nintendo, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "Nintendo Switch",
      "Xbox One",
      "PC",
      "iOS",
      "macOS",
      "Linux",
      "PlayStation 4",
      "PS Vita",
      "Android",
    ],
    image:
      "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg",
    released: "2016-02-25",
    rating: 4.4,
    origin: "API",
    genres: ["RPG", "Simulation", "Indie"],
  },
  {
    id: 4828,
    name: "Borderlands",
    description:
      "The video game Borderlands is an exciting title that belongs to the Action, Shooter and RPG genres. It is available for play on PC, PlayStation, Xbox and Nintendo. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action, Shooter and RPG genres. Whether you prefer playing on PC, PlayStation, Xbox and Nintendo, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "Xbox 360",
      "PlayStation 3",
      "Xbox One",
      "Nintendo Switch",
      "PC",
    ],
    image:
      "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
    released: "2009-10-20",
    rating: 3.82,
    origin: "API",
    genres: ["Action", "Shooter", "RPG"],
  },
  {
    id: 29177,
    name: "Detroit: Become Human",
    description:
      "The video game Detroit: Become Human is an exciting title that belongs to the Action and Adventure genres. It is available for play on PC and PlayStation. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Adventure genres. Whether you prefer playing on PC and PlayStation, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PC", "PlayStation 4"],
    image:
      "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg",
    released: "2018-05-25",
    rating: 4.3,
    origin: "API",
    genres: ["Action", "Adventure"],
  },
  {
    id: 10142,
    name: "PlayerUnknown’s Battlegrounds",
    description:
      "The video game PlayerUnknown’s Battlegrounds is an exciting title that belongs to the Action, Shooter and Massively Multiplayer genres. It is available for play on PC, PlayStation and Xbox. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action, Shooter and Massively Multiplayer genres. Whether you prefer playing on PC, PlayStation and Xbox, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PC", "Xbox One", "PlayStation 4"],
    image:
      "https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg",
    released: "2017-12-20",
    rating: 3.27,
    origin: "API",
    genres: ["Action", "Shooter", "Massively Multiplayer"],
  },
  {
    id: 39,
    name: "Prey",
    description:
      "The video game Prey is an exciting title that belongs to the Action, Shooter and RPG genres. It is available for play on PC, PlayStation and Xbox. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action, Shooter and RPG genres. Whether you prefer playing on PC, PlayStation and Xbox, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Xbox One", "PC", "PlayStation 4"],
    image:
      "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg",
    released: "2017-05-05",
    rating: 4.28,
    origin: "API",
    genres: ["Action", "Shooter", "RPG"],
  },
  {
    id: 9721,
    name: "Garry's Mod",
    description:
      "The video game Garry's Mod is an exciting title that belongs to the Action, Adventure, Simulation, Casual and Indie genres. It is available for play on PC, Apple Macintosh and Linux. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action, Adventure, Simulation, Casual and Indie genres. Whether you prefer playing on PC, Apple Macintosh and Linux, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Linux", "macOS", "PC"],
    image:
      "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg",
    released: "2004-12-24",
    rating: 3.79,
    origin: "API",
    genres: ["Action", "Adventure", "Simulation", "Casual", "Indie"],
  },
  {
    id: 5563,
    name: "Fallout: New Vegas",
    description:
      "The video game Fallout: New Vegas is an exciting title that belongs to the Action, Shooter, Adventure and RPG genres. It is available for play on PC, PlayStation and Xbox. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action, Shooter, Adventure and RPG genres. Whether you prefer playing on PC, PlayStation and Xbox, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Xbox One", "PlayStation 4", "PlayStation 3", "PC", "Xbox 360"],
    image:
      "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg",
    released: "2010-10-19",
    rating: 4.44,
    origin: "API",
    genres: ["Action", "Shooter", "Adventure", "RPG"],
  },
  {
    id: 17540,
    name: "Injustice: Gods Among Us Ultimate Edition",
    description:
      "The video game Injustice: Gods Among Us Ultimate Edition is an exciting title that belongs to the Action, Arcade and Fighting genres. It is available for play on PC, PlayStation and Xbox. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action, Arcade and Fighting genres. Whether you prefer playing on PC, PlayStation and Xbox, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PlayStation 4", "PS Vita", "PC", "Xbox 360", "PlayStation 3"],
    image:
      "https://media.rawg.io/media/games/234/23410661770ae13eac11066980834367.jpg",
    released: "2013-11-12",
    rating: 3.52,
    origin: "API",
    genres: ["Action", "Arcade", "Fighting"],
  },
  {
    id: 4514,
    name: "L.A. Noire",
    description:
      "The video game L.A. Noire is an exciting title that belongs to the Action and Adventure genres. It is available for play on PC, PlayStation, Xbox and Nintendo. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Adventure genres. Whether you prefer playing on PC, PlayStation, Xbox and Nintendo, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "PlayStation 4",
      "PlayStation 3",
      "Xbox 360",
      "PC",
      "Xbox One",
      "Nintendo Switch",
    ],
    image:
      "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg",
    released: "2011-05-17",
    rating: 4.16,
    origin: "API",
    genres: ["Action", "Adventure"],
  },
  {
    id: 3144,
    name: "Super Meat Boy",
    description:
      "The video game Super Meat Boy is an exciting title that belongs to the Indie and Platformer genres. It is available for play on PC, PlayStation, Xbox, Android, Apple Macintosh, Linux, Nintendo and Web. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Indie and Platformer genres. Whether you prefer playing on PC, PlayStation, Xbox, Android, Apple Macintosh, Linux, Nintendo and Web, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "Linux",
      "Nintendo Switch",
      "Wii U",
      "Xbox 360",
      "PlayStation 4",
      "PS Vita",
      "Android",
      "Web",
      "PC",
      "macOS",
    ],
    image:
      "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg",
    released: "2010-10-20",
    rating: 3.97,
    origin: "API",
    genres: ["Indie", "Platformer"],
  },
  {
    id: 2462,
    name: "Uncharted 4: A Thief’s End",
    description:
      "The video game Uncharted 4: A Thief’s End is an exciting title that belongs to the Action and Adventure genres. It is available for play on PlayStation. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Adventure genres. Whether you prefer playing on PlayStation, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PlayStation 4", "PlayStation 5"],
    image:
      "https://media.rawg.io/media/games/709/709bf81f874ce5d25d625b37b014cb63.jpg",
    released: "2016-05-10",
    rating: 4.5,
    origin: "API",
    genres: ["Action", "Adventure"],
  },
  {
    id: 12447,
    name: "The Elder Scrolls V: Skyrim Special Edition",
    description:
      "The video game The Elder Scrolls V: Skyrim Special Edition is an exciting title that belongs to the Action and RPG genres. It is available for play on PC, PlayStation and Xbox. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and RPG genres. Whether you prefer playing on PC, PlayStation and Xbox, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PlayStation 4", "PC", "Xbox One"],
    image:
      "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg",
    released: "2016-10-27",
    rating: 4.46,
    origin: "API",
    genres: ["Action", "RPG"],
  },
  {
    id: 13633,
    name: "Sid Meier's Civilization V",
    description:
      "The video game Sid Meier's Civilization V is an exciting title that belongs to the Strategy genres. It is available for play on PC, Apple Macintosh and Linux. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Strategy genres. Whether you prefer playing on PC, Apple Macintosh and Linux, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PC", "macOS", "Linux"],
    image:
      "https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg",
    released: "2010-09-21",
    rating: 4.29,
    origin: "API",
    genres: ["Strategy"],
  },
  {
    id: 362,
    name: "For Honor",
    description:
      "The video game For Honor is an exciting title that belongs to the Action and Massively Multiplayer genres. It is available for play on PC, PlayStation and Xbox. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Massively Multiplayer genres. Whether you prefer playing on PC, PlayStation and Xbox, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Xbox One", "PlayStation 4", "PC"],
    image:
      "https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg",
    released: "2017-02-13",
    rating: 3.3,
    origin: "API",
    genres: ["Action", "Massively Multiplayer"],
  },
  {
    id: 4248,
    name: "Dishonored",
    description:
      "The video game Dishonored is an exciting title that belongs to the Action, Adventure and RPG genres. It is available for play on PC, PlayStation and Xbox. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action, Adventure and RPG genres. Whether you prefer playing on PC, PlayStation and Xbox, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PlayStation 4", "PlayStation 3", "Xbox 360", "PC", "Xbox One"],
    image:
      "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg",
    released: "2012-09-25",
    rating: 4.37,
    origin: "API",
    genres: ["Action", "Adventure", "RPG"],
  },
  {
    id: 864,
    name: "Dishonored 2",
    description:
      "The video game Dishonored 2 is an exciting title that belongs to the Action and RPG genres. It is available for play on PC, PlayStation and Xbox. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and RPG genres. Whether you prefer playing on PC, PlayStation and Xbox, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Xbox One", "PC", "PlayStation 4"],
    image:
      "https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg",
    released: "2016-11-10",
    rating: 4.26,
    origin: "API",
    genres: ["Action", "RPG"],
  },
  {
    id: 10243,
    name: "Company of Heroes 2",
    description:
      "The video game Company of Heroes 2 is an exciting title that belongs to the Strategy and Simulation genres. It is available for play on PC, Apple Macintosh and Linux. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Strategy and Simulation genres. Whether you prefer playing on PC, Apple Macintosh and Linux, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Linux", "macOS", "PC"],
    image:
      "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg",
    released: "2013-06-25",
    rating: 3.08,
    origin: "API",
    genres: ["Strategy", "Simulation"],
  },
  {
    id: 3841,
    name: "Assassin’s Creed IV: Black Flag",
    description:
      "The video game Assassin’s Creed IV: Black Flag is an exciting title that belongs to the Action genres. It is available for play on PC, PlayStation, Xbox and Nintendo. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action genres. Whether you prefer playing on PC, PlayStation, Xbox and Nintendo, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "Xbox 360",
      "Xbox One",
      "PC",
      "Nintendo Switch",
      "Wii U",
      "PlayStation 3",
      "PlayStation 4",
    ],
    image:
      "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg",
    released: "2013-10-29",
    rating: 4.13,
    origin: "API",
    genres: ["Action"],
  },
  {
    id: 4570,
    name: "Dead Space (2008)",
    description:
      "The video game Dead Space (2008) is an exciting title that belongs to the Action and Shooter genres. It is available for play on PC, PlayStation and Xbox. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Shooter genres. Whether you prefer playing on PC, PlayStation and Xbox, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PlayStation 3", "PC", "Xbox One", "Xbox 360"],
    image:
      "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
    released: "2008-10-13",
    rating: 4.39,
    origin: "API",
    genres: ["Action", "Shooter"],
  },
  {
    id: 817974,
    name: "Wallpaper Engine",
    description:
      "The video game Wallpaper Engine is an exciting title that belongs to the Casual genres. It is available for play on PC and Android. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Casual genres. Whether you prefer playing on PC and Android, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Android", "PC"],
    image:
      "https://media.rawg.io/media/screenshots/5a7/5a72aed79451d8fbd6a7b82f784002bd.jpg",
    released: "2016-10-10",
    rating: 4.14,
    origin: "API",
    genres: ["Casual"],
  },
  {
    id: 10449,
    name: "Darksiders II Deathinitive Edition",
    description:
      "The video game Darksiders II Deathinitive Edition is an exciting title that belongs to the Action and RPG genres. It is available for play on PC, PlayStation, Xbox and Nintendo. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and RPG genres. Whether you prefer playing on PC, PlayStation, Xbox and Nintendo, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PlayStation 4", "Xbox One", "Nintendo Switch", "PC"],
    image:
      "https://media.rawg.io/media/games/cfe/cfe5960b5caca432f3575fc7d8ff736b.jpg",
    released: "2015-11-05",
    rating: 3.78,
    origin: "API",
    genres: ["Action", "RPG"],
  },
  {
    id: 2518,
    name: "Max Payne",
    description:
      "The video game Max Payne is an exciting title that belongs to the Action and Shooter genres. It is available for play on PC, PlayStation, Xbox and Apple Macintosh. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Shooter genres. Whether you prefer playing on PC, PlayStation, Xbox and Apple Macintosh, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "PC",
      "PlayStation 3",
      "Xbox",
      "Classic Macintosh",
      "PlayStation 2",
      "Xbox 360",
      "PlayStation 4",
    ],
    image:
      "https://media.rawg.io/media/games/2f5/2f5eb72fe45540e93ac2726877551a20.jpg",
    released: "2001-07-23",
    rating: 4.46,
    origin: "API",
    genres: ["Action", "Shooter"],
  },
  {
    id: 16359,
    name: "Divinity: Original Sin - Enhanced Edition",
    description:
      "The video game Divinity: Original Sin - Enhanced Edition is an exciting title that belongs to the RPG and Indie genres. It is available for play on PC, PlayStation, Xbox, Apple Macintosh and Linux. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of RPG and Indie genres. Whether you prefer playing on PC, PlayStation, Xbox, Apple Macintosh and Linux, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PC", "Linux", "macOS", "PlayStation 4", "Xbox One"],
    image:
      "https://media.rawg.io/media/games/33b/33b825c76382931df0fd8ecddf5caebe.jpg",
    released: "2015-10-27",
    rating: 4.27,
    origin: "API",
    genres: ["RPG", "Indie"],
  },
  {
    id: 17380,
    name: "Sid Meier's Civilization III Complete",
    description:
      "The video game Sid Meier's Civilization III Complete is an exciting title that belongs to the Strategy and Simulation genres. It is available for play on PC. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Strategy and Simulation genres. Whether you prefer playing on PC, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PC"],
    image:
      "https://media.rawg.io/media/games/054/0549f1a0a5e782d4e81cdf8d022073fa.jpg",
    released: "2001-10-29",
    rating: 3.68,
    origin: "API",
    genres: ["Strategy", "Simulation"],
  },
  {
    id: 13628,
    name: "Dear Esther: Landmark Edition",
    description:
      "The video game Dear Esther: Landmark Edition is an exciting title that belongs to the Adventure, Casual and Indie genres. It is available for play on PC, PlayStation, Xbox and Apple Macintosh. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Adventure, Casual and Indie genres. Whether you prefer playing on PC, PlayStation, Xbox and Apple Macintosh, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PlayStation 4", "Xbox One", "PC", "macOS"],
    image:
      "https://media.rawg.io/media/screenshots/b20/b20a20205954f9765e82298dbd41e48a.jpg",
    released: "2017-02-14",
    rating: 3.33,
    origin: "API",
    genres: ["Adventure", "Casual", "Indie"],
  },
  {
    id: 3554,
    name: "The Evil Within",
    description:
      "The video game The Evil Within is an exciting title that belongs to the Action, Shooter and Adventure genres. It is available for play on PC, PlayStation and Xbox. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action, Shooter and Adventure genres. Whether you prefer playing on PC, PlayStation and Xbox, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PlayStation 3", "PlayStation 4", "Xbox 360", "PC", "Xbox One"],
    image:
      "https://media.rawg.io/media/games/157/1570121f5c4d240504f1eae5c3854733.jpg",
    released: "2014-10-12",
    rating: 3.97,
    origin: "API",
    genres: ["Action", "Shooter", "Adventure"],
  },
  {
    id: 15858,
    name: "Star Wars: Knights of the Old Republic II – The Sith Lords",
    description:
      "The video game Star Wars: Knights of the Old Republic II – The Sith Lords is an exciting title that belongs to the Adventure and RPG genres. It is available for play on PC, Xbox, Android, Apple Macintosh, Linux and Nintendo. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Adventure and RPG genres. Whether you prefer playing on PC, Xbox, Android, Apple Macintosh, Linux and Nintendo, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "Xbox",
      "Xbox 360",
      "Linux",
      "macOS",
      "PC",
      "Nintendo Switch",
      "Android",
    ],
    image:
      "https://media.rawg.io/media/games/046/0464f4a36cd975a37c95b93b06058855.jpg",
    released: "2004-12-06",
    rating: 4.37,
    origin: "API",
    genres: ["Adventure", "RPG"],
  },
  {
    id: 5161,
    name: "Braid",
    description:
      "The video game Braid is an exciting title that belongs to the Action, Arcade, Indie, Puzzle and Platformer genres. It is available for play on PC, PlayStation, Xbox, iOS, Apple Macintosh and Linux. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action, Arcade, Indie, Puzzle and Platformer genres. Whether you prefer playing on PC, PlayStation, Xbox, iOS, Apple Macintosh and Linux, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "PlayStation 3",
      "Xbox One",
      "iOS",
      "PC",
      "macOS",
      "Linux",
      "Xbox 360",
    ],
    image:
      "https://media.rawg.io/media/games/a5a/a5abaa1b5cc1567b026fa3aa9fbd828e.jpg",
    released: "2008-08-06",
    rating: 4.16,
    origin: "API",
    genres: ["Action", "Arcade", "Indie", "Puzzle", "Platformer"],
  },
  {
    id: 15274,
    name: "Jotun: Valhalla Edition",
    description:
      "The video game Jotun: Valhalla Edition is an exciting title that belongs to the Action and Indie genres. It is available for play on PC, PlayStation, Xbox, Apple Macintosh, Linux and Nintendo. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Indie genres. Whether you prefer playing on PC, PlayStation, Xbox, Apple Macintosh, Linux and Nintendo, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "PlayStation 4",
      "Nintendo Switch",
      "PC",
      "Xbox One",
      "Linux",
      "macOS",
    ],
    image:
      "https://media.rawg.io/media/games/032/0329db96e252aa41e672da2ba16f914c.jpg",
    released: "2015-09-29",
    rating: 3.07,
    origin: "API",
    genres: ["Action", "Indie"],
  },
  {
    id: 46956,
    name: "Doki Doki Literature Club!",
    description:
      "The video game Doki Doki Literature Club! is an exciting title that belongs to the Adventure and Indie genres. It is available for play on PC, Apple Macintosh and Linux. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Adventure and Indie genres. Whether you prefer playing on PC, Apple Macintosh and Linux, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Linux", "PC", "macOS"],
    image:
      "https://media.rawg.io/media/games/972/972aea3c9eb253e893947bec2d2cfbb9.jpg",
    released: "2017-09-22",
    rating: 4.05,
    origin: "API",
    genres: ["Adventure", "Indie"],
  },
  {
    id: 9653,
    name: "Hacknet",
    description:
      "The video game Hacknet is an exciting title that belongs to the Simulation and Indie genres. It is available for play on PC, Apple Macintosh and Linux. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Simulation and Indie genres. Whether you prefer playing on PC, Apple Macintosh and Linux, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PC", "macOS", "Linux"],
    image:
      "https://media.rawg.io/media/games/23b/23b69bfef2a1ce2e3dcdf1aa8ef1150b.jpg",
    released: "2015-08-11",
    rating: 3.18,
    origin: "API",
    genres: ["Simulation", "Indie"],
  },
  {
    id: 3427,
    name: "Murdered: Soul Suspect",
    description:
      "The video game Murdered: Soul Suspect is an exciting title that belongs to the Action, Adventure and RPG genres. It is available for play on PC, PlayStation and Xbox. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action, Adventure and RPG genres. Whether you prefer playing on PC, PlayStation and Xbox, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Xbox One", "PC", "PlayStation 4", "PlayStation 3", "Xbox 360"],
    image:
      "https://media.rawg.io/media/games/54a/54a3e4c617217848dc43c4de9989fe37.jpg",
    released: "2014-06-03",
    rating: 3.46,
    origin: "API",
    genres: ["Action", "Adventure", "RPG"],
  },
  {
    id: 50781,
    name: "Sea of Thieves",
    description:
      "The video game Sea of Thieves is an exciting title that belongs to the Action, Adventure and Massively Multiplayer genres. It is available for play on PC and Xbox. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action, Adventure and Massively Multiplayer genres. Whether you prefer playing on PC and Xbox, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Xbox Series S/X", "PC", "Xbox One"],
    image:
      "https://media.rawg.io/media/games/539/53911178036df07d518dd492ddc25289.jpg",
    released: "2018-03-20",
    rating: 3.68,
    origin: "API",
    genres: ["Action", "Adventure", "Massively Multiplayer"],
  },
  {
    id: 274480,
    name: "Mortal Kombat 11",
    description:
      "The video game Mortal Kombat 11 is an exciting title that belongs to the Action, Adventure and Fighting genres. It is available for play on PC, PlayStation, Xbox and Nintendo. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action, Adventure and Fighting genres. Whether you prefer playing on PC, PlayStation, Xbox and Nintendo, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "Nintendo Switch",
      "Xbox One",
      "PC",
      "PlayStation 4",
      "Xbox Series S/X",
      "PlayStation 5",
    ],
    image:
      "https://media.rawg.io/media/games/eb5/eb514db62d397c64288160d5bd8fd67a.jpg",
    released: "2019-04-22",
    rating: 3.98,
    origin: "API",
    genres: ["Action", "Adventure", "Fighting"],
  },
  {
    id: 12320,
    name: "Prison Architect",
    description:
      "The video game Prison Architect is an exciting title that belongs to the Strategy, Simulation and Indie genres. It is available for play on PC, PlayStation, Xbox, Apple Macintosh, Linux and Nintendo. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Strategy, Simulation and Indie genres. Whether you prefer playing on PC, PlayStation, Xbox, Apple Macintosh, Linux and Nintendo, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: [
      "Xbox One",
      "PC",
      "macOS",
      "Linux",
      "Nintendo Switch",
      "PlayStation 4",
    ],
    image:
      "https://media.rawg.io/media/games/6bc/6bc79f5bc023b1e6938f6eaf9926f073.jpg",
    released: "2015-10-05",
    rating: 3.73,
    origin: "API",
    genres: ["Strategy", "Simulation", "Indie"],
  },
  {
    id: 4179,
    name: "Darksiders II",
    description:
      "The video game Darksiders II is an exciting title that belongs to the Action and RPG genres. It is available for play on PC, PlayStation, Xbox and Nintendo. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and RPG genres. Whether you prefer playing on PC, PlayStation, Xbox and Nintendo, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PC", "Wii U", "PlayStation 3", "Nintendo Switch", "Xbox 360"],
    image:
      "https://media.rawg.io/media/games/848/8482235332f4518da363c3cb4e5cd075.jpg",
    released: "2012-08-14",
    rating: 3.75,
    origin: "API",
    genres: ["Action", "RPG"],
  },
  {
    id: 14062,
    name: "Red Orchestra 2: Heroes of Stalingrad with Rising Storm",
    description:
      "The video game Red Orchestra 2: Heroes of Stalingrad with Rising Storm is an exciting title that belongs to the Action genres. It is available for play on PC. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action genres. Whether you prefer playing on PC, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["PC"],
    image:
      "https://media.rawg.io/media/games/bff/bff077fb7c3b037bd5ed920bf447c863.jpg",
    released: "2011-09-13",
    rating: 3.25,
    origin: "API",
    genres: ["Action"],
  },
  {
    id: 3912,
    name: "Sanctum 2",
    description:
      "The video game Sanctum 2 is an exciting title that belongs to the Action, Shooter, Strategy and Indie genres. It is available for play on PC, PlayStation, Xbox, Apple Macintosh and Linux. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action, Shooter, Strategy and Indie genres. Whether you prefer playing on PC, PlayStation, Xbox, Apple Macintosh and Linux, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["macOS", "Linux", "PlayStation 3", "Xbox 360", "PC"],
    image:
      "https://media.rawg.io/media/games/963/963815b2a1a88475a31f311b591e70fb.jpg",
    released: "2013-05-15",
    rating: 2.95,
    origin: "API",
    genres: ["Action", "Shooter", "Strategy", "Indie"],
  },
  {
    id: 4729,
    name: "Assassin's Creed",
    description:
      "The video game Assassin's Creed is an exciting title that belongs to the Action and Adventure genres. It is available for play on PC, PlayStation and Xbox. Gamers around the world can enjoy the immersive experience offered by this game, which covers a range of Action and Adventure genres. Whether you prefer playing on PC, PlayStation and Xbox, you'll have the opportunity to dive into this captivating gaming universe and explore all it has to offer.",
    platforms: ["Xbox 360", "PC", "Xbox One", "PlayStation 3"],
    image:
      "https://media.rawg.io/media/games/0bc/0bcc108295a244b488d5c25f7d867220.jpg",
    released: "2007-11-13",
    rating: 3.9,
    origin: "API",
    genres: ["Action", "Adventure"],
  },
];

const users = [
  {
    name: 'Jed',
    Email: 'Justen.Heathcote1@yahoo.com',
    lastname: 'Zboncak',
    nickname: 'Aiden_Marvin62',
    image: 'https://avatars.githubusercontent.com/u/32303075'
  },
  {
    name: 'Bulah',
    Email: 'Dixie18@gmail.com',
    lastname: 'Gottlieb',
    nickname: 'Annalise56',
    image: 'https://avatars.githubusercontent.com/u/53612309'
  },
  {
    name: 'Lina',
    Email: 'Kiley.Gorczany@gmail.com',
    lastname: 'Medhurst',
    nickname: 'Emmanuel.Schultz',
    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/633.jpg'
  },
  {
    name: 'Madge',
    Email: 'Junius_Gutkowski@hotmail.com',
    lastname: 'Hane',
    nickname: 'Kenna51',
    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/944.jpg'
  },
  {
    name: 'Helga',
    Email: 'Gussie.Nienow48@hotmail.com',
    lastname: 'Runolfsson',
    nickname: 'Davin_Wuckert95',
    image: 'https://avatars.githubusercontent.com/u/3386748'
  },
  {
    name: 'Zita',
    Email: 'Oren.Stamm@hotmail.com',
    lastname: 'Romaguera-Schiller',
    nickname: 'Mac66',
    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/618.jpg'
  },
  {
    name: 'Gracie',
    Email: 'Ramon13@yahoo.com',
    lastname: 'Oberbrunner',
    nickname: 'Alessandra89',
    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/544.jpg'
  },
  {
    name: 'Magnolia',
    Email: 'Jorge.Brakus95@gmail.com',
    lastname: 'Zemlak',
    nickname: 'Bennett88',
    image: 'https://avatars.githubusercontent.com/u/62423146'
  },
  {
    name: 'Roman',
    Email: 'Louvenia.Kertzmann3@hotmail.com',
    lastname: 'Maggio-Stokes',
    nickname: 'Gordon.Roberts73',
    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/458.jpg'
  },
  {
    name: 'Francis',
    Email: 'Kendra56@gmail.com',
    lastname: 'Ledner',
    nickname: 'Karli22',
    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/422.jpg'
  },
  {
    name: 'Dallin',
    Email: 'Marietta_Runolfsson@yahoo.com',
    lastname: 'Wilkinson',
    nickname: 'Herman42',
    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/285.jpg'
  },
  {
    name: 'Theresia',
    Email: 'Joel_Rice@hotmail.com',
    lastname: 'Price',
    nickname: 'Estel31',
    image: 'https://avatars.githubusercontent.com/u/9665188'
  },
  {
    name: 'Chanelle',
    Email: 'Elvera49@gmail.com',
    lastname: 'Fahey',
    nickname: 'Raul.Ankunding',
    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1012.jpg'
  },
  {
    name: 'Tyreek',
    Email: 'Maynard_Gutmann@gmail.com',
    lastname: 'Metz',
    nickname: 'Lillie_Koelpin',
    image: 'https://avatars.githubusercontent.com/u/72757256'
  },
  {
    name: 'Porter',
    Email: 'Lowell.Collins@hotmail.com',
    lastname: 'Rohan',
    nickname: 'Colten.Williamson-Reynolds',
    image: 'https://avatars.githubusercontent.com/u/32459959'
  },
  {
    name: 'Kacey',
    Email: 'Braxton.Hudson41@gmail.com',
    lastname: 'Graham',
    nickname: 'Della.Predovic',
    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/300.jpg'
  },
  {
    name: 'Theron',
    Email: 'Deborah.Conroy1@gmail.com',
    lastname: 'Greenholt',
    nickname: 'Erin.OReilly42',
    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1042.jpg'
  },
  {
    name: 'Amiya',
    Email: 'Jennings_Bernhard90@gmail.com',
    lastname: 'Ruecker',
    nickname: 'Britney_Haley97',
    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/349.jpg'
  },
  {
    name: 'Britney',
    Email: 'Nakia.Emmerich@gmail.com',
    lastname: 'Tromp',
    nickname: 'Flo34',
    image: 'https://avatars.githubusercontent.com/u/81249206'
  },
  {
    name: 'Estella',
    Email: 'Darius.Reichel@gmail.com',
    lastname: 'Ortiz',
    nickname: 'Jake.Mohr',
    image: 'https://avatars.githubusercontent.com/u/66838503'
  },
  {
    name: 'Lucienne',
    Email: 'Mitchel_Wintheiser91@yahoo.com',
    lastname: 'Bailey',
    nickname: 'Donna_Morar23',
    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/522.jpg'
  },
  {
    name: 'Christina',
    Email: 'Dallas_Boehm@hotmail.com',
    lastname: 'Cole',
    nickname: 'Deron75',
    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1179.jpg'
  },
  {
    name: 'Kristina',
    Email: 'Ressie75@gmail.com',
    lastname: 'Gorczany',
    nickname: 'Damian_Jast',
    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/482.jpg'
  },
  {
    name: 'Name',
    Email: 'Jeffrey.Feest78@yahoo.com',
    lastname: 'Bartell',
    nickname: 'Jaime_Nienow',
    image: 'https://avatars.githubusercontent.com/u/2669691'
  },
  {
    name: 'Francisco',
    Email: 'Forrest_Vandervort@hotmail.com',
    lastname: 'Schoen',
    nickname: 'Lenore_Murphy7',
    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/689.jpg'
  },
  {
    name: 'Nina',
    Email: 'Sharon7@yahoo.com',
    lastname: 'Wiegand',
    nickname: 'Bertrand_Hauck52',
    image: 'https://avatars.githubusercontent.com/u/97493280'
  },
  {
    name: 'Hardy',
    Email: 'Austyn_Koch@gmail.com',
    lastname: 'Stracke',
    nickname: 'Shaylee14',
    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1026.jpg'
  },
  {
    name: 'Jerald',
    Email: 'Arjun.Gorczany33@gmail.com',
    lastname: 'Rice',
    nickname: 'Margarette.Feil',
    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/27.jpg'
  },
  {
    name: 'Emmanuelle',
    Email: 'Wellington.Dicki@gmail.com',
    lastname: 'Goldner',
    nickname: 'Tre.MacGyver',
    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/370.jpg'
  },
  {
    name: 'Crystal',
    Email: 'Hunter_Fay@hotmail.com',
    lastname: 'Kutch',
    nickname: 'Hildegard29',
    image: 'https://avatars.githubusercontent.com/u/97906160'
  },
  {
    name: 'Deondre',
    Email: 'Ella_Casper@hotmail.com',
    lastname: 'Gleason',
    nickname: 'Anjali37',
    image: 'https://avatars.githubusercontent.com/u/16941598'
  },
  {
    name: 'Wanda',
    Email: 'Emory56@yahoo.com',
    lastname: 'Douglas',
    nickname: 'Damian.Schoen',
    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/967.jpg'
  },
  {
    name: 'Teagan',
    Email: 'Noble.Berge40@yahoo.com',
    lastname: 'Renner',
    nickname: 'Matilda_Kuhlman',
    image: 'https://avatars.githubusercontent.com/u/71301179'
  },
  {
    name: 'Leonor',
    Email: 'Evert_Lesch70@hotmail.com',
    lastname: 'Gleichner',
    nickname: 'Hassan68',
    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg'
  },
  {
    name: 'Linnea',
    Email: 'Lorna83@yahoo.com',
    lastname: 'McCullough',
    nickname: 'Lavon.Buckridge26',
    image: 'https://avatars.githubusercontent.com/u/41674686'
  },
  {
    name: 'Amalia',
    Email: 'Loyal_Lind94@gmail.com',
    lastname: 'Torphy',
    nickname: 'Morgan.OReilly',
    image: 'https://avatars.githubusercontent.com/u/46134510'
  },
  {
    name: 'Zita',
    Email: 'Jonatan_Rowe78@yahoo.com',
    lastname: 'Oberbrunner',
    nickname: 'Jaden_Heathcote',
    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/361.jpg'
  },
  {
    name: 'Reyes',
    Email: 'Grayce_Stracke86@hotmail.com',
    lastname: 'Armstrong-Towne',
    nickname: 'Amelie.Parisian12',
    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/915.jpg'
  },
  {
    name: 'Hettie',
    Email: 'Isaac.Russel@yahoo.com',
    lastname: 'Toy',
    nickname: 'Mac_Yost',
    image: 'https://avatars.githubusercontent.com/u/59478451'
  },
  {
    name: 'Sadie',
    Email: 'Nasir_Jast@hotmail.com',
    lastname: 'Lind',
    nickname: 'Marcella79',
    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1187.jpg'
  },
  {
    name: 'Ofelia',
    Email: 'Vincent.Upton@hotmail.com',
    lastname: 'Schulist',
    nickname: 'Nathen.Fahey70',
    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/907.jpg'
  },
  {
    name: 'Lawson',
    Email: 'Vita.Hauck@hotmail.com',
    lastname: 'Sipes',
    nickname: 'Dereck_Hilll',
    image: 'https://avatars.githubusercontent.com/u/59099591'
  },
  {
    name: 'Octavia',
    Email: 'Alva_Bogisich@yahoo.com',
    lastname: 'Dickens',
    nickname: 'Fanny_Runte51',
    image: 'https://avatars.githubusercontent.com/u/83037108'
  },
  {
    name: 'Rosemarie',
    Email: 'Meghan.Reichel@gmail.com',
    lastname: 'Koelpin',
    nickname: 'Garrison16',
    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/30.jpg'
  },
  {
    name: 'Krystel',
    Email: 'Alessia57@gmail.com',
    lastname: 'Runolfsson',
    nickname: 'Nicolas_Jast22',
    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/68.jpg'
  },
  {
    name: 'Shea',
    Email: 'Ulises.Blanda@gmail.com',
    lastname: 'Schumm',
    nickname: 'Kraig.MacGyver',
    image: 'https://avatars.githubusercontent.com/u/13073536'
  },
  {
    name: 'Ashleigh',
    Email: 'Noemy79@yahoo.com',
    lastname: 'Tromp',
    nickname: 'Kevon23',
    image: 'https://avatars.githubusercontent.com/u/31097978'
  },
  {
    name: 'Irwin',
    Email: 'Irwin.Streich66@gmail.com',
    lastname: 'Bins',
    nickname: 'Felicita_Bednar',
    image: 'https://avatars.githubusercontent.com/u/1407846'
  },
  {
    name: 'Sim',
    Email: 'Roselyn.Legros@yahoo.com',
    lastname: 'Schiller',
    nickname: 'Gina8',
    image: 'https://avatars.githubusercontent.com/u/43566721'
  },
  {
    name: 'Tyra',
    Email: 'Sophia_Weber98@gmail.com',
    lastname: 'Kozey',
    nickname: 'Norma89',
    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1149.jpg'
  }
]

const reviews = [
  "This game was a disappointment. Boring story and poor graphics.",
  "Absolutely loved it! The gameplay is addictive, and the graphics are stunning.",
  "I regret buying this game. It's full of bugs and crashes constantly.",
  "An absolute masterpiece! The attention to detail is extraordinary, and the story is captivating.",
  "Waste of money. The controls are clunky, and the game is unplayable.",
  "Incredible! This game exceeded all my expectations. A must-play for any gamer.",
  "I couldn't even finish it. The dialogue is cringeworthy, and the gameplay is monotonous.",
  "I'm addicted to this game! The open world is vast, and the quests are engaging.",
  "Terrible. The AI is laughably bad, and the graphics are outdated.",
  "A true gem. The music is enchanting, and the world-building is superb.",
  "I uninstalled the game after an hour. It's riddled with microtransactions and pay-to-win mechanics.",
  "One of the best gaming experiences I've had. The character development is outstanding.",
  "Avoid this game at all costs. It's riddled with game-breaking bugs and poor optimization.",
  "This game is a hidden treasure. The level design is intricate, and the puzzles are challenging.",
  "I found it underwhelming. The story is cliché, and the graphics are mediocre.",
  "I can't stop playing it! The combat system is fantastic, and the world is immersive.",
  "I had high hopes, but it's a total letdown. The graphics are subpar, and the gameplay is repetitive.",
  "A work of art. The attention to detail is astonishing, and the soundtrack is hauntingly beautiful.",
  "It's a cash grab. The game is pay-to-win, and the developers are greedy.",
  "Simply outstanding! The storytelling is masterful, and the game world is rich and diverse.",
  "I wouldn't recommend it to anyone. The graphics are outdated, and the story is forgettable.",
  "This game is a true masterpiece. The character development is impeccable, and the world is breathtaking.",
  "A buggy mess. I encountered game-breaking glitches within minutes of playing.",
  "Brilliant! The game's atmosphere is immersive, and the gameplay is a joy to experience.",
  "It's a waste of time and money. The game is filled with repetitive quests and shallow gameplay.",
  "I'm hooked! The graphics are top-notch, and the gameplay is addictive.",
  "Don't bother with this one. The graphics are horrendous, and the story is uninspired.",
  "A must-play for any gamer. The world is beautifully crafted, and the quests are engaging.",
];

const gamePrices = [
  59.99, 49.99, 39.99, 29.99, 44.99, 54.99, 19.99, 64.99, 69.99, 59.99,
  49.99, 34.99, 24.99, 59.99, 39.99, 49.99, 79.99, 54.99, 29.99, 39.99,
  69.99, 59.99, 44.99, 34.99, 79.99, 69.99, 29.99, 39.99, 59.99, 49.99
];


gamesToLoad = games.map((vg) => {
  return {
    name: vg.name,
    description: JSON.parse(`"${vg.description}"`),
    image: vg.image,
    released: vg.released,
    price: gamePrices[Math.floor(Math.random()*30)]
  };
});

const {
  genre,
  platform,
  Videogame,
  videogame_Genre,
  videogame_Plataform,
  User,
  VG_user,
  Purchase,
} = require("./src/db.js");

const { conn } = require('./src/db.js');
const { hash } = require('./src/utils/hash.js')
const { Op } = require('sequelize')
const randomDate = require('./src/utils/randomDate.js')
const parseDate = require('./src/utils/parseDate.js')

const LoadGenre = async () => {
  try {
    const generos = await genre.bulkCreate(
      genres.map((g) => {
        return {
          name: g,
        };
      })
    );
    console.log('tabla "genre" cargada');
  } catch (error) {
    console.log(error.message);
  }
};

const LoadPlatform = async () => {
  try {
    const plataformas = await platform.bulkCreate(
      platform_s.map((p) => {
        return {
          name: p,
        };
      })
    );
    console.log('tabla "platform" cargada');
  } catch (error) {
    console.log(error.message);
  }
};

const LoadGame = async () => {
  try {
    const juegos = await Videogame.bulkCreate(gamesToLoad);
    console.log('tabla de "Videogames" cargada');
  } catch (error) {
    console.log(error.message);
  }
};

const LoadUsers = async () => {
  try {
    for(const user of users){
      const password = await hash("123asd")
      await User.create({
        ...user,
        password,
        coverImage: 'https://loremflickr.com/720/320/videogame',
        logincount: Math.round(Math.random()*8+2)
      })
      
      await User.update({
        createdAt: randomDate(),//5 de enero
        updatedAt: randomDate()
      }, {where: {nickname: user.nickname}})
    }
  } catch (error) {
    console.log(error.message);
  }
}

const LoadDB = async () => {
  try {
    await conn.sync({ force: true })
    await LoadGenre();
    await LoadPlatform();
    await LoadGame();

    const juegos = await Videogame.findAll();
    const gamesIds = juegos.map((g) => g.id);

    //carga las relaciones games  -  generos
    const VG_G = games.map((vg) => {
      return vg.genres.map((g) => genres.indexOf(g) + 1);//[1, 3, 5]
    });

    for (let i in gamesIds) {
      for (let j in VG_G[i]) {
        await videogame_Genre.create({
          VideogameId: gamesIds[i],
          genreId: VG_G[i][j],
        });
      }
    }
    console.log("relaciones de Videogames con genre completada");

    // carga las relaciones games - platforms
    const VG_P = games.map((vg) => {
      return vg.platforms.map((p) => platform_s.indexOf(p) + 1);
    });

    for (let i in gamesIds) {
      for (let j in VG_P[i]) {
        await videogame_Plataform.create({
          VideogameId: gamesIds[i],
          platformId: VG_P[i][j],
        });
      }
    }
    console.log("relaciones de Videogames con platforms completada");

    //carga los usuarios
    await LoadUsers()
    console.log("50 usuarios subidos\nusuarios interectuando en la pagina")

    
    const allUsers = await User.findAll()
    const usersIds = allUsers.map( u => u.id)

    for(const userId of usersIds){
      const gamearr = []
      const numComprados = Math.floor(Math.random()*20)//1 a 20 juegos comprados
      for(let i = 0; i<numComprados; i++){
        gamearr.push(gamesIds[Math.floor(Math.random()*100)])
      }
      const gamearrPurRev = [...new Set(gamearr)]//[gid1, gid2, ....]  14 → [3, 3, 3..., 2]

      const triadas = Math.floor(gamearrPurRev.length/3)+ (gamearrPurRev.length%3? 1:0)
      for(let i = 0; i<triadas; i++){
        const compra = gamearrPurRev.slice(i*3, (i+1)*3)//3 ids de videojuegos
        const gamesTobuy = await Videogame.findAll({
          where:{
            [Op.or]: compra.map( vgId => { return {
              id: vgId
            }})
          }
        })
        const amount = gamesTobuy.reduce((acum, vg) => acum + vg.price, 0)
        ///Aquí está la compra:
        const userCompra = await Purchase.create({
          amount: Number(amount.toFixed(2)),
          UserId: userId
        })

        await userCompra.addVideogames(gamesTobuy.map( vg => vg.id))
      }
  
      for(const gameId of gamearrPurRev){//agrega review, y estrellas
        const revIndex = Math.floor(Math.random()*50)

        const relations = await VG_user.findOne({
          where: {
            VideogameId: gameId,
            UserId: userId,
          }
        })

        if(relations){
          await VG_user.update({
            review: reviews[revIndex] || reviews[Math.floor(Math.random()*50)],
            graphics: Math.floor(Math.random()*3) + (revIndex%2? 3 : 1),
            gameplay: Math.floor(Math.random()*3) + (revIndex%2? 3 : 1),
            quality_price: Math.floor(Math.random()*3) + (revIndex%2? 3 : 1)
          }, { where: {
            VideogameId: gameId,
            UserId: userId,
          }})
        }else{
          await VG_user.create({
            VideogameId: gameId,
            UserId: userId,
            review: reviews[revIndex] || reviews[Math.floor(Math.random()*50)],
            graphics: Math.floor(Math.random()*3) + (revIndex%2? 3 : 1),
            gameplay: Math.floor(Math.random()*3) + (revIndex%2? 3 : 1),
            quality_price: Math.floor(Math.random()*3) + (revIndex%2? 3 : 1)
          })
        }
      }

      const gamearrFav = []
      const numOfFav = Math.floor(Math.random()*11)
      for(let i = 0; i<numOfFav; i++){
        gamearrFav.push(gamesIds[Math.floor(Math.random()*100)])
      }

      for(const gameId of gamearrFav){
        const relation = await VG_user.findOne({ where: {
            VideogameId: gameId,
            UserId: userId,
          }
        })

        if(relation){
          await VG_user.update({ favorites: true }, {
              where: {
                  UserId: userId,
                  VideogameId: gameId
              }
            })

        }else{
          await VG_user.create({
            UserId: userId,
            VideogameId: gameId,
            favorites: true,
          });
        }
      }
    }

    const users = await User.findAll({
      include: { model: Purchase },
    });
  
    const userDatePur = users.map((u) => {
      return{
          date: parseDate(u.dataValues.createdAt).date,
          purIds: u.Purchases.map(p => p.id)
      }
    })

    for(const obj of userDatePur){
      for(const purId of obj.purIds){
        await Purchase.update({
          createdAt: randomDate(obj.date)
        }, {
          where: {id: purId}
        })
      }
    }

    console.log('usuarios terminaron de interactuar\n\n\n');
    console.log('----------------------------------');
    console.log('|     CREANDO USUARIO ADMIN      |');
    console.log('----------------------------------');
    const adminPassword = await hash("Gamer2023")
    await User.create({
      name: "Admin",
      lastname: "Primero",
      nickname: "Admin",
      Email: "arcadeworld2023@gmail.com",
      password: adminPassword,
      admin: true,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp39JjBhwY7RW8jjE3fVdYRmcfzAajPVV4vQ"
    })
    console.log('\n\n\n----------------------------------');
    console.log('|     USUARIO ADMIN CREADO       |');
    console.log('----------------------------------');
    await conn.sync({ alert: true })
    console.log("\n\n\nBASE DE DATOS LISTA PARA USAR");
    
  } catch (error) {
    console.log(error.message);
  }
};

LoadDB();