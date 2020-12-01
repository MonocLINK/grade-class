$(function() {

    $("#inputForm").submit(calculate);


    function calculate(event) {
        event.preventDefault();

        // assigns students into object with all entries as variables student has
        var student = Object.fromEntries(new FormData($("#inputForm")[0]).entries());

        // percent
        student["percentage"] = (student.pointsEarned / student.pointsPossible) * 100;

        // letter grade
        if (student.percentage >= 90) {
            student["letterGrade"] = "A";
        } else if (student.percentage >= 80) {
            student["letterGrade"] = "B";
        } else if (student.percentage >= 70) {
            student["letterGrade"] = "C";
        } else if (student.percentage >= 60) {
            student["letterGrade"] = "D";
        } else {
            student["letterGrade"] = "F";
        }

        // outputs

        $("#nameOutput").text(`${student.fName} ${student.lName}`)
        $("#gradeOutput").text(`${student.letterGrade} ${student.percentage.toFixed(2)}%`)
    }
});