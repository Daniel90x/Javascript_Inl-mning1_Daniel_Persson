
/* 1:



*/
window.onload = function(){


    
}





function createSections(count){
    for(var i = 0; i < count; i++){

        var parent = document.querySelector("main");

            var child = document.createElement("section");
            var title = document.createElement("h2");
            var picture = document.createElement("p1");
            var blogtext = document.createElement("p2");

            title.innerHTML = "Title " + (i + 1);
            picture.innerHTML = "<img src=\'img/Blog_Bild.jpg\'>";
            blogtext.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore harum, quasi dicta ex totam quisquam quo tempore maxime, commodi praesentium eius quod suscipit! Tenetur magnam eligendi amet fugiat adipisci impedit.";

            makeEditable(title);
            makeEditable(blogtext);

            child.appendChild(title);
            child.appendChild(blogtext);
            parent.appendChild(child);


    }

};








function resetSections(){
    var all_sections = document.querySelectorAll("section");
    for(var i = 0; i < all_sections.length; i++){
        all_sections[i].remove();
    }
};

function turnEditable(elem){
    elem.onclick = function(event){
        elem.contentEditable = true;
        elem.focus();

    };
    elem.onblur = function(event){
        elem.contentEditable = false;

    };


};





