import { goto } from '$app/navigation';
import { withAuth } from '$lib/auth';
import { get } from 'svelte/store';

export const ssr = false;

export async function load() {
    console.log('dashbord load');
    const auth = withAuth();
    await auth.getUser();
    const user = get(auth.user);
    if (!user) {
        goto('/');
    }
}
