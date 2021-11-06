
const hamburger = document.querySelector( ".hamburger" );
const navMenu = document.querySelector( ".nav-menu" );
const navLink = document.querySelectorAll( ".nav-link" );

hamburger.addEventListener( "click", mobileMenu );
navLink.forEach( (n )=> n.addEventListener( "click", closeMenu ) );

function mobileMenu()
{
    hamburger.classList.toggle( "active" );
    navMenu.classList.toggle( "active" );
}

function closeMenu ()
{
    hamburger.classList.remove( "active" );
    navMenu.classList.remove( "active" );
}





let arrayImages = [
    "images/image1.jpeg",
    "images/image2.jpeg",
    "images/image3.jpeg",
    "images/image4.jpeg",
    "images/image5.jpeg",
    "images/image6.jpeg",
    "images/image7.jpeg",
    "images/image8.jpeg",
    "images/image9.jpeg",
    "images/image10.jpeg",
    "images/image11.jpeg",
    "images/image12.jpeg" ];
    
const imgPlaceholder = document.querySelector("#gallery");
const btn = document.querySelectorAll("button");



let currentIndex = 2;
function showList ()
{
  imgPlaceholder.src = arrayImages[currentIndex];
}

btn.forEach(button=>button.addEventListener( "click",function()
{
  if ( button.name === "prev" )
  {
    if ( currentIndex > 0 )
      currentIndex--;
    else
    {
      currentIndex = arrayImages.length - 1;
    }
  }

  if ( button.name === "next" )
  {
    if (currentIndex < arrayImages.length - 1 ) {
      currentIndex = currentIndex + 1;
      
    }
    else
    {
      currentIndex = 0;
     
    }
  }
    showList()
}));
