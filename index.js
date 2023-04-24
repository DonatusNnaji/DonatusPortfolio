const body = document.querySelectorAll('.main-content');
const wrapper = document.querySelectorAll('.container');
const controls = document.querySelectorAll('.controls');
const control = document.querySelectorAll('.control');

function pageScroll() {
 for (let i = 0; i < control.length; i++) {
  control[i].addEventListener('click', function() {
  document.querySelector('.activeBtn').classList .remove('activeBtn');
   this.classList.add('activeBtn');

  })

}
//sections toggle
body[0].addEventListener('click' , (ev) => {
  const id = ev.target.dataset.id ;
 //toggle button inside body
  if(id) {
    controls.forEach((btn) => {
    btn.classList.remove('active');
  })

    ev.target.classList.add('active')

    //toggle sections

    wrapper.forEach((sec) => {
      sec.classList.remove('active');
    })
    const elem = document.getElementById(ev.target.dataset.id);
    elem.classList.add('active');

  }

});

}

pageScroll();
