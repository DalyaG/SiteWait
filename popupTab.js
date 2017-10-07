var mainDivId = "SiteWait_mainDiv";

function createMainDiv() {
  // waiting page
  var mainDiv = document.createElement("div");
  mainDiv.className = "mainDiv";
  mainDiv.id = mainDivId;

  // warning sign image
  var waitImage = document.createElement("img");
  waitImage.className = "waitImage";
  waitImage.src = chrome.extension.getURL("Warning_sign.png");

  // question text
  var questionDiv = document.createElement("div");
  questionDiv.className = "questionDiv";
  questionDiv.innerHTML = "Are you sure you want to continue?"

  // buttons area
  var answersDiv = document.createElement("div");
  answersDiv.className = "answersDiv";

  // the buttons themselves
  var yesBtn = document.createElement("button");
  yesBtn.className = "yesBtn";
  yesBtn.innerHTML = "YES";
  yesBtn.onclick = () => {
    var mainDiv = document.getElementById(mainDivId);
    mainDiv.classList.add("hiddenMainDiv");
  };
  var noBtn = document.createElement("button");
  noBtn.className = "noBtn";
  noBtn.innerHTML = "NO";
  noBtn.onclick = () => {
    chrome.runtime.sendMessage(null, "closeTab")
  };

  // append to main page
  mainDiv.appendChild(waitImage);
  mainDiv.appendChild(questionDiv);
  answersDiv.appendChild(yesBtn);
  answersDiv.appendChild(noBtn);
  mainDiv.appendChild(answersDiv);
  document.body.appendChild(mainDiv);
}


// have only one copy of this page
if (!document.getElementById(mainDivId)) {
  createMainDiv();
}
