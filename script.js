var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    director: 'reżyser: Chris Columbus',
    budget: 'budżet: 130 million USD',
    image: 'images/potter.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    director: 'reżyser: Rob Minkoff',
    budget: 'budżet: 45 million USD',
    image: 'images/lew.jpg'
  },
  {
    id: 3,
    title: 'Titanic',
    desc: 'film o katastrofie',
    director: 'reżyser: James Cameron',
    budget: 'budżet: 200 million USD',
    image: 'images/titanic.jpg'
  },
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('p', {}, movie.director),
      React.createElement('p', {}, movie.budget),
      React.createElement('img', { src: movie.image })
     )
  });
    
  var element =
    React.createElement('div', {},
      React.createElement('h1', {}, 'Lista filmów'),
      React.createElement('ul', {}, moviesElements)
  );

  ReactDOM.render(element, document.getElementById('app')); 