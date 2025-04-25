import { json } from "@sveltejs/kit";
import { GITHUB_TOKEN } from "$env/static/private";

export async function GET({ url }) {
    const user = url.searchParams.get("user");

    if (!user) {
        return json({ error: "User parameter is required" }, { status: 400 });
    }

    const headers = new Headers({
        "User-Agent": "anihub-svelte-app",
        ...(GITHUB_TOKEN && { Authorization: `Bearer ${GITHUB_TOKEN}` })
    });

    try {
        const response = await fetch(
            `https://api.github.com/users/${user}/repos?sort=updated`,
            { headers }
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
