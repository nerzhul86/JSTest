
/* To Do
Collect Answer for each Question - When an Answer Block has been clicked - Done
Scroll to the topmost unanswered question  - Done

Show Results when all Questions are answered
    a. Create Result block
    b. Prepare Result data array - Need to add more choices and images
    c. Program logic- Done


Image also zooms in - Need to research this

Disable other Answers if there is an Answer for Question - Done

If another Answer is clicked, update selected Answer?
Or provide Reset button?

*/


/** Variable Declarations **/

const quizData = [
    {
        id: "1",
        question: "Pick a Hairstyle:",
        answers: [
            {
                id: "1.A",
                text: "Classic",
                img: "./Images/classic2.jpg",
                credit: "Splash"
            },
            {
                id: "1.B",
                text: "Blonde Short",
                img: "./Images/shortwide.jpg",
                credit: "Splash"
            },
            {
                id: "1.C",
                text: "Shoulder Length",
                img: "./Images/shoulder-length.jpg",
                credit: "Splash"
            },
            {
                id: "1.D",
                text: "Dark Short",
                img: "./Images/dark-short2.jpg",
                credit: "Splash"
            }
        ]
    },
    {
        id: "3",
        question: "Pick a Co-Star:",
        answers: [
            {
                id: "3.A",
                text: "Chris Evans",
                img: "./Images/ChrisE1.jpg",
                credit: "Splash"
            },
            {
                id: "3.B",
                text: "Samuel L. Jackson",
                img: "./Images/Samuel2.jfif",
                credit: "Splash"
            },
            {
                id: "3.C",
                text: "Elizabeth Olsen",
                img: "./Images/ElizabethScarlett.jpg",
                credit: "Splash"
            },
            {
                id: "3.D",
                text: "Paul Rudd",
                img: "./Images/Paul2.jfif",
                credit: "Splash"
            }
        ]
    },
    {
        id: "4",
        question: "Pick a Talent:",
        answers: [
            {
                id: "4.A",
                text: "Cutely Awkward Conversation",
                img: "./Images/",
                credit: "Splash"
            },
            {
                id: "4.B",
                text: "Smug and Sexy",
                img: "./Images/scarlett-johansson.gif",
                credit: "Splash"
            },
            {
                id: "4.C",
                text: "Fend off Sexist Comments",
                img: "./Images/Sexist.gif",
                credit: "Splash"
            },
            {
                id: "4.D",
                text: "Democrat Badass",
                img: "./Images/DemocratBadass.jpg",
                credit: "Splash"
            }
        ]
    }
]

let answeredQuestions = [];

/** Function Declarations **/

//Function that populates DOM with Quiz details

function populateQuiz(quizData)
{

    let quizBody = document.querySelector('.section');

    for(let question of quizData)
    {
       // Creating Question Block 
       let qDiv = document.createElement('div');
       qDiv.classList.add("question");
       qDiv.id = question.id;
       qDiv.textContent = question.question;
       
       quizBody.appendChild(qDiv);

       //Creating Answers div

       let ADiv = document.createElement('div');
       ADiv.classList.add("answers");

       //Loop over each Answer to make Answer Block

       for(let answer of question.answers)
       {
          //Creating Answer Block
          let ABlock = document.createElement('div');
          ABlock.classList.add("answer-block");
          ABlock.id = answer.id;

          //Creating Answer Image DiV
          let AImg = document.createElement('img');
          AImg.classList.add("ans-img");
          AImg.src = answer.img;

          ABlock.appendChild(AImg);

          //Creating Answer Text DiV
          let ATxt = document.createElement('div');
          ATxt.classList.add("ans-txt");
          ATxt.textContent = answer.text;

          ABlock.appendChild(ATxt);

           //Creating Answer Splash DiV
           let ASplash = document.createElement('div');
           ASplash.classList.add("ans-splash");
           ASplash.textContent = answer.credit;
 
           ABlock.appendChild(ASplash);

           //Append Answers Block to Answers
           ADiv.appendChild(ABlock);

       }//End of For Loop

       //Append Answers to Section below Question
       quizBody.appendChild(ADiv);

    }//End of main Question loop

}//End of Function


//Function that extracts the chosen Answer data and returns it as an object

function extractDataFromAnswer(clickedAns)
{

    let answerText;

    let questionId = clickedAns.slice(0,1);

    let answerSet = quizData.find(q => q.id === questionId);
    
   // console.log(answerSet);

    for(let answer of answerSet.answers)
    {
        if(answer.id === clickedAns)
        {
          answerText = answer.text;
          break;   
        }
    }

    return answerText;

}//End of Function

//Function that sets Question as Answered

function setQuestionAsAnswered(clickedAns)
{
   
        //Take Question Id from clickedAns
        // Add Answered class to Question
        // Go to next Question without Answered Class
    console.log("Setting Clicked Question as Answered.");
     
    let questionId = clickedAns.slice(0,1);

    let answeredQuestion = document.getElementById(questionId);

//    console.log(answeredQuestion);

    answeredQuestion.classList.add("answered");

    disbleOtherAnswers(answeredQuestion);
    
    return jumpToNextAnsweredQuestion();
      
} //End of Function

//Function that uses the parent Question to find all the unanswered answers and disable them

function disbleOtherAnswers(answeredQuestion)
{

    console.log("Disabling all other Answers");
    console.log("Parent Question");
    console.log(answeredQuestion);

    let answerB = answeredQuestion.nextSibling;

    console.log("Its Answer Block");
    console.log(answerB);

    let answerList = answerB.querySelectorAll('.answer-block');

    for(let answer of answerList)
    {
        if(!answer.classList.contains("answered-A"))
        {
            answer.classList.add("disabled");
        }
    }

}//End of Function

//Function that loops over all Questions, finds the next unanswered question and scrolls to that question

function jumpToNextAnsweredQuestion()
{
    const qElements = document.querySelectorAll(".question");

    for(let i=0; i<qElements.length; i++)
    {
        let Q = qElements[i];
 //       console.log("Question being considered:");
 //       console.log(Q);

 //       console.log("Question has classes:");
 //       console.log(Q.classList);

        if(!Q.classList.contains('answered'))
        {
           console.log("Scrolling to question and exiting loop");
           Q.scrollIntoView();
           return 0;
        }
    }

    console.log("Exited For Loop. No Questions left unanswered.");
    console.log("Need to show Results.");

    return 1;    

} //End of Function

//Function that creates Result block and displays Results

function displayResults(choices)
{

    // User Choices are sorted alphabetically, so that even if User chooses in a random order, comparison with result set will work
    console.log("Sorted List of Choices:");
    console.log(choices.sort());

    let character ="Old Hollywood Starlet";

    let answerListString = JSON.stringify(choices);

    let results = 
    [
        {
            character: "Femme Fatale",
            combination: ["Dark Short", "Democrat Badass", "Paul Rudd"]
        },
        {
            character: "Hardworking Innocent Working Girl",
            combination: ["Chris Evans", "Cutely Awkward Conversation", "Shoulder Length"]
        }

    ]

    for(let i=0; i<results.length; i++)
    {
        let result = results[i];

        let resultString = JSON.stringify(result.combination);
      
        console.log("String conversion complete:");
        console.log(resultString);
        console.log(answerListString);

        if(resultString === answerListString)
        {
            console.log("Match Found!");
            character = result.character;
            break;
        }

    } //End of For Loop
  
    console.log("After comparing Choices against all possible Result outcomes.");
    console.log(`Character: ${character}`);
 
} //End of Function


populateQuiz(quizData);

console.log("Quiz Script loaded.");

const answerBlocks = document.querySelectorAll('.answer-block');

for(let i=0; i<answerBlocks.length; i++)
{

    let ABlock = answerBlocks[i];
    //console.log(ABlock);

    ABlock.addEventListener('click', (event)=>{

      //  console.log('Class of Element Clicked: ');
      //  console.log(event.target.className);

        let clickedBlock = event.target;
        let clickedAns = "";

        if(clickedBlock.className === "answer-block")
        {
            clickedAns=clickedBlock.id;
            clickedBlock.classList.add('answered-A');
        }
        else
        {  
            clickedAns = clickedBlock.parentElement.id;
            clickedBlock.parentElement.classList.add('answered-A');
        }

       // console.log(`Clicked Answer: ${clickedAns}`);
      //  console.log("Pushing Answer into Choice List");

        let choice = extractDataFromAnswer(clickedAns);

//        console.log("Choice Object Data:");
//        console.log(choice);

        answeredQuestions.push(choice);

      //  console.log("Choices Made so far:");
      //  console.log(answeredQuestions);
        
        let displayFlag = setQuestionAsAnswered(clickedAns);

        //Flag is 1 if all Questions have been answered.
        if(displayFlag)
        displayResults(answeredQuestions);
        
    });

}