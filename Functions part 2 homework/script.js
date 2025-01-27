// const url =
//   "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";
// console.log(url);

function Name(firstName, lastName) {
  this.first = firstName;
  this.last = lastName;
  this.getName = function () {
    return `${this.first} ${this.last}`;
  };
}

async function getNamesData() {
  const url =
    "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new error("Failed to fetch");
    }
    const responseData = await response.json();
    console.log(responseData);
    const transformData = transformData(responseData);
  } catch (error) {
    console.log("Error", error.message);
  }
}
getNamesData();

function transformData(responseData) {
  let resultArray = [];
  for (let i = 0; i < responseData.length; i++) {
    let name = new Name(responseData[i].firstName, responseData[i].lastName);
    resultArray.push(name);
  }
  console.log(resultArray);
  return resultArray;
}
transformData();
