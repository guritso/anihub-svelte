<script>
    import SocialButtons from './SocialButtons.svelte';
</script>

<div class="profile-layout">
    <img src="/profile.jpg" alt="Profile" class="profile-picture" />
    <div class="profile-info">
        <div class="info-container">
            <h1 class="profile-name">ゴリツォ</h1>
            <p class="profile-bio">私はアニメとプログラミングが好きです。暇な時にはゲームをします。</p>
        </div>
        <SocialButtons />
    </div>
</div>

<style>
    .profile-layout {
        display: flex;
        flex-direction: row;
        border: 1px solid #3a3f41;
        border-radius: 1.5rem;
        padding: 1rem;
        gap: 1rem;
        width: 100%;
        box-sizing: border-box;
    }

    .profile-picture {
        width: 150px;
        height: 150px;
        border-radius: 1.5rem;
        object-fit: cover;
        object-position: center;
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
        font-size: 2rem;
        font-weight: bold;
    }

    .profile-bio {
        font-size: 1.2rem;
        line-height: 1.5;
    }

    h1, p {
        margin: 0;
    }

    @media (max-width: 600px) {
        .profile-layout {
            flex-direction: column;
            align-items: center;
        }
    }
</style>
