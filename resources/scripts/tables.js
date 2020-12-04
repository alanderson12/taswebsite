function getUserTable(){
    const m = "https://localhost:5001/api/users/"
  
    fetch(m).then(function(response){
        return response.json();
    }).then(function(json){
        let html = "<button type=\"button\" onclick = \"clearUserTable()\">close</button><table style=\"width:100%\">";
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
function getFeedbackTable(){
    const m = "https://localhost:5001/api/feedback/"; //CHANGE 
  
    fetch(m).then(function(response){
        return response.json();
    }).then(function(json){
        let html = "<button type=\"button\" onclick = \"clearFeedbackTable()\">close</button><table style=\"width:100%\">";
        html += "<tr><th>DestinationID</th><th>ScoreTotal</th><th>NumQuestions</th><th>ReviewMessages</th><th>EditTracking</th><th>FinalScore</th>";
        json.forEach((feedback)=>{
            html += "<tr><td>" + feedback.destinationID + "</td><td>" +  feedback.scoreTotal + "</td><td>" + feedback.numQuestions + "</td><td>" + feedback.reviewMessage + "</td><td>" + feedback.editTracking + "</td><td>" + feedback.finalScore + "</td>";
        });
        html += "</table>";
  
        document.getElementById("feedback").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    });
}

function getRankingTable(){
    const m = "https://localhost:5001/api/rankings/"; //CHANGE 
  
    fetch(m).then(function(response){
        return response.json();
    }).then(function(json){
        var count = 1;
        let html = "<button type=\"button\" onclick = \"clearRankingTable()\">close</button><table style=\"width:100%\">";
        html += "<tr><th>destinationID</th><th>RankScore</th>";
        json.forEach((ranking)=>{
            html += "<tr><td>" + ranking.destinationID + "</td><td>" +  ranking.rankScore + "</td>";
        });
        html += "</table>";
  
        document.getElementById("ranking").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    });
}

function clearRankingTable(){
    document.getElementById("ranking").innerHTML = "";
}

function clearUserTable(){
    document.getElementById("users").innerHTML = "";
}

function clearFeedbackTable(){
    document.getElementById("feedback").innerHTML = "";
}