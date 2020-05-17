//Program for deletion
var index = -1;
function delet(i) {
	index = i;
	$('#exampleModal1').modal('toggle');
}

//When yes and no option will appear
function deletePost() {
    console.log('Working');
	document.getElementsByClassName('box')[index - 1].style.display = 'none';
	$('#exampleModal1').modal('toggle');
	index = -1;
}