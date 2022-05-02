'use strict'
let addbtn = document.getElementById('add-btn')
let srch = document.getElementById('search')
// let deletebtn = document.getElementById("delbtn");

shownotes()

// let GetNewNote = function () {
//   debugger;
//   let title = document.getElementById("add-title");
//   let details = document.getElementById("add-details");
//   if (title.value == "" || details.value == "") {
//     //Put error message
//     return false;
//   }

//   let newDiv = document.createElement("div");
//   newDiv.id = "note" + localStorage.length + 1;
//   newDiv.innerHTML = title.value + details.value;
//   let btn = document.createElement("button");
//   btn.value = "I am new button";
//   newDiv.appendChild(btn);

//   let pDiv = document.getElementById("notesfield");
//   pDiv.appendChild(newDiv);

//   btn.addEventListener("click", function () {
//     this.parentElement.removeChild(this);
//   });
//   localStorage.setItem(title.value, details.value);
//   title.value = "";
//   details.value = "";

//   return newDiv;
// };

// let addNewNote = function (note) {
//   let pDiv = document.getElementById("notesfield");
//   pDiv.appendChild(note);
// };

// let removeNewNote = function (noteId) {
//   let note = document.getElementById("notesfield" + noteId);
//   if (note != null && note.parentNode != null) {
//     note.parentNode.removeChild(note);
//   }
// };

addbtn.addEventListener('click', function () {
  console.log('fired after pressing add notes btn')
  let addtitle = document.getElementById('add-title').value
  let adddetails = document.getElementById('add-details').value
  console.log(addtitle, adddetails)
  localStorage.setItem(addtitle, adddetails)
  shownotes()
  document.getElementById('add-title').value = ''
  document.getElementById('add-details').value = ''
})

// addbtn.addEventListener("click", function () {
//   let newNote = GetNewNote();
// });

function shownotes() {
  let field = ''
  let i = 0
  if (localStorage.length > 0) {
    while (i < localStorage.length) {
      let title = localStorage.key(i)
      let value = localStorage.getItem(title)
      field += `
      <div id="innernotes${i}" class ="notearea" >
      <b> note${i + 1}</b>
      <h2 class="addtitle">${title}</h2>
      <p1 class="adddetails"> ${value}</p1>
      <button href="#" class="delbtn" id="${i}"  onclick="deleteNotes(${i})">Delete Note</button>
      </div>`
      document.getElementById('notesfield').innerHTML = field
      i++
    }
  } else {
    document.getElementById(
      'notesfield',
    ).innerHTML = `Nothing to show here,Use Add Note section to add your notes here`
  }
}
let deleteNotes = function (index) {
  confirm(`Are you sure want to delete  note ${index + 1}?`)
  let title = localStorage.key(index)
  let valueTxt = localStorage.getItem(title)
  localStorage.removeItem(title)
  shownotes()
}
srch.addEventListener('input', () => {
  console.log('are you finding ?')
  let searched = srch.value
  if (searched != ' ') {
    searched = searched.toLowerCase()
    // console.log(searched);
    let show = document.getElementsByClassName('notearea')
    console.log(show)
    Array.from(show).forEach(function (note) {
      // console.log(note);
      let notetitle = note.getElementsByTagName('h2')[0].innerText.toLowerCase()
      console.log(notetitle)
      let notetxt = note.getElementsByTagName('p1')[0].innerText.toLowerCase()
      if (!(notetitle.includes(searched) || notetxt.includes(searched))) {
        note.classList.add('hidden')
      } else {
        note.classList.remove('hidden')
      }
    })
  }
})
