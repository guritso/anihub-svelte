<script>
    let { repo } = $props();

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
        });
    }
</script>

<a href={repo.url} target="_blank" class="repo-card">
    <div class="repo-card-info">
        <div>
            <p class="repo-card-title">{repo.name}</p>
            <p class="repo-card-description">
                {repo.description || "No description available."}
            </p>
            <p class="repo-card-info-item">
                Language: <span>{repo.language || "Unknown"}</span>
            </p>
        </div>
        <div class="repo-card-bottom">
            <p class="repo-card-info-item">
                &#9733; <span>{repo.stars || 0}</span>
            </p>
            <p class="repo-card-info-item-updated">
                {formatDate(repo.updated)}
            </p>
        </div>
    </div>
</a>

<style>
    .repo-card {
        height: 167px;
        border-radius: 1rem;
        border: 1px solid #3a3f41;
        display: flex;
        flex-direction: row;
    }

    .repo-card:hover {
        border-color: #60686b;
        background-color: #222425;
    }

    .repo-card:active {
        transform: scale(0.995);
        border-color: #2f3536;
        background-color: #121414;
    }

    .repo-card-info {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.5rem;
    }

    .repo-card-title {
        font-size: 1.05rem;
        font-weight: 400;
        margin-bottom: 0.5rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-decoration: none;
    }

    .repo-card-description {
        font-size: 0.9rem;
        color: #94a3b8;
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

    .repo-card-info-item span {
        font-weight: 400;
    }

    p {
        margin: 0;
    }
</style>
