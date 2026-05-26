// 스크립트는 프로젝트 종료 이후 추가됨
const popup = document.querySelector(".popup");
const dontShow1D = popup.querySelector("input");
const closeBtn = popup.querySelector("button");

if (document.cookie.includes("DontShowPopup=True")) {
  popup.close();
} else {
  popup.showModal();
}

closeBtn.addEventListener("click", e => {
  e.preventDefault();
  popup.close();

  let date = new Date();
  // console.log(date.toUTCString());
  date.setDate(date.getDate() + (dontShow1D.checked ? 1 : -1));
  // console.log(date.toUTCString());
  document.cookie = `DontShowPopup=True; Expires=${date.toUTCString()}`;
});
