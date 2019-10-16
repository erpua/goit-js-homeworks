import users from './users.js';

const getSortedUniqueSkills = users =>
  users
    .reduce((acc, user) => {
      user.skills.map(skill => {
        if (!acc.includes(skill)) acc.push(skill);
      });
      return acc;
    }, [])
    .sort();
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
