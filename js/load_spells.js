import objectsArray from "./data.js";

function load_spells() {
    const spell_container = document.querySelector(".modal-container-spells");
    objectsArray.forEach((spell) => {
        let spell_div = document.createElement("div");
        spell_div.classList.add("modal-spell");

        let spell_img = document.createElement("img");
        spell_img.src = spell.image;
        spell_img.alt = spell.name;
        spell_img.classList.add("modal-spell-img");


        let spell_name = document.createElement("p");
        spell_name.textContent = spell.name;
        spell_name.classList.add("modal-spell-name");

        let spell_combination = document.createElement("p");
        spell_combination.textContent = spell.combination;
        spell_combination.classList.add("modal-spell-combination");

        spell_div.appendChild(spell_img);
        spell_div.appendChild(spell_name);
        spell_div.appendChild(spell_combination);

        spell_container.appendChild(spell_div);
    })
}

load_spells();