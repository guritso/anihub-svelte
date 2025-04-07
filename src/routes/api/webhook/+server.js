import { _broadcast } from '../stream/+server.js';

export async function POST({ request }) {
    try {
        const body = await request.json();
        
        _broadcast(body);

        return new Response(JSON.stringify({ message: "OK" }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Error", error: error.message }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
