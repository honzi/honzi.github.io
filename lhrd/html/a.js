function r(){
	document.getElementById(document.getElementsByClassName('mce-edit-area')[0].firstChild.id).style.height=parseInt(window.innerHeight-37)+'px'
}
var l=window.localStorage;
window.onbeforeunload=function(e){
	i=tinymce.activeEditor.getContent();
	if(i.length>0){
		l.setItem('c',i)
	}else{
		l.removeItem('c')
	}
};
window.onload=function(e){
	r();
	if(l.getItem('c')!==null){
		tinymce.activeEditor.setContent(l.getItem('c'))
	}
};
window.onresize=r
