
/* 1:
Hade velat skriva något vettigt, men jag har inte fått rätt på det.


*/
document.addEventListener("DOMContentLoaded", onPageload);

function onPageload(){
    let input_number = document.querySelector("Input-number");

    input_number.oninput = function(){
        resetSections();

        createSections(parseInt(input_number.value));
    
    };



}


// Försöker skapa bloginläggens olika delar här nere.
function createSections(count){ // Parent


    var count = parseInt(this.value);
    for(var i = 0; i < count; i++){

       // var section = document.createElement("div");
       // section.setAttribute("id", "section")
        //var sectionParent = document.getElementById("sections");

            var parent = document.querySelector("main");
            var child = document.createElement("section");
            var title = document.createElement("h2");
            var picture = document.createElement('img'); 
            img.src =  'img/Blog_Bild.jpg';
            var blogtext = document.createElement("p2");

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

    var sectionParent = document.getElementById("sections")

    var sectionChild = sectionParent.childNodes; 
    for(var i = sectionChildren.length-1; i >= 0; i--){
        var sectionChild = sectionChildren[i];
        sectionChild.parentNode.removeChild(sectionChild);
    };
};