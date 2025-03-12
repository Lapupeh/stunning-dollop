const sharePopup = document.querySelector('.share-popup');
const shareBtn = document.querySelector('.share-btn');
const shareButtonImg = document.querySelector(".share-btn-img");

shareBtn.addEventListener('click', () => {
  sharePopup.classList.toggle('hidden');
  sharePopup.classList.toggle('open');
  shareBtn.classList.toggle("share-btn-active");
  shareButtonImg.classList.toggle('share-btn-img-active');


  const isExpanded = shareBtn.getAttribute("aria-expanded") === "true";
  if (isExpanded) shareBtn.setAttribute("aria-expanded", "false");
  else shareBtn.setAttribute("aria-expanded", "true");
});
