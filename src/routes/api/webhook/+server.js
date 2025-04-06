export async function POST({ request }) {
    try {
        const body = await request.json();

        console.log(body);

        return new Response(JSON.stringify({ message: "OK" }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Error" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
