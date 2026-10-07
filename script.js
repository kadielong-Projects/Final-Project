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

const sortAnime = document.getElementById("sortAnime");

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

    document.getElementById("searchText").style.display = "none";
    document.getElementById("spinner").style.display = "inline-block";

    setTimeout(function() {
        window.location.href =
            "anime.html?search=" + encodeURIComponent(searchText);
    }, 1000);
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

    // A - Z
    if (sortAnime.value === "az") {
        results.sort(function(a, b) {
            return a.name.localeCompare(b.name);
        });
    }

    // Z - A
    if (sortAnime.value === "za") {
        results.sort(function(a, b) {
            return b.name.localeCompare(a.name);
        });
    }

    // Rating: Low to High
    if (sortAnime.value === "low") {
        results.sort(function(a, b) {
            return a.rating - b.rating;
        });
    }

    // Rating: High to Low
    if (sortAnime.value === "high") {
        results.sort(function(a, b) {
            return b.rating - a.rating;
        });
    }

    displayAnime(results);
}

searchInput.addEventListener("input", function() {
    updateAnime();
});

if (animeList && searchInput && sortAnime) {
    const params = new URLSearchParams(window.location.search);

    searchInput.value = params.get("search") || "";

    searchInput.addEventListener("input", updateAnime);
    sortAnime.addEventListener("change", updateAnime);

    updateAnime();
}
