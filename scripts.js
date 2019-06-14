let count = 0, max = 10;
let limitVal = Number(document.getElementById('limit').value);
let allValues = [];

function addName(value) {
  count++;
  if (count > max) {
    alert("Превышен лимит 100%. Введите меньшее значение");
  }
  var op = document.getElementById('select').getElementsByTagName('option');
  for (var i = 0; i < op.length; i++) {
  if (op[i].value == value) {
    op[i].disabled = true;
  }
}
  let parent = document.createElement('div'); //главный элемент с входящими элементами
  let newElement = document.createElement('div');
  let newValue = document.createElement('input');
  let newComment = document.createElement('input');
  let newDelete = document.createElement('img');

  newDelete.setAttribute('src', 'https://img.icons8.com/ios/26/000000/delete-sign.png');
  newValue.setAttribute('type', 'number');

  newValue.onchange = (e) => {
    let wasThereANumber = allValues[value] ? allValues[value] : 0;
    if (Number(e.target.value) - 1 < limitVal && Number(e.target.value) >= 0) {
      allValues[value] = Number(e.target.value);
      limit(allValues[value], wasThereANumber);
    }
    else
      alert('Неверное значение!');
  };
  newElement.textContent = select.value;

  const surnames = document.getElementById('surnames');
  parent.setAttribute('id', Math.random().toString(32));
  newDelete.addEventListener('click', del);

  // surnames.appendChild(newElement);
  // surnames.appendChild(newValue);
  // surnames.appendChild(newComment);
  // surnames.appendChild(newDelete);

  parent.appendChild(newElement);
  parent.appendChild(newValue);
  parent.appendChild(newComment);
  parent.appendChild(newDelete);
  surnames.appendChild(parent);


  // для стилей - newElement.setAttribute('class', 'element');
  // newElement.setAttribute('id', Math.random().toString(32));
  // newValue.setAttribute('id', Math.random().toString(32));
  // newComment.setAttribute('id', Math.random().toString(32));
  // newDelete.setAttribute('id', Math.random().toString(32));

  //newDelete.addEventListener('click', delName);
};

function limit(val, wasThereANumber) {
  limitVal = wasThereANumber === 0 ?  limitVal : (limitVal + wasThereANumber);
  limitVal = limitVal - val;
  document.getElementById('limit').value = limitVal;
};

function delName(id) {
  count--;
  let elem = document.getElementById(id);
  console.log(id);
  console.log(elem.firstChild);
  var op = document.getElementById('select').getElementsByTagName('option');
  for (var i = 0; i < op.length; i++) {
  if (op[i].value === elem.firstChild.innerHTML) {
    op[i].removeAttribute('disabled');
  }
  elem.parentNode.removeChild(elem);
}
  //прибавить value удаленного человека к limitVal
  //удалить всю строку при нажатии на крестик, включая поля.
  //сделать enabled в select

  //windowSurname.parentElement.removeChild(windowSurname, windowComment, windowValue);
};

function del() {
  delName(this.parentNode.id);
};

function finish() {
  limitVal === 0 ? alert("Спасибо, Ваша оценка принята!") : alert("Не использован лимит 100%. Распределите лимит полностью")
};
