<script lang="ts">
    import { Button } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';
    import { withAuth } from '$lib/auth';
    const auth = withAuth();
</script>

<div class="flex p-8">
    <Button on:click={auth.login}>
        Login <ArrowRightOutline class="ms-2 h-3.5 w-3.5" />
    </Button>
</div>
