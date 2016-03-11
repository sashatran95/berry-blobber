// ##########################################################
// START DO NOT CHANGE ZONE
// ##########################################################

var blueberries = {
  name: 'Blueberries',
  latin: 'Vaccinium corymbosum',
  onShrub: true,
  energy: 240,
  carbs: 14.49,
  protein: 0.74
};

var grapes = {
  name: 'Grapes',
  latin: 'Vitis vinifera',
  onShrub: false,
  energy: 288,
  carbs: 18.1,
  protein: 0.72
};

var redCurrant = {
  name: 'Red currant',
  latin: 'Ribes rubrum',
  onShrub: true,
  energy: 234,
  carbs: 13.8,
  protein: 1.4
};

// ##########################################################
// END DO NOT CHANGE ZONE
// ##########################################################


// Write your function here, name it `writeBerries`

var writeBerries = function (berries) {
  document.write('<h1>Berries</h1>');
  document.write('<ol>');

  berries.forEach(function (fruitBerry) {
    document.write('<h2>' + fruitBerry.name + '</h2>');
    document.write('<dl>');
    document.write('<dt>Grows On A Shrub?</dt>');
    document.write('<dt>Energy</dt>');
    document.write('<dd>' + fruitBerry.energy + '</dd>');
    document.write('<dt>Carbohydrates</dt>');
    document.write('<dd>' + fruitBerry.carbs + '</dd>');
    document.write('<dt>Protein</dt>');
    document.write('<dd>' + fruitBerry.protein + '</dd>');

    document.write('<dd>');

    if (fruitBerry.onShrub) {
      document.write('Yes');
    } else {
      document.write('No');
    }

    document.write('<dd>');

    document.write('<dl>');

  });
};

// ##########################################################
// START DO NOT CHANGE ZONE
// ##########################################################

// This code will execute your function
writeBerries([blueberries, grapes, redCurrant]);

// ##########################################################
// END DO NOT CHANGE ZONE
// ##########################################################
