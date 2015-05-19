var animals = [{
    name: 'lion',
    image: 'http://i1-news.softpedia-static.com/images/news2/Picture-of-the-Day-Real-Life-Simba-and-Mufasa-Caught-on-Camera-in-Tanzania-392687-2.jpg',
    ferocity: 7,
    description: 'Large Carnivorous Feline',
    type: 'Mammal'
}]

$(document).ready(function() {

    $("#addImage").click(function() {
        $("#hiddenURLdiv").show();
    });

    $("#submitbtn").click(function() {
        var animalName = $('#prenom').val();
        var imgURL = $('#hiddenURL').val();
        var ferocity = $('#ferocity').val();
        var descriptn = $('#description').val();
        var animalCategory = $('input:radio[name="user[role]"]:checked').val();
        if (animalCategory === 'on') {
            var animalType = $('#otherRadioText').val();
        }
        console.log(animalName, imgURL, ferocity, descriptn, animalType)
    });

});

function createAnimalObject(title, name, pic, feroc, descript, type) {
    var title = {
        name: name,
    }
}

function publishAnimal() {

}