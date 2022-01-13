// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require('./data');

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map(function (movieObj) {
    return movieObj.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let ssmovies = movies.filter(function (movie) {
    if (
      movie.director === 'Steven Spielberg' &&
      movie.genre.includes('Drama')
    ) {
      return movie;
    }
  });
  return ssmovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }

  let scores = movies.map(function (movie) {
    if (!movie.score) {
      return 0;
    } else {
      return movie.score;
    }
  });
  let sum = scores.reduce(function (a, b) {
    return a + b;
  });
  return Number((sum / movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter(function (movie) {
    return movie.genre.includes('Drama');
  });
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  if (movies.length === 0) {
    return 0;
  }

  let sorted = movies.sort(function (a, b) {
    if (a.year < b.year) {
      return -1
    } else if (a.year > b.year) {
      return 1
    } else {
      return a.title.localeCompare(b.title)
    }
  });
  return sorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const cloneMovies = [...movies]

  let sorted = cloneMovies.sort(function (a, b) {
    return a.title.localeCompare(b.title)
  })
  let sliced = sorted.slice(0, 20)
  let res = []
  sliced.forEach((movieObj) => {
    res.push(movieObj.title)
  })
  return res
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let newArr = [...movies]
  let times = newArr.map((movie) => {
    movie.duration
  })
  // let newMovies = [...movies]
  // let result = newMovies.map((movie) => {
  //   let newTime = 0

  //   if (!movie.duration) {
  //     newTime = 0
  //   } else {

  //     let spl = String(movie.duration).split(" ")
  //     for(let i = 0; i < spl.length; i++) {

  //       if (spl[i][1] === 'h') {
  //         newTime += Number(spl[i][0]) * 60
  //       } else if (spl[i][2] === 'm') {
  //         let splArr = spl[i].split('min')
  //         newTime += Number(splArr[0])
  //       } else if (Number(spl[i])){
  //         newTime += Number[spl[i]]
  //       }

  //     }
  //     movie.duration = newTime

  //   }
  // }) 
  // return result 
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
