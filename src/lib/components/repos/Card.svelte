<script>
    import githubSvg from "$lib/assets/github.svg?raw";

    let { repo } = $props();

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
        });
    }

    function isRecentlyUpdated(updatedDate) {
        const updated = new Date(updatedDate);
        const now = new Date();
        const diffDays = (now - updated) / (1000 * 60 * 60 * 24);
        return diffDays < 7;
    }
</script>

<a href={repo.url} target="_blank" class="repo-card" aria-label={`Repository ${repo.name}`}>
    <div class="repo-card-info">
        <div>
            <p class="repo-card-title">{@html githubSvg} {repo.name}</p>
            <p class="repo-card-description">
                {repo.description || "No description available."}
            </p>
            <p class="repo-card-info-item">
                Language: <span>{repo.language || "Unknown"}</span>
            </p>
        </div>
        <div class="repo-card-bottom">
            <p class="repo-card-info-item">
                ★ <span>{repo.stars || 0}</span>
            </p>
            <p class="repo-card-info-item-updated">
                {formatDate(repo.updated)}
                {#if isRecentlyUpdated(repo.updated)}
                    <span class="recently-updated">updated</span>
                {/if}
            </p>
        </div>
    </div>
</a>

<style>
    .repo-card {
        height: 160px;
        border-radius: var(--card-border-radius);
        border: var(--card-border-size) solid var(--border-color);
        display: flex;
        flex-direction: row;
    }

    .repo-card:hover {
        transform: scale(1.01);
        border-color: var(--border-color-hover);
        background-color: var(--background-color-hover);
    }

    .repo-card:active {
        transform: scale(0.98);
        border-color: var(--border-color-active);
        background-color: var(--background-color-active);
    }

    .repo-card-info {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.5rem;
    }

    .repo-card-title {
        display: flex;
        font-size: 1.05rem;
        font-weight: 400;
        margin-bottom: 0.5rem;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
    }

    .repo-card-description {
        font-size: 0.9rem;
        color: var(--text-color-highlight);
        margin: 0.5rem 0;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .repo-card-info-item {
        font-size: 0.95rem;
        font-weight: 300;
    }

    .repo-card-bottom {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex-direction: row;
    }

    .repo-card-info-item-updated {
        font-size: 0.8rem;
        font-weight: 300;
        text-align: right;
        margin-right: 0.2rem;
    }

    .recently-updated {
        background-color: #57a059;
        color: var(--text-color);
        padding: 2px 5px;
        border-radius: 3px;
        font-size: 0.7rem;
        margin-left: 5px;
    }

    .repo-card-info-item span {
        font-weight: 400;
    }

    p {
        margin: 0;
    }
</style>