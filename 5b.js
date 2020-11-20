function Student(name, surname, id, grades) {
    this.name = name;
    this.surname = surname;
    this.id = id;
    this.grades = grades;

    this.avgGrades = function(){

        let sum = 0.0;
        for (let i = 0; i < this.grades.length; i++) sum += this.grades[i];
        let avgGrade = sum / this.grades.length;
        console.log(`Id: ${this.id} \nName: ${this.name} \nSurname: ${this.surname} \nAvarage grade: ${avgGrade}`);


    };
}

const student = new Student("Muhammad", "Rizo", 17514, [2, 3, 3, 5]);
student.avgGrades();
