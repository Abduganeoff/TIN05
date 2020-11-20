

function Student(name, surname, id){
    this.name = name;
    this.surname = surname;
    this.id = id;
}
const courses = ['APBD', 'TIN', 'MUL'];
Student.prototype.courses = courses;

const student = new Student('Muhammad', 'Rizo', 17514);
console.log(student.courses);