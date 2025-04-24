import { json } from "@sveltejs/kit";

export async function GET({ url }) {
    const user = url.searchParams.get("user");

    if (!user) {
        return json({ error: "User parameter is required" }, { status: 400 });
    }

    try {
        const response = await fetch(
            `https://api.github.com/users/${user}/repos?sort=updated`,
            {
                headers: {
                    "User-Agent": "anihub-svelte-app",
                },
            }
        );

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const data = await response.json();

        return json(reduceJson(data));
    } catch (error) {
        return json(
            {
                error: "Failed to fetch repos",
                reason: error.message,
            },
            { status: 500 }
        );
    }
}

function reduceJson(json) {
    return {
        repos: json.map((repo) => {
            return {
                name: repo.name,
                description: repo.description,
                url: repo.html_url,
                updated: repo.updated_at,
                language: repo.language,
                stars: repo.stargazers_count,
                fork: repo.fork,
                archived: repo.archived,
            };
        }),
    };
}
