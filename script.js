function submitForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var transportation = document.querySelector('input[name="transportation"]:checked').value;
    var birthMonth = document.getElementById("birthMonth").value;
    var aboutYourself = document.getElementById("aboutYourself").value;

    alert("First Name: " + firstName +
        "\nLast Name: " + lastName +
        "\nGender: " + gender +
        "\nTransportation: " + transportation +
        "\nBirth Month: " + birthMonth +
        "\nAbout Yourself: " + aboutYourself);
}
