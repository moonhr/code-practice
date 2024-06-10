const createPerson = (callback) => {
  let person = {};
  callback(person, setName);
};

const setName = (person, callback) => {
  person.name = '메타몽';
  callback(person, setAge);
};

const setAge = (person, callback) => {
  person.age = 6;
  callback(person, setJob);
};

const setJob = (person) => {
  person.job = '홈프로텍터';
  console.log(person);
};

createPerson((person, callback) => callback(person, setName));