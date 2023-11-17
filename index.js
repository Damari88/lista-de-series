document.write("<h1>Series</h1>");
var listaSeries = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPNPUC_RoWoNT_yD7pgYwcaMKhnaUzdgb4bpJVXED031YnIkZ56GsUfalK-214EtX1Kk&usqp=jpg",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuksnyUrxReWLRsrU1ytmunsfH4qRbHbfoVFtP3pXzVIfuTbiR8oHBJls1IX2JlI442mk&usqp=jpg",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9t9de9XT5jFZIGkaX4uYhmOc5vMl5lBrfYdaWlqXrx3TVCvfcLP8ipeSmQA_AcK3UQw0&usqp=jpg",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRJjbkhcV5zxtqT81PKWEt2rhuYQBa4DMqHhG4fciI-0hhOgTk6BnvfYeSVL-b4nm04_c&usqp=jpg",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT06KBZ-w_w32XhpiWKFZV5efSIC5a0Tir9BGek5OBjCsp9Glt6EO6RbNN7Z-yeybc1Bgw&usqp=jpg",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl2AMdFItSDUImGZ1Sx1UsrQrdMa3Cm9qxOefxV9aR95Kz-GswK3sTGmHt-FENQgEzpWM&usqp=jpg",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTccuuwZPZQQ7815Qt8SawVdTM_GK1X-_yDM3dI7vRZ5XUeVhF8vJ7OS8hS8PwvINpsmvw&usqp=jpg",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzpKE6fIcdCfzoPL0MV_ZXik-gbPzn7zfng4GS3wBvnW_7RQcFPdJdLXLpQXOL2lD9qbo&usqp=jpg",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsILucIQiUflKDlHovyAlltxn-lm0V-EIXm6E9Fc-kil2l9SDLvi0g0Q7rBJbv5z6gd88&usqp=jpg"
];

//Desafío 2:lista usando .push

listaSeries.push(
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxIoMDrPYS4YrVeUPL00q97W-UFEraB4JqhX_KX6vqLadQZSQ8u93aTyRdgMh3_Y9ApEM&usqp=jpg",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg5Gg8Cf6D-6FkDwQnlSSPUXgsB1G7SbsG_ej43OnUh9xPAIGwEYqi2toxeuJ6GUcETjM&usqp=jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLX-3psCmE8wC1I1-YVVx3de9jl83ub74dt0ZKevuGigm6N7ruf89euFE_UjiS6vBVC2w&usqp=jpg"
);

var nombreSeries = [
  "Boys over flowers",
  "Princess Silver",
  "Miss the Dragon",
  "La Princesa y el Lobo",
  "My Dear Brother",
  "Propuesta Laboral",
  "Belleza Verdadera",
  "Loki",
  "Ahsoka",
  "Mi Mundo Contigo",
  "Ashes of Love",
  "Saint Seiya: Los Caballeros del Zodiaco"
];

document.write('<div class="container_todosFilmes">');

//Desafío 1
var i = 0;
while (i < listaSeries.length) {
  if (listaSeries[i].endsWith("jpg") || listaSeries[i].endsWith("jpeg")) {
    document.write('<div class="container_filme">');
    document.write("<img src=" + listaSeries[i] + ">");
    document.write("<p>" + nombreSeries[i] + "</p>");

    //Desafío 4
    document.write("</div>");
  } else {
    document.write(
      "<p> La imagen " +
        i +
        " no se leyó porque no es un archivo jpeg o jpg </p>"
    );
  }
  i++;
}
document.write("</div>");
document.write("<h1>Peliculas</h1>");
var listaPeliculas = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpBD7SEJF5fXcatzLlsQNcQC4eFs4PiaQmsY034XZoz8c7aTbmbpK8WIq8N2PZvnvEYoM&usqp=jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStHy8UkBYhHApxZS1pncU6ogQwMXcxwS2YxxAhPvG38jBCh6mortCuPYAQmhZx3vucPik&usqp=jpg",
  "https://m.media-amazon.com/images/M/MV5BMzg2Mzg4YmUtNDdkNy00NWY1LWE3NmEtZWMwNGNlMzE5YzU3XkEyXkFqcGdeQXVyMjA5MTIzMjQ@._V1_FMjpg_UX1000_.jpg",
  "https://viureview.com.br/images/filmes8/La-la-land.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujyipj1AlJm8Ph4debtazfcriqESHj-jnxrpG18FeTq85TuWDxfnBxz6kbx_MIDnHQgM&usqp=jpg",
  "https://lumiere-a.akamaihd.net/v1/images/p_soul_disneyplus_v2_20907_764da65d.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKgywlLEMlHm2qUo9E_0jgtNbke361io6UW_BcBFiD485JpOllGsYIlgREHGQ0R2AvayM&usqp=jpg",
  "https://2.bp.blogspot.com/-KdOZ8zOrSsA/UVT4Sm4G1OI/AAAAAAAAAEQ/PZOtknEMUps/s1600/English_Spirited_Away_Poster_by_behruz.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCgLxxjwd4nkNz3oxVYVIJ7Ib-huw5FOYQ13GUppO6spkbI5E4dObXK13Qnff03pKZ_-A&usqp=jpg",

  " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9n24mKwThqYWar_EBGbiacGrD1wllZBtMyWXC9dpHPGqO04pB1WLhsI37EXqisE-UWt8&usqp=jpg",
  "https://lumiere-a.akamaihd.net/v1/images/p_encanto_homeent_22359_4892ae1c.jpeg?region=0%2C0%2C540%2C810=jpeg"
];

//Desafío 2:lista usando .push

listaPeliculas.push(
  "https://m.media-amazon.com/images/I/91cckafa8kL._AC_UF1000,1000_QL80_.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQW4jhS_EvQm5eFVOkj2nc2oktrRFmxc5Q4EejZuaklaWLDYK8RA4rGu-DU4-9k9L1-MM&usqp=jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDtBMIx2UVjeBUE-mbjl6GAxCqe0nVgr8IB67oWTKSHF5hro9sm_j9JvWwUEZo6iePbtI&usqp=jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJqTOjNlIUWKcD7Nf05nOUisytHUF2mij9mRSy-s3qsv7vJqtxZCoiXwCM6Q7n7hh8JE&usqp=jpg"
);

var nombrePeliculas = [
  "Harry Potter y la cámara secreta",
  "Capitana Marvel",
  "Estrellas más allá del tiempo",
  "La La Land",
  "Samurai X ",
  "Soul",
  "shazam!La furia de los dioses ",
  "El viaje de Chihiro",
  "Barbie",
  "Goblin Slayer",
  "Encanto",
  "Jurassic World",
  "Top Gun",
  "Hulk",
  "El hombre de acero"
];

document.write('<div class="container_todosFilmes">');

//Desafío 1
var i = 0;
while (i < listaPeliculas.length) {
  if (listaPeliculas[i].endsWith("jpg") || listaPeliculas[i].endsWith("jpeg")) {
    document.write('<div class="container_filme">');
    document.write("<img src=" + listaPeliculas[i] + ">");
    document.write("<p>" + nombrePeliculas[i] + "</p>");

    //Desafío 4
    document.write("</div>");
  } else {
    document.write(
      "<p> La imagen " +
        i +
        " no se leyó porque no es un archivo jpeg o jpg </p>"
    );
  }
  i++;
}
document.write("</div>");