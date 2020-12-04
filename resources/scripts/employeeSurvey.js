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
                    title: "Rate your personal experiences with the current employee: ",
                    columns: [
                        {
                            value: 1,
                            text: "Always"
                        }, {
                            value: 2,
                            text: "Most of the Time"
                        }, {
                            value: 3,
                            text: "Sometimes"
                        }, {
                            value: 4,
                            text: "Rarely"
                        }, {
                            value: 5,
                            text: "Never"
                        }
                    ],
                    rows: [
                        {
                            value: "response",
                            text: "Employee responds in a timely manner "
                        }, {
                            value: "communicates",
                            text: "Employee communicates well"
                        }, {
                            value: "clear expectations",
                            text: "Employee sets clear expectations"
                        }, {
                            value: "Productivity",
                            text: "Employee is on time and productive"
                        }
                    ]
                }, {
                    type: "rating",
                    name: "satisfaction",
                    title: "How satisfied are you with the Employee?",
                    mininumRateDescription: "Not Satisfied",
                    maximumRateDescription: "Completely satisfied"
                }, {
                    type: "rating",
                    name: "recommend friends",
                    visibleIf: "{satisfaction} > 3",
                    title: "How likely are you to recommend the Product to a friend or co-worker?",
                    mininumRateDescription: "Will not recommend",
                    maximumRateDescription: "I will recommend"
                }, {
                    type: "comment",
                    name: "suggestions",
                    title: "How would you like to see the current employee improve?"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "price to competitors",
                    title: "How would you rate the employee's priority of work?",
                    choices: ["Excellent", "Good", "Ok", "Bad"]
                }, {
                    type: "radiogroup",
                    name: "price",
                    title: "Are you happy in your current work environment?",
                    choices: ["correct|Yes, I enjoy my work environment", "low|No, I'm not always happy with my work environment", "high|No, Management needs some serious adjusting"]
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
    .fetch("https://localhost:5001/api/feedback", {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            DestinationID : 1,
            ScoreTotal : 10,
            NumQuestions : 3,
            ReviewMessage : result.data,
            EditTracking : "N/a",
            FinalScore : 3
        })
    })
    .add(function (result) {
        document
            .querySelector('#surveyResultEmployee')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElementEmployee").Survey({model: survey});