// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

function addNew(){
    var studentName = prompt("Enter student name to add to roster:");
    roster.push(studentName)
    alert("Added name:" + studentName);
}

function remove() {
    var studentName = prompt("Enter the name of student to remove from roster:");
    var index = roster.indexOf(studentName);
    if (index > -1) {
        roster.splice(index, 1);
    }
    alert("Removed name:" + studentName);
}

function display(){
    alert("Names in roster:" + roster)
}

// Create the functions for the tasks
function task(){

    while(true){
        var proceed = prompt("To start task enter \"yes\" or enter \"quit\"");
        if(proceed === "quit") {
            alert("Quitting the task, please reload the page to start again");
            break;
        }
        else if(proceed !== "yes") {
            alert("Please select a valid option");
            continue;
        }


        var taskName = prompt("Select task-name to \"add\", \"remove\" and \"display\" roster:");

        if(taskName === 'add'){
            addNew()
        }
        else if(taskName === 'remove'){
            remove()
        }
        else if(taskName === 'display'){
            display()
        }
        else {
           alert("Please select a valid task name");
           continue;
       }

    }
}

task()
/// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array


// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.


// Start by asking if they want to use the web app

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
