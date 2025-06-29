"use client";

import { useEffect } from "react";

// Define types for Workbox events
interface WorkboxEvent {
  type: string;
  target?: any;
  sw?: ServiceWorker;
  originalEvent?: Event;
  isUpdate?: boolean;
}

interface WorkboxInstance {
  addEventListener: (
    type: string,
    listener: (event: WorkboxEvent) => void
  ) => void;
  register: () => Promise<ServiceWorkerRegistration | undefined>;
  messageSkipWaiting: () => void;
  update: () => Promise<void>;
}

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "serviceWorker" in navigator &&
      window.workbox !== undefined
    ) {
      const wb: WorkboxInstance = window.workbox;

      // Add event listeners to handle any of the generated workbox events
      wb.addEventListener("installed", (event: WorkboxEvent) => {
        console.log("Service Worker installed:", event);
      });

      wb.addEventListener("controlling", (event: WorkboxEvent) => {
        console.log("Service Worker controlling:", event);
      });

      wb.addEventListener("activated", (event: WorkboxEvent) => {
        console.log("Service Worker activated:", event);
      });

      wb.addEventListener("waiting", (event: WorkboxEvent) => {
        console.log("Service Worker waiting:", event);
        // Show update available notification to user
        if (confirm("A new version is available. Reload to update?")) {
          wb.messageSkipWaiting();
          window.location.reload();
        }
      });

      wb.addEventListener("redundant", (event: WorkboxEvent) => {
        console.log("Service Worker redundant:", event);
      });

      wb.addEventListener("externalinstalled", (event: WorkboxEvent) => {
        console.log("External Service Worker installed:", event);
      });

      wb.addEventListener("externalactivated", (event: WorkboxEvent) => {
        console.log("External Service Worker activated:", event);
      });

      // Register the service worker
      wb.register().catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
    }
  }, []);

  return null;
}

// Extend the Window interface to include workbox
declare global {
  interface Window {
    workbox?: WorkboxInstance;
  }
}
