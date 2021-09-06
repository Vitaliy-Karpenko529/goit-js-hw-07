document.querySelectorAll(".item h2").forEach(elem => console.log(`Categories: ${elem.textContent},
Amount of elements: ${elem.nextElementSibling.children.length}`))