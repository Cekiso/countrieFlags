const button = document.querySelector('.submit');
const CountryName = document.getElementById("CountryName");
const Country = document.querySelector('.Country');
const newValue = document.querySelector('.newValue');
const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];
const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];

countries.sort((a, b) => a.localeCompare(b));

//The forEach will call the function for each element in the array
countries.forEach((element, index) => {
    const emoji = flags[index];

    const displayCountry = document.createElement("ul");
    displayCountry.innerHTML = `${element} ${emoji}`;
    document.body.appendChild(displayCountry);
})



function countrieBox() {
    let flag = 'No flag selected'


    const select = document.getElementById("countrieFlags");
    // let value = select.options[select.selectedIndex].value;

    if (select.selectedIndex > 0) {
        flag = select.item(select.selectedIndex).textContent;
    }

    const boxvalue = document.getElementById("CountryName").value;
    countries.push(boxvalue);
    const displayCountry = document.createElement("ul");
    displayCountry.innerHTML = boxvalue + flag;


    document.body.appendChild(displayCountry);

    console.log(countries);


}




button.addEventListener('click', countrieBox)