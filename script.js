const anime = [

    {
        name: "Solo Leveling",
        rating: 9.1,
        image: "./assets/solo-leveling.jpg",
        genre: "Action • Adventure",
    },
    {
        name: "Demon Slayer",
        rating: 8.7,
        image: "./assets/demon.jpg",
        genre: "Action • Adventure",
    },
    {
        name: "Jujutsu Kaisen",
        rating: 8.9,
        image: "assets/jjk.jpg",
        genre: "Action • Adventure",
    },
    {
        name: "Tokyo Revengers",
        rating: 8.5,
        image: "./assets/tokyo.jpg",
        genre: "Action • Adventure",
    },
    {
        name: "Bleach",
        rating: 9.0,
        image: "./assets/bleach.jpg",
        genre: "Action • Adventure",
    },
    {
        name: "Re:Zero",
        rating: 8.6,
        image: "./assets/rezero.jpg",
        genre: "Mystery • Psychological",
    },
    {
        name: "Apothecary Diaries",
        rating: 8.4,
        image: "./assets/apothecary.jpg",
        genre: "Mystery • Psychological",   
    },
    {
        name: "Daemons of the Shadow Realm",
        rating: 8.3,
        image: "./assets/daemons.jpg",
        genre: "Action • Fantasy",
    },
    {
        name: "Jaadugaar: A Witch in Mongolia",
        rating: 8.2,
        image: "./assets/jaadugar.jpg",
        genre: "Action • Fantasy",
    },
    {
        name: "Black Torch",
        rating: 8.1,
        image: "./assets/black.jpg",
        genre: "Action • Fantasy",
    },
];

const animeList = document.getElementById("animeList");

const searchInput = document.getElementById("searchInput");

const sortRating = document.getElementById("sortRating");

function displayAnime(animeArray) {
    animeList.innerHTML = "";
    animeArray.forEach(function(anime) {
        const animeCard = document.createElement("div");
        animeCard.classList.add("anime-card");
        animeCard.innerHTML = `
            <figure class="anime__img--wrapper">
                <img
                    class="anime__img"
                    src="${anime.image}"
                    alt="${anime.name}"
                >
            </figure>
            <h3 class="anime__title">
                ${anime.name}
            </h3>
            <div class="anime__ratings">
                ⭐⭐⭐⭐⭐
            </div>
            <div class="anime__rating-number">
                Rating: ${anime.rating}
            </div>
            <div class="anime__genre">
                ${anime.genre}
            </div>
        `;
        animeList.appendChild(animeCard);
    });
}


function searchAnime() {

    const searchInput = document.getElementById("searchInput");

    const searchText = searchInput.value.trim();

    if (searchText === "") {
        alert("Please enter an anime name.");
        return;
    }

    window.location.href =
        "anime.html?search=" + encodeURIComponent(searchText);
}


function updateAnime() {
    let results = anime;

    const searchText = searchInput.value.toLowerCase();
    if (searchText !== "") {
        results = anime.filter(function(anime) {
            return anime.name
                .toLowerCase()
                .includes(searchText);
        });
    }

    if (sortRating.value === "low") {
        results.sort(function(a, b) {
            return a.rating - b.rating;
        });
    }

    if (sortRating.value === "high") {
        results.sort(function(a, b) {
            return b.rating - a.rating;
        });

    }
    displayAnime(results);
}

searchInput.addEventListener("input", function() {
    updateAnime();
});

sortRating.addEventListener("change", function() {
    updateAnime();

});

displayAnime(anime);
