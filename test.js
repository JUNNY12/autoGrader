const scoreInput = document.getElementById("scoreInput")
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const gender = document.getElementById("gender")
const submitButton = document.getElementById("submitButton")
const formContainer = document.querySelector(".formContainer")

let first_name, last_name , gender_input, score_input

let scoreOutputId, gradeOutputId, first_Name_Output, last_Name_Output, gender_output







const studentDetails = () => {

    let getDetails = () => {

        submitButton.addEventListener("click", (e) => {
            e.preventDefault()
            
            first_Name_Output = document.getElementById("firstNameOutput")
            last_Name_Output = document.getElementById("lastNameOutput")
            gender_output = document.getElementById("genderOutput")
            scoreOutputId = document.getElementById("scoreOutput")
            gradeOutputId = document.getElementById("gradeOutput")

            first_name = firstName.value
            last_name = lastName.value
            gender_input = gender.value
            score_input = scoreInput.value

            grading()

            
        
            let section = document.getElementById("contents")
            let elements = document.createElement('div')

            elements.innerHTML =

                `
                <div id="firstNameOutput">${first_name}</div>
                <div id="lastNameOutput">${last_name}</div>
                <div id="genderOutput">${gender_input}</div>
                <div id="scoreOutput">${score_input}</div>
                <div id="gradeOutput"></div>
            `

            section.appendChild(elements)
            formContainer.reset()
        })
    }

    getDetails()
}


let grading = () => {

    let gradeRemarks;

    if (score_input <= 100 && score_input >= 70) {
        gradeRemarks = "A"
    } else if (score_input < 70 && score_input >= 60) {
        gradeRemarks = "B"
    } else if (score_input < 60 && score_input >= 50) {
        gradeRemarks = "C"
    } else if (score_input < 50 && score_input >= 45) {
        gradeRemarks = "D"
    } else if (score_input < 45 && score_input >= 40) {
        gradeRemarks = "E"
    } else if (score_input < 40 || score_input == 0) {
        gradeRemarks = "F"
    }

    gradeOutputId.innerHTML= gradeRemarks

}



studentDetails()