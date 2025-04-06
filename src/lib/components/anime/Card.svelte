<script>
    let { anime } = $props();
    let progressPercentage = $derived(
        anime.episodes > 0 ? (anime.user.episodes / anime.episodes) * 100 : 0
    );

    const statusColor = (status) => {
        switch (status) {
            case "watching":
                return "var(--watching-color)";
            case "completed":
                return "var(--completed-color)";
            case "on-hold":
                return "var(--on-hold-color)";
            case "dropped":
                return "var(--dropped-color)";
            case "plan to watch":
                return "var(--plan-to-watch-color)";
            default:
                return "var(--watching-color)";
        }
    };
</script>

<article
    class="anime-card"
    style={`--current-status-color: ${statusColor(anime.user.status)}`}
>
    <div class="anime-card-image">
        <img
            src={anime.imageUrl}
            alt={anime.name}
            crossorigin="anonymous"
            loading="eager"
        />
    </div>
    <div class="anime-card-info">
        <div>
            <a href={anime.url} target="_blank" class="anime-card-title"
                >{anime.name}</a
            >
            <p class="anime-card-info-item">
                Episodes: <span
                    >{anime.user.episodes}/{anime.episodes || "?"}</span
                >
            </p>
            <div class="progress-bar">
                <div
                    class="progress"
                    style={`width: ${progressPercentage}%`}
                ></div>
            </div>
            <p class="anime-card-info-item">
                Status: <span
                    class={`status-badge status-${anime.user.status.replace(" ", "-")}`}
                    >{anime.user.status}</span
                >
            </p>
            <p class="anime-card-info-item">
                Scored: <span
                    >{anime.user.score ? anime.user.score + "/10" : "N/A"}</span
                >
            </p>
            {#if anime.genres && anime.genres.length > 0}
                <p class="anime-card-info-item anime-card-info-item-genres">
                    {#each anime.genres.slice(0, 3) as genre}
                        <span class="genre-tag">{genre}</span>
                    {/each}
                </p>
            {/if}
        </div>
        <div>
            <p class="anime-card-info-item-updated">{anime.user.updated}</p>
        </div>
    </div>
</article>

<style>
    .anime-card {
        width: 350px;
        height: 238px;
        border-radius: var(--card-border-radius);
        border: var(--card-border-size) solid var(--border-color);
        border-left: 4px solid var(--current-status-color);
        display: flex;
        flex-direction: row;
    }

    .anime-card:hover {
        transform: scale(1.01);
    }

    .anime-card-image img {
        border-radius: var(--card-border-radius);
        width: 170px;
        height: 100%;
        object-fit: cover;
        user-select: none;
    }

    .anime-card-info {
        width: 170px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.5rem;
    }

    .anime-card-title {
        font-size: 1.05rem;
        font-weight: 600;
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

    .progress-bar {
        width: 100%;
        height: 5px;
        background-color: var(--border-color);
        border-radius: 2.5px;
        margin-top: 5px;
    }

    .progress {
        height: 100%;
        background-color: #57a059;
        border-radius: 2.5px;
    }

    .anime-card-info-item-genres {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
    }

    .genre-tag {
        background-color: var(--border-color);
        padding: 2px 6px;
        border-radius: var(--button-border-radius);
        margin-right: 4px;
        font-size: 0.8rem;
        transition: background-color 0.3s ease;
    }

    @media (max-width: 600px) {
        .anime-card {
            flex-direction: column;
            height: auto;
            width: 100%;
        }

        .anime-card-image {
            width: 100%;
            height: 190px;
        }

        .anime-card-image img {
            width: 100%;
            border-radius: var(--card-border-radius);
        }

        .anime-card-title {
            -webkit-line-clamp: 1;
            line-clamp: 1;
        }
    }
</style>
