import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("http://localhost:3001/banner");

    if (!res.ok) throw new Error(`Erro na API externa: ${res.status}`);

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro ao buscar os banners:", error);
    return NextResponse.json({ error: "Erro ao buscar banners" }, { status: 500 });
  }
}
