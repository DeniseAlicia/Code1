console.log("Program Start");

interface Address {
    street: string,
    houseNumber: number,
    //...
}

interface StudentData {
    name: string,
    address: Address,
    matrikel: number,
    exmatriculated: boolean,

}

let student1: StudentData = {
    name: "Max Müller",
    address: {
        street: "Hauptstrasse",
        houseNumber: 5,
    },
    matrikel: 123456,
    exmatriculated: false,
}

let student2: StudentData = {
    name: "Martina Musterfrau",
    address: {
        street: "Mustergasse",
        houseNumber: 2,
    },
    matrikel: 654321,
    exmatriculated: true,
}

console.log(student1.address);
student1.address.street = "Dichterstrasse";
student1.address.houseNumber = 16;
console.log(student1.address);

console.log(student2);

let students: StudentData[] = [student1, student2];
console.log(students[0]);

function studentInfo(student: StudentData): void  {
    console.log(student.name + "lives at" + student.address);
}

for(let i: number = 0; i < students.length; i++) {
    studentInfo(students[i]);
}