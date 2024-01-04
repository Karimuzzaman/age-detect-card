function calculateAge() {
    let age = document.getElementById("input-age").value;
    let adult = document.getElementById("adult");
    let child = document.getElementById("child");

    if (age.length === 0) {
        return alert("Please enter a number");
    }
    else {
        let ageNumber = parseInt(age);

        if (ageNumber > 17) {
            child.classList.add('d-none')
            adult.classList.remove('d-none')
        }
        else {
            child.classList.remove('d-none')
            adult.classList.add('d-none')
        }
    }
}
