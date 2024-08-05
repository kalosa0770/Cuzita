// function showSidebar() {
//     const sidebar = document.querySelector('.sidebar');
//     sidebar.style.display = 'flex';
//   }

//   function hideSidebar() {
//     const sidebar = document.querySelector('.sidebar');
//     sidebar.style.display = 'none';
//   }

function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const faBars = document.getElementById('fa-bars');
  const faClose = document.getElementById('fa-close');
  
  sidebar.style.display = 'flex';
  faBars.style.display = 'none';
  faClose.style.display = 'block';
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const faBars = document.getElementById('fa-bars');
  const faClose = document.getElementById('fa-close');
  
  sidebar.style.display = 'none';
  faBars.style.display = 'block';
  faClose.style.display = 'none';
}



  
  let sections = document.querySelectorAll('section');

  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;

      if (top >= offset && top < offset + height) {
        sec.classList.add('show-animate');
      }
      else {
        sec.classList.remove('show-animate');
      }
    })
  }

  

  // let slideIndex = 0;
  // showSlides();

  // function showSlides() {
  //   let i;
  //   let slides = document.getElementsByClassName("mySlides");
  //   let dots = document.getElementsByClassName("dot");
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";  
  //   }
  //   slideIndex++;
  //   if (slideIndex > slides.length) {slideIndex = 1}    
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   slides[slideIndex-1].style.display = "block";  
  //   dots[slideIndex-1].className += " active";
  //   setTimeout(showSlides, 10000); // Changes image every 2 seconds
  // }
 
  

  // function zoomin() {
  //   document.getElementById("event").style.opacity = 0.7;
  // }

  // function zoomout() {
  //   document.getElementById("event").style.opacity = 1;
  // }

//   let slideIndex = 0;
//   showSlides();

// function showSlides() {
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
    
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";  
//     }
    
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}    
    
//     for (let i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
    
//     slides[slideIndex-1].style.display = "block";  
//     dots[slideIndex-1].className += " active";
//     setTimeout(showSlides, 5000); // Change slide every 5 seconds
// }

// function currentSlide(n) {
//     slideIndex = n;
//     showSlides();
// }


let slideIndex = 0;
showSlides(slideIndex);

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); 
}

function currentSlide(n) {
  slideIndex = n;
  showSlides();
}

 