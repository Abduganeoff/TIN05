class Student {
    constructor(id, name, surname, gradesList) {
        this.name = name;
        this.surname = surname;
        this.id = id;
        this.gradesList = gradesList;
    }

    get getAvgGrade() {
        let sum = 0.0;
        for (let i = 0; i < this.gradesList.length; i++) {
            sum += this.gradesList[i];
        }
        return sum / this.gradesList.length;
    }

    get fullName() {
        return `${this.name} ${this.surname}`;
    }

    set fullName(fullName) {     
    const args = fullName.split(" ");
        this.name = args[0] || '';
        this.surname = args[1] || '';
    }


     printStudent() {
        console.log(`Id: ${this.id} \nName: ${this.name} \nSurname: ${this.surname} \nAvarage grade: ${this.getAvgGrade}`);
    }
}

const student = new Student(17514, 'Zara', 'Micheal', [5, 5, 4, 4]);
console.log(student.fullName);
student.fullName = 'Muhammad Rizo';
console.log(student.fullName + " has average " + student.getAvgGrade );
student.printStudent();
