import { HttpResponse } from 'src/protocols';

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: { message: data },
});
