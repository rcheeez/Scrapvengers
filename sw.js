self.addEventListener("install", e =>{
    console.log("Install!");
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll(["./","./css/style.css","./fonts/Kadwa-Bold.ttf","./fonts/Monda-Bold.ttf","./fonts/Kadwa-Regular.ttf","./fonts/Monda-Regular.ttf","./images/carousel.jpeg","./images/logo192x192.png","./images/step1.png","./images/step2.png", "./images/step3.png","./images/step4,.png","./images/step5.png", "./images/step6.png","./images/logo512x512.png", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"]);
        })
    );
})

self.addEventListener("fetch", e =>{
    console.log(`Fetch ${e.request.url}`);
    e.respondWith(
        caches.match(e.request).then(res =>{
            return res || fetch(e.request);
        })
    );
})
