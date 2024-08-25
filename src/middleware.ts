import { NextResponse, NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {

    const excludedExtensions = /\.(css|js|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|ico)$/i;
    const excludedPaths = /^\/_next\//;
    const pathname = req.nextUrl.pathname;

    // İstek yolu ve uzantıları kontrol et
    if (excludedExtensions.test(pathname) || excludedPaths.test(pathname)) {
        // Eğer yolu ve uzantıları uygunsa, isteği devam ettir
        return NextResponse.next();
    }

    console.log('Middleware çalıştı: ' + pathname);

    // Her şey yolundaysa, isteği devam ettir
    return NextResponse.next();
}
