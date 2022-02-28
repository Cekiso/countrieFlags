const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];
const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];


countries.forEach((element, index) => {
    const emoji = flags[index];

    const displayFruits = document.createElement("ul");
    displayFruits.innerHTML = `${element} ${emoji}`;
    document.body.appendChild(displayFruits);
})



function countrie() {

}