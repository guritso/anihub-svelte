import { json } from '@sveltejs/kit';

export async function GET({ url }) {
    const user = url.searchParams.get('user');

    try {
        const response = await fetch(`https://myanimelist.net/animelist/${user}/load.json?offset=0&order=5&status=7`);
        const data = await response.json();

        return json(reduceJson(data));
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
    return url.replace('/r/192x272/', '/').replace('.jpg', '.webp').split('?')[0];
}

function getDate(date) {
    const dateObj = new Date(date * 1000);
    return dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
