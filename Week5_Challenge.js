class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
		// Write code here!
		if (other.age > this.age){
			return (`${other.name} is older than me.`)
		} else if (other.age < this.age){
			return (`${other.name} is younger than me.`)
		} else if (other.age = this.age){
			return (`${other.name} is the same age as me.`)
		}
	}
}
