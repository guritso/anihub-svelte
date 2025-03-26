<script>
    import Card from "./Card.svelte";

    let { config } = $props();
    let repos = $state([]);

    $effect(async () => {
        const { excludeStatus } = config.repos;

        if (!config.user?.github) return;

        const data = await fetch(`https://api.github.com/users/${config.user.github}/repos?sort=updated`);

        repos = await data.json();
        repos = repos.filter((repo) => !config.repos.exclude.includes(repo.name))
            .filter((repo) => repo.fork && excludeStatus.includes('fork') ? false : true)
            .filter((repo) => repo.archived && excludeStatus.includes('archived') ? false : true);
    });
</script>

<div class="repos-layout">
    <div class="repos-container"> 
        {#each repos as repo}
            <Card repo={repo} />
        {/each}
    </div>
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

    @media (max-width: 600px) {
        .repos-layout {
            border: none;
        }
    }
</style>