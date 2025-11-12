import { NextResponse } from "next/server"

interface ContactRequestBody{
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    await request.json() as ContactRequestBody;
    return NextResponse.json({ message: "Message envoyé avec succès" }, { status: 200 })

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Erreur lors de l'envoi du message";
    return NextResponse.json(
      { message: "Erreur lors de l'envoi du message" },
      { status: 500 }
    )
  }
}
