document.getElementById('year').style.display = "none";
document.getElementById('age').style.display = "none";

calculateYear = () => {
    let number = document.getElementById('number').value;

    // Validate number field
    if (number == "" || number == 0) {
        alert('Enter correct age');
        return;
    }

    let date = new Date().getFullYear();
    let birthYear = date - number;

    document.getElementById('year').style.display = 'block';
    document.getElementById('year').innerText = `Your birth year is ${birthYear}`;
};

calculateAge = () => {
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;

    // Validate number field
    if (number1 == "" || number2 == "") {
        alert("Field's can't be blank");
        return;
    }

    let dob1 = new Date(number1);
    let dob2 = new Date(number2);
    
    let year1 = dob1.getUTCFullYear();
    let year2 = dob2.getUTCFullYear();

    let age = year2 - year1;
    document.getElementById('age').style.display = 'block';
    document.getElementById('age').innerText = `Filter Results: ${age}`;


};


// Filters
findYearBtn = () => {
    calculateYear();
}

findAgeBtn = () => {
    calculateAge();
}