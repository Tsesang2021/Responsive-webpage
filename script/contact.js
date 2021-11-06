
const hamBurger = document.querySelector( ".hamburger" );
const navBarMenu = document.querySelector( ".nav-menu" );
const navBarLink = document.querySelectorAll( ".nav-link" );

hamBurger.addEventListener( "click", mobileMenu );
navBarLink.forEach( (n )=> n.addEventListener( "click", closeMenu ) );

function mobileMenu()
{
    hamBurger.classList.toggle( "active" );
    navBarMenu.classList.toggle( "active" );
}

function closeMenu ()
{
    hamBurger.classList.remove( "active" );
    navBarMenu.classList.remove( "active" );
}


let button = document.querySelector( "#send-button" );
let nameInput = document.querySelector( "#name-input" );
button.addEventListener( "click", (e)=>
{
    e.preventDefault();
    Swal.fire({
  title: 'Thank You!',
  text: `Hello ${ nameInput.value } Nice to meet you here, let's keep in touch..`,
  icon: 'info',
  confirmButtonText: 'Cool'
})
})
 
    

