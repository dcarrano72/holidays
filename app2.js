
/////////////////////////////////////////////
// Countries and Flags //////////////////////
/////////////////////////////////////////////

// restcountries url
const allCountries = "https://restcountries.eu/rest/v2/all"



// display country flags
const handleData = (data) => {
    for (let i = 0; i < data.length; i++) {
        const $flagContainer = $('<div>').addClass('flag-container');
        const $countryFlags = $('<img>').addClass('flag-image');
        const $countryLink = $('<a>').attr('id', data[i].alpha2Code);
        $countryLink.addClass('country-link');
        $countryLink.attr('href', "#");
        $countryFlags.attr('src', data[i].flag);

        $countryLink.append($countryFlags);
        $flagContainer.append($countryLink);
        $('.display').append($flagContainer);

    }
};



// get country flags
$('form').on('submit', (event) => {
    event.preventDefault();
    const endpoint = allCountries;
    $.ajax({ url: endpoint }).then(handleData)
})







///////////////////////////////////////////
// Show Holidays //////////////////////////
///////////////////////////////////////////



// close modal window
const closeModal = () => {
    $('.modal-bg').css({ "display": "none" });
    $('.modal').css({ "display": "none" });
    $('.close').css({ "display": "none" });
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

    const $countryInfo = $('<div>').addClass('country-info-box').text("Country Name");
    $('.modal').prepend($countryInfo);

    $('.close').on('click', closeModal);
}



// click on flag
$('.display').on('click', '.country-link', (event) => {
    event.currentTarget;
    const $flagId = $(event.currentTarget).attr('id')
    const holidays = `https://calendarific.com/api/v2/holidays?&api_key=5a8eccc7acb1769980c56ad2c4b93af2943950a5&country=${$flagId}&year=2019`;
    const endpoint = holidays;
    $.ajax({ url: endpoint }).then(handleData2)
})

