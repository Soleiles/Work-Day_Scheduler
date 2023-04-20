$(function () {
  // ****** Time Slot ID's ****** //
  let timeSlot = [
    { id: "hour-9", hour: 9},
    { id: "hour-10", hour: 10},
    { id: "hour-11", hour: 11},
    { id: "hour-12", hour: 12},
    { id: "hour-13", hour: 13},
    { id: "hour-14", hour: 14},
    { id: "hour-15", hour: 15},
    { id: "hour-16", hour: 16},
    { id: "hour-17", hour: 17}
  ];

  let userEntry = [];

  // ****** Time Variables ****** 
  let currentYear = dayjs().$y;
  let currentMonth = dayjs().format("MMMM");
  let currentDayOfMonth = dayjs().$D;
  let currentDayName = dayjs().format("dddd");
  let currentHour = dayjs().format("HH");
  let todaysDate = dayjs().format("dddd, MMMM D, YYYY");

  // ****** Display current day ****** //
  $("#currentDay").text(`${todaysDate}`);

  // ****** Data Entry is saved on refresh ****** //
  if (localStorage.getItem("day-planner-events") !== null) {
    userEntry = JSON.parse(localStorage.getItem("day-planner-events"));

    localStorage.setItem("day-planner-events", JSON.stringify(userEntry));

    $.each(userEntry, function (key, value) {
      if (value.day === todaysDate) {
        let entryHourId = `#${value.hour}`;
        $(entryHourId).find("textarea").text(value.event);
    }});
}

  $.each(timeSlot, function (key, value) {
    let idHour = value.id;

    if (value.hour < currentHour) {
      $(idHour).removeClass("future");
      $(idHour).removeClass("present");
      $(idHour).addClass("past");
    } else if (value.hour == currentHour) {
      $(idHour).removeClass("future");
      $(idHour).removeClass("past");
      $(idHour).addClass("present");
    } else {
      $(idHour).removeClass("present");
      $(idHour).removeClass("past");
      $(idHour).addClass("future");
    }
  });
});
