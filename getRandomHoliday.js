
// get todays random holiday
const getRandomHoliday = (data) => {
    for (let i = 0; i < data.length; i++) {
        // const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const monthNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        // const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const d = new Date();
        // const $todaysDate = `Today is ${days[d.getDay()]} ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
        const dataDate = data.response.holidays[i].date.iso;

        const dateMatch = `${d.getYear()}-${monthNumber[d.getMonth()]}-${d.getDate()}`;
        if (dataDate == dateMatch) {
            const $holidayMessage = $('<h2>').text(`Happy ${data.response.holidays[i].name}`);
            $('header').append($holidayMessage);
        }

    }
}

// get data for today's US Holiday
const todaysHoliday = () => {
    const usHolidays = 'https://calendarific.com/api/v2/holidays?&api_key=5a8eccc7acb1769980c56ad2c4b93af2943950a5&country=US&year=2019';
    const endpoint = usHolidays;
    $.ajax({ url: endpoint }).then(getRandomHoliday)
    console.log(usHolidays);
}

todaysHoliday();

getRandomHoliday();