<script>
    let { anime } = $props();
</script>

<article class="anime-card">
    <div class="anime-card-image">
        <img src={anime.imageUrl} alt={anime.name} />
    </div>
    <div class="anime-card-info">
        <div>
            <a href={anime.url} target="_blank" class="anime-card-title"
                >{anime.name}</a
            >
            <p class="anime-card-info-item">
                Episodes: <span>{anime.user.episodes}/{anime.episodes}</span>
            </p>
            <p class="anime-card-info-item">
                Status: <span>{anime.user.status}</span>
            </p>
            <p class="anime-card-info-item">
                Scored: <span
                    >{anime.user.score ? anime.user.score : "N/A"}</span
                >
            </p>
        </div>
        <div>
            <p class="anime-card-info-item-updated">{anime.user.updated}</p>
        </div>
    </div>
</article>

<style>
    .anime-card {
        width: 100%;
        height: 238px;
        border-radius: 1rem;
        border: 1px solid #3a3f41;
        display: flex;
        flex-direction: row;
    }

    .anime-card:hover {
        transform: scale(1.01);
    }

    .anime-card-image img {
        border-radius: 1rem;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        width: 170px;
        height: 100%;
        object-fit: cover;
    }

    .anime-card-info {
        width: 170px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.3rem;
    }

    .anime-card-title {
        font-size: 1.05rem;
        font-weight: 600;
        font-weight: 400;
        margin-bottom: 0.5rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-decoration: none;
    }

    .anime-card-info-item {
        font-size: 0.95rem;
        font-weight: 300;
    }

    .anime-card-info-item-updated {
        font-size: 0.8rem;
        font-weight: 300;
        text-align: right;
        margin-right: 0.2rem;
    }

    .anime-card-info-item span {
        font-weight: 400;
    }

    .anime-card-title:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    p {
        margin: 0;
    }

    @media (max-width: 600px) {
        .anime-card {
            flex-direction: column;
            height: 300px;
        }

        .anime-card-image {
            width: 100%;
            height: 190px;
        }

        .anime-card-image img {
            width: 100%;
            border-radius: 1rem;
        }

        .anime-card-title {
            -webkit-line-clamp: 1;
            line-clamp: 1;
        }
    }
</style>
