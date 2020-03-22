
  class Movie{
      constructor(title, director){
        this.title = title;
        this.director = director;
      }
      toString(){
          console.log(`${this.title} ${this.director}`);
      }
  }
  
  let newMovie = new Movie("Start War" , "Tarnino");
  newMovie.toString();
  