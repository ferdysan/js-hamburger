// Viene fornito l’HTML e il CSS, che dovrete leggere e comprendere e starà a voi scrivere il JS utilizzando jQuery, al fine di avere un hamburger menu simile a quello che trovate sul sito di Boolean.
//
// Appare il simbolo delle 3 linee solo quando lo schermo è < 1000px, al click del simbolo appare un div che copre l’intero schermo con i link alle sezioni del sito.
// Un click sul simbolo X, fa scomparire il div

//seleziono il font per l'icona hamburger e decido che al click venga mostrato l'hamburger menu
$('.fa-bars').click(function(){
  $('.hamburger-menu').show()
});

//seleziono il font per l'icona x e decido che al click venga  nascosto l'hamburger menu
 $('.fa-times').click(function(){
   $('.hamburger-menu').hide()
 });
