import { Server } from "bun";

const helloBunServer = Bun.serve({
    port: 8080,
    // @ts-ignore
    async fetch(request: Request, server: Server): Response | Promise<Response> {
        console.log(request.url, await request.text() || '{}');
        return new Response('Hello from Bun server.');
    }
});

console.log(`Listening ${helloBunServer.port} port.`);
