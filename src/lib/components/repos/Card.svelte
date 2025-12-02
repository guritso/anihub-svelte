<script>
    import githubSvg from "$lib/assets/github.svg?raw";
    import fireSvg from "$lib/assets/fire.svg?raw";
    import linkSvg from "$lib/assets/link.svg?raw";

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

    function openWebsite(url) {
        window.open(url, '_blank');
    }
</script>

<a
    href={repo.url}
    target="_blank"
    class="repo-card"
    aria-label={`Repository ${repo.name}`}
 >
    <div class="repo-card-info">
        <div>
            <div class="repo-card-title-container">
                <div class="repo-card-title-container-icon">
                    {@html githubSvg}
                </div>
                <p class="repo-card-title">{repo.name}</p>
            </div>
            <p class="repo-card-description">
                {repo.description || "No description available."}
            </p>
            <p class="repo-card-info-item">
                Language: <span>{repo.language || "Unknown"}</span>
            </p>
        </div>
        <div class="repo-card-bottom">
            <div class="repo-card-bottom-left">
                {#if repo.homepage}
                    <div onclick={() => openWebsite(repo.homepage)} onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { openWebsite(repo.homepage); e.preventDefault(); } }} class="repo-website-button" role="button" tabindex="0" aria-label="Visit website">
                        {@html linkSvg}
                    </div>
                {/if}
                <p class="repo-card-info-item">
                    ★ <span>{repo.stars || 0}</span>
                </p>
            </div>
            <p class="repo-card-info-item-updated">
                {#if isRecentlyUpdated(repo.updated)}
                    <span class="recently-updated">
                        {@html fireSvg}
                    </span>
                {/if}
                {formatDate(repo.updated)}
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
        box-sizing: border-box;
    }

    .repo-card-title-container {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
    }

    .repo-card-title-container-icon {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        height: 100%;
    }

    .repo-card-title {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        font-size: 1.04rem;
        font-weight: 400;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
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

    .repo-card-bottom-left {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .repo-website-button {
        font-size: 1rem;
        color: var(--text-color);
        transition: color 0.2s;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .repo-website-button:hover {
        color: var(--text-color-highlight);
    }

    .repo-card-info-item-updated {
        display: flex;
        flex-direction: row;
        height: 100%;
        align-items: center;
        font-size: 0.8rem;
        font-weight: 300;
        text-align: right;
        margin-right: 0.2rem;
    }

    .recently-updated {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--count-fire-color);
        font-weight: 400;
        border-radius: var(--button-border-radius);
        font-size: 0.8rem;
        margin-right: 6px;
    }

    .repo-card-info-item span {
        font-weight: 400;
    }

    p {
        margin: 0;
    }
</style>
