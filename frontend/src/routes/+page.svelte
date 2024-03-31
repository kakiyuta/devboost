<script>
    import { Alert } from 'flowbite-svelte';
    import { InfoCircleSolid } from 'flowbite-svelte-icons';
</script>

<div class="p-8">
    <Alert>
        <InfoCircleSolid slot="icon" class="w-4 h-4" />
        <span class="font-bold">Info alert!</span>
        Change a few things up and try submitting again.
    </Alert>
</div>
