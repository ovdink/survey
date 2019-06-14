let count = 0, max = 10;
let limitVal = Number(document.getElementById('limit').value);
let allValues = [];

function addName(value) {
  count++;
  var op = document.getElementById('select').getElementsByTagName("option");
  for (var i = 0; i < op.length; i++) {
  if (op[i].value == value) {
    op[i].disabled = true;
  }
}
  let newElement = document.createElement('div');
  let newValue = document.createElement('input');
  let newComment = document.createElement('input')
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
  surnames.appendChild(newElement);
  surnames.appendChild(newValue);
  surnames.appendChild(newComment);
  surnames.appendChild(newDelete);

  newElement.setAttribute('id', 'windowSurname');
  newValue.setAttribute('id', 'windowValue');
  newComment.setAttribute('id', 'windowComment');
  newDelete.setAttribute('id', 'imgDelete');

  if (count > max) {
    alert("Превышен лимит!");
  }

  //сделать нажатие не на поле а на newDelete
  newElement.addEventListener('click', delName);
};

function limit(val, wasThereANumber) {
  limitVal = wasThereANumber === 0 ?  limitVal : (limitVal + wasThereANumber);
  limitVal = limitVal - val;
  document.getElementById('limit').value = limitVal;
};

function delName() {
  //прибавить value удаленного человека к limitVal
  //удалить всю строку при нажатии на крестик, включая поля.
  //сделать enabled в select

  //windowSurname.parentElement.removeChild(windowSurname, windowComment, windowValue);
};
