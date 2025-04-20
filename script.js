function loadQuote() {
    fetch("https://corse-proxy-0z8v.onrender.com/api/https://zenquotes.io/api/random")
        .then(res => res.json())
        .then(data => {
            const quote = data[0];
            document.getElementById("quote").textContent = `"${quote.q}"`;

            const authorLink = document.getElementById("authorLink");
            authorLink.href = `https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(quote.a)}`;
            authorLink.textContent = ` ${quote.a}`;

            const authorContainer = document.getElementById("author");
            authorContainer.innerHTML = `― <a id="authorLink" href="${authorLink.href}" target="_blank">${quote.a}</a>`;

            document.getElementById("quote-container").classList.add("visible");
        })
        .catch(error => {
            document.getElementById("quote").textContent = "Fehler beim Laden des Zitats.";
            document.getElementById("author").textContent = "";
            console.error(error);
        });
}
loadQuote();

const hour = new Date().getHours();
const imageUpdateHourElement = document.getElementById("imageUpdateHour");
const background = document.querySelector('.background');

const imageUpdateHour = [
{
until: 3,
image: "assets/3.jpg"
},
{
until: 6,
image: "assets/6.jpg"
},
{
until: 9,
image: "assets/9.jpg"
},
{
until: 12,
image: "assets/12.jpg"
},
{
until: 15,
image: "assets/15.jpg"
},
{
until: 18,
image: "assets/18.jpg"
},
{
until: 21,
image: "assets/21.jpg"
},
{
until: 24,
image: "assets/24.jpg"
}
];

const match = imageUpdateHour.find(entry => hour < entry.until);

if (match) {
    imageUpdateHourElement.textContent = String(match.until).padStart(2, '0') + ":00";
    background.style.backgroundImage = `url('${match.image}')`;
}