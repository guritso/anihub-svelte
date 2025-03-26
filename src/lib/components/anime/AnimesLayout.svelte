<script>
    import Card from "./Card.svelte";

    let { config } = $props();
    let animes = $state([]);

    $effect(async () => {
        if (!config.user?.myAnimeList) return;

        const res = await fetch(`/api/anime/list?user=${config.user.myAnimeList}`);
        const data = await res.json();

        const filter = config.anime.filter;

        animes = data.filter((card) => filter.includes(card.user.status)).slice(0, 30);
        animes = [...animes, ...animes];
    });
</script>

<div class="animes-layout">
    <div class="animes-container">
        {#each animes as anime}
            <Card anime={anime} />
        {/each}
    </div>
</div>

<style>
    .animes-layout {
        border: 1px solid #3a3f41;
        border-radius: 1rem;
        padding: 1rem;
        min-height: 240px;
        overflow: hidden;
    }

    .animes-container {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        width: max-content;
        animation: scroll 100s infinite linear;
        animation-delay: 2s;
    }

    .animes-container::-webkit-scrollbar {
        display: none;
    }

    .animes-container:hover {
        animation-play-state: paused;
    }

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }
</style>
