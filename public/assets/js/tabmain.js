import {
	setWisp,
	makeURL,
	getProxied,
	setTransport,
	setProxy,
} from "/lithium.mjs"





// homepage
document.title = "new tab.";
const h1 = document.querySelector('#main');
const url = document.querySelector('.url');
const card = document.querySelector('#card');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');
const card4 = document.querySelector('#card4');
const foot = document.querySelector('.footer .a');
const foot2 = document.querySelector('.footer .a2');
const foot3 = document.querySelector('.footer .a3');

h1.textContent = "celestial.";
url.placeholder = "search with ease";
card.querySelector('p').innerHTML = "ga<span>m</span>es";
card2.querySelector('p').textContent = "chat";
card3.querySelector('p').textContent = "media";
// i know this is stupid but it looks really ugly when looking in the code so im doing this
card4.querySelector('p').textContent = "tools";
foot.textContent = "settings";
foot2.innerHTML = "dis<span>c</span>ord";
foot2.href = "https:dsc.gg/gnetwork";
foot2.target = "_blank"
foot3.textContent = "legal";

// --- INIT ---
let search =
	localStorage.getItem("search-engine") ||
	"https://search.brave.com/search?q=%s"


setProxy("violet")

setWisp((location.protocol === "https:" ? "wss://" : "ws://") + location.host + "/wisp/");

setTransport("epoxy")


// --- EVENTS ---
url.addEventListener("keyup", async (event) => {
	if (event.key === 'Enter' || event.keyCode === 13) {
		const urlToLoad = makeURL(url.value, search)
		const proxiedUrl = await getProxied(urlToLoad)

		window.location.href = proxiedUrl
	}
})

