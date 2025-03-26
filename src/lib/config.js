import { writable } from 'svelte/store';

export const getConfig = writable(async function () {
    try {
        const res = await fetch("/config.json");

        if (!res.ok) {
            return {
                error: true,
                title: "Error loading config.json",
                text: `Error: ${res.status} ${res.statusText}`,
            };
        }

        const data = await res.json();

        return data
    } catch (error) {
        return {
            error: true,
            title: "Error parsing config.json",
            text: `Error: ${error.message}, ${error.stack}`,
        };
    }
});
