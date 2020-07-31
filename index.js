// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

/* // Print out the provided task's details
function logTaskState(task) {
  console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
}

// Marks the provided task as completed
function completeTask(task) {
  task.complete = true;
} */

//DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the shat out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); //Clean Cat Litter has not been completed
task2.markCompleted();
task1.logState();   //Clean Cat Litter has been completed
