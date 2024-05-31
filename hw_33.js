const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
}

let allStudents = 0;
let allTeachers = 0;
let array = [];

function subjectsToString(obj) {
    console.log(Object.keys(obj).join(', '));
}

function quantity(obj) {
    for (let value of Object.values(obj)) {
        allStudents += value.students;
        allTeachers += value.teachers;
    }
    console.log(allStudents, allTeachers)
}

function averageOfStudents(obj) {
    console.log(allStudents / Object.values(obj).length)
}

function arrayOfSubjects(obj) {
    for (let [subject, value] of Object.entries(obj)) {
        array.push({ subject, ...value })
    }
    console.log(array)
}

let subjectsArray = [];
function sortByTeachers(obj) {
    const sortedArray = array.sort((a, b) => b.teachers - a.teachers);
    sortedArray.forEach(item => {
        subjectsArray.push(item.subject)
    })
    console.log(subjectsArray)
}


subjectsToString(subjects)
quantity(subjects)
averageOfStudents(subjects)
arrayOfSubjects(subjects)
sortByTeachers(subjects)


