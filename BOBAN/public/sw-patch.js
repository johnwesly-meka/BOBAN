// Service Worker Patch for handling problematic Next.js files
// This script patches the service worker to handle 404 responses gracefully

// Override the default precaching behavior
if (typeof workbox !== 'undefined') {
  // Skip problematic files during precaching
  const originalPrecache = workbox.precaching.precacheAndRoute;
  
  workbox.precaching.precacheAndRoute = function(entries, options) {
    // Filter out problematic files
    const filteredEntries = entries.filter(entry => {
      const url = typeof entry === 'string' ? entry : entry.url;
      const problematicPatterns = [
        'app-build-manifest.json',
        'build-manifest.json',
        '_buildManifest.js',
        '_ssgManifest.js',
        'middleware-manifest.json'
      ];
      
      return !problematicPatterns.some(pattern => url.includes(pattern));
    });
    
    console.log('[SW Patch] Filtered precache entries:', filteredEntries.length, 'of', entries.length);
    return originalPrecache.call(this, filteredEntries, options);
  };
}

// Add error handling for fetch events
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Skip problematic Next.js files
  const problematicPatterns = [
    'app-build-manifest.json',
    'build-manifest.json',
    '_buildManifest.js',
    '_ssgManifest.js',
    'middleware-manifest.json'
  ];
  
  if (problematicPatterns.some(pattern => url.pathname.includes(pattern))) {
    // Return a 404 response for these files instead of trying to cache them
    event.respondWith(
      new Response('Not Found', {
        status: 404,
        statusText: 'Not Found',
        headers: { 'Content-Type': 'text/plain' }
      })
    );
    return;
  }
});

console.log('[SW Patch] Service worker patch loaded');
