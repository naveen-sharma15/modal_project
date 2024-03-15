const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");


//modal open funvtion

const openModal = () => {
   console.log("Modal is Open");
   modal.classList.add("active");
   overlay.classList.add("overlayActive");
};

const closeModal = () =>{
    modal.classList.remove("active");
    overlay.classList.remove("overlayActive");
};
