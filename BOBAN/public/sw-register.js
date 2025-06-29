// Manual Service Worker Registration with Error Handling
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    // Handle service worker errors globally
    window.addEventListener('unhandledrejection', function(event) {
      if (event.reason && event.reason.message && event.reason.message.includes('bad-precaching-response')) {
        console.warn('🔧 Handled precaching error:', event.reason.message);
        event.preventDefault(); // Prevent the error from being logged
      }
    });

    navigator.serviceWorker.register('/sw.js')
      .then(function(registration) {
        console.log('✅ Service Worker registered successfully:', registration.scope);

        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          console.log('🔄 New service worker found, installing...');

          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                console.log('🆕 New content available, please refresh.');
                // Show update notification to user
                if (confirm('New version available! Reload to update?')) {
                  window.location.reload();
                }
              } else {
                console.log('✅ Content cached for offline use.');
              }
            }
          });
        });
      })
      .catch(function(error) {
        console.error('❌ Service Worker registration failed:', error);
      });

    // Listen for service worker messages
    navigator.serviceWorker.addEventListener('message', event => {
      console.log('📨 Message from service worker:', event.data);
    });

    // Handle service worker updates
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      console.log('🔄 Service worker controller changed');
      window.location.reload();
    });
  });

  // Handle online/offline events
  window.addEventListener('online', () => {
    console.log('🟢 Back online');
    // Sync any pending data
    if ('serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype) {
      navigator.serviceWorker.ready.then(registration => {
        return registration.sync.register('background-sync');
      });
    }
  });

  window.addEventListener('offline', () => {
    console.log('🔴 Gone offline');
  });
} else {
  console.warn('⚠️ Service Worker not supported in this browser');
}
