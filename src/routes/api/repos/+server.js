import { json } from "@sveltejs/kit";

const cache = new Map();
const cacheDuration = 60 * 1000 * 10; // 10 minutes

export async function GET({ url }) {
    const user = url.searchParams.get("user");

    if (!user) {
        return json({ error: "User is required" }, { status: 400 });
    }

    try {
        const cachedData = cache.get(user);

        if (cachedData) {
            return json(cachedData);
        }

        const response = await fetch(`https://api.github.com/users/${user}/repos?sort=updated`);
        const data = await response.json();

        saveToCache(user, reduceJson(data));

        return json(reduceJson(data));
    } catch (error) {
        return json({ error: "Failed to fetch repos" }, { status: 500 });
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

function saveToCache(user, data) {
    cache.set(user, data);

    setTimeout(() => {
        cache.delete(user);
    }, cacheDuration);
}
