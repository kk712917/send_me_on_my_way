const key = 'pk.eyJ1Ijoia2F0bWtlbGx5IiwiYSI6ImNrbTJkNG56djFhencydnA0N3RicWRkZHkifQ.SdFPPUkTxjhzA87mxqmeUg'

const options = {
  lat: 39.684780,
  lng: -83.929649,
  zoom: 12,
  style: 'mapbox://styles/katmkelly/ckn9743ai0shv17pm81oqmx3v',
  pitch: 0
};

const mappa = new Mappa('MapboxGL', key);
let myMap;
let canvas;

var song;

function preload() {
  song = loadSound('song/Send Me On My Way.mp3');
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  song.play();
}


function draw() {
  clear();
  //noFill();
  stroke(0);
  strokeWeight(3);
  const zoom = myMap.zoom();
  const xenia = myMap.latLngToPixel(39.684780, -83.929649);
  const badlands = myMap.latLngToPixel(43.8553804, -102.3396912);
  const yellowstone = myMap.latLngToPixel(44.429764, -110.584663);
  const grand_teton = myMap.latLngToPixel(43.7904, -110.6818);
  const zion = myMap.latLngToPixel(37.2982, -113.0263);
  const capitol_reef = myMap.latLngToPixel(38.0877, -111.1355);
  const canyon_lands = myMap.latLngToPixel(38.2136, -109.9025);
  const arches = myMap.latLngToPixel(38.7331, -109.5925);
  const gsd = myMap.latLngToPixel(37.7275, -105.6418);
  const colorado_springs = myMap.latLngToPixel(38.830093, -104.799355);



  ellipse(xenia.x, xenia.y, 10 * zoom, 10 * zoom);
  ellipse(badlands.x, badlands.y, 10 * zoom, 10 * zoom);
  ellipse(yellowstone.x, yellowstone.y, 10 * zoom, 10 * zoom);
  ellipse(grand_teton.x, grand_teton.y, 10 * zoom, 10 * zoom);
  ellipse(zion.x, zion.y, 10 * zoom, 10 * zoom);
  ellipse(capitol_reef.x, capitol_reef.y, 10 * zoom, 10 * zoom);
  ellipse(canyon_lands.x, canyon_lands.y, 10 * zoom, 10 * zoom);
  ellipse(arches.x, arches.y, 10 * zoom, 10 * zoom);
  ellipse(gsd.x, gsd.y, 10 * zoom, 10 * zoom);
  ellipse(colorado_springs.x, colorado_springs.y, 10 * zoom, 10 * zoom);
 
  noFill();
  stroke('green');
  beginShape();
  vertex(xenia.x,xenia.y);
  vertex(badlands.x,badlands.y);
  vertex(yellowstone.x,yellowstone.y);
  vertex(grand_teton.x, grand_teton.y);
  vertex(zion.x,zion.y);
  vertex(capitol_reef.x, capitol_reef.y);
  vertex(canyon_lands.x,canyon_lands.y);
  vertex(arches.x,arches.y);
  vertex(gsd.x,gsd.y);
  vertex(colorado_springs.x, colorado_springs.y);
  endShape(CLOSE);
  
  if (dist(xenia.x, xenia.y, mouseX, mouseY) < size/2) {



    textSize(32);
    noFill();
    strokeWeight(2);



    fill(0, 100);
  } else {
    fill(255, 100);
  


   

  }



}

$(window).bind('resize', function(e) {
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function() {
    this.location.reload(false); /* false to get page from cache */
  }, 200);
});