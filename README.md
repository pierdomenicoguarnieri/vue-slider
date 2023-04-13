# Vue Slider

## Consegna

Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

Bonus:

1. al click su una thumb, visualizzare in grande l’immagine corrispondente

2. applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente

3. quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce

## Steps

**Steps:**

1. Inizializzare Vue

2. Porto l'array delle immagini nel return di data()

3. Stampo dinamicamente le immagini e le thumb:

  - Le immagini vengono stampate all'aumentare del counter

  - Le thumb vengono stampate con un v-for

**Steps Bonus:**

1. Creo una funzione che mi cambi l'immagine mostrata al click del bottone next o prev

2. All'interno del v-for che mi stampa le thumb salvo in una variabile l'index della singola thumb, ed al click di quest'ultima la mostro in pagina cambiando contemporaneamente la classe active

3. Creare una funzione che gestisca l'autoplay utilizzando un setInterval

4. Aggiungo @mouseover e @mouseleave per gestire lo stop ed il play dell'autolay del carosello