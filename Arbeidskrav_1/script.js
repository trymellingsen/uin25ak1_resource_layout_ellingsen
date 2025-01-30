document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const content = document.getElementById("content");

    function updateContent(category) {
        const resource = ressurser.filter(r => r.category === category).map(r => r)[0]; 
        if (!resource) return;

        content.innerHTML = `
            <h2>${resource.category}</h2>
            <p>${resource.text}</p>
            <ul>
                ${resource.sources.map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join("")}
            </ul>
        `;
    }

    menu.innerHTML = ressurser.map((resource, index) => `
        <button data-category="${resource.category}" class="${index === 0 ? 'active' : ''}">
            ${resource.category}
        </button>
    `).join("");

    document.querySelectorAll("#menu button").forEach(button => {
        button.addEventListener("click", (event) => {
            document.querySelectorAll("#menu button").forEach(btn => btn.classList.remove("active"));
            event.target.classList.add("active");

            updateContent(event.target.dataset.category);
        });
    });

    
    updateContent("HTML");
});
