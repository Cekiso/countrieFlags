const button = document.querySelector('.submit');
const CountryName = document.getElementById("CountryName");
const Country = document.querySelector('.Country');
const newValue = document.querySelector('.newValue');
const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];
const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];

const message = document.querySelector('.message')

// var emojiRegex = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;



countries.sort((a, b) => a.localeCompare(b));

//The forEach will call the function for each element in the array
countries.forEach((element, index) => {
    const emoji = flags[index];

    const displayCountry = document.createElement("ul");
    displayCountry.innerHTML = `${element} ${emoji}`;
    document.body.appendChild(displayCountry);
})



function countrieBox() {

    const regex = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;

    const countrieFlags = document.querySelector('.countrieFlags').value;
    flags.push(countrieFlags);

    let result = countrieFlags(regex)
    const boxvalue = document.getElementById("CountryName").value;
    countries.push(boxvalue);
    const displayCountry = document.createElement("ul");
    displayCountry.innerHTML = boxvalue + countrieFlags;


    document.body.appendChild(displayCountry);


    console.log(countries);
    console.log(countrieFlags);
    console.log(result);



}




button.addEventListener('click', countrieBox)