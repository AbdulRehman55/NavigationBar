const navbarbtn=document.querySelector('.navbar-btn');
const navbarlinks=document.querySelector('.navbar-links');


navbarbtn.addEventListener('click',function()
{
let value=navbarlinks.classList.contains('navbar-collapse');
if(value){

	navbarlinks.classList.remove('navbar-collapse');
	navbarbtn.classList.remove('change')

}
else
{

	navbarlinks.classList.add('navbar-collapse');
	navbarbtn.classList.add('change');
}

});