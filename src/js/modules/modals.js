const modals = () => {
  
  const overlay = document.querySelector('.overlay');

  function bindModal(triggerSelector, modalSelector, closeSelector){

    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector);

    trigger.forEach( el => {

      el.addEventListener('click', (e) => {

        if(e.target){
          e.preventDefault();
        }
  
        modal.style.display = 'block';
        overlay.style.display = 'block';
        document.body.style.overflow = "hidden";
        // document.body.classList.add('modal-open');
  
      });
  
      close.addEventListener('click', () => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        document.body.style.overflow = "";
        // document.body.classList.remove('modal-open');
      });
    })

    modal.addEventListener('click', (e) => {
   
      if(e.target === modal){
        modal.style.display = 'none';
        overlay.style.display = 'none';
        document.body.style.overflow = "";
        // document.body.classList.remove('modal-open');
      }
    })
  }

  function showModalByTime(selector, time){
    setTimeout(function(){
      
      let modal = document.querySelector(selector);
      modal.style.display = 'block';
      overlay.style.display = 'block';
      document.body.style.overflow = "hidden";

    },time);
  }


  bindModal('.popup_engineer_btn','.popup_engineer','.popup_engineer .popup_close');
  bindModal('.phone_link','.popup','.popup .popup_close');
  showModalByTime('.popup',5000);

};

export default modals;