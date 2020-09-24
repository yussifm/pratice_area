// Challenge-1 age in days
var birthyear = 0;

function ageInDays() {
    birthyear = birthyear = prompt("Which year were you born: ");
    var ageinDays = (2020 - birthyear) * 365;
    // var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode(" You are " + ageinDays + " days old");
    // h1.setAttribute('id', 'ageinDays');
    // h1.appendChild(textAnswer);
    // document.getElementById("flex-box-results").appendChild(h1);

    var age = document.getElementById("age");
    age.innerHTML = textAnswer.textContent;
}

function reSet() {
    var age = document.getElementById("age");
    age.innerHTML = "";
}



// Challange-2 IMage generator

function generateimg() {
    var image = document.createElement("img");
    var div = document.getElementById("imagecan");
    image.src = "../LGHZ9172.JPG";
    div.appendChild(image);
}


// Challage-3 Rock Papar Scissor

function mainGame(player_choice) {


    var p_choice, Com_choice;
    p_choice = player_choice.id;
    Com_choice = numberTochi(rnadonchice());
    results = decideWinner(p_choice, Com_choice);
    message = message_display(results);
    change_view(player_choice.id, Com_choice, message);


}


function rnadonchice() {

    return Math.floor(Math.random() * 3);
}

function numberTochi(num) {
    return ['rock', 'papar', 'scissor'][num];
}

function decideWinner(player, com) {
    var game_databse = {
        'rock': {
            'scissor': 1,
            'rock': 0.5,
            'paper': 0
        },
        'papar': {
            'rock': 1,
            'paper': 0.5,
            "scissor": 0
        },
        'scissor': {
            'papar': 1,
            'scissor': 0.5,
            'rock': 0
        }
    };

    var player_score = game_databse[player][com];
    var com_score = game_databse[com][player];

    return [player_score, com_score];
}

function message_display([p_score]) {
    if (p_score === 0) {
        return {
            'message': "You Lost!",
            'color': "red"

        };
    } else if (p_score === 0.5) {
        return {
            'message': "Is a Draw!",
            'color': "yellow"

        };
    } else {
        return {
            'message': "YOU WON! ",
            'color': "green"
        };
    }



}

function change_view(p_imgCh, c_imgCh, message) {
    var Image_database = {
        'rock': document.getElementById('rock').src,
        'papar': document.getElementById('papar').src,
        'scissor': document.getElementById('scissor').src
    };

    // let remove all images amd rearrange
    document.getElementById('rock').remove();
    document.getElementById('papar').remove();
    document.getElementById('scissor').remove();

    var playerDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var comDiv = document.createElement('div');


    playerDiv.innerHTML = `<img src='${Image_database[p_imgCh]}'height=170px, width=200px style= ' box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.705);margin: 5%;border - radius: 50 %;padding: 5 px '`;
    messageDiv.innerHTML = `<h1 style='color: ${message['color']}; font-size: 60px;>${message['message']}</h1>`;
    comDiv.innerHTML = "<img src='" + Image_database[c_imgCh] + "'height=170px, width=200px";

    document.getElementById("flexBox-rps").appendChild(playerDiv);
    document.getElementById("flexBox-rps").appendChild(messageDiv);
    document.getElementById("flexBox-rps").appendChild(comDiv);


}