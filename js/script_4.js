const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

function born_in_70s() {
  console.log('Entrepreneurs nés dans les années 70\'')
  bornInSeventies =[]
    entrepreneurs.forEach(entrepreneur => {
      if (entrepreneur.year>= 1970 && entrepreneur.year<1979){
        bornInSeventies.push(entrepreneur.first + " " + entrepreneur.last + " born in: " + entrepreneur.year)
      }
    })
  console.log(bornInSeventies)
}

function identities() {
  console.log('Noms et Prénoms des entrepeneurs\'')
  nameArray=[]
  entrepreneurs.forEach(entrepreneur => {
    nameArray.push(entrepreneur.first + " " + entrepreneur.last);
  }) 
  console.log(nameArray)
}

function age() {
  console.log('Age des entrepeneurs\'')
  entrepreneurs.forEach(entrepreneur => {
    entrepreneur.age = 2019 - entrepreneur.year;
  })
console.log(entrepreneurs)
}

function alphabetic() {
  console.log('Nom dans l ordre alphabetique\'')
  let sorted = entrepreneurs
  sorted.sort(function(a, b){
    return a.last.localeCompare(b.last);
  })
  console.log(sorted);
}


born_in_70s()
identities()
age()
alphabetic()