import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "stephane.antoine.pro@gmail.com",
      subject: `Nouveau message de ${name}`,
      html: `<p><b>Email:</b> ${email}</p><p>${message}</p>`,
    });

    return NextResponse.json({ message: "Email envoyé ✅" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Erreur lors de l'envoi de l'email" },
      { status: 500 }
    );
  }
}
