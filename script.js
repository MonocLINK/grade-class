$(function() {

    $("#inputForm").submit(calculate);
    $("#name").click(sortByName);
    $("#percent").click(sortByPercent);
    var studentArray = [];

    $("#debug").click(function() {
        console.log(studentArray.length);
    });

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

        studentArray.push(student);

        // outputs

        $("#nameOutput").text(`${student.fName} ${student.lName}`)
        $("#gradeOutput").text(`${student.letterGrade} ${student.percentage.toFixed(2)}%`)
    }

    function sortByName() {
        studentArray.sort(function(a, b) {
            return a.lName > b.lName ? 1 : -1;
        });
        for (var i = 0; i < studentArray.length; i++) {
            $("#sortOutputName").text(`${studentArray[i].fName} ${studentArray[i].lName}`)
        }
    }

    function sortByPercent() {
        studentArray.sort(function(a, b) {
            return a.percentage > b.percentage ? 1 : -1;
        });
        for (var i = 0; i < studentArray.length; i++) {
            $("#sortOutputPercent").text(`${studentArray[i].fName} ${studentArray[i].lName} PERCENT: ${studentArray[i].percentage}`)
        }
    }
});