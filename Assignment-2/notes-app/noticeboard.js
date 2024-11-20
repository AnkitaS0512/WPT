debugger;
// function addNotes() {
//     var notes_color = prompt("Choose a color: red, yellow, green, blue");
//     var notes = document.getElementById("notice-board-area");
//     notes.innerHTML = notes.innerHTML + `
//    <div class="notes" style="background-color:${notes_color};"><textarea  rows="10" cols="50" class="text-area" value="Enter your notes"></textarea></div>
//   `;
//   }


function addNotes() {
  var notes_color = prompt("Choose a color name or hex code");
  var notes = document.getElementById("notice-board-area");
  var newNote = document.createElement("div");
  newNote.style.backgroundColor = notes_color;
  newNote.style.padding = "10px";
  newNote.innerHTML = `
<textarea rows="15" cols="80" style="border: none; background-color: transparent; resize: none; font-size: 16px; width: 100%;" placeholder="Enter your notes"></textarea>
`;
  notes.appendChild(newNote);
}
