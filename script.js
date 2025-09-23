// Functionality to fetch and display manga data from JSON
fetch("manga.json")
  .then(response => response.json())
  .then(data => {
    const list = document.querySelectorAll('.manga-card');
    data.forEach(manga => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${manga.image}" alt="${manga.title}">
        <p>${manga.title}</p>
        <p>Author: ${manga.author}</p>
        <a href="${manga.link}">Read Now</a>
      `;
      list.appendChild(card);
    });
  });
