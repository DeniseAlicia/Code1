console.log("Program Start");

interface StudentData {
    name: string,
    address: string,
    matrikel: number,
    exmatriculated: boolean,
}

let student1: StudentData = {
    name: "Max Müller",
    address: "Hauptstrasse 5",
    matrikel: 123456,
    exmatriculated: false,
}

let student2: StudentData = {
    name: "Martina Musterfrau",
    address: "Mustergasse 2",
    matrikel: 654321,
    exmatriculated: true,
}

console.log(student1.address);
student1.address = "Dichterstrasse 16";
console.log(student1.address);

console.log(student2);

let students: StudentData[] = [student1, student2];
console.log(students[0]);

function studentInfo(student: StudentData): void  {
    
}