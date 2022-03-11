describe(' countryFlags function', function() {
    describe('', function() {

        it('should be able to display the list of country names and flags', function() {
            let testingFlag = countryFlags();
            testingFlag.country('Argentina,Brazil,Chile,Zambia,Uganda,Malawi,Rwanda,Ireland,Switzerland 🇦🇷,🇧🇷,🇨🇱,🇿🇲,🇺🇬,🇲🇼,🇷🇼,🇮🇪,🇨🇭');
            assert.equal(testingFlag.country('brazil', '🇧🇷'))


        });
    })
    describe('Adding a new country', function() {

        it('should be able to add a new country name and the flag', function() {
            let testingFlag = countryFlags();
            testingFlag.countrieBox('South Africa');
            assert.equal(testingFlag.countrieBox('South Africa', '🇿🇦'))


        });
    })
})