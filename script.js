var animals = [{
    name: 'Lion',
    image: 'http://i1-news.softpedia-static.com/images/news2/Picture-of-the-Day-Real-Life-Simba-and-Mufasa-Caught-on-Camera-in-Tanzania-392687-2.jpg',
    ferocity: 7,
    description: 'Large Carnivorous Feline',
    type: 'Mammal'
}, {
    name: 'Penguin',
    image: 'http://www.therealdavidlevin.com/wp-content/uploads/2012/06/penguinCloseup750_231715.jpg',
    ferocity: 4,
    description: "Fancy Lookin' Killer Whale Snacks",
    type: 'Bird'
}];


$(document).ready(function() {

    $("#addImage").click(function() {
        $("#hiddenURLdiv").show();
    });

    $("#submitbtn").click(function() {
        var animalName = $('#prenom').val();
        var imgURL = $('#hiddenURL').val();
        var ferocity = $('#ferocity').val();
        var descriptn = $('#description').val();
        var animalType = $('input:radio[name="user[role]"]:checked').val();
        if (animalType === 'on') {
            animalType = $('#otherRadioText').val();
        }
        var newAnimal = $(createAnimalObject(animalName, imgURL, ferocity, descriptn, animalType));
        console.log(animals[2]);
        $(putAnimalInZoo(2));
        $(publishAnimal(2));
    });

});

function createAnimalObject(name, pic, feroc, descript, type) {

    var anonAnimal = {
        name: name,
        image: pic,
        ferocity: feroc,
        description: descript,
        type: type
    }

    animals.push(anonAnimal);
    return animals;
}

function publishAnimal(animalPositionInArray) {

    var animalTableData = "<tr> <td><img class='tableAnimal' src='" + animals[animalPositionInArray].image + "'></td><td class='bold','cap'>" + animals[animalPositionInArray].name + "</td><td>" + animals[animalPositionInArray].ferocity + "</td><td class='cap'>" + animals[animalPositionInArray].description + "</td><td class='cap'>" + animals[animalPositionInArray].type + "</td></tr>";

    $('table').append(animalTableData);
}

function putAnimalInZoo(animalPositionInArray) {
    var newPic = animals[animalPositionInArray].image;
    $("#zoo").append('<img id="animal' + animalPositionInArray + '" class="animal" src="' + newPic + '">');
    // document.getElementById('#zoo').innerHTML += '<img src="' + newPic + '">'
}