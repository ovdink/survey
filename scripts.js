let count = 0;
let limitVal = Number(document.getElementById('limit').value);
let wasThereANumber = 0;
let allValues = [];
let disabledValueArr = [];

function addName(value) {
  count++;
  if (count > 10) {
    alert('Максимальное количество не может превышать 10!');
  }
  let op = document.getElementById('select').getElementsByTagName('option');
  for (let i = 0; i < op.length; i++) {
  disabledValueArr[i] = op.item(i).value; // массив с фамилиями из select
  if (op[i].value == value) {
    op[i].disabled = true;
  }
}
  let parent = document.createElement('div'); // главный элемент с входящими элементами
  let newElement = document.createElement('div');
  let newValue = document.createElement('input');
  let newComment = document.createElement('input');
  let newDelete = document.createElement('img');

  newDelete.setAttribute('src', 'https://img.icons8.com/ios/26/000000/delete-sign.png');
  newValue.setAttribute('type', 'number');

  newValue.onchange = (e) => {
    wasThereANumber = allValues[value] ? allValues[value] : 0;
    if (Number(e.target.value) - 1 < limitVal && Number(e.target.value) >= 0) {
      allValues[value] = Number(e.target.value);
      limit(allValues[value], wasThereANumber);
    }
    else if (e.target.value > 100)
      alert('Превышен лимит 100%. Введите меньшее значение');
    else
      alert('Неверное значение!');
  };
  newElement.textContent = select.value;

  const surnames = document.getElementById('surnames');
  parent.setAttribute('id', Math.random().toString(36));
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
  //console.log('деактивные:', op.item(1).value);

  console.log('все значения', allValues['Убунтов']);

};


function limit(val, wasThereANumber) {
  limitVal = wasThereANumber === 0 ? limitVal : (limitVal + wasThereANumber);
  limitVal = limitVal - val;
  document.getElementById('limit').value = limitVal;
};

function delName(id) {
  let elem = document.getElementById(id);
  // var op = document.getElementById('select').getElementsByTagName('option');
  // for (var i = 0; i < op.length; i++) {
  // if (op[i].value === elem.firstChild.innerHTML) {
  //   op[i].removeAttribute('disabled');
  // }
  elem.parentNode.removeChild(elem);
}
  //прибавить value удаленного человека к limitVal
  //удалить всю строку при нажатии на крестик, включая поля.
  //сделать enabled в select

  //windowSurname.parentElement.removeChild(windowSurname, windowComment, windowValue);


function del() {
  count--;
  avaElem = this.parentNode.firstChild.innerHTML;
  console.log("Удаленное значение", allValues[avaElem]);
  for (let i = 0; i < disabledValueArr.length; i++) {
    if (disabledValueArr[i] === avaElem) {
      alert("anabled");
      //disabledValueArr[i].removeAttribute('disabled');
    }
  }
  delName(this.parentNode.id);
  return (allValues[avaElem]);
};

function finish() {
  limitVal === 0 ? alert("Спасибо, Ваша оценка принята!") : alert("Не использован лимит 100%. Распределите лимит полностью")
};
