<script>
    import Card from "./Card.svelte";
    import Loading from "$lib/components/ui/Loading.svelte";

    let { config } = $props();
    let repos = $state([]);

    $effect(async () => {
        const { exclude, forks, archiveds, limit } = config.repos;

        if (!config.user?.github) return;

        const res = await fetch(`/api/repos`);
        const data = await res.json();

        repos = data.repos
            .filter((repo) => !exclude.includes(repo.name))
            .filter((repo) => {
                if (!forks && repo.fork) return false;
                if (!archiveds && repo.archived) return false;
                return true;
            })
            .slice(0, limit);
    });
</script>

<div class="repos-layout">
    {#if repos.length === 0}
        <div class="repos-loading">
            <Loading size="2rem" />
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
        border: var(--layout-border-size) solid var(--border-color);
        border-radius: var(--layout-border-radius);
        gap: 1rem;
        max-height: 100vh;
        flex: 1;
    }

    .repos-container {
        display: grid;
        overflow-y: auto;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
        padding: 1rem;
    }

    .repos-loading {
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

    @media (max-width: 600px) {
        .repos-layout {
            border: none;
            max-height: 100%;
        }

        .repos-container {
            overflow: hidden;
        }
    }
</style>
