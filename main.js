"strict mode"; // Används för att göra så att programmet är mer kräsen med din kod, t.ex. den kommer säga emot om det finns variabler med samma namn 

/* 1:
Gjort debugging med hjälp av att använda debuggern i chrome och har använt breakpoints
för att debugga steg för steg. Så att man med hjälp av alerts kan plocka ett fel itaget. 

*/
document.addEventListener("DOMContentLoaded", onPageload);


function onPageload(){
    let input_number = document.querySelector("#input-number"); // Har lagt till # så att den kan använda Id och ändrat Input-number till input-number...

    input_number.oninput = function(){
        resetSections(); // resetar allt

        createSections(parseInt(input_number.value)); // Skapar sectioner beroende på användarens input.
    
    };



}


// Försöker skapa bloginläggens olika delar här nere.
function createSections(count){ // Parent

    for(let i = 0; i < count; i++){

            // Bestämmer att börja lägga in nya element i main.
            let sectionParent = document.querySelector("main");
            let child = document.createElement("section");          // Använder DOM för att skapa ett section Element
            let title = document.createElement("h2");                // Använder DOM för att skapa ett h element
            let picture = document.createElement('img');               // Använder DOM för att skapa en plats för en bild element
            let blogtext = document.createElement("p2");              // Använder DOM för att skapa ett p paragraph element, som kan fungera som blogtext

            title.innerHTML = "Title " + (i + 1)      // lägger in info i title element
            picture.setAttribute("src", "img/Blog_Bild.jpg");         // Lägger in en bild
            blogtext.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore harum, quasi dicta ex totam quisquam quo tempore maxime, commodi praesentium eius quod suscipit! Tenetur magnam eligendi amet fugiat adipisci impedit.";
            
            // Gör så att title och blogtext går att ändra...
            title.contentEditable = true; 
            blogtext.contentEditable = true;

            // Append lägger till node i föräldern man väljer.
            child.appendChild(title);
            child.appendChild(picture);
            child.appendChild(blogtext);

            // Skapar child under sectionParent
            sectionParent.appendChild(child);


    };

};







// Här har vi en reset funktion
function resetSections(){
    
    let sectionParent = document.querySelector("main"); // Hade den länkad ned sections innan, nu är den i main.....

    let sectionChildren = sectionParent.children;            // byttade från nodes till children, då det bara var html vi ville ha väck
    for(let i = sectionChildren.length-1; i >= 0; i--){
        let sectionChild = sectionChildren[i];
        sectionChild.remove();            //bytade sectionChild.remove()
    };
};
