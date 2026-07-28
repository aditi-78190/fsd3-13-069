import{EventEmitter}from "node:events";
const task = new EventEmitter();

const sayHi = (name) => {
    // console.log(`Welcome to ${name}`);
    console.log(`Logged In ${name}`);
};
const starts = () => {
    console.log("System started");
}
task.once("greet", starts);
task.on("greet", sayHi);  //greet-eeventname ,, sayHi- subscriber
task.on("greet", (name)) 

task.emit("greet","Shreyash"); //announcement
task.emit("greet", "Manas");

// if we replace on to once that print only first task