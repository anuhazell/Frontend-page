document.addEventListener("DOMContentLoaded", function () {
    // Get the current day of the week
    function getCurrentDayOfWeek() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        const dayIndex = currentDate.getDay();
        return daysOfWeek[dayIndex];
    }

    //  Display the current UTC time in milliseconds
    function getCurrentUTCTime() {
        const currentTimeUTC = new Date().getTime();
        return currentTimeUTC;
    }

    // Update the elements with data-testid attributes
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = getCurrentDayOfWeek();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time: ${getCurrentUTCTime()} milliseconds`;
});
