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
                    title: "Rate your experience with your teammates on a scale of 1-5 (1 being the worst, 5 being the best): ",
                    columns: [
                        {
                            value: 1,
                            text: "1"
                        }, {
                            value: 2,
                            text: "2"
                        }, {
                            value: 3,
                            text: "3"
                        }, {
                            value: 4,
                            text: "4"
                        }, {
                            value: 5,
                            text: "5"
                        }
                    ],
                    rows: [
                        {
                            value: "1",
                            text: "Linley Green "
                        }, {
                            value: "2",
                            text: "David Platt"
                        }, {
                            value: "3",
                            text: "Avery"
                        }
                    ]
                }
            ]
        }, {
            questions: [
                {
                    //type: "radiogroup",
                    //name: "price to competitors",
                    //title: "How would you rate the manager's priority of employees health and well being?",
                    //choices: ["Excellent", "Good", "Ok", "Bad"]
                }, {
                    //type: "radiogroup",
                    //name: "price",
                    //title: "Are you happy in your current work environment?",
                //     choices: ["correct|Yes, I enjoy my work environment", "low|No, I'm not always happy with my work environment", "high|No, Management needs some serious adjusting"]
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
        document
            .querySelector('#teamRankingResults')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElement").Survey({model: survey});