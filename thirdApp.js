// // start header JavaScript Code

// /* start javascript darkMode */

// let checkedDarkMode = document.querySelector(".landing .dark-mode input");
// checkedDarkMode.addEventListener("change", (e) => {
//   if (e.target.checked) {
//     document.body.style.cssText = "background-color: #181a1b !important;";
//     document.querySelector(":root").style.cssText = "--second-color:#cfc6b5;--dark-mode : white;--border-in-the-main-paragraph:black";
//     let timerInterval;
//     Swal.fire({
//       title: "Dark Mode Has Been Activated!",
//       icon: "success",
//       showConfirmButton: false,
//       timer: 1500,
//       customClass: "swal-style",
//       didOpen: () => {
//         timerInterval = setInterval(() => {}, 100);
//       },
//       willClose: () => {
//         clearInterval(timerInterval);
//       },
//     });
//   } else {
//     document.body.style.cssText = "background-color: white !important";
//     document.querySelector(":root").style.cssText = "--second-color:#777;--dark-mode : black;--border-in-the-main-paragraph:white";
//     let timerInterval;
//     Swal.fire({
//       title: "Dark Mode Has Been Stopped!",
//       customClass: "swal-style",
//       icon: "success",
//       showConfirmButton: false,
//       timer: 1500,
//       didOpen: () => {
//         timerInterval = setInterval(() => {}, 100);
//       },
//       willClose: () => {
//         clearInterval(timerInterval);
//       },
//     });
//   }
// });

// /* end javascript darkMode */

// let aInUlHeader = document.querySelectorAll(
//   ".header .container .links ul li a"
// );

// function removeActiveA() {
//   aInUlHeader.forEach((e) => {
//     e.classList.remove("active");
//   });
// }

// aInUlHeader.forEach((e) => {
//   e.addEventListener("click", () => {
//     removeActiveA();
//     e.classList.add("active");
//     if (
//       document.querySelector(".header .container .links > i").style.display ===
//       ""
//     ) {
//       document.querySelector(
//         ".header .container .links > i + ul"
//       ).style.display = "none";
//     }
//   });
// });

// let smallList = document.querySelector(".header .container .links > i");

// smallList.addEventListener("click", () => {
//   if (
//     document.querySelector(".header .container .links > i:hover + ul").style
//       .display === "flex"
//   ) {
//     document.querySelector(
//       ".header .container .links > i:hover + ul"
//     ).style.display = "none";
//   } else {
//     document.querySelector(
//       ".header .container .links > i:hover + ul"
//     ).style.cssText =
//       "display: flex;position: absolute;background-color: #00000099;bottom: -250px;left: 15px;width: 100%;align-items: flex-start;flex-direction: column;z-index: 1001;padding:10px 0";

//     document
//       .querySelectorAll(".header .container .links > i:hover + ul li")
//       .forEach((e) => {
//         e.style.cssText = "width: 100%;margin: 0;padding: 0;";
//       });
//     document
//       .querySelectorAll(".header .container .links > i:hover + ul li a")
//       .forEach((e) => {
//         e.style.cssText = "padding: 10px;";
//       });
//   }
// });

// //Initializing
// var currentImageIndex = 0;
// var images = []; //array
// var time = 3000; // time in millie seconds

// //images
// images[0] = "url(../imgs/landing-one.webp)";
// images[1] = "url(../imgs/landing-two.jpg)";
// images[2] = "url(../imgs/landing-three.jpg)";
// images[3] = "url(../imgs/landing-four.jpg)";
// images[4] = "url(../imgs/landing-five.jpg)";
// images[5] = "url(../imgs/landing-six.jpg)";
// images[6] = "url(../imgs/landing-seven.jpg)";
// images[7] = "url(../imgs/landing-eight.jpg)";
// images[8] = "url(../imgs/landing-nine.jpg)";
// images[9] = "url(../imgs/landing-ten.jpg)";

// // function
// function changeImage() {
//   activePhotoSpan();

//   var el = document.querySelector(".landing");
//   el.style.backgroundImage = images[currentImageIndex];
//   if (currentImageIndex < images.length - 1) {
//     currentImageIndex++;
//   } else {
//     currentImageIndex = 0;
//   }

//   setTimeout("changeImage()", time);
// }

// function removeAllActivePhotoSpan() {
//   let allSpans = document.querySelectorAll(".landing .footer span");
//   allSpans.forEach((e) => {
//     e.classList.remove("active-photo");
//   });
// }

// function activePhotoSpan() {
//   removeAllActivePhotoSpan();
//   let allSpans = document.querySelectorAll(".landing .footer span");
//   allSpans[currentImageIndex].classList.add("active-photo");
// }

// let backgroundPhotoChangeLeft = document.querySelector(
//   ".landing .fa-angle-left"
// );

// backgroundPhotoChangeLeft.addEventListener("click", () => {
//   let currentBackGround = document.querySelector(".landing");
//   let styles = window.getComputedStyle(currentBackGround);
//   let photo = styles.backgroundImage;
//   let url = photo.slice(5, -2);
//   let currentBackGroundUrl = `url(../${url.slice(url.indexOf("imgs"))})`;

//   let currentUrlIndexInArray = images.indexOf(currentBackGroundUrl);

//   if (currentUrlIndexInArray === 0) {
//     currentImageIndex = images.length - 1;
//   } else {
//     currentImageIndex = --currentUrlIndexInArray;
//   }

//   currentBackGround.style.backgroundImage = images[currentImageIndex];

//   activePhotoSpan();
// });

// let backgroundPhotoChangeRight = document.querySelector(
//   ".landing .fa-angle-right"
// );

// backgroundPhotoChangeRight.addEventListener("click", () => {
//   let currentBackGround = document.querySelector(".landing");
//   let styles = window.getComputedStyle(currentBackGround);
//   let photo = styles.backgroundImage;
//   let url = photo.slice(5, -2);
//   let currentBackGroundUrl = `url(../${url.slice(url.indexOf("imgs"))})`;
//   let currentUrlIndexInArray = images.indexOf(currentBackGroundUrl);

//   if (currentUrlIndexInArray === images.length - 1) {
//     currentImageIndex = 0;
//   } else {
//     currentImageIndex = ++currentUrlIndexInArray;
//   }

//   currentBackGround.style.backgroundImage = images[currentImageIndex];
//   activePhotoSpan();
// });

// window.onload = function () {
//   // hna hy3ml al spans aly fy al header
//   let landingFooter = document.querySelector(".landing .footer");
//   for (let j = 0; j < images.length; j++) {
//     let span = document.createElement("span");
//     span.classList.add("normal-span");
//     span.textContent = j + 1;
//     span.addEventListener("click", () => {
//       removeAllActivePhotoSpan();
//       span.classList.add("active-photo");
//       document.querySelector(".landing").style.backgroundImage = images[j];
//       currentImageIndex = j;
//     });
//     if (currentImageIndex === j) {
//       span.classList.add("active-photo");
//     }
//     landingFooter.append(span);
//   }

//   // hna aly hwa by8yar al sora kol 4waya
//   changeImage();

//   // hna hn3ml al function aly ht3ml shuffle ll swar

//   let allCategories = document.querySelectorAll(".portfolio .photos .col");

//   let orderRange = [...Array(allCategories.length).keys()];

//   // shuffle the order range
//   function changeOrder(orderRange) {
//     for (let i = 0; i < orderRange.length; i++) {
//       let random = Math.floor(Math.random() * orderRange.length);

//       [orderRange[i], orderRange[random]] = [orderRange[random], orderRange[i]];
//     }
//   }

//   // excute the function
//   changeOrder(orderRange);

//   // order the boxes
//   allCategories.forEach((ele, index) => {
//     ele.style.order = orderRange[index];
//   });

//   let allPInImages = document.querySelectorAll(
//     ".portfolio .photos .col .explain-the-image p"
//   );

//   let liInPortfoliSelcted = document.querySelectorAll(
//     ".portfolio .container ul li"
//   );

//   allCategories.forEach((element, index) => {
//     allPInImages[index].textContent = (element.getAttribute("section")).toUpperCase();

//     allPInImages[index].addEventListener("click", () => {
//       removeActiveLi();
//       openTheSelectedCategory(element.getAttribute("section"));
//       liInPortfoliSelcted.forEach((ele) => {
//         if (ele.getAttribute("section") === element.getAttribute("section")) {
//           ele.classList.add("active-li");
//         }
//       });
//     });
//   });
// };

// let searchIcon = document.querySelector(".header .container .links .form i");

// searchIcon.addEventListener("click", () => {
//   let searchInput = document.querySelector(
//     ".header .container .links .form input"
//   );
//   if (searchInput.style.display === "none") {
//     searchInput.style.display = "block";
//     searchInput.focus();
//     searchIcon.style.cssText = "padding-right: 15px;";
//   } else {
//     searchInput.style.display = "none";
//     searchIcon.style.cssText = "padding-right: 0px;";
//   }
// });

// // end header javaScript Code

// // start portfolio javascript
// let liInPortfoli = document.querySelectorAll(".portfolio .container ul li");

// function removeActiveLi() {
//   liInPortfoli.forEach((e) => {
//     e.classList.remove("active-li");
//   });
// }

// liInPortfoli.forEach((ele) => {
//   ele.addEventListener("click", () => {
//     removeActiveLi();
//     let category = ele.getAttribute("section");
//     openTheSelectedCategory(category);
//     ele.classList.add("active-li");
//   });
// });

// function openTheSelectedCategory(category) {
//   let allCategories = document.querySelectorAll(".portfolio .photos .col");
//   if (category === "all") {
//     allCategories.forEach((element) => {
//       element.style.display = "block";
//     });
//   } else {
//     allCategories.forEach((element) => {
//       if (element.getAttribute("section") === category) {
//         element.style.display = "block";
//       } else {
//         element.style.display = "none";
//       }
//     });
//   }
// }

// let galleryImages = document.querySelectorAll(".portfolio .photos .col img");
// let getLatestOpenImage;
// let windowWidth = window.innerWidth;

// if (galleryImages) {
//   galleryImages.forEach((image, index) => {
//     image.addEventListener("click", () => {
//       let getFullImageUrl = image.getAttribute("src");
//       getLatestOpenImage = index;

//       let newImgWindow = document.createElement("div");
//       newImgWindow.classList.add("img-window");
//       newImgWindow.setAttribute("onclick", "closeImg()");
//       document.body.append(newImgWindow);

//       let newImg = document.createElement("img");
//       newImg.setAttribute("src", getFullImageUrl);
//       newImg.setAttribute("id", "current-img-for-the-full-width");
//       newImgWindow.append(newImg);

//       newImg.onload = function () {
//         let imgWidth = this.width;
//         let calcImgToEdge = (windowWidth - imgWidth) / 2 - 80;

//         let newNextBtn = document.createElement("i");
//         newNextBtn.classList.add("img-btn-next");
//         newNextBtn.classList.add("fas");
//         newNextBtn.classList.add("fa-angle-right");
//         newNextBtn.classList.add("change-background");
//         newNextBtn.classList.add("fa-2x");
//         newNextBtn.setAttribute("title", "Next Image");
//         newNextBtn.setAttribute("onclick", "changeImg(1)");
//         newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

//         let newPrevBtn = document.createElement("i");
//         newPrevBtn.classList.add("img-btn-prev");
//         newPrevBtn.classList.add("fas");
//         newPrevBtn.classList.add("fa-angle-left");
//         newPrevBtn.classList.add("change-background");
//         newPrevBtn.classList.add("fa-2x");
//         newPrevBtn.setAttribute("title", "Previous Image");
//         newPrevBtn.setAttribute("onclick", "changeImg(0)");
//         newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";

//         document.body.append(newNextBtn, newPrevBtn);
//       };
//     });
//   });
// }

// function closeImg() {
//   document.querySelector(".img-window").remove();
//   document.querySelector(".img-btn-next").remove();
//   document.querySelector(".img-btn-prev").remove();
// }

// function changeImg(changeDir) {
//   document.querySelector("#current-img-for-the-full-width").remove();

//   let getImgWindow = document.querySelector(".img-window");
//   let newImg = document.createElement("img");
//   getImgWindow.append(newImg);

//   let calcNewImg;
//   if (changeDir === 1) {
//     calcNewImg = getLatestOpenImage + 1;
//     if (calcNewImg === galleryImages.length) {
//       calcNewImg = 0;
//     }
//   } else if (changeDir === 0) {
//     calcNewImg = getLatestOpenImage - 1;
//     if (calcNewImg === -1) {
//       calcNewImg = galleryImages.length - 1;
//     }
//   }

//   newImg.setAttribute("src", galleryImages[calcNewImg].getAttribute("src"));
//   newImg.setAttribute("id", "current-img-for-the-full-width");

//   getLatestOpenImage = calcNewImg;
//   newImg.onload = function () {
//     let imgWidth = this.width;
//     let calcImgToEdge = (windowWidth - imgWidth) / 2 - 80;

//     let nextBtn = document.querySelector(".img-btn-next");
//     nextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

//     let prevBtn = document.querySelector(".img-btn-prev");
//     prevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
//   };
// }

// // end javascript portfoli

/* start javascript articles */
let morePhotos = document.querySelector(".articles .container .more span");

morePhotos.addEventListener("click", () => {
  let allMoreBoxes = document.querySelectorAll(
    ".articles .container .article-sections .box"
  );
  if (morePhotos.textContent === "See More") {
    morePhotos.textContent = "See Less";
  } else {
    morePhotos.textContent = "See More";
  }
  allMoreBoxes.forEach((box) => {
    if (box.classList.contains("more-less")) {
      if (box.style.display === "" || box.style.display === "none") {
        box.style.display = "flex";
      } else if (box.style.display === "flex") {
        box.style.display = "none";
      }
    }
  });
});
/* end javascript articles */

/* start javascript gallery */

let galleryImages = document.querySelectorAll(
  ".gallery .studio .box .photo img"
);
let getLatestOpenImage;
let windowWidth = window.innerWidth;

if (galleryImages) {
  galleryImages.forEach((image, index) => {
    image.addEventListener("click", () => {
      let getFullImageUrl = image.getAttribute("src");
      console.log(getFullImageUrl);
      getLatestOpenImage = index;

      let newImgWindow = document.createElement("div");
      newImgWindow.classList.add("img-window");
      newImgWindow.setAttribute("onclick", "closeImg()");
      document.body.append(newImgWindow);

      let newImg = document.createElement("img");
      newImg.setAttribute("src", getFullImageUrl);
      newImg.setAttribute("id", "current-img-for-the-full-width");
      newImgWindow.append(newImg);

      newImg.onload = function () {
        let imgWidth = this.width;
        let calcImgToEdge = (windowWidth - imgWidth) / 2 - 80;

        let newNextBtn = document.createElement("i");
        newNextBtn.classList.add("img-btn-next");
        newNextBtn.classList.add("fas");
        newNextBtn.classList.add("fa-angle-right");
        newNextBtn.classList.add("change-background");
        newNextBtn.classList.add("fa-2x");
        newNextBtn.setAttribute("title", "Next Image");
        newNextBtn.setAttribute("onclick", "changeImg(1)");
        newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

        let newPrevBtn = document.createElement("i");
        newPrevBtn.classList.add("img-btn-prev");
        newPrevBtn.classList.add("fas");
        newPrevBtn.classList.add("fa-angle-left");
        newPrevBtn.classList.add("change-background");
        newPrevBtn.classList.add("fa-2x");
        newPrevBtn.setAttribute("title", "Previous Image");
        newPrevBtn.setAttribute("onclick", "changeImg(0)");
        newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";

        document.body.append(newNextBtn, newPrevBtn);
      };
    });
  });
}

function closeImg() {
  document.querySelector(".img-window").remove();
  document.querySelector(".img-btn-next").remove();
  document.querySelector(".img-btn-prev").remove();
}

function changeImg(changeDir) {
  document.querySelector("#current-img-for-the-full-width").remove();

  let getImgWindow = document.querySelector(".img-window");
  let newImg = document.createElement("img");
  getImgWindow.append(newImg);

  let calcNewImg;
  if (changeDir === 1) {
    calcNewImg = getLatestOpenImage + 1;
    if (calcNewImg === galleryImages.length) {
      calcNewImg = 0;
    }
  } else if (changeDir === 0) {
    calcNewImg = getLatestOpenImage - 1;
    if (calcNewImg === -1) {
      calcNewImg = galleryImages.length - 1;
    }
  }

  newImg.setAttribute("src", galleryImages[calcNewImg].getAttribute("src"));
  newImg.setAttribute("id", "current-img-for-the-full-width");

  getLatestOpenImage = calcNewImg;
  newImg.onload = function () {
    let imgWidth = this.width;
    let calcImgToEdge = (windowWidth - imgWidth) / 2 - 80;

    let nextBtn = document.querySelector(".img-btn-next");
    nextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

    let prevBtn = document.querySelector(".img-btn-prev");
    prevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
  };
}
/*end javascript gallery */

/* start javascript testominials */
let addCv = document.querySelector(".testmonials .container .add-cv span");

addCv.addEventListener("click", () => {
  let cont = document.querySelector(".testmonials .container .cv");
  if (cont.style.display === "" || cont.style.display === "none") {
    cont.style.display = "flex";
  } else if (cont.style.display === "flex") {
    cont.style.display = "none";
  }
});

function showPreview(event) {
  if (event.target.files.length > 0) {
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("file-ip-1-preview");
    preview.src = src;
    preview.style.display = "block";
  }
}
/* end javascript testominials */

/* start javascript latest events */
let days = document.querySelector(
  ".events .container .all-events .second-part .head ul li .days"
);
let hours = document.querySelector(
  ".events .container .all-events .second-part .head ul li .hours"
);
let minutes = document.querySelector(
  ".events .container .all-events .second-part .head ul li .minutes"
);
let seconds = document.querySelector(
  ".events .container .all-events .second-part .head ul li .seconds"
);

let eventTime = new Date("Dec 31, 2023 23:59:59").getTime();

let counter = setInterval(() => {
  let currentTime = new Date().getTime();
  let timeReset = eventTime - currentTime;

  let remainingDays = Math.floor(timeReset / 1000 / 60 / 60 / 24);
  days.textContent = remainingDays < 10 ? `0${remainingDays}` : remainingDays;

  let remainingHours = Math.floor(
    (timeReset % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  hours.textContent =
    remainingHours < 10 ? `0${remainingHours}` : remainingHours;

  let remainingMinutes = Math.floor(
    (timeReset % (1000 * 60 * 60)) / (1000 * 60)
  );
  minutes.textContent =
    remainingMinutes < 10 ? `0${remainingMinutes}` : remainingMinutes;

  let remainingSeconds = Math.floor((timeReset % (1000 * 60)) / 1000);
  seconds.textContent =
    remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
}, 1000);
/* end javascript latest events */

/* start javascript top video */
let allTimes = document.querySelectorAll(
  ".top-videos .container .movie .first-part .body ul li .time"
);
let allLi = document.querySelectorAll(
  ".top-videos .container .movie .first-part .body ul li"
);
let myvideo = document.querySelector(
  ".top-videos .container .movie .second-part .head video"
);

allLi.forEach((element, index) => {
  element.addEventListener(
    "click",
    function (event) {
      event.preventDefault();
      myvideo.currentTime = sec(allTimes[index].textContent);
      myvideo.play();
    },
    false
  );
});
function sec(t) {
  let theWholeTime = t;
  let seperateTime = theWholeTime.split(":");
  let mins = +seperateTime[0];
  let secs = +seperateTime[1];
  let allInSecs = mins * 60 + secs;
  return allInSecs;
}

let moreDetails = document.querySelector(
  ".top-videos .container .movie .first-part .head i"
);
moreDetails.addEventListener("click", () => {
  let secondPart = document.querySelector(
    ".top-videos .container .movie .first-part .body"
  );
  let topVideoParagraph = document.querySelector(
    ".top-videos .container .movie .first-part .head span"
  );
  let theTotalFirstPart = document.querySelector(
    ".top-videos .container .movie .first-part"
  );
  let allSecondPartCss = getComputedStyle(secondPart);
  if (allSecondPartCss.display === "" || allSecondPartCss.display === "none") {
    secondPart.style.display = "block";
    topVideoParagraph.style.display = "block";
    theTotalFirstPart.style.width = "40%";
  } else if (allSecondPartCss.display === "block") {
    secondPart.style.display = "none";
    topVideoParagraph.style.display = "none";
    theTotalFirstPart.style.width = "5%";
  }
});

/* end javascript top video */
