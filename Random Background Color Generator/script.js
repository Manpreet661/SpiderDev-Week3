function calculateGrade() {

    let marks = Number(document.getElementById("marks").value);

    let grade = "";
    let status = "";

    if (isNaN(marks) || marks === "") {
        alert("Please enter marks!");
        return;
    }

    if (marks < 0 || marks > 100) {
        alert("Marks must be between 0 - 100");
        return;
    }

    if (marks >= 90) grade = "A ✨";
    else if (marks >= 75) grade = "B 🔥";
    else if (marks >= 60) grade = "C 👍";
    else grade = "D 😢";

    status = marks >= 60 ? "PASS 🎉" : "FAIL ❌";

    document.getElementById("grade").innerText = "Grade: " + grade;
    document.getElementById("status").innerText = "Status: " + status;
}