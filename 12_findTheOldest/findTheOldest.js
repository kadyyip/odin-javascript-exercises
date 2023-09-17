const findTheOldest = function(people) {
    function getAge(person) {
        if ("yearOfDeath" in person) {
            return person.yearOfDeath - person.yearOfBirth;
        } else {
            return (new Date()).getFullYear() - person.yearOfBirth;
        }
    }

    const oldest = people.reduce((oldest, person) => {
        const oldestAge = getAge(oldest);
        const personAge = getAge(person);
        if (personAge > oldestAge) {
            return person;
        } else {
            return oldest;
        }
    });

    return oldest; 
};

// Do not edit below this line
module.exports = findTheOldest;
