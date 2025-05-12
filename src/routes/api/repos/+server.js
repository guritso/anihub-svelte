import { json } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";
import { user } from "../../../config.yaml";

export async function GET() {
    const headers = new Headers({
        "User-Agent": "anihub-svelte-app",
        ...(env.GITHUB_TOKEN && { Authorization: `Bearer ${env.GITHUB_TOKEN}` })
    });

    try {
        const response = await fetch(
            `https://api.github.com/users/${user.github}/repos?sort=updated`,
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
