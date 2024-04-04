import { writable } from 'svelte/store';
import { Auth0Client } from '@auth0/auth0-spa-js';

export const authClient = writable<Auth0Client>();
