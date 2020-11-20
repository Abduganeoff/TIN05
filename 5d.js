function Student(id, name, surname, gradesList) {
    this.name = name;
    this.surname = surname;
    this.id = id;
    this.gradesList = gradesList;

    this.getAvgGrade = function() {

        let sum = 0.0;
        for (let i = 0; i < this.gradesList.length; i++)
        {
            sum += this.gradesList[i];
        } 
        return sum / this.gradesList.length;
    };


    this.getFullName = function() {
        return `${this.name} ${this.surname}`;
    };

    this.setFullName = function(...args){
        this.name = args[0] || '';
        this.surname = args[1] || '';
    }

}


const student = new Student(17514,"Zara", "Michale", [5, 5, 4, 4]);
console.log(student.getFullName());
student.setFullName("Muhammad Rizo");
console.log(student.getFullName() + " has average " + student.getAvgGrade() );
