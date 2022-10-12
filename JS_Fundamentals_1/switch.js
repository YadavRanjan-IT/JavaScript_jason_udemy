// SWITCH STATEMENT

let day = "Wednesday";

switch (day) {
  case "Monday": // STRICT COMPARISON day === 'Monday'
    console.log("Today is Monday.");
    break;
  case "Tuesday":
    console.log("Today is Tuesday.");
    break;
  case "Wednesday":
    console.log("Today is Wednesday.");
    break;
  case "Thursday":
    console.log("Today is Thursday.");
    break;
  case "Friday":
    console.log("Today is Friday.");
    break;
  case "Saturday":
    console.log("Today is Thursday.");
    break;
  default:
    console.log("Today is Sunday");
}

// ASSIGNMENTS

let language = "Nepali";

switch (language) {
  case "mandarin":
  case "chinese":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in native speakers.");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken languages");
    break;
  default:
    console.log("Great language too:D");
}
