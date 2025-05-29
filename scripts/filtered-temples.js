document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;


const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('primaryNav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuBtn.textContent = nav.classList.contains('open') ? '✖' : '☰';
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Lisbon Portugal",
        location: "Lisbon, Portugal",
        dedicated: "2019, September, 15",
        area: 23770,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lisbon-portugal/400x400/02-e8863cabbdad35c4efdf1301e5b453cd7d622423.jpeg"
    },

    {
        templeName: "Cardston Alberta",
        location: "Cardston, Alberta, Canada",
        dedicated: "1962, July, 2",
        area: 88562,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/cardston-alberta-temple/cardston-alberta-temple-13257.jpg"
    },

    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 29",
        area: 53997,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340.jpg"
    },
];

const container = document.getElementById("templeContainer");

temples.forEach((temple) => {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const caption = document.createElement("figcaption");

    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    caption.innerHTML = `
        <strong>${temple.templeName}</strong><br>
        Location: ${temple.location}<br>
        Dedicated: ${temple.dedicated}<br>
        Area: ${temple.area.toLocaleString()} sq ft
    `;

    figure.appendChild(img);
    figure.appendChild(caption);
    container.appendChild(figure);
});

function displayTemples(filteredTemples) {
    const container = document.getElementById("templeContainer");
    container.innerHTML = "";

    filteredTemples.forEach((temple) => {
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        const caption = document.createElement("figcaption");

        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy";

        caption.innerHTML = `
            <strong>${temple.templeName}</strong><br>
            Location: ${temple.location}<br>
            Dedicated: ${temple.dedicated}<br>
            Area: ${temple.area.toLocaleString()} sq ft
        `;

        figure.appendChild(img);
        figure.appendChild(caption);
        container.appendChild(figure);
    });
}

displayTemples(temples);

function setActiveLink(linkId) {
    document.querySelectorAll("nav.navigation a").forEach(link => {
        link.classList.remove("active");
    });
    document.getElementById(linkId).classList.add("active");
}

document.getElementById("home").addEventListener("click", (event) => {
    event.preventDefault();
    setActiveLink("home");
    displayTemples(temples);
});

document.getElementById("old").addEventListener("click", (event) => {
    event.preventDefault();
    setActiveLink("old");
    const oldTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
    });
    displayTemples(oldTemples);
});

document.getElementById("new").addEventListener("click", (event) => {
    event.preventDefault();
    setActiveLink("new");
    const newTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
    });
    displayTemples(newTemples);
});

document.getElementById("large").addEventListener("click", (event) => {
    event.preventDefault();
    setActiveLink("large");
    const largeTemples = temples.filter((temple) => temple.area > 90000);
    displayTemples(largeTemples);
});

document.getElementById("small").addEventListener("click", (event) => {
    event.preventDefault();
    setActiveLink("small");
    const smallTemples = temples.filter((temple) => temple.area < 10000);
    displayTemples(smallTemples);
});