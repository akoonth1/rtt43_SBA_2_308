//Reference code form 
//https://codesandbox.io/p/sandbox/sba-308-example-26sg4j?file=%2Fsrc%2Findex.js%3A1%2C1-102%2C1&from-embed=


//sba 2  :SBA 308: JavaScript Fundamentals

//Due Date: 2024-09-18



/*
Requirements:
 Declare variables properly using let and const where appropriate.
 Use operators to perform calculations on variables and literals.
 Use strings, numbers, and Boolean values cached within variables.
 Use at least two if/else statements to control program flow. Optionally, use at least one switch statement.
 Use try/catch statements to manage potential errors in the code, such as incorrectly formatted or typed data being fed into your program.
 Utilize at least two different types of loops.
 Utilize at least one loop control keyword such as break or continue.
 Create and/or manipulate arrays and objects.
 Demonstrate the retrieval, manipulation, and removal of items in an array or properties in an object.
 Use functions to handle repeated tasks.
 Program outputs processed data as described above. Partial credit will be earned depending on the level of adherence to the described behavior.
 Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).
 Commit frequently to the git repository.
 Include a README file that contains a description of your application.
 */

  
 // Sample inputs

 const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  

//Start of code--

// function for LearnerSubmissions

function learners(LearnerSubmissions) {
    let u_id = [];
    LearnerSubmissions.forEach(({ learner_id }) => {
       u_id.push(learner_id);
    });

    u_id = uniqueArray(u_id);

    

    return u_id;

}

function object_ID(some_data) {category_ID = Object.keys(some_data);
    const mod_category_ID = [];
     category_ID.forEach(element => {
        mod_category_ID.push("category_" + element);

    });
    //console.log(category_ID)
    return mod_category_ID;
    };

function data_LearnerSubmissions(LearnerSubmissions) {    
        let student_row = [];
        const student_array = [];

    

for (let i = 0; i < LearnerSubmissions.length; i++) {
    student_row.push(LearnerSubmissions[i].learner_id);
    student_row.push(LearnerSubmissions[i].assignment_id);
    student_row.push(LearnerSubmissions[i].submission.submitted_at);
    student_row.push(LearnerSubmissions[i].submission.score);

    student_array.push(student_row);
    student_row = [];
}return student_array;
}




function dateformat(date_s) {
   short_date = new Date(date_s).toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
    return short_date;
}



function is_not_late(datedue, datesub){
    let is_it_late;
    if (datedue < datesub){
        is_it_late = false
    }else{
        is_it_late = true
    }

return is_it_late};


//  function for unique values
function uniqueArray(array) {
    return array.filter((value, index) => array.indexOf(value) === index);
};



//function to reorder
function new_order(object_to_change,array_of_ordered_keys){
    let place_holder_object = {}
    for(let i = 0; i < array_of_ordered_keys.length; i++){
        if(object_to_change.hasOwnProperty(array_of_ordered_keys[i])){
            place_holder_object[array_of_ordered_keys[i]] = object_to_change[array_of_ordered_keys[i]];
        }
    }

    return place_holder_object;

};



//Valid Course ID
function course_validation(CourseInfo, AssignmentGroup){
  
switch (CourseInfo.id) {
  case AssignmentGroup.course_id:
      // No error
      break;

  default:
      return [ false, `Course_ID does not match Assignment_Course_ID, please recheck if ${CourseInfo.name} is the correct course.`];
      break;
}   

}

// function for getLearnerData

function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmission){
   // console.log(CourseInfo)

const result =[];

//Check if course is correct
let is_correct_course = course_validation(CourseInfo, AssignmentGroup);

if (is_correct_course === undefined){
   is_correct_course = true;}
else
  {if (is_correct_course[0] === false) return is_correct_course[1];
}
  

//find Unique ID for learners
let test = learners(LearnerSubmission);
u_id = test;

//building array from LearnerSubmissions for ease of use 
const Learner_array = data_LearnerSubmissions(LearnerSubmissions);


//For tracking assignments
let assignment_array = [];
const assignments_done = [];



//Matches learners to assignment
for (let i = 0; i < u_id.length; i++) {
    let student_object = {};
    let sum = 0;
    let total_possible = 0;
    assignment_array=[]
    //console.log(u_id[i]);
    student_object.id = u_id[i];
    Learner_array .forEach(element => {
        if (u_id[i] === element[0]) {

        assignment_array.push(element[1]);
        let assignment_id =element[1];
        let current_date = dateformat(Date());
        AssignmentGroup.assignments.forEach(el =>{

            if(el.id === assignment_id && current_date > dateformat(el.due_at))

            {

              
                try {
                  if (typeof(el.points_possible) !== "number") throw "Invalid grade";
                  if (el.points_possible <= 0) throw "Invalid points";
                  
                } catch (error) {

                  console.log(error)
                 

                }
            
              //Throw error if points possible is an invalid choice.  



                let test_score;
                if (is_not_late(dateformat(el.due_at),dateformat(element[2])))
                { test_score = element[3]}
                
                else{test_score= element[3] - (el.points_possible*.1)};

                sum += test_score;

                total_possible += el.points_possible;

                let assig = el.id 

                student_object[assig] = test_score/el.points_possible;

            }


        });

        }
    
    });

// Switching object enumeration works but if keys are alphanumeric numbers will appear first 

// student_object.avg= avg;
// output_order =[ "id", "avg"];
// output_order2 =[ '1', '2'];
//    let ff = new_order(student_object,output_order);
//    let ff2 = new_order(student_object,output_order2);
//    let combo = Object.assign({}, ff, ff2)
//     console.log(ff)
//     console.log(ff2)
// console.log(combo)

    result.push(student_object)

}
     

        return result ;

     }
//final creation of learner data object 

console.log(getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions));






// const result2 = [
//     {
//       id: 125,
//       avg: 0.985, // (47 + 150) / (50 + 150)
//       1: 0.94, // 47 / 50
//       2: 1.0 // 150 / 150
//     },
//     {
//       id: 132,
//       avg: 0.82, // (39 + 125) / (50 + 150)
//       1: 0.78, // 39 / 50
//       2: 0.833 // late: (140 - 15) / 150
//     }
//   ];

// console.log(result2)


