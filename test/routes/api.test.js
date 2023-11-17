const axios = require('axios');
const { User,Videogame,Purchase } = require('../../src/db')


// Supongamos que tu servidor está en http://localhost:3000
const serverUrl = 'http://localhost:3001';

afterAll(async () => {
  try {
    await User.destroy({
      where: { nickname: "NickUsuario" },
    });
    await Videogame.destroy({
      where: { name: "name game" },
    });
    await User.update({Email: `yanis${Math.floor(Math.random()*1000)}.doe@example.com`},
    {where:  { Email: 'johnn26.doe@example.com'}})
    console.log("Todas las pruebas han finalizado.");
  } catch (error) {
    console.log('error: ',error);
  }
});

  describe('Pruebas de la rutas del carrito de compras', () => {
    it('compra agregada a base de datos', async () => {
      const games = await Videogame.findAll();
      const gamesID = games.map(game => game.id);
      const randomid = gamesID[Math.floor(Math.random() * gamesID.length)];
      
      const users = await User.findAll();
      const userID = users.map(  user=>user.id);
      const randomuserid = userID[Math.floor(Math.random() * userID.length)];
      const requestBody = {
        UserId: randomuserid,
        GamesIds: [randomid],
        amount: 50,
      };
      const response = await axios.post(
        `${serverUrl}/cart/success`,
        requestBody
      );
      // Verifica que la respuesta sea un objeto.
      expect(typeof response.data).toBe("object");

      // Verifica que el objeto tenga la propiedad 'success'.
      expect(response.data).toHaveProperty("success");

      // Verifica que 'success' sea una cadena (string).
      expect(typeof response.data.success).toBe("string");
    });
  });

  describe('Prueba de la ruta de card/punchased', () => {
    it('Debería responder con el objeto esperado si las credenciales son correctas', async () => {
      const games = await Videogame.findAll();
    const gamesID = games.map(game => game.id);
    const randomid = gamesID[Math.floor(Math.random() * gamesID.length)];
    
    const users = await User.findAll();
    const userID = users.map(  user=>user.id);
    const randomuserid = userID[Math.floor(Math.random() * userID.length)];
    
      const requestBody = {
        UserId: randomuserid,
        GamesIds: [randomid],
      };
      const response = await axios.post(`${serverUrl}/cart/purchased`, requestBody);
      // Verifica que la respuesta sea un objeto.
      expect(typeof response.data).toBe("object");

      // Verifica que el objeto tenga la propiedad 'session_url'.
      expect(response.data).toHaveProperty("session_url");

      // Verifica que 'session_url' sea una cadena (string).
      expect(typeof response.data.session_url).toBe("string");
    });
  });
  
  describe("probando las rutas de videojuegos",()=>{
    it('La respuesta de la API debe contener elementos en el array con 100 juegos', async () => {
      const response = await axios.get(`${serverUrl}/videogame`); // Reemplaza "tu-ruta-api" con la ruta real
      const data = response.data;
  
      expect(data).toBeInstanceOf(Array);
      expect(data.length).toBeGreaterThan (80);
    });
    it('La respuesta de la API debe traer los juegos por ID', async () => {
      const games = await Videogame.findAll();
      const gamesID = games.map(game => game.id);
      const randomid = gamesID[Math.floor(Math.random() * gamesID.length)];
      const response = await axios.get(`${serverUrl}/videogame/${randomid}`);
      const data = response.data;
  
      expect(data).toHaveProperty('id');
      expect(data).toHaveProperty('name');
    });
    it('La respuesta de la API debe traer los juegos por nombre', async () => {
      const response = await axios.get(`${serverUrl}/videogame?name=dead`);
      const data = response.data;
  
      // Verifica que la respuesta sea un array.
      expect(Array.isArray(data)).toBe(true);
  
      // Verifica que la longitud del array sea 3.
      expect(data.length).toBe(4);
  
      // Verifica que cada objeto en el array tenga las propiedades "id" y "name".
      data.forEach((game) => {
        expect(game).toHaveProperty('id');
        expect(game).toHaveProperty('name');
      });
    });
  });

  describe("test de ruta de usuario",()=>{
    it('Test ruta de usuarios', async () => {
      const response = await axios.get(`${serverUrl}/user`)
      const data = response.data;
      
  
      expect(data).toBeInstanceOf(Array);
      expect(data.length).toBeGreaterThan(49);
    });
    it('Test registro de usuario', async () => {
      const requestBody = {
          name: 'NombreUsuario',
          lastname: 'ApellidoUsuario',
          nickname: 'NickUsuario',
          password: '123asd3',
          Email: 'usuario@example.com',
        };
        
      const response = await axios.post(`${serverUrl}/user/register`, requestBody);
    
      expect(response.status).toBe(200);
      expect(response.data).toEqual({
      success: 'The user was successfully uploaded to the database, correo enviado',
      });
    });
    it('Test de login usuario correcto', async () => {
      const users = await User.findAll()
      const usersNick = users.map( u => u.nickname)
      const randomNick = usersNick[Math.floor(Math.random() * users.length)]
      const requestBody = {
        nick_email: randomNick,
        password: '123asd',
      };
  
      const response = await axios.post(`${serverUrl}/user/login`, requestBody);
  
      expect(response.status).toBe(200);
      expect(response.data.login).toBe(true);
      expect(response.data.user).toHaveProperty('id');
      expect(response.data.user).toHaveProperty('name');
    });
     it('Test de login usuario que no existe', async () => {
      const requestBody = {
        nick_email: 'Destany72sadasdasdas',
        password: '123adsdsadsadasdsadad',
      };
  
      const response = await axios.post(`${serverUrl}/user/login`, requestBody);
  
      expect(response.status).toBe(200);
      expect(response.data.login).toBe(false);
      expect(response.data.error.message).toBe('User not found. Password, Nickname or Email incorrect.');
  
    });
    it('Test de login usuario sin nick o email', async () => {
      const requestBody = {
        
        password: '123asd',
      };
  
      const response = await axios.post(`${serverUrl}/user/login`, requestBody);
  
      expect(response.status).toBe(200);
      expect(response.data.login).toBe(false);
      expect(response.data.error.message).toBe('nickname or Email is missing.');
     
    });
    it('Test de login usuario sin password', async () => {
      const requestBody = {
        nick_email: 'Destany72',
        
      };
  
      const response = await axios.post(`${serverUrl}/user/login`, requestBody);
  
      expect(response.status).toBe(200);
      expect(response.data.login).toBe(false);
      expect(response.data.error.message).toBe('password is missing.');
    }); 
    it('Test de login usuario con clave erronea', async () => {
      const users = await User.findAll()
      const usersNick = users.map( u => u.nickname)
      const randomNick = usersNick[Math.floor(Math.random() * users.length)]
      const requestBody = {
        nick_email: randomNick,
        password: '123adsasdasdasas',
      };
  
      const response = await axios.post(`${serverUrl}/user/login`, requestBody);
  
      expect(response.status).toBe(200);
      expect(response.data.login).toBe(false);
      expect(response.data.error.message).toBe('Incorrect password.');
     
    });
    it('Test de update de usuario', async () => {
      try {
        const users = await User.findAll();
        const userID = users.map( user => user.id);
        const randomuserid = userID[Math.floor(Math.random() * userID.length)];
        
        const requestBody = {
          id: randomuserid,
          uid: "",
          name: "John",
          lastname: "Doe",
          nickname: null,
          password: "newpassword",
          Email: "johnn26.doe@example.com",
          image: "",
          country: "Canada",
        };
        
        const response = await axios.put(`${serverUrl}/user/update`,requestBody)
        
        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('uid');
        expect(response.data).toHaveProperty('name');
      } catch (error) {
        console.log('error: ',error.response.data.error);
      }
    });
    it('La respuesta de la API debe traer un usuario por ID', async () => {
    // Obtener la lista de usuarios
    const users = await User.findAll();
    
    const userIds = users.map(user => user.id);
    const randomUserId = userIds[Math.floor(Math.random() * userIds.length)];
    
    
    const response = await axios.get(`${serverUrl}/user/${randomUserId}`);
    const userData = response.data;
  
    
    expect(userData).toHaveProperty('id');
    expect(userData).toHaveProperty('name');
    
    });
  });

  describe('Update Game Handler Function', () => {  
    it('test update correctamente', async () => {
      const games = await Videogame.findAll();
      const gamesID = games.map(game => game.id);
      const randomid = gamesID[Math.floor(Math.random() * gamesID.length)];
      
      const requestBody = {
        id: randomid,
        name: "",
        description: "Esta es una descripción de ejemplo para el producto.",
        image: null,
        price: 19.99,
        released: "2023-11-09",
        genreIds: [1, 2],
        platformIds: [1, 2],
      }; 
  
      const response = await axios.put(`${serverUrl}/videogame/update`, requestBody);
  
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty("id");
      expect(response.data).toHaveProperty("name");
    });
    it('test si no se proporciona el ID', async () => {
      const requestBody = {
        name: "",
        description: "Esta es una descripción de ejemplo para el producto.",
        image: null,
        price: 19.99,
        released: "2023-11-09",
      };
     
      const response = await axios.put(`${serverUrl}/videogame/update`, requestBody);
  
      expect(response.data).toEqual({
        error: "id del juego no recibida",
      });
    });
    it('test si el ID no es un UUID válido', async () => {
      const requestBody = { id: 'ID_NO_VALIDO' }; 
  
      const response = await axios.put(`${serverUrl}/videogame/update`, requestBody);
  
      expect(response.status).toBe(200);
      expect(response.data).toEqual({ error: 'id recibida no es formato uuid' });
    });  
    it('test si el juego no es encontrado', async () => {
      const requestBody = {
        id: "09839fbc-5e5f-404b-8bb2-176d2ccaecc9",
        name: "",
        description: "Esta es una descripción de ejemplo para el producto.",
        image: null,
        price: 19.99,
        released: "2023-11-09",
      };
  
      const response = await axios.put(`${serverUrl}/videogame/update`, requestBody);
  
      expect(response.status).toBe(200);
      expect(response.data).toEqual({ error: 'juego no encontrado' });
    });
  });

  describe('test post videogame', () => {
    it('test si faltan datos para crear el videojuego', async () => {
      const requestBody = {}; 
  
      const response = await axios.post(`${serverUrl}/videogame`, requestBody);
  
      expect(response.status).toBe(200);
      expect(response.data).toEqual({ error: 'faltan datos para crear el videojuego' });
    });
  
    it('test si todos OK', async () => {
      const requestBody = {
        name: 'name game',
        description: 'Descripción del Juego re pro',
        price: 50, 
        released: '2023-01-01' 
      };
  
      const response = await axios.post(`${serverUrl}/videogame`, requestBody);
  
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty("id");
      expect(response.data).toHaveProperty("name");
    });
  });
  describe('test detailPurchaseHandler ', () => {
  

    it('test id invalido', async () => {
      try {
        const response = await axios.get(`${serverUrl}/purchase/invalid_id`);
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ error: 'id is not a uuid' });
      } catch (error) {
        throw new Error(error);
      }
    });
  
    it('test compra no encontrada', async () => {
      try {
        const fakeId = '001043b5-5ce0-4275-a01f-676bd308e8aa';
        const response = await axios.get(`${serverUrl}/purchase/${fakeId}`);
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ error: 'purchase not found' });
      } catch (error) {
        throw new Error(error);
      }
    });
  
    it('Test compra encontrada', async () => {
      try {

      const punchased = await Purchase.findAll();
      const purchasedID = punchased.map(purchased => purchased.id);
      const randomid = purchasedID[Math.floor(Math.random() * purchasedID.length)];
        const response = await axios.get(`${serverUrl}/purchase/${randomid}`);
        expect(response.status).toBe(200);
      } catch (error) {
        throw new Error(error);
      }
    });
  
    it('should handle exceptions appropriately', async () => {
      try {
        const response = await axios.get(`${serverUrl}/purchase/invalid_endpoint`);
        expect(response.data).toHaveProperty('error');
      } catch (error) {
        throw new Error(error);
      }
    });
  });