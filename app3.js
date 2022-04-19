

// API URLS ////////////////////

// restcountries url
const allCountries = "https://restcountries.eu/rest/v2/all"

// calendarific holidays / must enter country code at $flagId variable
const holidays = `https://calendarific.com/api/v2/holidays?&api_key=5a8eccc7acb1769980c56ad2c4b93af2943950a5&country=${$flagId}&year=2019`;




// FUNCTIONS

// create flags from data function
const getFlags = () => {

}

// create holidays list function 
const createHolidayList = () => {

}

// get country info
const getCountryInfo = () => {

}

// close modal function
const closeModal = () => {

}

// display hover box with country info summary
const hoverCountryInfo = () => {

}



// HANDLE DATA FUNCTIONS

// handle data to create flags and hover windows
const handleData = () => {

    getFlags()

    hoverCountryInfo()

}


// handle data from both apis
const handleData2 = () => {

    getCountryInfo();

    createHolidayList();

}




// ajax calls
$.when(

    $.ajax({ url: endpoint }),
    $.ajax({ url: endpoint })

).then(handleData1, handleData2)

