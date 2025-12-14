document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("addBuildBtn");
    const grid = document.getElementById("buildGrid");

    if (!button || !grid) return;

    button.addEventListener("click", function () {
        const name = document.getElementById("carName").value.trim();
        const desc = document.getElementById("carDesc").value.trim();
        const file = document.getElementById("carImage");

        if (!name || !desc) {
            alert("Fill out all fields");
            return;
        }

        const card = document.createElement("div");
        card.className = "card";

        if (file.files.length > 0) {
            const img = document.createElement("img");
            img.src = URL.createObjectURL(file.files[0]);
            card.appendChild(img);
        }

        card.innerHTML += `<h3>${name}</h3><p>${desc}</p>`;
        grid.appendChild(card);

        document.getElementById("carName").value = "";
        document.getElementById("carDesc").value = "";
        file.value = "";
    });
});
