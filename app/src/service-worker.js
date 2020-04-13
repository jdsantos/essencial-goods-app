import {registerRoute} from 'workbox-routing';
import {
    StaleWhileRevalidate
} from 'workbox-strategies';
import {
    CacheableResponsePlugin
} from 'workbox-cacheable-response';
import {
    ExpirationPlugin
} from 'workbox-expiration';

import {
    CacheFirst
} from 'workbox-strategies';


console.log("PATCHON");


// Cache the Google Fonts stylesheets with a stale while revalidate strategy.
registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
    }),
);


// Cache the Google Fonts webfont files with a cache first strategy for 1 year.
registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new CacheableResponsePlugin({
                statuses: [0, 200],
            }),
            new ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
            }),
        ],
    }),
);

registerRoute(/\.(?:js|css)$/, new StaleWhileRevalidate());

registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    new CacheFirst({
        cacheName: 'images',
        plugins: [
            new ExpirationPlugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
        ],
    }),
);

import {precacheAndRoute} from 'workbox-precaching';

precacheAndRoute([
  {url: '/', revision: null},
], {
  // Ignore all URL parameters.
  ignoreURLParametersMatching: [/.*/]
});