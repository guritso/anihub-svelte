import { json } from '@sveltejs/kit';

const cacheData = new Map();
const cacheDuration = 60 * 1000 * 5; // 5 minutes

export async function GET({ url }) {
    const user = url.searchParams.get('user');
    const cache = url.searchParams.get('cache');

    if (!user) {
        return json({ error: 'Missing user parameter' }, { status: 400 });
    }

    const cachedData = cacheData.get(user);

    if (cachedData && cache === 'true') {
        return json(cachedData);
    }

    try {
        const response = await fetch(`https://myanimelist.net/animelist/${user}/load.json?offset=0&order=5&status=7`);
        const data = await response.json();

        const reducedJson = reduceJson(data);

        saveToCache(user, reducedJson);

        return json(reducedJson);
    } catch (error) {
        return json({ error: 'Failed to fetch anime list' }, { status: 500 });
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
            return 'watching';
        case 2:
            return 'completed';
        case 3:
            return 'on hold';
        case 4:
            return 'dropped';
        case 6:
            return 'plan to watch';
        default:
            return 'unknown';
    }
}

function getImageUrl(url) {
    return url
        ? url.replace('/r/192x272/', '/').replace('.jpg', '.webp').split('?')[0]
        : 'https://placehold.co/192x272?text=No%20image';
}

function getDate(date) {
    const dateObj = new Date(date * 1000);
    return dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function saveToCache(user, data) {
    cacheData.set(user, data);

    setTimeout(() => {
        cacheData.delete(user);
    }, cacheDuration);
}