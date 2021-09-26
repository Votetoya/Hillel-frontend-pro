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

//[6, 5, 8, 7].max(); // 8

/* const numbers1 = [1, 3];
const numbers2 = [10, 0, -2];


Array.prototype.max = function() {
  if (this.length === 1) {
    return this[0];
  };

  let possMaxOne = this.shift();
  let possMaxTwo = max(this);

  if (possMaxOne > possMaxTwo) {
    return possMaxOne;
  };

  return possMaxTwo;
};

numbers1.max(); // 3

numbers2.max(); // 10 */


/* Array.prototype.max = function() {
  if (this.length === 1) {
    return this[0];
  };

  let max1 = this.shift();
  let max2 = this.max;//max(this);

  if (max1 > max2) {
    return max1;
  };

  return max2;
};

[6, 5, 8, 7].max(); */

Array.prototype.max = function() {
  let nums = this;
  console.log(Math.max.apply(null, nums));
};

[6, 5, 8, 7].max();