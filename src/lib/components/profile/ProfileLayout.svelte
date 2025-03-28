<script>
    import Buttons from "./Buttons.svelte";

    let { config } = $props();
</script>

<div class="profile-layout">
    <img
        src={config.user.avatar || "/mine.webp"}
        alt=""
        class="profile-picture"
        crossorigin="anonymous"
    />
    <div class="profile-info">
        <div class="info-container">
            <h1 class="profile-name">{config.user.name}</h1>
            <p class="profile-bio">{config.user.bio}</p>
        </div>
        <Buttons social={config.social} />
    </div>
</div>

<style>
    .profile-layout {
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: row;
        border: var(--layout-border-size) solid var(--border-color);
        border-radius: var(--layout-border-radius);
        padding: 1rem;
        gap: 1rem;
        width: 100%;
        box-sizing: border-box;
    }

    .profile-picture {
        width: 150px;
        height: 150px;
        border-radius: var(--card-border-radius);
        object-fit: cover;
        object-position: center;
        user-select: none;
    }

    .profile-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        overflow: hidden;
    }

    .info-container {
        display: flex;
        flex-direction: column;
    }

    .profile-name {
        font-size: 1.8rem;
        font-weight: 500;
        margin: 0;
    }

    .profile-bio {
        font-size: 1.1rem;
        line-height: 1.5;
        font-weight: 300;
        margin: 0;
    }

    @media (max-width: 600px) {
        .profile-layout {
            flex-direction: column;
            align-items: center;
            border: none;
        }

        .profile-picture {
            width: 120px;
            height: 120px;
        }

        .info-container {
            align-items: center;
            margin-bottom: 1rem;
        }

        .profile-bio {
            text-align: center;
        }
    }
</style>
