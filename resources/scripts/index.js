const body = document.body;
const menuLinks = document.querySelectorAll(".admin-menu a");
const collapseBtn = document.querySelector(".admin-menu .collapse-btn");
const toggleMobileMenu = document.querySelector(".toggle-mob-menu");
const collapsedClass = "collapsed";

collapseBtn.addEventListener("click", function() {
  this.getAttribute("aria-expanded") == "true"
    ? this.setAttribute("aria-expanded", "false")
    : this.setAttribute("aria-expanded", "true");
  this.getAttribute("aria-label") == "collapse menu"
    ? this.setAttribute("aria-label", "expand menu")
    : this.setAttribute("aria-label", "collapse menu");
  body.classList.toggle(collapsedClass);
});

toggleMobileMenu.addEventListener("click", function() {
  this.getAttribute("aria-expanded") == "true"
    ? this.setAttribute("aria-expanded", "false")
    : this.setAttribute("aria-expanded", "true");
  this.getAttribute("aria-label") == "open menu"
    ? this.setAttribute("aria-label", "close menu")
    : this.setAttribute("aria-label", "open menu");
  body.classList.toggle("mob-menu-opened");
});

for (const link of menuLinks) {
  link.addEventListener("mouseenter", function() {
    body.classList.contains(collapsedClass) &&
    window.matchMedia("(min-width: 768px)").matches
      ? this.setAttribute("title", this.textContent)
      : this.removeAttribute("title");
  });
}

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

function getFeedback(){
  //const m = "https://localhost:5001/api/feedback/"
  const allFeedbackApiUrl = "https://tasapi.herokuapp.com/api/feedback"

  fetch(m).then(function(response){
      return response.json();
  }).then(function(json){
      let html = "<table style=\"width:100%\">";
      html += "<tr><th>ID</th><th>ScoreTotal</th><th>NumQuestions</th><th>ReviewMessage</th><th>EditTracking</th><th>FinalScore</th>";
      json.forEach((feedback)=>{
          html += "<tr><td>" +  feedback.DestinationID + "</td><td>" + feedback.ScoreTotal + "</td><td>" + feedback.NumQuestions + "</td><td>" + feedback.ReviewMessage + "</td><td>" + feedback.EditTracking + "</td><td>" + feedback.FinalScore + "</td>";
      });
      html += "</table>";

      document.getElementById("feedback").innerHTML = html;
  }).catch(function(error){
      console.log(error);
  });
}

function getUsers(){
  const m = "https://localhost:5001/api/users/"

  fetch(m).then(function(response){
      return response.json();
  }).then(function(json){
      let html = "<table style=\"width:100%\">";
      html += "<tr><th>ID</th><th>UserID</th><th>UserFName</th><th>UserLName</th><th>UserName</th><th>UserType</th>";
      json.forEach((user)=>{
          html += "<tr><td>" +  user.UserID + "</td><td>" + user.UserFName + "</td><td>" + user.UserLName + "</td><td>" + user.UserName + "</td>";
      });
      html += "</table>";

      document.getElementById("users").innerHTML = html;
  }).catch(function(error){
      console.log(error);
  });
}


