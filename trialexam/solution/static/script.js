function getPostDetails(noteId){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            showFullNote(xhr.responseText, noteId);
        }
    }

    
}

function listClick(){
    this.classList.add("showing");
    this.onclick = function(){};
    var id = this.id.split("_")[1];

    getPostDetails(id);
}

function showFullNote(innerHtml, noteId){
    var container = document.getElementsByClassName("container")[0];
    var article = document.createElement("article");
    article.id = "article_"+ noteId;
    article.innerHTML = innerHtml;
    container.insertBefore(article, container.firstChild);
}

function removeArticle(noteId){
    //reset list entry
    
    var listEntry = document.getElementById("listNote_" + noteId);
    listEntry.classList.remove('showing');
    listEntry.onclick = listClick;

    //remove article
    var articleId = "article_"+ noteId;
    var article = document.getElementById(articleId);
    article.ribparentElement.removeChild(article);
    
}

window.onload = function(){
    var list = document.getElementsByClassName("note-list")[0].childNodes;
    list.forEach(function(item){
        item.onclick = listClick;
    });
}



