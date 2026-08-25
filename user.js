const animeList = [
    { name: "Demon Slayer", genre: "Action", rating: 8.7 },
    { name: "Jujutsu Kaisen", genre: "Action", rating: 8.6 },
    { name: "Daemons of the Shadow Realm", genre: "Action", rating: 7.8 },
    { name: "Re:Zero", genre: "Mystery", rating: 8.2 },
    { name: "Apothecary Diaries", genre: "Action", rating: 8.9 },
    { name: "Bleach", genre: "Action", rating: 8.1 },
    { name: "Solo Leveling", genre: "Action", rating: 8.5 },
    { name: "Tokyo Revengers", genre: "Action", rating: 7.9 },
    { name: "Jaadugaar", genre: "Action", rating: 7.5 },
    { name: "Black Torch", genre: "Action", rating: 8.0 }
];


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

const sortRating = document.getElementById("sortRating");

if (sortRating) {

    sortRating.addEventListener("change", updateAnime);

    updateAnime();
}


function updateAnime() {

    const searchInput = document.getElementById("searchInput");

    const searchText = searchInput
        ? searchInput.value.toLowerCase()
        : "";

    let results = animeList.filter(anime =>
        anime.name.toLowerCase().includes(searchText)
    );


    if (sortRating.value === "low") {

        results.sort((a, b) => a.rating - b.rating);

    }

    if (sortRating.value === "high") {

        results.sort((a, b) => b.rating - a.rating);

    }

    console.log(results);
}