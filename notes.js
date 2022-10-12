console.log("Welcome to notes app. This is app.js");
showNotes();
let showbtn=document.getElementById("btn3")




let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  } 

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: addTitle.value,
    text: addTxt.value
  }
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
  console.log(notesObj); 
  showNotes();


});


// Function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element, index) {


    // console.log(index)
    html += `
            <div id="div${index}"class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text"> ${element.text}</p>
                        <button id="btn${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                        <button id="${index}"onclick="important(this.id)" class="btn btn-primary">Important</button>
                    </div>
                </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}



// function to show important notes



showbtn.addEventListener("click", showImportantNotes);

function showImportantNotes() {

  let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        // let cardTxt = element.getElementsByTagName("p")[0].innerText;
        // if(cardTxt.includes(inputVal)){
        //     element.style.display = "block";
        // }
        // else{
        //     element.style.display = "none";
        // }
        if(element.classList.contains("important")){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }  
    })
    




}














// Function to delete a note
function deleteNote(index) {
//   console.log("I am deleting", index);

  

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}


let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})
function important(index){
  // console.log(index);

  console.log(index)
  let classnote=document.getElementById(`div${index}`)  
  console.log(classnote)
  classnote.classList.add('important')
  

  // let notes = localStorage.getItem("notes");
  // if (notes == null) {
  //   notesObj = [];
  // } else {
  //   notesObj = JSON.parse(notes);
  // } 


  // notesObj[this.index].classList.add("important");
  
}









/*
Further Features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server 
*/