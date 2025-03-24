import { json } from '@sveltejs/kit';

export async function GET({ url }) {
  return json({
    data: {
        user: {
            name: "Guritso",
            bio: "I like to code and watch animes",
            avatar: "https://guritso.site/profile/picture/1224db7310c94b94b1217b6fa14d379db912c4394afb911cbc8bfcc0faf127be.webp"
        },
        social: [
            {
                name: "X",
                username: "guritso",
                url: "https://x.com/guritso",
            },
            {
                name: "Github",
                username: "Guritso",
                url: "https://github.com/Guritso",
            },
            {
                name: "MyAnimeList",
                username: "Guritso",
                url: "https://myanimelist.net/profile/Guritso",
            },
        ],
        animes: {
            filter: ["watching", "completed"],
            rowSpeed: 0.6
        },
        repos: {
            fork: false,
            archived: false,
        }
    }
  });
}