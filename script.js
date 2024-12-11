
// Prevent right-click context menu and certain key combinations
if (window.location !== window.parent.location) {
    window.location.href = 'https://real-pr0xld.w3spaces.com/';
}

document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', event => {
    if (event.ctrlKey && (['c', 'u', 'v', 'i', 'x', 'F12'].includes(event.key))) {
        event.preventDefault();
    }
});

const games = [
    { title: "Funny Shooter 2", url: "https://hva2021.github.io/funny-shooter-2/index.html", img: "https://th.bing.com/th/id/OIP.7tEmnZcPjxiM5_-N7DB4zwAAAA?w=161&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { title: "BitLife", url: "https://hva2021.github.io/bitlife/index.html", img: "https://th.bing.com/th/id/OIP.y2QPqlYp0wH2ukOazERp_gHaD9?w=203&h=108&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { title: "Tumb Of The Mask", url: "https://pr0xl0id.github.io/tumb-mask/", img: "https://th.bing.com/th/id/OIP.aAGZa2_26ZvFqRQt4Tms6wHaH4?w=149&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
     { title: "Paper io 2", url: "https://pr0xl0id.github.io/paper/", img: "https://th.bing.com/th/id/OIP.IMLAVq4BM_IlbqRzVpMp1wAAAA?w=236&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { title: "Slice It", url: "https://www.hoodamath.com/mobile/games/hooda-slice-it/game.html?nocheckorient=1", img: "https://th.bing.com/th/id/OIP.dS_qc2C-LlPpIuaaAiR8WAHaJ8?w=134&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { title: "Moto X3M", url: "https://hva2021.github.io/motox3m/index.html", img: "https://th.bing.com/th/id/OIP.cExtHlhTh9EW1tYkhytnjgHaDn?w=325&h=170&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { title: "Cookie Clicker", url: "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/bobydob/JSEngine@e7d53b913d54429e5e118ca9541fb0f8f1f66bdc/dist/cc.xml&container=ig", img: "https://th.bing.com/th/id/OIP.WTjaE48gkjv6H3m66O1aMAHaHa?w=171&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { title: "Cluster Rush", url: "https://script.google.com/macros/s/AKfycbw6e8fflbfydV7kom5id09nKaM6ix0hLlXHbs3XHOnxzrndUgPtHUHENrwKomI2Hpk3/exec", img: "https://th.bing.com/th/id/OIP.L0FigzedLyiRDDmqGciw_QHaHa?w=174&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { title: "Basketball Stars", url: "https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/bobydob/JSEngine@c0c9f32fd575688ff4b14309e9acf19b73f15e2a/build/bs/bs.xml&container=ig", img: "https://th.bing.com/th/id/OIP.aPCcGKrTF4EirWE0koPc2wHaE8?w=230&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { title: "Retro Bowl", url: "https://vtn5c31dcjtimmb9o2lm882bk13i56hh-a-sites-opensocial.googleusercontent.com/gadgets/ifr?container=enterprise&country=ALL&lang=en&libs=core&mid=88&parent=https://sites.google.com/site/unblockedgame76/retrobowl&sanitize=0&url=https://274079163-174037128449362058.preview.editmysite.com/uploads/b/139890129-899796311729593176/files/rtbl.xml&v=9cec2ba00d185a8c&view=default#st=e=AIHE3cARh%252FjoPlZ5OU7%252BLLI9a2FwQ%252FTahnryzgDyxS7lvJ9qdmn9dQns0T5ihSi82B5JMDVpLcVp%252BV75gv%252F%252Fzh0wlzu7ll%252FrW%252Fg%252FWN3GZBjokEm5XHPf0Nyd5%252F6bxOKGKpYVf0GdiDCl&c=enterprise&rpctoken=-8580663105699196922", img: "https://th.bing.com/th/id/OIP.nYmqfqUPp02WXxzjfA-ULgHaHa?w=156&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { title: "Mr Bullet", url: "https://hva2021.github.io/mr-bullet/index.html", img: "https://th.bing.com/th/id/OIP.5Zjd2PZGp-F0EtdnZcBFhwHaJ4?w=119&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { title: "Subway Surfers San Francisco", url: "https://j0n12.github.io/macvg/projects/subway-surfers/game.html", img: "https://th.bing.com/th/id/OIP.6zXGvO5QmWrVRSvNKMJEmQHaNK?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { title: "There Is No Game", url: "https://j0n12.github.io/macvg/projects/there-is-no-game/game.html", img: "https://th.bing.com/th/id/OIP.bzGTZdMHN4qCQOMpU-QsfgHaEx?w=245&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { title: "Slope", url: "https://gavan228.github.io/gaming/slope/index.html", img: "https://th.bing.com/th/id/OIP.hhIAGoDqX2cgsaHBFoeviAHaHa?w=157&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { title: "Adventure Capitalist", url: "https://than1089.github.io/adventure-capitalist/", img: "https://th.bing.com/th/id/OIP.nOmO6v-5t9DjxsdTORHlbQHaD0?w=297&h=179&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { title: "THE BINDING OF ISAAC", url: "https://jubarea.github.io/TBOI-Lite/src/raw.html", img: "https://th.bing.com/th/id/OIP.cwiyIxSRNmjVp2CxsZCq5QHaG5?w=199&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { title: "Idle Digging Tycoon", url: "https://lnahtml.github.io/a5/idle-digging-tycoon/", img: "https://th.bing.com/th/id/OIP.51vsxBIkVWi_oZn38UwqhgAAAA?w=183&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { title: "Drive Mad", url: "https://lnahtml.github.io/a77/drive-mad/", img: "https://th.bing.com/th/id/OIP.7tW_pC2BrRf_gggcF18WqAHaHa?w=157&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { title: "Murder The King", url: "https://lnahtml.github.io/a5/murder/", img: "https://th.bing.com/th/id/OIP.p-sQs9vRFS7p0cEUO4i_xAHaHa?w=147&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { title: "Idle Lumber Inc", url: "https://lnahtml.github.io/a5/idle-lumber-inc/", img: "https://th.bing.com/th/id/OIP.kmgIeK5Qlh49p3wXG5AwrgHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { title: "Masked Forces", url: "https://lnahtml.github.io/a8/masked-forces/", img: "https://th.bing.com/th/id/OIP.Fkg7dQHRN6t-8VPjJZK13wHaEK?w=282&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { title: "Tiny Fishing", url: "https://lnahtml.github.io/a/tiny-fishing/", img: "https://th.bing.com/th/id/OIP._Oy1ClBqWXwQZibQZqrx4AHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { title: "Rocket Soccer Derby", url: "https://lnahtml.github.io/a6/rocket-soccer-derby/", img: "https://th.bing.com/th/id/OIP.hwojnPzIcL7P64EVhy8SvgHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { title: "Monkey Market", url: "https://hva2021.github.io/monkey-mart/index.html", img: "https://th.bing.com/th/id/OIP.SU9jM6nWOy0iK6rCaJDEtAHaHa?w=166&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { title: "Idle Ants", url: "https://lnahtml.github.io/a5/idle-ants/", img: "http://ts4.mm.bing.net/th?id=OIP.RrlGxRJgRE-DbAJBgnc3ZwHaHa&pid=15.1" },
    { title: "Monster Tracks", url: "https://lnahtml.github.io/a5/monster-tracks/", img: "https://th.bing.com/th/id/OIP.UICL-bvWA_9u0K7lT10g-QHaHa?w=159&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
];

// Open modal for game details
function openModal(gameUrl, gameTitle, isRummerhead = false) {
    document.getElementById("game-iframe").src = gameUrl;
    document.getElementById("modal-title").innerText = gameTitle;
    const modalContent = document.getElementById("modal-content");
    modalContent.classList.toggle('modal-rummerhead', isRummerhead);
    document.getElementById("gameModal").style.display = "block";
}

// Close modal
function closeModal() {
    document.getElementById("game-iframe").src = "";
    document.getElementById("gameModal").style.display = "none";
}

// Open/Close Proxy Modal
function toggleProxyModal() {
    const modal = document.getElementById("proxyModal");
    modal.style.display = (modal.style.display === "block") ? "none" : "block";
}

// Open/Close Partner Modal
function togglePartnerModal() {
    const modal = document.getElementById("partnerModal");
    modal.style.display = (modal.style.display === "block") ? "none" : "block";
}

// Open/Close Links Modal
function toggleLinksModal() {
    const modal = document.getElementById("linksModal");
    modal.style.display = (modal.style.display === "block") ? "none" : "block";
}

// Filter game cards
function filterGames() {
    const searchQuery = document.querySelector('.search-bar').value.toLowerCase();
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        card.style.display = title.includes(searchQuery) ? 'block' : 'none';
    });
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const gameModal = document.getElementById("gameModal");
    const proxyModal = document.getElementById("proxyModal");
    const partnerModal = document.getElementById("partnerModal");
    const linksModal = document.getElementById("linksModal");

    if (event.target === gameModal) closeModal();
    if (event.target === proxyModal) toggleProxyModal();
    if (event.target === partnerModal) togglePartnerModal();
    if (event.target === linksModal) toggleLinksModal();
};

// Toggle Fullscreen
function toggleFullscreen(iframeId) {
    const iframe = document.getElementById(iframeId);
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
    }
}

// Load game cards on page
window.onload = function() {
    const gameContainer = document.getElementById("gameContainer");
    games.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.onclick = () => openModal(game.url, game.title);
        card.innerHTML = `<img src="${game.img}" alt="${game.title}"><h3>${game.title}</h3>`;
        gameContainer.appendChild(card);
        
        // Add a delay for animation
        card.style.animationDelay = `${Math.random() * 0.5}s`;
    });
};
