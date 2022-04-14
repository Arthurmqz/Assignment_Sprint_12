'use strict'

$(document).ready(function () {
  $('#button').click(function () {
    //Variable to stores an array of values for RGB
    let RGBvalues = randomRGBcolor()

    //Turn the RGB array into RGB color
    let rgbcolor =
      'rgb(' + RGBvalues[0] + ', ' + RGBvalues[1] + ', ' + RGBvalues[2] + ')'

    // Give an rgb color to the background
    $('body').css('background-color', rgbcolor)

    // Show user the rgb color
    $('#color').text(rgbcolor)
  })
})

// Function to generates a random value between 0 and 255
function randomNumber() {
  return Math.floor(Math.random() * 256)
}

//Function to returns an array of 3 values for rgb
function randomRGBcolor() {
  let red = randomNumber()
  let green = randomNumber()
  let blue = randomNumber()
  return [red, green, blue]
}
