self.addEventListener("fetch", (event) => {
	// console.log('fetching somethign', event);
	// event.respondWith(fetch(event.request));
	event.respondWith(
		caches.match(event.request).then((response) => {
			if (response) {
				// console.log(response);
				console.log("getting data from cached versions");
				return response;
			}
			return fetch(event.request).then((res) =>
				caches
					.open("dynamic1")
					.then((cache) => {
						cache.put(event.request.url, res.clone());
						return res;
					})
					.catch((err) => {
						console.log(err);
					})
			);
		})
	);
});
