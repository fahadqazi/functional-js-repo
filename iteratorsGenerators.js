// version 1

var engineeringTeam = {
    size: 3,
    department: 'Engineering',
    manager: 'Alan',
    lead: 'Steve',
    engineer: 'Bob'
}

var testingTeam = {
    manager: 'Joe',
    tester: 'Kevin'
}

function* engineeringTeamIterator(team){
    yield team.manager;
    yield team.lead;
    yield team.engineer;
}

var newArr1 = []
for(let val of engineeringTeamIterator(engineeringTeam)){
    newArr1.push(val);
}
console.log(newArr1);

// version 2 - now testing team becomes part of the engineering team.

var testingTeam = {
    manager: 'Joe',
    tester: 'Kevin'
}


var engineeringTeam = {
    testingTeam: testingTeam,
    size: 3,
    department: 'Engineering',
    manager: 'Alan',
    lead: 'Steve',
    engineer: 'Bob'
}

function* engineeringTeamIterator(team) {
    yield team.manager;
    yield team.engineer;
    yield team.lead;
    var testTeam = testTeamIterator(team.testingTeam);
    yield* testTeam;
}

function* testTeamIterator(team){
    yield team.manager;
    yield team.tester;
}

var newArr2 = [];
for(let val of engineeringTeamIterator(engineeringTeam)){
    newArr2.push(val)
}
console.log(newArr2);

// version 3 - using Symbol Iterators;

var testingTeam = {
    manager: 'Joe',
    tester: 'Kevin',
    [Symbol.iterator]: function* (){
        yield this.manager;
        yield this.tester;
    }
}

var engineeringTeam = {
    testingTeam: testingTeam,
    size: 3,
    department: 'Engineering',
    manager: 'Alan',
    lead: 'Steve',
    engineer: 'Bob',
    [Symbol.iterator]: function* (){
        yield this.manager;
        yield this.lead;
        yield this.engineer;
        yield* this.testingTeam;
    }
}

var newArr = [];
for(let val of engineeringTeam){
    newArr.push(val);
}
console.log(newArr);