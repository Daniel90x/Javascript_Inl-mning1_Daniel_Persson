"strict mode"; // Används för att göra så att programmet är mer kräsen med din kod, t.ex. den kommer säga emot om det finns variabler med samma namn 

/* 1:
Hade velat skriva något vettigt, men jag har inte fått rätt på det.


*/
document.addEventListener("DOMContentLoaded", onPageload);

function onPageload(){
    let input_number = document.querySelector("#input-number");

    input_number.oninput = function(){
        resetSections();

        createSections(parseInt(input_number.value));
    
    };



}


// Försöker skapa bloginläggens olika delar här nere.
function createSections(count){ // Parent


   // let count = parseInt(this.value);
    for(let i = 0; i < count; i++){

       // let section = document.createElement("div");
       // section.setAttribute("id", "section")
        //let sectionParent = document.getElementById("sections");

            let sectionParent = document.querySelector("main");
            let child = document.createElement("section");             // Använder DOM för att skapa en section
            let title = document.createElement("h2");                  // Använder DOM för att skapa ett h-element
            let picture = document.createElement('img');               // Använder DOM för att skapa en plats för en bild
           // img.src =  'img/Blog_Bild.jpg';
            let blogtext = document.createElement("p2");               // Använder DOM för att skapa ett p paragraph text, som kan fungera som blogtext

            title.innerHTML = "Title " + (i + 1);
            //picture.innerHTML = "<img src=\"img/Blog_Bild.jpg\">";
            blogtext.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore harum, quasi dicta ex totam quisquam quo tempore maxime, commodi praesentium eius quod suscipit! Tenetur magnam eligendi amet fugiat adipisci impedit.";
            title.contentEditable = true; // Gör så att title och blogtext går att ändra...
            blogtext.contentEditable = true;


            child.appendChild(title);
            child.appendChild(picture);
            child.appendChild(blogtext);

            sectionParent.appendChild(child);


    };

};







// HAr försökt få så att children och parents fungerar, men det har inte blivit bra...
function resetSections(){

    let sectionParent = document.getElementById("sections")

    let sectionChildren = sectionParent.childNodes;            // HAR ÄNDRAT sectionChild till sectionChildren här nere.
    for(let i = sectionChildren.length-1; i >= 0; i--){
        let sectionChildren = sectionChildren[i];
        sectionParent.removeChild(sectionChildren);            //bytade till sectionParent, för det gjorde samma sak...
    };
};