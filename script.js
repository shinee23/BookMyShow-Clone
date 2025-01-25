const movies = [
    {
      id: 1,
      title: "The Boss Baby",
      director: "Tom McGrath",
      genre: "Animation, Family, Comedy",
      imdb: "6.3/10",
      about:"Seven-year-old Tim suddenly finds his share of parental love plummeting when his new baby brother (Alec Baldwin) arrives -- wearing a suit and toting a briefcase -- and makes it clear to everyone that he's in charge. But when Tim discovers that Boss Baby is on a secret mission, he reluctantly agrees to team up with his pint-sized sibling for an epic adventure that might just change the world!",
      image: "images/bossbaby.jpg",
      showtime: "02:45PM",
      seats: 18,
      theater: "4K Dolby Atmos 7.1",
      date: "2024-10-12",
    },
    {
      id: 2,
      title: "The Croods",
      director: "Chris Sanders and Kirk DeMicco",
      genre: "Adventure, Fantasy",
      imdb: "7.1/10",
      about: "The Croods need a new place to live. So, the first prehistoric family sets off into the world in search of a safer place to call home. When they discover an idyllic walled-in paradise that meets all their needs, they think their problems are solved … except for one thing. Another family already lives there: the Bettermans.",
      image: "images/croods.jpg",
      showtime: "05:30PM",
      seats: 25,
      theater: "IMAX",
      date: "2024-10-14",
    },
    {
      id: 3,
      title: "Ratatouille",
      director: "Brad Bird",
      genre: "Family, Comedy",
      imdb: "8.1/10",
      about:"Remy, a resident of Paris, appreciates good food and has quite a sophisticated palate. He would love to become a chef so he can create and enjoy culinary masterpieces to his heart's delight. The only problem is, Remy is a rat. When he winds up in the sewer beneath one of Paris' finest restaurants, the rodent gourmet finds himself ideally placed to realize his dream.",
      image: "images/rat.jpeg",
      showtime: "05:30PM",
      seats: 20,
      theater: "IMAX",
      date: "2024-11-5",
    },
    {
      id: 4,
      title: "Moana",
      director: "Ron Clements, John Musker, Don Hall",
      genre: "Animation, Adventure",
      imdb: "7.6/10",
      about:"In ancient Polynesia, when a terrible curse incurred by the demigod Maui reaches Moana's island, she answers the Ocean's call to seek out Maui to set things right.",
      image: "images/moana.jpg",
      showtime: "05:30PM",
      seats: 16,
      theater: "IMAX",
      date: "2024-12-25",
    },
    {
      id: 5,
      title: "The Chronicles of Narnia",
      director: "Andrew Adamson",
      genre: "Action, Adventure, Drama, Fantasy",
      imdb: "6.9/10",
      about:" While playing a game of hide-and-seek, the youngest member of the family, Lucy, finds a wardrobe to hide in. She travels back and back into the wardrobe and finds a place named Narnia. After going in twice, the four children go in together for the last time. They battle wolves, meet talking animals, encounter an evil white witch and meet a magnificent lion named Aslan. Will this be the end of their journey to Narnia or will they stay?",
      image: "images/narnia.jpg",
      showtime: "05:30PM",
      seats: 30,
      theater: "IMAX",
      date: "2024-08-17",
    },
    {
      id: 6,
      title: "UP",
      director: "Pete Docter and Bob Peterson",
      genre: "Adventure, Family, Comedy",
      imdb: "8.3/10",
      about:"Carl Fredricksen, a 78-year-old balloon salesman, is about to fulfill a lifelong dream. Tying thousands of balloons to his house, he flies away to the South American wilderness. But curmudgeonly Carl's worst nightmare comes true when he discovers a little boy named Russell is a stowaway aboard the balloon-powered house.",
      image: "images/up.jpg",
      showtime: "05:30PM",
      seats: 15,
      theater: "IMAX",
      date: "2024-06-12",
    },
    {
      id: 7,
      title: "The Lion King",
      director: "Jon Favreau",
      genre: "Action, Adventure, Children",
      imdb: "6.8/10",
      about:"Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny on the plains of Africa. But not everyone in the kingdom celebrates the new cub's arrival. The battle for Pride Rock is soon ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. Now, with help from a curious pair of newfound friends, Simba must figure out how to grow up and take back what is rightfully his. ",
      image: "images/Lion King.jpg",
      showtime: "05:30PM",
      seats: 5,
      theater: "IMAX",
      date: "2024-07-19",
    },
    {
      id: 8,
      title: "Wall-E",
      director: "Andrew Stanton",
      genre: "Sci-Fi",
      imdb: "8.4/10",
      about:"WALL-E is the last robot left on Earth. He spends his days tidying up the planet, one piece of garbage at a time. But during 700 years, WALL-E has developed a personality, and he's more than a little lonely. Then he spots EVE, a sleek and shapely probe sent back to Earth on a scanning mission. Smitten WALL-E embarks on an adventure when he follows EVE across the galaxy.",
      image: "images/walle.jpeg",
      showtime: "05:30PM",
      seats: 25,
      theater: "IMAX",
      date: "2024-10-14",
    },
    {
      id: 9,
      title: "Cars",
      director: "John Lasseter and Joe Ranfit",
      genre: "Animation, Comedy",
      imdb: "7.3/10",
      about:"On the way to the biggest race of his life, a hotshot rookie race car gets stranded in a rundown town and learns that winning isn't everything in life.",
      image: "images/cars.jpg",
      showtime: "05:30PM",
      seats: 35,
      theater: "IMAX",
      date: "2024-04-30",
    },
    {
      id: 10,
      title: "Kung Fu Panda",
      director: "John Stevenson and Mark Osborne",
      genre: "Comedy, Children, Action",
      imdb: "7.6/10",
      about:"Po the panda (Jack Black) works in his family's noodle shop and dreams of becoming a kung-fu master. His dream becomes a reality when, unexpectedly, he must fulfill an ancient prophecy and study the skills with his idols, the Furious Five. Po needs all the wisdom, strength and ability he can muster to protect his people from an evil snow leopard.",
      image: "images/panda.jpg",
      showtime: "05:30PM",
      seats: 14,
      theater: "IMAX",
      date: "2024-03-09",
    }
  ];
  
  const moviesContainer = document.getElementById("movies-container");
  movies.forEach((movie) => {
    const movieCard = `
      <div class="movie-tile">
        <img src="${movie.image}" alt="${movie.title}" class="movie-poster" onclick="showMovieDetails(${movie.id})">
        <h3>${movie.title}</h3>
      </div>`;
    moviesContainer.innerHTML += movieCard;
  });
  
  function showMovieDetails(movieId) {
    const movie = movies.find((m) => m.id === movieId);
    if (movie) {
      const movieDetails = `
        <div class="details-page">
          <div class="row">
            <div class="col-md-4">
              <img src="${movie.image}" alt="${movie.title}" class="img-fluid">
            </div>
            <div class="col-md-8">
              <h1>${movie.title}</h1>
              <p><strong>Director:</strong> ${movie.director}</p>
              <p><strong>Genre:</strong> ${movie.genre}</p>
              <p><strong>IMDB Rating:</strong> ${movie.imdb}</p>
              <p><strong>About:</strong>${movie.about}</p>
            </div>
          </div>
          </div>
          <hr />
          <div class="book-tickets">
          <h3>Book Tickets</h3>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Date</th>
                <th>Showtime</th>
                <th>Theater</th>
                <th>Seats</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${movie.date}</td>
                <td>${movie.showtime}</td>
                <td>${movie.theater}</td>
                <td>${movie.seats}</td>
                <td><button class="btn btn-danger" onclick="bookTicket(${movie.id})">Book Tickets</button></td>
              </tr>
            </tbody>
          </table>
          </div>
          <button class="btn btn-secondary mt-3" onclick="goBack()">Back to Movies</button>`;
      document.getElementById("movie-details").innerHTML = movieDetails;
      document.getElementById("movies-page").style.display = "none";
      document.getElementById("movie-details").style.display = "block";
    }
  }
  
  function goBack() {
    document.getElementById("movie-details").style.display = "none";
    document.getElementById("movies-page").style.display = "block";
  }

  function bookTicket(movieId) {
    const modalElement = document.getElementById('bookTicketModal');
    const ticketCountInput = document.getElementById('ticketCount');
    const confirmBookingButton = document.getElementById('confirmBooking');
    
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
    ticketCountInput.value = '';
    confirmBookingButton.onclick = () => {
      const ticketCount = parseInt(ticketCountInput.value, 10);
  
      if (!ticketCount || ticketCount <= 0) {
        alert('Please enter a valid number of tickets.');
        return;
      }
  
      const movie = movies.find(m => m.id === movieId); 
      if (!movie) {
        alert('Movie not found.');
        return;
      }
  
      if (ticketCount > movie.seats) {
        alert(`Only ${movie.seats} tickets are available.`);
        return;
      }
  
      if (confirm('Tickets are available. Do you want to confirm?')) {
        movie.seats -= ticketCount; 
        alert('Your tickets have been booked successfully!');
        modal.hide();
        document.getElementById('movie-details').style.display = 'none'; 
        document.getElementById('movies-page').style.display = 'block';
        document.getElementById('details-page').style.display = 'none';
        document.getElementById('movies-page').scrollIntoView({ behavior: 'smooth' }); 
      }
    };
  }
  
  