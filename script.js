let btn = document.getElementById("button");
let text = document.getElementsByTagName("textarea")[0];
let notes = document.getElementById("notes_container");
let hide = document.getElementById("hided");
let color = document.getElementById("color");


// console.log(text);
function addNotes(){
    if(text.value == "") {
        alert("Enter some text");
        return;
    }
    hide.innerText = "";
    let div = document.createElement("div");
    let p = document.createElement("p");
    let cross_btn = document.createElement("button");
    cross_btn.innerText = "x";
    cross_btn.classList.add("del");
    div.appendChild(cross_btn);
    p.innerHTML = text.value;
    div.appendChild(p);
    div.classList.add("noteStyle");
    div.style.backgroundColor = color.value;
    notes.appendChild(div);
    // console.log(notes);
    text.value = "";
    cross_btn.addEventListener("click" , (e) =>{
        div.style.display = "none";
    })
}
function colorChange(){
    text.style.backgroundColor = color.value;
}
btn.addEventListener("click" , addNotes);
color.addEventListener("change" , colorChange);
