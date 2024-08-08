import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { nombre, apellidos, asunto, descripcion, servicio, email } =
      await req.json();

    if (
      !nombre ||
      !apellidos ||
      !asunto ||
      !descripcion ||
      !servicio ||
      !email
    ) {
      return new Response(
        JSON.stringify({ error: "Todos los campos son requeridos" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "jorge.aaron.tb@gmail.com",
        pass: "zigv xiri vvfj xdib",
      },
    });

    const mailOptions = {
      from: email,
      to: "jorge.aaron.tb@gmail.com",
      subject: asunto,
      html: `
        <html>
          <body>
            <h1 style="font-family: Arial, sans-serif; color: #333;">Nuevo Mensaje de ${nombre} ${apellidos}</h1>
            <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; color: #333;">
              <tr style="background-color: #f4f4f4;">
                <th style="text-align: left; padding: 8px; border: 1px solid #ddd;">Campo</th>
                <th style="text-align: left; padding: 8px; border: 1px solid #ddd;">Valor</th>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Nombre</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${nombre}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Apellidos</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${apellidos}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Servicio</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${servicio}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Descripción</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${descripcion}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
              </tr>
            </table>
          </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Correo enviado exitosamente" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return new Response(
      JSON.stringify({
        error: "Error al enviar el correo",
        details: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
