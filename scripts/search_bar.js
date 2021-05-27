$(document).ready(function() {
	function search(text) {
		const url = window.location;
		const base_url = url.protocol + "//" + url.host + "/" + url.pathname.split('/')[1];
		// This is bad but we are not on a server and have no user information so who cares.
		window.location.href = base_url + "/html/search.html?search=" + text;
	}

	const search_bar = document.getElementById('search');
	if (search_bar !== null) {
		search_bar.addEventListener('search', (e) => search(e.target.value));
		search_bar.addEventListener('keydown', (e) => { if (e.key === 'Enter') search(search_bar.value) });
	}
});
