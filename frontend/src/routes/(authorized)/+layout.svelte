<script>
    import '$lib/app.pcss';
    import Headers from './Header.svelte';
</script>

<div class="app">
    <Headers />
    <main>
        <slot />
    </main>
</div>

<style>
</style>
