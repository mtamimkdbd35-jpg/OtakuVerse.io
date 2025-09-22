// Dark Mode Toggle
document.getElementById('theme-btn').addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
  const themeButton = document.getElementById('theme-btn');
  themeButton.innerText = themeButton.innerText === "🌙" ? "🌞" : "🌙"; // Toggle icon
});

// Fetch and display manga data from manga.json
fetch("manga.json")
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById("manga-list");
    data.forEach(manga => {
      const card = document.createElement("a");
      card.href = manga.link;  // Link to the manga's individual page
      card.className = "card";
      card.innerHTML = `
        <img src="${manga.image}" alt="${manga.title}">
        <div class="manga-info">
          <div class="title">${manga.title}</div>
          <div class="author">${manga.author}</div>
        </div>
      `;
      list.appendChild(card);  // Add manga card to the list
    });
  });
