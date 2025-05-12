<script>
    import Card from "./Card.svelte";
    import Loading from "$lib/components/shared/Loading.svelte";

    let { config } = $props();
    let animes = $state([]);

    let rowSpeed = $derived(
        animes.length > 3 ? animes.length / config.anime.rowSpeed : 0
    );

    $effect(async () => {
        if (!config.user?.myAnimeList) return;

        const res = await fetch(`/api/animes`);
        const data = await res.json();

        const filter = config.anime.filter;

        animes = data
            .filter((card) => filter.includes(card.user.status))
            .slice(0, config.anime.limit);

        if (config.anime.limit > 3) {
            animes = [...animes, ...animes];
        }
    });
</script>

<div class="animes-layout">
    {#if animes.length === 0}
        <div class="animes-loading">
            <Loading size="2rem" />
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
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
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
