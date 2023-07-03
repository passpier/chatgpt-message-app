import { NextRequest, NextResponse } from "next/server";
import { query } from "@firebase/firestore";

export async function POST(request: NextRequest) {
  try {
    const res = await request.json();
    const { prompt, chatId, model, session } = res;

    if (!prompt) {
      return NextResponse.json(
        { answer: "Please provide a prompt!" },
        { status: 400 }
      );
    }

    if (!chatId) {
      return NextResponse.json(
        { answer: "Please provide a valid chat ID!" },
        { status: 400 }
      );
    }

    const response = await query(prompt, chatId, model);
    const message: Message = {
      text: response || "ChatGPT was unable to find an answer for that!",
    };

    return NextResponse.json({ name: "John Doe" });
  } catch (e) {
    console.log(e);
    return NextResponse.json({}, { status: 500 });
  }
}
