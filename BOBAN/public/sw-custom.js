// Custom service worker additions
// This file will be imported by the generated service worker

// Listen for skip waiting message
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('⚡ Service Worker: Received SKIP_WAITING message')
    self.skipWaiting()
  }
})

// Enhanced install event
self.addEventListener('install', (event) => {
  console.log('🔧 Service Worker: Installing...')
  // Force the waiting service worker to become the active service worker
  self.skipWaiting()
})

// Enhanced activate event
self.addEventListener('activate', (event) => {
  console.log('✅ Service Worker: Activated')
  // Take control of all pages immediately
  event.waitUntil(self.clients.claim())
})

// Enhanced fetch event with better error handling
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return
  }

  // Skip non-HTTP(S) requests
  if (!event.request.url.startsWith('http')) {
    return
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request)
          .then((fetchResponse) => {
            // Check if we received a valid response
            if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
              return fetchResponse
            }

            // Clone the response for caching
            const responseToCache = fetchResponse.clone()

            caches.open('runtime-cache')
              .then((cache) => {
                cache.put(event.request, responseToCache)
              })

            return fetchResponse
          })
          .catch(() => {
            // Return a custom offline page if available
            if (event.request.destination === 'document') {
              return caches.match('/offline.html') || 
                     new Response('Offline - Please check your connection', {
                       status: 503,
                       statusText: 'Service Unavailable',
                       headers: { 'Content-Type': 'text/plain' }
                     })
            }
            
            // For other requests, just fail
            throw new Error('Network request failed and no cache available')
          })
      })
  )
})

// Background sync for when connection is restored
self.addEventListener('sync', (event) => {
  console.log('🔄 Service Worker: Background sync triggered')
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle any queued requests here
      console.log('Processing background sync...')
    )
  }
})

// Push notification handling
self.addEventListener('push', (event) => {
  console.log('📱 Service Worker: Push notification received')
  
  const options = {
    body: event.data ? event.data.text() : 'New notification',
    icon: '/icon-192x192.png',
    badge: '/icon-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Explore',
        icon: '/icon-72x72.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icon-72x72.png'
      }
    ]
  }

  event.waitUntil(
    self.registration.showNotification('BOBAN PWA', options)
  )
})

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  console.log('🔔 Service Worker: Notification clicked')
  
  event.notification.close()

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    )
  } else if (event.action === 'close') {
    // Just close the notification
    return
  } else {
    // Default action - open the app
    event.waitUntil(
      clients.openWindow('/')
    )
  }
})

console.log('🚀 Custom Service Worker loaded successfully')
