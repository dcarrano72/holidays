
const country = "US";
const holidays = `https://calendarific.com/api/v2/holidays?&api_key=5a8eccc7acb1769980c56ad2c4b93af2943950a5&country=${country}&year=2019`;

const usHolidays = "https://calendarific.com/api/v2/holidays?&api_key=5a8eccc7acb1769980c56ad2c4b93af2943950a5&country=US&year=2019";

const stateNames = "response.holidays[413].states[0].name";

const allCountries = "https://restcountries.eu/rest/v2/all"

const countryFlags = "[0].flag"

const handleData1 = (data) => {
    const $numEntered = $('#num-of-holidays').val();
    const $numOfHolidays = parseInt($numEntered);
    console.log($numOfHolidays)
    for (let i = 0; i < $numOfHolidays; i++) {
        const $holidayContainer = $('<div>')
            .addClass('holiday-container');

        const $holidayNames = $('<div>')
            .addClass('holiday-names')
            // .attr('id', i)
            .text(data.response.holidays[i].name);
        $holidayContainer.append($holidayNames);

        const $holidayDates = $('<div>')
            .addClass('holiday-dates')
            // .attr('id', i)
            .text(data.response.holidays[i].date.iso);
        $holidayContainer.append($holidayDates);

        const $holidayDescription = $('<div>')
            .addClass('holiday-description')
            // .attr('id', i)
            .text(data.response.holidays[i].description);
        $holidayContainer.append($holidayDescription);
        $('.display').append($holidayContainer);

    }
};




$('form').on('submit', (event) => {
    event.preventDefault();

    const endpoint = holidays; // create endpoint based on query

    $.ajax({ url: endpoint }).then(handleData1) // get data asynchronously, when the data gets back, handle it
})