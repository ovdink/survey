
let count = 0, max = 10;

function addName() {
  count++;

  let newElement = document.createElement('div');
  let newValue = document.createElement('input');
  newValue.setAttribute('type', 'number');
  console.log('new value', newValue);
  newValue.onchange = (e) => {
    console.log('onchan', e.target.value);
    limit(Number(e.target.value));
  }
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

function limit(val) {
  let sum = Number(document.getElementById('limit').value);

  if (val > sum || val < 0)
    alert('Неверное значение!');
  else
    sum = sum - val;

  console.log('limit_after_change', sum);
  document.getElementById('limit').value = sum;
}

function delName() {
  windowSurname.parentElement.removeChild(windowSurname, windowComment, windowValue);
}
