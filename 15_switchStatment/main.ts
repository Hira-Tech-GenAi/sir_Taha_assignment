// Make a typescript file and convert this code into switch statment.
// let num = 75;

// if (num > 90) { console.log("Grade: A"); } else if (num > 80) { console.log("Grade: B"); } else if (num > 70) { console.log(Grade: C""); } else if (num > 60) { console.log("Grade: D"); } else if (num > 50) { console.log("Grade: E"); } else { console.log("Grade: F"); }

let num = 75;
switch (num) {
  case 90:
    console.log("Grade: A");
    break;
  case 80:
    console.log("Grade: B");
    break;
  case 70:
    console.log("Grade: C");
    break;
  case 60:
    console.log("Grade: D");
    break;
  case 50:
    console.log("Grade: E");
  default:
    console.log("Grade: F");
    break;
}
