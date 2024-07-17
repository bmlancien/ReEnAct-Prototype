import { NextResponse } from 'next/server';

const username = 'admin';
const password = 'password123';

export function middleware(req) {
  const basicAuth = req.headers.get('authorization');

  if (basicAuth) {
    const [user, pwd] = Buffer.from(basicAuth.split(' ')[1], 'base64').toString().split(':');

    if (user === username && pwd === password) {
      return NextResponse.next();
    }
  }

  return new NextResponse('Unauthorized', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}
