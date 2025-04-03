<script>
    import Card from "./Card.svelte";

    let { config } = $props();
    let animes = $state([]);
    let status = $state("loading...");

    let rowSpeed = $derived(
        animes.length > 3 ? animes.length / config.anime.rowSpeed : 0,
    );

    $effect(async () => {
        if (!config.user?.myAnimeList) return;

        const res = await fetch(
            `/api/animes?user=${config.user.myAnimeList}&cache=${config.anime.cache}`,
        );
        const data = await res.json();

        if (data.error) {
            status = data.error;
            return;
        }

        const filter = config.anime.filter;

        animes = data.filter((card) => filter.includes(card.user.status))
            .slice(0, config.anime.limit);

        if (config.anime.limit > 3) {
            animes = [...animes, ...animes];
        }
    });

    setTimeout(() => {
        if (animes.length === 0) {
            status = "No animes found";
        }
    }, 10000);
</script>

<div class="animes-layout">
    {#if animes.length === 0}
        <div class="animes-loading">
            <p>{status}</p>
        </div>
    {:else}
        <div class="animes-container" style={`--row-speed: ${rowSpeed}s`}>
            {#each animes as anime}
                <Card {anime} />
            {/each}
        </div>
    {/if}
</div>

<style>
    .animes-layout {
        border: var(--layout-border-size) solid var(--border-color);
        border-radius: var(--layout-border-radius);
        padding: 1rem;
        min-height: 240px;
        overflow: hidden;
    }

    .animes-container {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        width: max-content;
        animation: scroll var(--row-speed) linear infinite;
        animation-delay: 1s;
    }

    .animes-container::-webkit-scrollbar {
        display: none;
    }

    .animes-container:hover {
        animation-play-state: paused;
    }

    .animes-loading {
        font-size: 1.3rem;
        font-weight: 500;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }

    @media (max-width: 600px) {
        .animes-layout {
            border: none;
        }
    }
</style>
