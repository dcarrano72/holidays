


// restcountries url
const allCountries = "https://restcountries.eu/rest/v2/all"




// get holiday for today 
const getTodaysDate = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    const $todaysDate = `Today is ${days[d.getDay()]} ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    const $h2ForDate = $('<h2>').addClass('todays-date');
    $h2ForDate.text($todaysDate);
    $('header').append($h2ForDate);
}
getTodaysDate();



// display country flags
const handleData = (data) => {

    for (let i = 0; i < data.length; i++) {
        const $flagContainer = $('<div>').addClass('flag-container');
        const $flagLabel = $('<p>').addClass('flag-label').text(data[i].name);
        const $countryFlags = $('<img>').addClass('flag-image');
        const $countryLink = $('<a>').attr('id', data[i].alpha2Code);
        $countryLink.addClass('country-link');
        $countryLink.attr('href', "#");
        $countryFlags.attr('src', data[i].flag);

        $countryLink.append($countryFlags);
        $flagContainer.append($countryLink);
        $flagContainer.prepend($flagLabel);
        $('.display').append($flagContainer);

    }
};



// get country flags
$('form').on('submit', (event) => {
    event.preventDefault();
    $('.carousel-container').css('display', 'none');
    $('.submit-button').css('display', 'none');
    const endpoint = allCountries;
    $.ajax({ url: endpoint }).then(handleData)
})



// close modal window
const closeModal = () => {

    $('.modal-bg').css({ "display": "none" });
    $('.modal').css({ "display": "none" });
    $('.close').css({ "display": "none" });
    $('.country-info-box').remove();
}



const showCountryDetails = (data) => {
    const $countryInfo = $('<div>').addClass('country-info-box')
    const $countryFlag = $('<img>').attr('src', `${data.flag}`).addClass('country-flag');
    const $countryName = $('<h2>').text(`Holidays in ${data.name}`).addClass('countryHeading');
    const $countryCapital = $('<p>').text(`Capital: ${data.capital}`).addClass('countryCapital');
    const $countryPopulation = $('<p>').text(`Population: ${data.population}`).addClass('countryPop');
    $countryInfo.append($countryFlag);
    $countryInfo.append($countryName);
    $countryInfo.append($countryCapital);
    $countryInfo.append($countryPopulation);
    $('.modal').prepend($countryInfo);

}


// display holidays
const handleData2 = (data) => {
    $('.modal-bg').css({ "display": "block" })
    $('.modal').css({ "display": "block" })
    $('.close').css({ "display": "block" })

    for (let i = 0; i < data.response.holidays.length; i++) {
        const $holidayContainer = $('<div>').addClass('holiday-container');

        const $holidayNames = $('<div>').addClass('holiday-names').text(data.response.holidays[i].name);
        $holidayContainer.append($holidayNames);

        const $holidayDates = $('<div>').addClass('holiday-dates').text(data.response.holidays[i].date.iso);
        $holidayContainer.append($holidayDates);

        const $holidayDescription = $('<div>').addClass('holiday-description').text(data.response.holidays[i].description);
        $holidayContainer.append($holidayDescription);
        $('.modal').append($holidayContainer);

    }

    $('.close').on('click', closeModal);
}



// click on flag
$('.display').on('click', '.country-link', (event) => {
    event.currentTarget;
    const $flagId = $(event.currentTarget).attr('id')
    const holidays = `https://calendarific.com/api/v2/holidays?&api_key=5a8eccc7acb1769980c56ad2c4b93af2943950a5&country=${$flagId}&year=2019`;
    const endpoint = holidays;
    const countryInfo = `https://restcountries.eu/rest/v2/alpha/${$flagId}`;
    $.ajax({ url: endpoint }).then(handleData2)
    $.ajax({ url: countryInfo }).then(showCountryDetails)
})






