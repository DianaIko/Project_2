const apiKey = 'ad9d0c0a';  //API ключ
const url = `http://www.omdbapi.com/?t=${movieName}&apikey=ad9d0c0a`;


// Функція для отримання даних про фільм
async function fetchMovie() {
    const movieName = document.getElementById('movieSearch').value;
    if (movieName === "") {
        alert("Please enter a movie name.");
        return;
    }

    const url = `http://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True") {
            // Відображення результатів на сторінці
            document.getElementById('title').textContent = data.Title;
            document.getElementById('poster').src = data.Poster;
            document.getElementById('year').textContent = data.Year;
            document.getElementById('rated').textContent = data.Rated;
            document.getElementById('runtime').textContent = data.Runtime;
            document.getElementById('genre').textContent = data.Genre;
            document.getElementById('director').textContent = data.Director;
            document.getElementById('plot').textContent = data.Plot;
        } else {
            alert("Movie not found!");
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('There was an error fetching the movie data.');
    }
}
