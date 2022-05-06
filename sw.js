self.addEventListener("install", e =>{
    console.log("Install!");
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll(["./","./css/style.css","./images/carousel.jpeg","./images/logo192x192.png","./images/step1.png","./images/step2.png", "./images/step3.png","./images/step4.png","./images/step5.png", "./images/step6.png","./images/logo512x512.png"]);
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
