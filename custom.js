'use strict';

class Group {
    #students

    constructor (){
        this.#students = [];
    }

    addStudent(student) {
        if(this.#isStudent(student)) {
          this.#students.push(student);
        }
    }

    get students() {
        return this.#students;
    }

    #isStudent(student) {
        return student instanceof Student;
    }
    
    getAverageMark(i) {
        let Arrscore = [];
        for(i = 0; i < this.students.length; i++) {
          this.students[i].score.forEach(element => {
            Arrscore.push(element);
          });
        }

        let sumScore = Arrscore.reduce(function(sum, elem) {
            return sum + elem;
        }, 0);
        
        let result = sumScore / Arrscore.length;
        return result;
      }
}

class Student {
    constructor(name, score) {
      this.name = name;
      this.score = score;
    }
  }

const group = new Group();

    group.addStudent(new Student('John', [10, 8]));
    group.addStudent(new Student('Alex', [10, 9]));
    group.addStudent(new Student('Bob', [6, 10,]));

    console.log('Result', group.getAverageMark());


Array.prototype.max = function() {
  let nums = this;
  console.log(Math.max.apply(null, nums));
};

[6, 5, 8, 7].max();