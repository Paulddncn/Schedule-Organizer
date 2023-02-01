
// currentDay is being used to track the date on the website
var currentDay = dayjs(); 
$('#currentDay').text(currentDay.format('MMM D, YYYY'));
console.log(currentDay)
//current hour is tracking the hour and classifying all listed hours on the site with past present or future classes
var currentHour = dayjs().hour();
console.log(currentHour)

for (let i =9; i< 18; i++) {
  var hour= $('#hour-' + i)
  console.log(hour);

  if( i < currentHour) {
    hour.addClass('past')
  }
  if (i == currentHour) {
    hour.addClass('present')
  }
  if (i > currentHour){
    hour.addClass('future')
  }
    var textArea = localStorage.getItem('hour-' + i)
console.log(textArea)
hour.children('textarea').val(textArea)

  
}



// the save button stores inputed text into local storage so the user can refresh and still see their list

  var saveBtn = $('.btn');

  function save () {
    var textArea = $(this).siblings('textarea');
    var timeBlockID = $(this).parent().attr('id');
    localStorage.setItem(timeBlockID, textArea.val())
  }

  saveBtn.on('click', save)