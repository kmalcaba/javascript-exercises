const findTheOldest = function(people) {
    let oldestIdx = 0;
    let oldestAge = 0;
    for (person of people) {
        const age = person.yearOfDeath - person.yearOfBirth;
        if(age > oldestAge)
            oldestIdx = people.indexOf(person);
        oldestAge = Math.max(oldestAge, age);
    }
    return people[oldestIdx];
};

// Do not edit below this line
module.exports = findTheOldest;
