<script>
  let { size = "2rem" } = $props();
</script>

<div
  class="spinner"
  aria-label="Loading"
  style={`width: ${size}; height: ${size};`}
></div>

<style>
  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: var(--primary-color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: auto;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>
