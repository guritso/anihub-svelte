import { json } from "@sveltejs/kit";
import { URL, URLSearchParams } from "node:url";

export async function GET({ url, request }) {
    const user = url.searchParams.get("user");

    if (!user) {
        return json({ error: "User parameter is required" }, { status: 400 });
    }

    const params = new URLSearchParams({
        offset: 0,
        order: 5,
        status: 7,
    });

    const malUrl = new URL(
        `https://myanimelist.net/animelist/${user}/load.json?${params}`
    );

    try {
        const response = await fetch(malUrl, {
            headers: {
                "User-Agent": "anihub-svelte-app",
            },
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const data = await response.json();
        const reducedJson = reduceJson(data);

        return json(reducedJson);
    } catch (error) {
        return json(
            { error: "Failed to fetch anime list", reason: error.message },
            { status: 500 }
        );
    }
}

function reduceJson(json) {
    return json.map((anime) => {
        return {
            name: anime.anime_title,
            episodes: anime.anime_num_episodes,
            airing: anime.anime_airing_status === 1,
            mediaType: anime.anime_media_type_string,
            imageUrl: getImageUrl(anime.anime_image_path),
            url: `https://myanimelist.net/anime/${anime.anime_id}`,
            genres: anime.genres?.map((genre) => genre.name),
            user: {
                status: getStatus(anime.status),
                score: anime.score,
                episodes: anime.num_watched_episodes,
                updated: getDate(anime.updated_at),
            },
        };
    });
}

function getStatus(status) {
    switch (status) {
        case 1:
            return "watching";
        case 2:
            return "completed";
        case 3:
            return "on hold";
        case 4:
            return "dropped";
        case 6:
            return "plan to watch";
        default:
            return "unknown";
    }
}

function getImageUrl(url) {
    return url
        ? url.replace("/r/192x272/", "/").replace(".jpg", ".webp").split("?")[0]
        : "https://placehold.co/192x272?text=No%20image";
}

function getDate(date) {
    const dateObj = new Date(date * 1000);
    return dateObj.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

