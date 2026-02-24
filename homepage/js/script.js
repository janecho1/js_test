const sentence = document.querySelector(".header__content-sentence"); //문장 요소 선택
//scroll 진행률
window.addEventListener("load", () => {
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
    const documentHeight = document.body.scrollHeight - coverHeight; //화면전체높이-현재화면자체의높이(끝까지가면못내려가니까)=실질적으로스크롤할수있는화면길이

    perBar.style.width = (scrollNum / documentHeight) * 100 + "%";
  });
});

//사진 슿라이드
const images = [
  "../homepage/book7.jpg", 
 "../homepage/book1.jpg",
 "../homepage/book2.jpg", 
 "../homepage/book3.jpg", 
 "../homepage/book4.jpg", 
 "../homepage/book5.jpg", 
 "../homepage/book6.jpg", 
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
bars.forEach( (bar, i) => {
   perBar.addEventListener("click", () => {
   index=i;
  updateSlide();
  });
});

prevBtn.addEventListener("click", () => {
  index = (index-1 + images.length)%images.length;
  updateSlide();
});

nextBtn.addEventListener("click", () => {
   index = (index+1)%images.length;
  updateSlide();
});

updateSlide(); 

// top
var topBtn = document.querySelector('.topBtn');

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    const scrollNum = window.scrollY; //얼마나 스크롤했는지
   
    if (scrollNum > 400) {
      topBtn.classList.add("fixed");
    } else {
      topBtn.classList.remove("fixed");
    }
    });



//ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

//메인 타이틀
const introTitle = document.querySelectorAll(".introduction__title div");

gsap.from(introTitle, {
    scrollTrigger: {
        trigger: ".introduction", // 애니메이션이 시작될 기준 요소
        start: "top 70%",         // 요소의 상단이 화면의 70% 지점에 왔을 때 시작
    },
    duration: 1,
    autoAlpha: 0,       
    scale: 4,           
    rotate: () => Math.random() * 360, // 랜덤 회전
    stagger: {
        amount: 1,       // 1초 동안 순차적으로 실행
        from: "random"   // 글자가 랜덤한 순서로 등장 (순서대로 하려면 start로)
    },
    ease: "power3.inOut"
});


//서브 텍스트
const introSub = document.querySelectorAll(".introduction__second div");

gsap.from(introSub, {
    scrollTrigger: {
        trigger: ".introduction",
        start: "top 70%", 
    },
    y: 50,               // 아래에서 위로 50px 이동
    autoAlpha: 0,
    duration: 0.8,
    delay: 0.5,           
    stagger: 0.03,       // 글자별 0.03초 간격
});






//  /*문장의 현재 위치 */
//     const sentenceY = sentence.getBoundingClientRect();

//     // 문장의 바닥이 화면 천장에 닿았는지 확인
//     if (sentenceY.bottom <= 0) {
//         barWrap.classList.add("fixed");
//     } else {
//         barWrap.classList.remove("fixed");
//     }
//클릭->인덱스
// bars.forEach((bar, i) => {
//     bar.addEventListener("click", () => {
//         index = i;      // 클릭한 바의 인덱스로 업뎃
//         updateSlide();  // 화면 갱신
//     });
// });
//애니메이션 다시
        // toggleActions: "restart none none none",
       // toggleActions: "restart none restart none"