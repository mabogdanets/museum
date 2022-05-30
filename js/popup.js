const closeBtn = document.querySelector(".close-popup");
const buyNowBtn = document.querySelector(".ticket__button");
const bookingDiv = document.querySelector(".booking");
const bookingWrap = document.querySelector(".booking-wrapper");

closeBtn.addEventListener('click', () => {
  bookingWrap.classList.remove("booking-wrapper_center");
  setTimeout(()=> {bookingDiv.classList.remove("booking_active")}, 500);
  setTimeout
});

bookingDiv.addEventListener('click', (event) => {
  if(event.target == bookingDiv) {
    bookingWrap.classList.remove("booking-wrapper_center");
    setTimeout(function(){event.target.classList.remove('booking_active')}, 500);

  }
});

buyNowBtn.addEventListener('click', () => {
  bookingDiv.classList.add("booking_active");
  window.requestAnimationFrame(() =>{
    bookingWrap.classList.add("booking-wrapper_center");
  });
  
});

