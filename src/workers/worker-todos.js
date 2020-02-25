/* eslint-disable */

const workercode = () => {

  self.onmessage = function(e) {
      console.log('Message received from main script' + e.data);

      fetch(e.data)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        // for simulating error uncomment line below
        // myJson = {} 
        setTimeout(() => {
          self.postMessage(myJson)
        },3000);
      });
  }
};

let code = workercode.toString();
code = code.substring(code.indexOf("{")+1, code.lastIndexOf("}"));

const blob = new Blob([code], {type: "application/javascript"});
const worker_script_todos = URL.createObjectURL(blob);

export default worker_script_todos;