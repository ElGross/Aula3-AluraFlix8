var listaFilm = [
  "https://br.web.img2.acsta.net/pictures/22/12/29/17/28/4059223.jpg", // Re-Animator: A Hora dos Mortos-Vivos
  "https://br.web.img3.acsta.net/pictures/15/04/29/19/23/173745.jpg", // O Ataque dos Tomates Assassinos
  "https://images.justwatch.com/poster/244597010/s718/rubber-pneu.jpg", // Rubber, O Pneu Assassino
  "https://images.justwatch.com/poster/98124267/s718/palhacos-assasinos.jpg", // Palhaços Assassinos do Espaço Sideral
  "https://m.media-amazon.com/images/M/MV5BODcwZWFiNTEtNDgzMC00ZmE2LWExMzYtNzZhZDgzNDc5NDkyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg", // Sharknado
  "https://br.web.img3.acsta.net/pictures/210/150/21015012_20130624195436012.jpg", // Planeta Terror
                ];

var textos = [
  "Re-Animator: A Hora dos Mortos-Vivos",
  "O Ataque dos Tomates Assassinos",
  "Rubber, O Pneu Assassino",
  "Palhaços Assassinos do Espaço Sideral",
  "Sharknado",
  "Planeta Terror"
            ];

var conjFilm = new Set();

for (var i = 0; i < listaFilm.length; i++) {if (!conjFilm.has(listaFilm[i])) {conjFilm.add(listaFilm[i]); 
                                                                             document.write('<div style="text-align:center; color:white;">' + '<img src="' + listaFilm[i] + '" alt="' + textos[i] + '">' + '<p>' + textos[i] + '</p>' + '</div>')}};