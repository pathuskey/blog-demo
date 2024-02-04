import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const path = req.nextUrl.searchParams.get('path');

  if (!path) {
    return NextResponse.json({ revalidated: false, reason: 'No path was found' });
  }  

  try {
    // Revalidate the URLs for those documents
    revalidatePath(path, 'page');
    return NextResponse.json({ revalidated: true });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}