const button = document.querySelector('.submit');
const CountryName = document.getElementById("CountryName");
const Country = document.querySelector('.Country')
const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];
const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];


countries.forEach((element, index) => {
    const emoji = flags[index];

    const displayCountry = document.createElement("ul");
    displayCountry.innerHTML = `${element} ${emoji}`;
    document.body.appendChild(displayCountry);
})


function countrieBox(element) {

    const boxvalue = document.getElementById("CountryName").value;
    countries.push(boxvalue);
    const displayCountry = document.createElement("ul");
    displayCountry.innerHTML = `${element}`;
    document.body.appendChild(displayCountry);

    console.log(countries);


}

button.addEventListener('click', countrieBox)