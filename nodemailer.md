# USO DE NODEMAILER IMPLEMENTADO PARA EL BACKEND, MD BORRABLE (DEPENDENCIA YA INSTALADA)

```
const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()
const { correo, password, nodemailerpass} = process.env

// Importamos el módulo 'nodemailer'
const nodemailer = require('nodemailer');

//Para caso de diferentes mensajes
let caso = 'saludo';

//Para en caso de tener muchos destinatarios asi más o menos seria la logica:
let destinatarios = ['juanpajueloch@gmail.com', 'chuchobavaresco@gmail.com', 'gabriel.gaboz123@gmail.com'];


// Creamos una instancia del transportador usando SMTP
let transporter = nodemailer.createTransport({
  service: 'gmail', // Aquí puedes usar el servicio de correo que prefieras
  auth: {
    user: correo, // Tu dirección de correo
    pass: nodemailerpass // Tu contraseña (preferiblemente hacer una contraseña de uso de app)
  },
  debug: true // Habilita el registro
});

// Configuramos las opciones del correo
let mailOptions = {
  from: correo, // Dirección del remitente
  to: destinatarios.join(', '), // Convertimos el array en una cadena separada por comas 
//   subject: 'Hola desde Nodemailer', // Asunto del correo
//   text: '¡Hola mundo!' // Cuerpo del correo
};

// Usamos un switch para cambiar el contenido del correo dependiendo del caso
switch (caso) {
    case 'saludo':
      mailOptions.subject = 'Saludo desde Nodemailer';
      mailOptions.text = '¡Hola mundo!';
      break;
    case 'despedida':
      mailOptions.subject = 'Despedida desde Nodemailer';
      mailOptions.text = '¡Adiós mundo!';
      break;
    // Agrega más casos según sea necesario
  }

// Enviamos el correo con las opciones configuradas
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Correo enviado: ' + info.response);
  }
});

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`)
})

```
