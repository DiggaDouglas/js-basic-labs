function gradeAverages(students) {
    var averages = [];
    for (var i = 0; i < students.length; i++) {
      var grades = students[i].grades;
      var sum = 0;
      for (var j = 0; j < grades.length; j++) {
        sum += grades[j];
      }
      var average = sum / grades.length;
      averages.push(average);
    }
    return averages;
  }
var students=[
    {
        name:"Mary",age:10,grades:[90,88,95]
    },
    {
        name:"Joseph",age:11,grades:[80,100,90,96]
    }
]  ;
console.log(gradeAverages(students));