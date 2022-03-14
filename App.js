const scoreInput = document.getElementById("scoreInput")
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const gender = document.getElementById("gender")
const submitButton = document.getElementById("submitButton")
const formContainer = document.querySelector(".formContainer")

let scoreOutputId, gradeOutputId, first_Name_Output, last_Name_Output, gender_output

let grades = ['A', 'B', 'C', 'D', 'E', 'F']


let grading = () => {
      
    if(scoreInput.value <= 100 && scoreInput.value >= 70){
        gradeOutputId.innerHTML=grades[0]
    }

    else if(scoreInput.value < 70 && scoreInput.value >= 60 ){
        gradeOutputId.innerHTML = grades[1]
    }

    else if (scoreInput.value < 60 && scoreInput.value >= 50 ){
        gradeOutputId.innerHTML = grades[2]
    }

    else if (scoreInput.value < 50 && scoreInput.value >= 45 ){
        gradeOutputId.innerHTML = grades[3]
    }

    else if (scoreInput.value < 45 && scoreInput.value >= 40 ){
        gradeOutputId.innerHTML = grades[4]
    }

    else if (scoreInput.value < 40 || scoreInput.value == 0 ){
        gradeOutputId.innerHTML = grades[5]
    }

}



const studentDetails = () => {

let section = document.getElementById("contents")
let elements = document.createElement('div')

elements.innerHTML= `
    <div id="tableContainer">
        <div id="firstNameOutput"></div>
        <div id="lastNameOutput"></div>
        <div id="genderOutput"></div>
        <div id="scoreOutput"></div>
        <div id="gradeOutput"></div>
    </div>`

    section.appendChild(elements)

   let getDetails = () => {

        submitButton.addEventListener("click" , (e) => {
            e.preventDefault()

           first_Name_Output= document.getElementById("firstNameOutput")
           last_Name_Output =document.getElementById("lastNameOutput")
           gender_output = document.getElementById("genderOutput")
           scoreOutputId = document.getElementById("scoreOutput")
           gradeOutputId = document.getElementById("gradeOutput")

            grading()
            first_Name_Output.innerHTML= firstName.value
            last_Name_Output.innerHTML = lastName.value
            gender_output.innerHTML = gender.value
            scoreOutputId.innerHTML= scoreInput.value
            formContainer.reset()
        })
    }
    
    getDetails()
}


studentDetails()