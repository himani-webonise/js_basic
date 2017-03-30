var select = document.querySelector('select');
var h1 = document.querySelector('h1');
var list = document.querySelector('ul');

select.onchange = function() {
  var choice = select.value;
  var days;

  switch(choice) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      days = 31;
      break;
    case 'April':
    case 'June':
    case 'Sepetember':
    case 'November':
      days = 30;
      break;
    case 'February':    
      days= 28;
  }

  createCalendar(days, choice);
}

function createCalendar(days, choice) {
  list.innerHTML = "";
  h1.innerHTML = choice;
  for (var i = 1; i <=days; i++) {
    var textNode = document.createTextNode(i);
    var li = document.createElement('li');
    li.appendChild(textNode);
    list.appendChild(li);
  }
}

createCalendar(31,'January');