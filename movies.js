// Define the Movie class

  // title, cast, description, rating

  // Method to update the rating of the movie

  // Method to display the movie's information


// Test your implementation

// Display the initial information of the movie

// Update the rating of the movie

// Display the updated information of the movie

diver = document.getElementById('movie-info');
console.log(diver)


class Movie{
  constructor(title,cast,description,rating){
    this.title = title;
    this.cast = cast;
    this.description = description;
    this.rating = rating;
  }
  updateRating(newRating){
    this.rating = newRating;
  }
  displayInfo(){
    diver.innerHTML += `${this.title}, Starring: ${this.cast} <div>${this.description}</div>Rating:${this.rating}`;
  }
}

let bestmovie = new Movie("Spider-Man 3","Tobey Maguire, Kristen Dunst, Topher Grace, John Sandman, Harry, Jay Jonah Jameson","Spider-Man turns into a new black Spider-Man that is just the worse, and also the Sandman is there",7.8);
bestmovie.displayInfo();
let movies = [bestmovie];

function updateMovieRating(title,newRating){
  for (let movie of movies){
    if (movie.title === title){
      movie.updateRating(newRating);
    }
  }
}

updateMovieRating("Spider-Man 3", 8.6);
diver.innerHTML += "<div><strong>New Ratings:</strong></div>"
bestmovie.displayInfo()
