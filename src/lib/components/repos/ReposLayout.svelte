<script>
    import Card from "./Card.svelte";

    let { config } = $props();
    let repos = $state([]);
    let status = $state("loading...");

    $effect(async () => {
        const { excludeStatus } = config.repos;

        if (!config.user?.github) return;

        const res = await fetch(
            `/api/repos?user=${config.user.github}`,
        );
        const data = await res.json();

        if (data.error) {
            status = data.error;
            return;
        }
        repos = data.repos
            .filter((repo) => !config.repos.exclude.includes(repo.name))
            .filter((repo) =>
                repo.fork && excludeStatus.includes("fork") ? false : true,
            )
            .filter((repo) =>
                repo.archived && excludeStatus.includes("archived")
                    ? false
                    : true,
            );
    });
</script>

<div class="repos-layout">
    {#if repos.length === 0}
        <div class="repos-loading">
            <p>{status}</p>
        </div>
    {:else}
        <div class="repos-container">
            {#each repos as repo}
                <Card {repo} />
            {/each}
        </div>
    {/if}
</div>

<style>
    .repos-layout {
        display: flex;
        flex-direction: column;
        border: 1px solid #3a3f41;
        border-radius: 1rem;
        gap: 1rem;
        height: 100%;
        min-height: 0;
        flex: 1;
        padding: 1rem;
    }

    .repos-container {
        display: grid;
        overflow-y: auto;
        scrollbar-width: none;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
    }

    .repos-container::-webkit-scrollbar {
        width: none;
    }

    .repos-loading {
        font-size: 1.3rem;
        font-weight: 500;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 600px) {
        .repos-layout {
            border: none;
        }
    }
</style>
