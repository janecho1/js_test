const sentence = document.querySelector(".header__content-sentence"); // 1. 문장 요소 선택
//scroll 진행률
window.addEventListener("load", () => { //화면 다 로드되면 실행
  const barcontainer = document.querySelector(".bar-container"); 
  const perBar = document.querySelector(".perBar");
  const coverHeight = window.innerHeight;//화면 자체의 높이

  window.addEventListener("scroll", () => {
    const scrollNum = window.scrollY; //얼마나 스크롤했는지
    const fixPoint = sentence.offsetTop + sentence.offsetHeight;//위쪽에서 얼마나 떨어졌는지(문장시작위치)+문장의 높이 = 위에서부터 문장까지의 거리 계산
    /* fixPoint 이상이면 bar 고정*/
    if (scrollNum > fixPoint) {
      barcontainer.classList.add("fixed");
      //barcontainer태그에 fixed 붙이기!
      //css에서 fixed적용
    } else {
      barcontainer.classList.remove("fixed");
    }
    //진행률 계산
    const documentHeight = document.body.scrollHeight - coverHeight;//화면전체높이-현재화면자체의높이(끝까지가면못내려가니까)=실질적으로스크롤할수있는화면길이

    perBar.style.width = (scrollNum / documentHeight) * 100 + "%";
  });
});

// top
var topBtn = document.querySelector('.topBtn');
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//사진 슿라이드
const images = [
 "../homepage/book1.jpg",
 "../homepage/book2.jpg", 
 "../homepage/book3.jpg", 
 "../homepage/book4.jpg", 
 "../homepage/book5.jpg", 
 "../homepage/book6.jpg", 
"../homepage/book7.jpg", 
"../homepage/main_slider.png"
];

let index = 0;
const slideImage = document.getElementById("slideImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const bars = document.querySelectorAll(".progress-bars .bar");

function updateSlide() {
slideImage.src = images[index];  

bars.forEach( (bar, i) => {
  bar.classList.toggle("active", i === index);
}); 
}

prevBtn.addEventListener("click", () => {
  index = (index-1 + images.length)%images.length;
  updateSlide();
});

nextBtn.addEventListener("click", () => {
   index = (index+1)%images.length;
  updateSlide();
});

updateSlide(); 

//  /*문장의 현재 위치 */
//     const sentenceY = sentence.getBoundingClientRect();

//     // 문장의 바닥이 화면 천장에 닿았는지 확인
//     if (sentenceY.bottom <= 0) {
//         barWrap.classList.add("fixed");
//     } else {
//         barWrap.classList.remove("fixed");
//     }