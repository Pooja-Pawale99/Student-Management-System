$(document).ready(function() {
    var students = [];

    function displayStudents() {
        var tableBody = $('#studentTable tbody');
        tableBody.empty();
        students.forEach(function(student, index) {
            var row = $('<tr>');
            row.append('<td>' + student.studentId + '</td>');
            row.append('<td>' + student.name + '</td>');
            row.append('<td>' + student.age + '</td>');
            row.append('<td>' + student.dob + '</td>');
            row.append('<td>' + student.gender + '</td>');
            row.append('<td>' + student.department + '</td>');
            var actions = $('<td class="actions">');
            actions.append('<button class="edit" data-index="' + index + '">Edit</button>');
            actions.append('<button class="delete" data-index="' + index + '">Delete</button>');
            row.append(actions);
            tableBody.append(row);
        });
    }

    $('#studentForm').submit(function(event) {
        event.preventDefault();
        var studentId = $('#studentId').val();
        var name = $('#name').val();
        var age = $('#age').val();
        var dob = $('#dob').val();
        var gender = $('#gender').val();
        var department = $('#department').val();
        if (studentId && name && age && dob && gender && department) {
            students.push({studentId: studentId, name: name, age: age, dob: dob, gender: gender, department: department});
            displayStudents();
            $('#studentId').val('');
            $('#name').val('');
            $('#age').val('');
            $('#dob').val('');
            $('#gender').val('');
            $('#department').val('');
        } else {
            alert('Please fill in all fields.');
        }
    });

    $('#studentTable').on('click', '.delete', function() {
        var index = $(this).data('index');
        students.splice(index, 1);
        displayStudents();
    });

    $('#studentTable').on('click', '.edit', function() {
        var index = $(this).data('index');
        var student = students[index];
        var newStudentId = prompt('Enter new student ID:', student.studentId);
        var newName = prompt('Enter new name:', student.name);
        var newAge = prompt('Enter new age:', student.age);
        var newDob = prompt('Enter new date of birth:', student.dob);
        var newGender = prompt('Enter new gender:', student.gender);
        var newDepartment = prompt('Enter new department:', student.department);
        if (newStudentId && newName && newAge && newDob && newGender && newDepartment) {
            students[index] = {studentId: newStudentId, name: newName, age: newAge, dob: newDob, gender: newGender, department: newDepartment};
            displayStudents();
        }
    });
});
