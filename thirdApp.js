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
