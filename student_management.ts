#!/usr/bin/env node

class School {
    name: string
    students: Student[] = []
    teachers: Teacher[] = []

    addStudent(stdobj: Student) {
        this.students.push(stdobj)
    }
    addTeacher(tchobj: Teacher) {
        this.teachers.push(tchobj)
    }

    constructor(name: string) {
        this.name = name
    }
}

class Student {
    name: string
    age: number
    schoolName: string

    constructor(name: string, age: number, schoolName: string) {
        this.name = name
        this.age = age
        this.schoolName = schoolName
    }
}

class Teacher extends Student { }

let school1 = new School("Generations school")
let school2 = new School("falcon public")
let school3 = new School("Happy Palace School")

let student1 = new Student("Afshan", 20, school1.name)
let student2 = new Student("Nabeel", 20, school2.name)
let student3 = new Student("Khurshid", 10, school3.name)

let teacher1 = new Teacher("Huda", 30, school1.name)
let teacher2 = new Teacher("zainab", 30, school2.name)
let teacher3 = new Teacher("Ayesha", 30, school3.name)

school1.addStudent(student1)
school2.addStudent(student2)
school3.addStudent(student3)

school1.addTeacher(teacher1)
school2.addTeacher(teacher2)
school3.addTeacher(teacher3)

console.log(school1.name, school1.students, school1.teachers)
console.log(school2.name, school2.students, school2.teachers)
console.log(school3.name, school3.students, school3.teachers)