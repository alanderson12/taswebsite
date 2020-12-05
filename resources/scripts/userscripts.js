// function getUsers(){
//     const m = "https://localhost:5001/api/users/"
  
//     fetch(m).then(function(response){
//         return response.json();
//     }).then(function(json){
//         let html = "<table style=\"width:100%\">";
//         html += "<tr><th>ID</th><th>UserID</th><th>UserFName</th><th>UserLName</th><th>UserName</th><th>UserType</th>";
//         json.forEach((user)=>{
//             html += "<tr><td>" +  user.UserID + "</td><td>" + user.UserFName + "</td><td>" + user.UserLName + "</td><td>" + user.UserName + "</td><td>" + user.TeamID + "</td>";
//         });
//         html += "</table>";
  
//         document.getElementById("users").innerHTML = html;
//     }).catch(function(error){
//         console.log(error);
//     });
//   }

function getUsers(){
    const m = "https://localhost:5001/api/users/"
  
    fetch(m).then(function(response){
        return response.json();
    }).then(function(json){
        let html = "<table style=\"width:100%\">";
        html += "<tr><th>UserID</th><th>UserName</th><th>UserType</th><th>UserFName</th><th>UserLName</th><th>TeamID</th>";
        json.forEach((user)=>{
            html += "<tr><td>" +  user.userID +  "</td><td>" + user.userFName + "</td><td>" + user.userLName + "</td><td>" + user.userName + "</td><td>" + user.userType + "</td><td>" + user.teamID + "</td>";
        });
        html += "</table>";
  
        document.getElementById("users").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    });
}

function getUserSurvey(){
    const m = "https://localhost:5001/api/users/"
  
    fetch(m).then(function(response){
        return response.json();
    }).then(function(json){
        let html = "";
        json.forEach((user)=>{
            html += "<div class=\"grid-item\">" + user.userName +"</div><div class=\"grid-item\"><a href=\"survey.html\"><button type=\"button\">Survey</button></a></div>"
        });
  
        document.getElementById("usersurveys").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    });
}


function getFeedback(){
    const userID = 9;
    //const m = "https://localhost:5001/api/feedback/" + userID; //CHANGE 
    const m = "https://tasapi.herokuapp.com/api/feedback" + userID
  
    fetch(m).then(function(response){
        return response.json();
    }).then(function(json){
        let html = "<table style=\"width:100%\">";
        html += "<tr><th>ID</th><th>Score</th><th>Feedback</th><th>Last Editted</th>";
        json.forEach((feedback)=>{
            html += "<tr><td>" + feedback.destinationID + "</td><td>" +  feedback.finalScore + "</td><td>" + feedback.reviewMessage + "</td><td>" + feedback.editTracking + "</td>";
        });
        html += "</table>";
  
        document.getElementById("feedback").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    });
}

function getRanking(){
    const userID = 9;
    //const m = "https://localhost:5001/api/rankings/" + userID; //CHANGE 
    const m = "https://tasapi.herokuapp.com/api/rankings" + userID
  
    fetch(m).then(function(response){
        return response.json();
    }).then(function(json){
        var count = 1;
        let html = "<table style=\"width:100%\">";
        html += "<tr><th>Rankings</th><th>Score</th>";
        json.forEach((ranking)=>{
            html += "<tr><td>" + count + "</td><td>" +  ranking.rankScore + "</td>";
            count++;
        });
        html += "</table>";
  
        document.getElementById("ranking").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    });
}
function getAvgRanking(){
    const userID = 9;
    const m = "https://localhost:5001/api/rankings/" + userID; //CHANGE 
  
    fetch(m).then(function(response){
        return response.json();
    }).then(function(json){
        var score = 0;
        var count = 0;
        json.forEach((ranking)=>{
            score += parseFloat(ranking.rankScore);
            count++;
        });
        console.log(score, count)
        if(count == 0){
            final = 0;
        }
        else{
            var final = score / parseFloat(count)
        }
        let html = "<p1>Average Ranking:    " + final + "</p1>"
  
        document.getElementById("avgScore").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    });
}
function getAvgRanking1(){
    const userID = 9;
    const m = "https://localhost:5001/api/rankings/" + userID; //CHANGE 
  
    fetch(m).then(function(response){
        return response.json();
    }).then(function(json){
        var score = 0;
        var count = 0;
        json.forEach((ranking)=>{
            score += parseFloat(ranking.rankScore);
            count++;
        });
        console.log(score, count)
        if(count == 0){
            final = 0;
        }
        else{
            var final = score / parseFloat(count)
        }
        let html = parseInt(final)
  
        document.getElementById("avg").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    });
}
function getNumFeedback(){
    const userID = 9;
    const m = "https://localhost:5001/api/feedback/" + userID; //CHANGE 
  
    fetch(m).then(function(response){
        return response.json();
    }).then(function(json){
        var count = 0;
        json.forEach((feedback)=>{
            count++;
        });

        let html = count
  
        document.getElementById("numFeedback").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    });
}

