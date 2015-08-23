'use strict';

function resize(){
    document.getElementById(document.getElementsByClassName('mce-edit-area')[0].firstChild.id).style.height =
      parseInt(window.innerHeight - 37) + 'px';
}

window.onbeforeunload = function(e){
    var content = tinymce.activeEditor.getContent();
    if(content.length > 0){
        window.localStorage.setItem(
          'c',
          content
        );

    }else{
        window.localStorage.removeItem('c');
    }
};

window.onload = function(e){
    resize();
    if(window.localStorage.getItem('c') !== null){
        tinymce.activeEditor.setContent(window.localStorage.getItem('c'));
    }
};

window.onresize = resize;
