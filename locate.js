/* The .js for the locate page */

var key = "HB4E0LPBodtgXJlBVOYvZSDaxgGSCA7Li7Eq6tqb6uVDRfzAp4";
var secret = "ACCq1YmJ2XzZxT6WrvbSU9voepnbCllw0NmSF363";

var pf = new petfinder.Client({apiKey: key, secret: secret});

var display = document.getElementById("feedContent");

function init()
{
  pf.animal.search()
	.then(function (response){
		document.body.style.backgroundColor = "green";
    //console.log(response.data.animals);
	})
	.catch(function (error){
    display.innerHTML = "Search Failed! Retry.";
		document.body.style.backgroundColor = "red";
	});
}

function displayResult(animal, sort)
{
  if(sort == "Any")
  {
    displayByType(animal);
  }
  else if(sort == "Size")
  {
    displayBySize(animal);
  }
  else if(sort == "Breed")
  {
    displayByBreed(animal);
  }
  else
  {
    displayByAge(animal);
  }
}

function displayByType(result)
{
  
  display.innerHTML = ""; //Clear the innerHTMl
  if (result == "Animals")
  {
    pf.animal.search()
    .then(function (response){
      display.innerHTML = ""; //Clear the innerHTMl
      for (var i = 0; i < response.data.animals.length; i++ )
      {
        var item = response.data.animals[i];
        var petName = item.name;
        var petID = item.id;
        var breed = item.breeds.primary;
        var petSize = item.size;
        var petAge = item.age;
        var petDescription = item.description;
        display.innerHTML += "<h2>" + petName + "</h2>";
        display.innerHTML += "<h4>Age: " + petAge + " ||  Breed: " + breed + " || Size: " + petSize + "</h4>";
        display.innerHTML += "<h4>" + petDescription + "</h4> <br>";
      }
	  })
  }
  else
  {
    pf.animal.search({type: result})
    .then(function (response){
      if (response.data.animals.length > 0) {
        display.innerHTML = ""; //Clear the innerHTMl
        for (var i = 0; i < response.data.animals.length; i++ )
        {
          var item = response.data.animals[i];
          var petName = item.name;
          var petID = item.id;
          var breed = item.breeds.primary;
          var petSize = item.size;
          var petAge = item.age;
          var petDescription = item.description;
          display.innerHTML += "<h2>" + petName + "</h2>";
          display.innerHTML += "<h4>Age: " + petAge + " ||  Breed: " + breed + " || Size: " + petSize + "</h4>";
          display.innerHTML += "<h4>" + petDescription + "</h4> <br>";
        }
      }
      else
      {
        display.innerHTML += "<h2> No " + result + " found in your area... </h2>";
      }
      
	  })
  }
  
}

/*
function displayByBreed(result)
{
	display.innerHTML = ""; //Clear the innerHTMl
	if (result. == "Animals")
	{	

		pf.animal.search()
		.then(function (response){
		  display.innerHTML = ""; //Clear the innerHTMl
		  for (var i = 0; i < response.data.animals.length; i++ )
		  {
			var item = response.data.animals[i];
			var petName = item.name;
			var petID = item.id;
			var breed = item.breeds.primary;
			var petSize = item.size;
			var petAge = item.age;
			var petDescription = item.description;
			display.innerHTML += "<h2>" + petName + "</h2>";
			display.innerHTML += "<h4>Age: " + petAge + " ||  Breed: " + breed + " || Size: " + petSize + "</h4>";
			display.innerHTML += "<h4>" + petDescription + "</h4> <br>";
		  }
		  })
	  }
	  else
	  {
		pf.animal.search({type: result})
		.then(function (response){
		  if (response.data.animals.length > 0) {
			display.innerHTML = ""; //Clear the innerHTMl
			for (var i = 0; i < response.data.animals.length; i++ )
			{
			  var item = response.data.animals[i];
			  var petName = item.name;
			  var petID = item.id;
			  var breed = item.breeds.primary;
			  var petSize = item.size;
			  var petAge = item.age;
			  var petDescription = item.description;
			  display.innerHTML += "<h2>" + petName + "</h2>";
			  display.innerHTML += "<h4>Age: " + petAge + " ||  Breed: " + breed + " || Size: " + petSize + "</h4>";
			  display.innerHTML += "<h4>" + petDescription + "</h4> <br>";
			}
		  }
		  else
		  {
			display.innerHTML += "<h2> No " + result + " found in your area... </h2>";
		  }
		  
		  })
	  }
	  

}
*/

function displayByAge(result)
{
	display.innerHTML = ""; //Clear the innerHTMl
	if (result == "Animals")
	{	

		pf.animal.search()
		.then(function (response){
		  display.innerHTML = ""; //Clear the innerHTMl
		  
		  var animalList = []
		  
		  for (var i = 0; i < response.data.animals.length; i++)
		  {
			  animalList[i] = response.data.animals[i];
		  }
		  
		  for (var i = 0; i < animalList.length; i++)
		  {
			  var temp;
			  
			  if (animalList[i] > animalList[i + 1])
			  {
				  temp = animalList[i];
				  animalList[i] = animalList[i + 1];
				  animalList[i + 1] = temp;
			  }
		  }
		  
		  for (var i = 0; i < animalList.length; i++ )
		  {
			var item = animalList[i];
			var petName = item.name;
			var petID = item.id;
			var breed = item.breeds.primary;
			var petSize = item.size;
			var petAge = item.age;
			var petDescription = item.description;
			display.innerHTML += "<h2>" + petName + "</h2>";
			display.innerHTML += "<h4>Age: " + petAge + " ||  Breed: " + breed + " || Size: " + petSize + "</h4>";
			display.innerHTML += "<h4>" + petDescription + "</h4> <br>";
		  }
		  })
	  }
	  else
	  {
		pf.animal.search({type: result})
		.then(function (response){
		  if (response.data.animals.length > 0) {
			display.innerHTML = ""; //Clear the innerHTMl
			for (var i = 0; i < response.data.animals.length; i++ )
			{
			  var item = response.data.animals[i];
			  var petName = item.name;
			  var petID = item.id;
			  var breed = item.breeds.primary;
			  var petSize = item.size;
			  var petAge = item.age;
			  var petDescription = item.description;
			  display.innerHTML += "<h2>" + petName + "</h2>";
			  display.innerHTML += "<h4>Age: " + petAge + " ||  Breed: " + breed + " || Size: " + petSize + "</h4>";
			  display.innerHTML += "<h4>" + petDescription + "</h4> <br>";
			}
		  }
		  else
		  {
			display.innerHTML += "<h2> No " + result + " found in your area... </h2>";
		  }
		  
		  })
	  }
} 

function displayBySize(result)
{

}

//slides code from this point on.
/* Thanks to https://www.w3schools.com/howto/howto_js_slideshow.asp */

var slideIndex = 1;
showSlides(slideIndex);

/*Change which slide is currently being shown*/

function plusSlides(n)
{
	showSlides(slideIndex += n);
}

function currentSlide(n) 
{
	showSlides(slideIndex = n);
}

function showSlides(n)
{
	var i;
	var slides = document.getElementsByClassName("petSlideshow");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
	}
	slides[slideIndex-1].style.display = "block";
}

/* Un-comment this to make the slides automatically scroll */

var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("petSlideshow");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}