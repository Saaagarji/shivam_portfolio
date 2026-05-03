import { NextResponse } from "next/server";

export async function GET() {
  // Redirect "About" nav to Instagram portfolio for the creative portfolio
  const instagramLink = process.env.NEXT_PUBLIC_INSTAGRAM_LINK || "https://instagram.com/shivamgupta";
  return NextResponse.redirect(instagramLink);
}