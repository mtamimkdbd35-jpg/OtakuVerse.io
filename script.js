// Fetch manga data from JSON
fetch('manga.json')
  .then(response => response.json())
  .then(data => {
    const mangaListContainer = document.getElementById('manga-list');

    // Loop through each manga and create HTML elements
    data.forEach(manga => {
      const mangaCard = document.createElement('div');
      mangaCard.classList.add('comic-card');

      // Add manga cover image
      const img = document.createElement('img');
      img.src = manga.image;
      img.alt = `${manga.title} Cover`;

      // Add manga title and author
      const title = document.createElement('h3');
      title.textContent = manga.title;

      const author = document.createElement('p');
      author.textContent = `Author: ${manga.author}`;

      // Add a link to the manga's individual page
      const mangaLink = document.createElement('a');
      mangaLink.href = manga.link;
      mangaLink.textContent = "Read Now";

      mangaCard.appendChild(img);
      mangaCard.appendChild(title);
      mangaCard.appendChild(author);
      mangaCard.appendChild(mangaLink);

      mangaListContainer.appendChild(mangaCard);
    });
  })
  .catch(error => console.error('Error loading manga data:', error));
