import axios from "axios";
import * as readline from "readline";
// import { readline } from "readline";



const baseurl = "http://localhost:3000";  

const fetchData = async () => {
  try {
    const response = await axios.get(`${baseurl}/generate`);
    console.log("Response:", response.data);

    const response2 = await axios.get(`${baseurl}/current-time`);
    console.log("Response:", response2.data);

    const response3 = await axios.get(`${baseurl}/environment`);
    console.log("Response:", response3.data);

    const response4 = await axios.get(`${baseurl}/puppet?name=John`);
    console.log("Response:", response4.data);

    
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Enter a number: ', async (input) => {
      const number = parseInt(input);
      if (!isNaN(number)) {
      try {
        const response5 = await axios.post(`${baseurl}/number`, { number });
        // console.log("Response:", response5.data);
      } catch (e) {
        console.error("Error:", e);
      }
      } else {
      console.log("Invalid number");
      }
      rl.close();
    });
     
    const response6 = await axios.get(`${baseurl}/numbers`);
    console.log("Response:", response6.data);
  } catch (e) {
    console.error("Error:", e); 
  }
};

fetchData();
