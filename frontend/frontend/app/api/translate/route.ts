import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { text, target } = await req.json();

    if (!text || !target) {
      return NextResponse.json(
        { error: "Missing text or target language" },
        { status: 400 }
      );
    }

    if (target === "fr") {
      return NextResponse.json({ translatedText: text });
    }

    const response = await fetch("https://libretranslate.com/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        q: text,
        source: "fr",
        target,
        format: "text",
      }),
    });

    const data = await response.json();

    return NextResponse.json({
      translatedText: data.translatedText ?? text,
    });
  } catch {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}