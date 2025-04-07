import { writable } from "svelte/store";

export const webhookData = writable({ count: 0 });

let eventSource;

export function initWebhookListener() {
    if (typeof window === "undefined") return;

    if (eventSource) {
        eventSource.close();
    }

    eventSource = new EventSource("/api/webhook/events");

    eventSource.onmessage = (event) => {
        try {
            const data = JSON.parse(event.data);
            webhookData.set(data);
        } catch (error) {
            console.error("Error parsing webhook data:", error);
        }
    };

    eventSource.onerror = (error) => {
        console.error("EventSource error:", error);
        eventSource.close();

        setTimeout(initWebhookListener, 5000);
    };

    return () => {
        if (eventSource) {
            eventSource.close();
        }
    };
}
