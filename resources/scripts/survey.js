Survey.defaultBootstrapMaterialCss.navigationButton = "btn btn-green";
Survey.defaultBootstrapMaterialCss.rating.item = "btn btn-default my-rating";
Survey
    .StylesManager
    .applyTheme("bootstrapmaterial");

var json = {
    pages: [
        {
            questions: [
                {
                    type: "matrix",
                    name: "Experience",
                    title: "Rate your personal experiences with the selected employee: ",
                    columns: [
                        {
                            value: 5,
                            text: "Always"
                        }, {
                            value: 4,
                            text: "Most of the Time"
                        }, {
                            value: 3,
                            text: "Sometimes"
                        }, {
                            value: 2,
                            text: "Rarely"
                        }, {
                            value: 1,
                            text: "Never"
                        }
                    ],
                    rows: [
                        {
                            value: "response",
                            text: "Employee responds in timely manner when reached out to"
                        }, {
                            value: "communicates",
                            text: "Employee communicates well"
                        }, {
                            value: "clearexpectations",
                            text: "Employee understands and acts in line with company expectations"
                        }, {
                            value: "Productivity",
                            text: "Employee is on time and productive"
                        }
                    ]
                }, {
                    type: "rating",
                    name: "satisfaction",
                    title: "Please rank this Employee on a scale of 1-5",
                    mininumRateDescription: "Lowest",
                    maximumRateDescription: "Highest"
                }, {
                    type: "rating",
                    name: "recommend friends",
                    visibleIf: "{satisfaction} < 0",
                    title: "How likely are you to recommend the Product to a friend or co-worker?",
                    mininumRateDescription: "Will not recommend",
                    maximumRateDescription: "I will recommend"
                }, {
                    type: "comment",
                    name: "suggestions",
                    title: "Please provide any additional feedback you have for this Employee"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "impression",
                    title: "What overall impression has this employee given you while at this company?",
                    choices: ["Excellent", "Good", "Ok", "Bad"]
                }, {
                    type: "radiogroup",
                    name: "comfort",
                    title: "Has this employee ever made you feel uncomfortable?",
                    choices: ["Yes", "No"]
                 }, 
        //          {
        //             type: "multipletext",
        //             name: "pricelimit",
        //             title: "What is the... ",
        //             items: [
        //                 {
        //                     name: "mostamount",
        //                     title: "Most amount you would every pay for a product like ours"
        //                 }, {
        //                     name: "leastamount",
        //                     title: "The least amount you would feel comfortable paying"
        //                 }
        //             ]
        //         }
        //     ]
        // }, {
        //     questions: [
        //         {
        //             type: "text",
        //             name: "email",
        //             title: "Thank you for taking our survey. Your survey is almost complete, please enter your email address in the box below if you wish to participate in our drawing, then press the 'Submit' button."
        //         }
            ]
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        

        var score = 0;
        var message = "";
        var rank = 0;
        //Message
        if(result.data.suggestions != null) {message += "\tFeedback: " + result.data.suggestions}
        if(result.data.impression != null) {message += "\tImpressions: " + result.data.impression}
        if(result.data.comfort != null) {message += "\tUncomfortable: " + result.data.comfort}

        //Score
        if(result.data.Experience != null){
            if(result.data.Experience.response != null) {score += parseInt(result.data.Experience.response)}
            if(result.data.Experience.communicates != null) {score += parseInt(result.data.Experience.communicates)}
            if(result.data.Experience.clearexpectations != null) {score += parseInt(result.data.Experience.clearexpectations)}
            if(result.data.Experience.Productivity != null) {score += parseInt(result.data.Experience.Productivity)}
        }

        //Rank
        if(result.data.satisfaction != null) {rank = parseInt(result.data.satisfaction)}


        console.log(rank);
        const m = "https://localhost:5001/api/feedback/";
        fetch(m, {
            method: "POST",
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                DestinationID: 9,
                ScoreTotal : score,
                NumQuestions : 4,
                ReviewMessage : message,
                EditTracking : "N/A",
                FinalScore : score / 4
            })
        })
        console.log(rank);
        const l = "https://localhost:5001/api/rankings/";
        fetch(l, {
            method: "POST",
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                DestinationID: 9,
                RankScore: rank
            })
        })
    });

$("#surveyElement").Survey({model: survey});


//TEST
// function getUserSurveyResults(){
//     const m = "https://localhost:5001/api/users/"
  
// }

fetch(getUsers()).then(function (result){
    document
        .querySelector('#surveyResult')
        .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3)
    return response.json();
}).then(function(json){
    let html = "";
    json.forEach((user)=>{
        html += "<div>" + user.userName +"'s survey results are in!" + "</div>"
    });

    document.getElementById("usersurveyresults").innerHTML = html;
}).catch(function(error){
    console.log(error);
});