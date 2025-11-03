async function loadItems() {
  const res = await fetch("https://YOUR_API/items");
  const items = await res.json();
  const container = document.getElementById("itemsList");
  container.innerHTML = "";

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "item-card";
    div.innerHTML = `
      <h3>${item.title}</h3>
      <p><strong>Type:</strong> ${item.type}</p>
      <p><strong>Location:</strong> ${item.location}</p>
      <p>${item.description}</p>
      <small>${new Date(item.timestamp).toLocaleString()}</small>
    `;
    container.appendChild(div);
  });
}

loadItems();
