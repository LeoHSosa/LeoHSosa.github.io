document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});

const cards = document.querySelector("#card-dinamica");
const templateCard = document.querySelector("#template-card").content;

const fetchData = async () => {
    try {
        loadingData(true);

        const res = await fetch("https://635831fdc27556d289397a4c.mockapi.io/api/v1/tea-herbal");
        const data = await res.json();

        pintarDatos(data);
    } catch (error) {
        console.log(error);
    } finally {
        loadingData(false);
    }
};

const loadingData = (estado) => {
    const loading = document.querySelector("#loading");
    if (estado) {
        loading.classList.remove("d-none");
    } else {
        loading.classList.add("d-none");
    }
};

const pintarDatos = (data) => {
    const fragment = document.createDocumentFragment();

    cards.textContent = "";

    data.forEach((item) => {
        const clone = templateCard.cloneNode(true);
        clone.querySelector("h5").textContent = item.name;
         clone.querySelector("p").textContent = item.descrip;
         clone.querySelector("img").setAttribute("src", item.avatar);

        fragment.appendChild(clone);
    });
    cards.appendChild(fragment);
};