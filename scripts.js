let count = 0, max = 10;
let limitVal = Number(document.getElementById('limit').value);
let allValues = [];

function addName(value) {
  count++;

  let newElement = document.createElement('div');
  let newValue = document.createElement('input');
  newValue.setAttribute('type', 'number');
  console.log('new value', newValue);
  newValue.onchange = (e) => {
    let wasThereANumber = allValues[value] ? allValues[value] : 0;
    if (Number(e.target.value) <= limitVal && Number(e.target.value) >= 0) {
      allValues[value] = Number(e.target.value);
      console.log('onchan', e.target.value);
      limit(allValues[value], wasThereANumber);
      console.log(allValues);
    }
    else
      alert('Неверное значение!');
  };
  let newComment = document.createElement('input')

  newElement.setAttribute('id', 'windowSurname');
  newValue.setAttribute('id', 'windowValue');
  newComment.setAttribute('id', 'windowComment');

  newElement.textContent = select.value;

  surnames.appendChild(newElement);
  surnames.appendChild(newValue);
  surnames.appendChild(newComment);

  if (count > max) {
    alert("Превышен лимит!");
  }
  newElement.addEventListener('click', delName);
}

function limit(val, wasThereANumber) {
  limitVal = wasThereANumber === 0 ?  limitVal : (limitVal + wasThereANumber);
  limitVal = limitVal - val;

  console.log('limit_after_change', limitVal);
  document.getElementById('limit').value = limitVal;
}

function delName() {
  windowSurname.parentElement.removeChild(windowSurname, windowComment, windowValue);
}
