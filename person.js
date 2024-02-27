class Person {
    constructor(firstName, lastName, age, gender, occupation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.occupation = occupation;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge() {
        return this.age;
    }

    getGender() {
        return this.gender;
    }

    getOccupation() {
        return this.occupation;
    }

    setAge(age) {
        this.age = age;
    }

    setGender(gender) {
        this.gender = gender;
    }

    setOccupation(occupation) {
        this.occupation = occupation;
    }

    toString() {
        return `${this.getFullName()} - Age: ${this.age}, Gender: ${this.gender}, Occupation: ${this.occupation}`;
    }
}

// Example usage
const person = new Person("kim", "Doe", 27, "Male", "Software Engineer");
console.log(person.toString());


// Updating age and occupation
person.setAge(27);
person.setOccupation("Software Engineer");
console.log(person.toString());
