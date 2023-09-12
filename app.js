
function CalculateAge() {

    let userInput = document.getElementById("date").value;
    let DOB = new Date(userInput);

    if (userInput == null || userInput == "") {
        alert("Enter your Date Of Birth Please.!");
    }
    else {
        // calculate the month difference from current date in time format.
        let month_diff = Date.now() - DOB.getTime();

        // convert the calculated difference in date format.
        let age = new Date(month_diff);

        //extract year from date
        let year = age.getUTCFullYear();

        //now Calculate the age of the user.
        let userAge = Math.abs(year - 1970);

        document.getElementById("msg").innerHTML = `You are ${userAge} years old.`;
    }
}

