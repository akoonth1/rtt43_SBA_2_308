//Reference code form 
//https://codesandbox.io/p/sandbox/sba-308-example-26sg4j?file=%2Fsrc%2Findex.js%3A1%2C1-102%2C1&from-embed=


//sba 2  :SBA 308: JavaScript Fundamentals

//Due Date: 2024-09-18

// // The provided course information.
// const CourseInfo = {
//     id: 451,
//     name: "Introduction to JavaScript"
//   };
  
//   // The provided assignment group.
//   const AssignmentGroup = {
//     id: 12345,
//     name: "Fundamentals of JavaScript",
//     course_id: 451,
//     group_weight: 25,
//     assignments: [
//       {
//         id: 1,
//         name: "Declare a Variable",
//         due_at: "2023-01-25",
//         points_possible: 50
//       },
//       {
//         id: 2,
//         name: "Write a Function",
//         due_at: "2023-02-27",
//         points_possible: 150
//       },
//       {
//         id: 3,
//         name: "Code the World",
//         due_at: "3156-11-15",
//         points_possible: 500
//       }
//     ]
//   };
  
//   // The provided learner submission data.
//   const LearnerSubmissions = [
//     {
//       learner_id: 125,
//       assignment_id: 1,
//       submission: {
//         submitted_at: "2023-01-25",
//         score: 47
//       }
//     },
//     {
//       learner_id: 125,
//       assignment_id: 2,
//       submission: {
//         submitted_at: "2023-02-12",
//         score: 150
//       }
//     },
//     {
//       learner_id: 125,
//       assignment_id: 3,
//       submission: {
//         submitted_at: "2023-01-25",
//         score: 400
//       }
//     },
//     {
//       learner_id: 132,
//       assignment_id: 1,
//       submission: {
//         submitted_at: "2023-01-24",
//         score: 39
//       }
//     },
//     {
//       learner_id: 132,
//       assignment_id: 2,
//       submission: {
//         submitted_at: "2023-03-07",
//         score: 140
//       }
//     }
//   ];
  
//   function getLearnerData(course, ag, submissions) {
//     // here, we would process this data to achieve the desired result.
//     const result = [
//       {
//         id: 125,
//         avg: 0.985, // (47 + 150) / (50 + 150)
//         1: 0.94, // 47 / 50
//         2: 1.0 // 150 / 150
//       },
//       {
//         id: 132,
//         avg: 0.82, // (39 + 125) / (50 + 150)
//         1: 0.78, // 39 / 50
//         2: 0.833 // late: (140 - 15) / 150
//       }
//     ];
  
//     return result;
//   }
  
//   const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
//   console.log(result);

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
  
// function to calculate the normalized grade

// let normalizedgrade = function (points_earned, points_possible) {
//     return points_earned / points_possible;
    
// }
// {

// };


// console.log(normalizedgrade(28, 30)); //KBA grade ...


// function  CourseInfo

// function CourseInfo1_1(CourseInfo) {
//     CourseInfo1 =  {
//         id: 1,
//         name: "Math"};
//     if (CourseInfo1 && CourseInfo1.id !== undefined) {
//         console.log(CourseInfo1.id);
//     } else {
//         console.error("Invalid CourseInfo object:", CourseInfo);
//     }
//     return CourseInfo1.id;
// }


//  function for unique values
function uniqueArray(array) {
    return array.filter((value, index) => array.indexOf(value) === index);
}


let CourseInfo1 = function (CourseInfo) {
    return CourseInfo.id;
}

// function for AssignmentGroup

function AssignmentGroup1(id, name, course_id, group_weight, assignments) {
   // console.log(AssignmentGroup)

}

// function for AssignmentInfo

function AssignmentInfo1(id, name, due_at, points_possible) {
    //console.log(AssignmentInfo)

}


// function for LearnerSubmissions

function LearnerSubmissions1(LearnerSubmissions) {
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

return is_it_late}

// function for getLearnerData

function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmission){

let test = LearnerSubmissions1(LearnerSubmission);
u_id = test;

let Learner_array = data_LearnerSubmissions(LearnerSubmissions);

let assignment_array = [];
const assignments_done = [];



//Matches learners to assignment
for (let i = 0; i < u_id.length; i++) {
    let sum = 0;
    let total_possible = 0;
    assignment_array=[]
    console.log(u_id[i]);
    Learner_array .forEach(element => {
        if (u_id[i] === element[0]) {

        assignment_array.push(element[1]);
        let assignment_id =element[1];
        let current_date =dateformat(Date());
        AssignmentGroup.assignments.forEach(el =>{

            if(el.id === assignment_id && current_date > dateformat(el.due_at))

            {
                sum += element[3];
                console.log(current_date > dateformat(el.due_at));
                console.log(current_date);
                 console.log(dateformat(el.due_at) + " due date");
                 console.log(dateformat(element[2]) + " submission date");
                total_possible += el.points_possible;
                console.log(sum/total_possible+" student average");
                console.log(element[3]/el.points_possible +" testscore");
                console.log(is_not_late(dateformat(el.due_at),dateformat(element[2])) +" late")
            }

            // if(Learner_array.length === 1){
            //     console.log("student array length");
            //     console.log(total_possible+ " total possible");
            //     console.log(sum+ " sum");
            //     console.log(sum/total_possible+" student average");
            //     console.log(element[3]/el.points_possible +" testscore");
            // }
        });

        }
    
    });
    assignments_done.push(assignment_array);
    console.log(sum+"the sum");
    let avg = sum / total_possible;
    console.log(avg +"final");
    console.log(total_possible);

    console.log(total_possible+ " total possible final");
}
     

//console.log(assignments_done);

        return true    ;

     }




//console.log(object_ID(CourseInfo));


//const result = 
console.log(getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions));


//console.log(LearnerSubmissions[0])
// console.log(CourseInfo1(CourseInfo));

// console.log(CourseInfo.id);

// console.log(result);

// function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmission){
//     console.log("hello");
//     let course_id_course_info = CourseInfo1(CourseInfo);
//     let course_id = AssignmentGroup.id;
//     console.log(course_id);
//     //console.log(AssignmentGroup.course_id);

//     // let test = LearnerSubmissions1(LearnerSubmission);
//     // console.log(test); 

//     // console.log("Hello World")
//     // console.log(CourseInfo1(CourseInfo));
//     // // console.log(AssignmentGroup1);
//     console.log(LearnerSubmissions1(LearnerSubmission));
//     // return "Hello World";

//     return true;



