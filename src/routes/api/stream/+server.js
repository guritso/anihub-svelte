import crypto from "node:crypto";

const clients = new Set();

export function GET({ url, request }) {
    const stream = new ReadableStream({
        start(controller) {
            const client = {
                id: crypto.randomUUID(),
                controller,
                send: (data) => {
                    controller.enqueue(`data: ${JSON.stringify(data)}\n\n`);
                }
            };

            clients.add(client);

            return () => {
                clients.delete(client);
            };
        }
    });

    return new Response(stream, {
        headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive'
        }
    });
}

export function _broadcast(data) {
    data.count = clients.size;

    clients.forEach(client => {
        try {
            client.send(data);
        } catch (err) {
            clients.delete(client);
        }
    });
}
