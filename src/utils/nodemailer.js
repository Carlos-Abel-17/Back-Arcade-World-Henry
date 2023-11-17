const nodemailer = require("nodemailer");

const correoDeBienvenida = async (Email) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "arcadeworld2023@gmail.com",
                pass: "aqemmhzlcloqjixq",
            },
        });
    
        const mailOptions = {
        from: "arcadeworld2023@gmail.com",
        to: Email,
        subject: "BIENVENIDO A ARCADE_WORLD",
        html: `<!DOCTYPE html>
        <html>
        <head>
            <title>Welcome to Arcade World: Your Destination to Buy Games</title>
        </head>
        <body>
            <table width="100%" bgcolor="#2a2a2a">
                <tr>
                    <td>
                        <table align="center" width="600" style="background-color: #1c1c1c; padding: 30px; margin-top: 20px; margin-bottom: 20px; border-radius: 10px; text-align: center;">
                            <tr>
                                <td>
                                    <img src="https://tuurl.com/logo_VG.png" alt="Arcade World Logo" width="200">
                                    <h1 style="color: #ffffff; font-family: Arial, sans-serif; font-size: 28px; margin-top: 20px;">Welcome to Arcade World!</h1>
                                    <p style="color: #ffffff; font-family: Arial, sans-serif; font-size: 20px;">Your destination to shop and explore the thrilling world of video games.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p style="color: #ffffff; font-family: Arial, sans-serif; font-size: 20px;">In Arcade World, you are about to embark on an exciting journey through a vast world of video games.</p>
                                    <p style="color: #ffffff; font-family: Arial, sans-serif; font-size: 20px;">As a member of our community, you will enjoy the following benefits:</p>
                                    <ul style="color: #ffffff; font-family: Arial, sans-serif; font-size: 20px; margin-left: 20px;">
                                        <li>Access to a wide selection of games for all platforms: PC, consoles, and mobile devices.</li>
                                        <li>Special offers and exclusive discounts for our members.</li>
                                        <li>Regular updates on the latest game releases and reviews.</li>
                                        <li>The opportunity to be part of a community of passionate gamers.</li>
                                    </ul>
                                    <p style="color: #ffffff; font-family: Arial, sans-serif; font-size: 20px;">We welcome you aboard Arcade World! We hope you enjoy your experience on our platform and find the games that you are most passionate about.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p style="color: #ffffff; font-family: Arial, sans-serif; font-size: 20px;">If you need assistance or have any questions, our support team will be happy to help you at all times.</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
        
                `,
        };
    
        const response = await transporter.sendMail(mailOptions);
        return response.accepted[0] === Email
    } catch (error) {
        return false;
    }
}

const correoDeBaneo = async (Email) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "arcadeworld2023@gmail.com",
                pass: "aqemmhzlcloqjixq",
            },
        });
    
        const mailOptions = {
            from: "arcadeworld2023@gmail.com",
            to: Email,
            subject: "BIENVENIDO A ARCADE_WORLD",
            html: `<!DOCTYPE html>
            <html>
            <head>
                <title>Bienvenido a Arcade World: Tu Destino para Comprar Juegos</title>
            </head>
            <body>
                <table width="100%" bgcolor="#2a2a2a">
                    <tr>
                        <td>
                            <table align="center" width="600" style="background-color: #1c1c1c; padding: 30px; margin-top: 20px; margin-bottom: 20px; border-radius: 10px; text-align: center;">
                                <tr>
                                    <td>
                                        <img src="https://tuurl.com/logo_VG.png" alt="Logo de Arcade World" width="200">
                                        <h1 style="color: #ffffff; font-family: Arial, sans-serif; font-size: 28px; margin-top: 20px;">¡Bienvenido a Arcade World!</h1>
                                        <p style="color: #ffffff; font-family: Arial, sans-serif; font-size: 20px;">Tu destino para comprar y explorar el emocionante mundo de los videojuegos.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p style="color: #ffffff; font-family: Arial, sans-serif; font-size: 20px;">En Arcade World, estás a punto de embarcarte en un emocionante viaje a través de un vasto mundo de videojuegos.</p>
                                        <p style="color: #ffffff; font-family: Arial, sans-serif; font-size: 20px;">Como miembro de nuestra comunidad, disfrutarás de las siguientes ventajas:</p>
                                        <ul style="color: #ffffff; font-family: Arial, sans-serif; font-size: 20px; margin-left: 20px;">
                                            <li>Acceso a una amplia selección de juegos para todas las plataformas: PC, consolas y dispositivos móviles.</li>
                                            <li>Ofertas especiales y descuentos exclusivos para nuestros miembros.</li>
                                            <li>Actualizaciones periódicas sobre los últimos lanzamientos y reseñas de juegos.</li>
                                            <li>La oportunidad de formar parte de una comunidad de jugadores apasionados.</li>
                                        </ul>
                                        <p style="color: #ffffff; font-family: Arial, sans-serif; font-size: 20px;">¡Te damos la bienvenida a bordo de Arcade World! Esperamos que disfrutes de tu experiencia en nuestra plataforma y que encuentres los juegos que más te apasionen.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p style="color: #ffffff; font-family: Arial, sans-serif; font-size: 20px;">Si necesitas asistencia o tienes alguna pregunta, nuestro equipo de soporte estará encantado de ayudarte en todo momento.</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>
            </html>
            `,
        };

        const response = await transporter.sendMail(mailOptions);
        return response.accepted[0] === Email
    } catch (error) {
        return false
    }

}

const correoDeDesbaneo = async (Email) => {
    try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "arcadeworld2023@gmail.com",
            pass: "aqemmhzlcloqjixq",
          },
        });
        
        const mailOptions = {
          from: "arcadeworld2023@gmail.com",
          to: Email,
          subject: "BIENVENIDO A ARCADE_WORLD",
          html: `<!DOCTYPE html>
        <html>
        <head>
            <title>Notificación de Desbaneo en Arcade World</title>
        </head>
        <body>
            <table width="100%" bgcolor="#2a2a2a">
                <tr>
                    <td>
                        <table align="center" width="600" style="background-color: #1c1c1c; padding: 30px; margin-top: 20px; margin-bottom: 20px; border-radius: 10px; text-align: center;">
                            <tr>
                                <td>
                                    <img src="https://tuurl.com/logo_VG.png" alt="Logo de Arcade World" width="200">
                                    <h1 style="color: #ffffff; font-family: Arial, sans-serif; font-size: 28px; margin-top: 20px;">Notificacion de Desbaneo en Arcade World</h1>
                                    <p style="color: #ffffff; font-family: Arial, sans-serif; font-size: 20px;">Estamos encantados de informarte que tu cuenta en Arcade World ha sido desbaneada.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p style="color: #ffffff; font-family: Arial, sans-serif; font-size: 20px;">Ahora puedes volver a disfrutar de todos los servicios y funcionalidades de Arcade World. Sin embargo, te recordamos que es esencial que respetes y cumplas con las normas de nuestra comunidad.</p>
                                    <p style="color: #ffffff; font-family: Arial, sans-serif; font-size: 20px;">El cumplimiento de nuestras normas es fundamental para mantener un ambiente seguro y agradable para todos nuestros miembros.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p style="color: #ffffff; font-family: Arial, sans-serif; font-size: 20px;">Te agradecemos por ser parte de la comunidad de Arcade World y te animamos a disfrutar de los videojuegos y compartir tu pasion con otros miembros de la plataforma.</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
          `,
        };

        const response = await transporter.sendMail(mailOptions);
        return response.accepted[0] === Email
    } catch (error) {
        return false
    }

}



const correoDeCambioDeContraseña = async (Email) => {
    try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "arcadeworld2023@gmail.com",
            pass: "aqemmhzlcloqjixq",
          },
        });
        
        const mailOptions = {
          from: "arcadeworld2023@gmail.com",
          to: Email,
          subject: "BIENVENIDO A ARCADE_WORLD",
          html: `<!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Cambio de Contraseña en ARCADE WORLD</title>
            <style>
                body {
                    background-color: #171a21;
                    font-family: Arial, Helvetica, sans-serif;
                    color: #ffffff;
                    text-align: center;
                }
        
                .container {
                    width: 700px;
                    margin: 0 auto;
                    background: #1e222e;
                    border: 5px solid #171a21;
                    border-radius: 20px;
                    padding: 20px;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
                }
        
                .logo {
                    width: 150px;
                    height: 150px;
                    margin: 0 auto;
                }
        
                h1 {
                    font-size: 36px;
                    text-transform: uppercase;
                }
        
                p {
                    font-size: 20px;
                    line-height: 1.4;
                }
        
                .button-container {
                    margin-top: 30px;
                }
        
                .button {
                    display: inline-block;
                    padding: 15px 40px;
                    background: #2e86de;
                    color: #ffffff;
                    font-size: 24px;
                    text-decoration: none;
                    border: none;
                    border-radius: 8px;
                    transition: background-color 0.3s, color 0.3s;
                }
        
                .button:hover {
                    background: #1f65b1;
                }
        
                .footer {
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <img class="logo" src="https://your-game-image-url.png" alt="Logo de ARCADE WORLD">
                <h1>Cambio de Contraseña en ARCADE WORLD</h1>
                <p>Hola ${name},</p>
                <p>Hemos recibido una solicitud para cambiar tu contraseña en ARCADE WORLD. Si no has solicitado este cambio, te recomendamos que contactes a nuestro equipo de soporte de inmediato.</p>
                <p>Si eres tú quien ha solicitado el cambio, puedes hacerlo siguiendo el enlace a continuación:</p>
                <div class="button-container">
                    <a class="button" href="https://www.arcadeworld.com/cambiar-contrasena" target="_blank">Cambiar Contraseña</a>
                </div>
            </div>
            <div class="footer">
                &copy; Equipo de desarrollo de <a href="https://www.arcadeworld.com" target="_blank">ARCADE WORLD</a>
            </div>
        </body>
        </html>
        
          `,
        };

        const response = await transporter.sendMail(mailOptions);
        return response.accepted[0] === Email
    } catch (error) {
        return false
    }
}

module.exports = {
    correoDeBienvenida, 
    correoDeBaneo,
    correoDeDesbaneo,
    correoDeCambioDeContraseña
}
