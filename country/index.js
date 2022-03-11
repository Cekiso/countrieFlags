function countryFlags() {


    function country() {
        const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];
        const joinedV = countries.flatMap((flags) => ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"]);
        countries.sort()
        console.log(JSON.stringify(joinedV))

    }

    function countrieBox(flag) {

        const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];
        const countrieFlags = [];
        countrieFlags.push(...countries)
        countries.sort()
    }

    function errorhandling() {
        const regex = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;
        if (!regex.test()) {
            return 'flag requade';
        }
    }
    return {
        country,
        countrieBox,
        errorhandling
    }
}