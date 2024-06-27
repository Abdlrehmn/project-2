// 1. canVote function
function canVote(age) {
    if (age >= 18) {
      return "You are eligible to vote.";
    } else {
      return "You are not eligible to vote.";
    }
  }
  
  console.log(canVote(20)); // Output: You are eligible to vote.
  console.log(canVote(17)); // Output: You are not eligible to vote.
  
  // 2. maxOfTwo function
  function maxOfTwo(a, b) {
    if (a >= b) {
      return a;
    } else {
      return b;
    }
  }
  
  console.log(maxOfTwo(10, 20)); // Output: 20
  console.log(maxOfTwo(30, 20)); // Output: 30
  
  // 3. isEvenOrOdd function
  function isEvenOrOdd(num) {
    if (num % 2 === 0) {
      return "The number is even.";
    } else {
      return "The number is odd.";
    }
  }
  
  console.log(isEvenOrOdd(10)); // Output: The number is even.
  console.log(isEvenOrOdd(11)); // Output: The number is odd.
  
  // 4. getGrade function
  function getGrade(score) {
    if (score >= 90 && score <= 100) {
      return "A";
    } else if (score >= 80 && score <= 89) {
      return "B";
    } else if (score >= 70 && score <= 79) {
      return "C";
    } else if (score >= 60 && score <= 69) {
      return "D";
    } else if (score >= 0 && score <= 59) {
      return "F";
    } else {
      return "Invalid score.";
    }
  }
  
  console.log(getGrade(95)); // Output: A
  console.log(getGrade(75)); // Output: C
  
  // 5. greet function
  function greet(name) {
    return "Hello, " + name + "!";
  }
  
  console.log(greet("John")); // Output: Hello, John!
  
  // 6. square function
  function square(num) {
    return num * num;
  }
  
  console.log(square(5)); // Output: 25
  
  // 7. celsiusToFahrenheit function
  function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
  }
  
  console.log(celsiusToFahrenheit(30)); // Output: 86
  
  // 8. isPositive function
  function isPositive(num) {
    return num > 0;
  }
  
  console.log(isPositive(10)); // Output: true
  console.log(isPositive(-5)); // Output: false
  
  // 9. Patient object
  let patient = {
    name: "ABDUL REHMAN KHAN",
    age: 17,
    height: 175,
    weight: 50,
    bloodType: "+AB"
  };
  
  console.log(patient);
  
  // 10. Student object
  let student = {
    name: "ABDUL-REHMAN KHAN",
    age: 20,
    grade: 12,
    gpa: 3.5,
    courses: ["Math", "Science", "English"]
  };
  
  console.log(student);