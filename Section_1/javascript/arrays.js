const movies = ['Matrix', 'Shutter Island', 'Bumblebee', 'Inception', 'Avengers'];

console.log(movies.length);

// indexing
console.log(movies[2]);
console.log(movies.indexOf('Inception'));
console.log(movies.at(-3));

movies[3] = 'Ra. One'
console.log(movies);

// slicing

console.log(movies.slice(1,4));
console.log(movies.slice(2));
console.log(movies.slice(2));

// adding and removing elements

movies.push('1920');
movies.unshift('Interstellar');
console.log(movies);
movies.pop();
movies.shift();
console.log(movies);

// splice function

// movies.splice(2,2);
// movies.splice(2,2, 'Superman', 'Batman'); //replaces 2 elements
movies.splice(1,0, 'HEHE');
console.log(movies);





