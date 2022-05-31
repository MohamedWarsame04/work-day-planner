const renderCurrentDate = () => {
  const currentDate = document.getElementById("currentDay");
  currentDate.textContent = moment().format("MMMM Do YYYY, h:mm:ss a");
};

const onReady = () => {
  // render the date for page
  renderCurrentDate();
  //render the saved data
  renderSavedData();
  // render time blocks on page
  renderTimeblock();
};

$(document).ready(onReady);
