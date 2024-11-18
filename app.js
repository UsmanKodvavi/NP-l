var inputnode = document.querySelector("#input");
var parent = document.querySelector("#parent");
var notesArr = [];
function deleteHandler(ele) {
    var notesArr = JSON.parse(localStorage.getItem("notes"));
    var index = ele.id;
    notesArr.splice(index, 1);
    console.log("checking,.....", ele.id, notesArr);
    localStorage.setItem("notes", JSON.stringify(notesArr));
    operateUIUI();
    //   console.log("deleteHandler", ele.parentNode.parentNode);
    // ele.parentNode.parentNode.remove();
  }
  
  function editHandler(ele) {
    var indexNumber = ele.id;
    console.log(indexNumber);
    var notesArr = JSON.parse(localStorage.getItem("notes"));
    var editPrompt = prompt("Enter edit value");
    notesArr.splice(indexNumber, 1, editPrompt);
    console.log("notesArr", notesArr);
    localStorage.setItem("notes", JSON.stringify(notesArr));
    OperateUIUI();
    // const editPrompt = prompt("Enter edit value");
    ele.parentNode.parentNode.firstChild.textContent = editPrompt;
  }
  
  
  function foo() {
    
    // input next value
    if (input.value.length < 3) {
      alert("Enter correct notes...");
      return;
    }


    var getNotes = localStorage.getItem("notes");
    console.log(getNotes, "getNotes");
    //first time note create horhy hai
    if (getNotes == null) {
      var tempArr = [input.value];
      localStorage.setItem("notes", JSON.stringify(tempArr));
    } else {
      // console.log("else value already hai")
      var tempArr = JSON.parse(getNotes);
      tempArr.unshift(input.value);
      localStorage.setItem("notes", JSON.stringify(tempArr));
    }
    OperateUIUI();
    input.value = "";

    // var a = "world";
  
    // const UI = `<div class="alert alert-primary d-flex justify-content-between" role="alert">
    //      ${input.value}
    //       <div>
    //           <i onclick="editHandler(this)" class="fa-solid btn fa-pen-to-square"></i>
    //           <i onclick="deleteHandler(this)" class="fa-solid btn fa-trash"></i>
    //       </div>
    //     </div>`;
    // console.log("UI", UI);
    // parent.innerHTML += UI;
    // input.value = "   ";
  }

return;


  function OperateUI(){
    var notesArr = JSON.parse(localStorage.getItem("notes"));
    // console.log("notesArr", notesArr);
    var cardsUI = "";
    for (var i = 0; i < notesArr.length; i++) {
      cardsUI += `<div class="alert alert-primary d-flex justify-content-between" role="alert">
        ${notesArr[i]}
         <div>
             <i onclick="editHandler(this)" id=${i} class="fa-solid btn fa-pen-to-square"></i>
             <i onclick="deleteHandler(this)" id=${i} class="fa-solid btn fa-trash"></i>
         </div>
       </div>`;
    }
  }