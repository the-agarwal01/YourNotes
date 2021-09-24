 
console.log("Welcome Welcome Welcome!!");
showNotes();//show that on refereshing all nodes are shown 

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addTxt");
  let note = localStorage.getItem("notes");
  if (note == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(note);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
 showNotes();
 
});
//funcn to show elements
function showNotes(){
    let note=localStorage.getItem("notes");
    if (note == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(note);
      }
      
      let html="";
      notesObj.forEach(function(element,index){
          html+=`
          <div class="card mx-2 my-2 noteCard" style="width: 18rem;">
                
          <div class="card-body">
            <h5 class="card-title">Note ${index+1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
          </div>
        </div>`
      });

        let notesElm=document.getElementById("notes");//putting in the div contianer with id notes 
        if(notesObj.length!=0)
        notesElm.innerHTML=html;
        else
        notesElm.innerHTML = `Currently No Notes to display:(`;
    }


      
    

    //func to delete Node
      function deleteNote(index){
        //   console.log('I am deleting',index);

          let note=localStorage.getItem("notes");
          if (note == null) {
              notesObj = [];
            } 
            else {
              notesObj = JSON.parse(note);
            }
            notesObj.splice(index,1);
            localStorage.setItem("notes", JSON.stringify(notesObj));
            showNotes();
      };

      //search element
      let searchTxt=document.getElementById("searchTxt");
      searchTxt.addEventListener("input",function(){
          let inputVal=searchTxt.value.toLowerCase();

        // console.log("Input Event fired",inputVal);

        let noteCard=document.getElementsByClassName("noteCard");
        Array.from(noteCard).forEach(function(element){
            let cardTxt=element.getElementsByTagName("p")[0].innerHTML.toLowerCase();
            if(cardTxt.includes(inputVal))
            element.style.display="block";
            else
            element.style.display="none";
        });







        
      });

    
