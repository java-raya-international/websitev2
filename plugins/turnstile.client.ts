// plugins/turnstile.client.ts
import { defineNuxtPlugin, useRouter } from '#app';

export default defineNuxtPlugin({
    name: 'turnstile-plugin',
    async setup(nuxtApp) {
        nuxtApp.provide('handleTurnstile', async () => { /* ... (same as before) */ });

        const router = useRouter();

        router.beforeEach(async (to, from, next) => {
            const { handleTurnstile } = useNuxtApp();

            // Check if Turnstile is needed for this route (e.g., based on route meta)
            const requiresTurnstile = to.meta.requiresTurnstile ?? true; // Default to true if meta is not set

            if (requiresTurnstile) {
                const result = await handleTurnstile();
                if (result) {
                    next(); // Proceed to the route
                } else {
                    // Redirect to an error page or display a message
                    next('/turnstile-error'); // Example: redirect to /turnstile-error
                    // Or:
                    // alert("Turnstile verification failed. Please try again.");
                    // next(false); // Prevent navigation
                }
            } else {
                next(); // Proceed if Turnstile is not required
            }
        });
    },
});