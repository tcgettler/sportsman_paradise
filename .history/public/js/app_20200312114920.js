//create an array to store cart contents
let cart = [];

//render the inventory of items from the database
const render = function(data){
    $('#content').empty();
    $('#content').append(`<div class="row" id="contentPage">
                          </div>`);
    if (data.length == 0) {
        $('#content').append(`<div class="col s12">
                                <h3 class="center-align">There are no games available at this time.</h3>
                             </div>`);
    } else {
        for (let i = 0; i < data.length; i++){
            $(`<div class="col s3"><div class="card small" id="card_sample">
                            <div class="card-image">
                                <img id="image" src=${data[i].image_location}>
                                <span class="card-title">${data[i].game_name}</span>
                            </div>
                            <div class="card-content">
                                <div class="row">
                                    <p class="col s12 center-align">${data[i].description}</p>
                                </div>
                                <div class="row">
                                    <span class="col s4 left-align">$${data[i].price}.00</span>
                                    <span class="col s4 offset-s4">30</span>
                                </div>
                            </div>
                        <div class="card-action">
                                <a href="#!" class="waves-effect waves-light btn-flat black white-text center" name=${data[i].id} id="purchaseSeat">Purchase Seat</a>
                            </div> </div> </div></div>`).appendTo('#contentPage')           
        };
    };
};

//render manager view
const renderManager = function(data){
    console.log(data.length)
    var menu = '<div class="row" ><div class="col s2 nav"><ul><li><button class="col s12 waves-effect waves-light btn-large black text-white" id="createGame">Create Webinar</a></li><li><a class="col s12 waves-effect waves-light btn-large black text-white disabled" id="viewActiveGames">View Active Webinars</a></li><li><a class="col s12 waves-effect waves-light btn-large black text-white" id="viewClosedGames">View Closed Webinars</a></li></ul> </div>'
    $('#content').empty();
    if (data.length == 0){
        menu += '<div class="col s10"><h3 class="center-align"> There are no active games </h3></div></div>'
        $('#content').append(menu);
    }
    for (let i = 0; i < data.length; i++){
        menu += '<div class="card small left" id="gamecard"><div class="card-image"> <img id="image" src="' + data[i].image_location + '"><span class="card-title">' + data[i].game_name + '</span></div><div class="card-content"><div class="row"><p class="col s12 center-align">' + data[i].description + '</p></div><div class="row"><span class="col s4 left-align">$' + data[i].price + '.00</span><span class="col s4 offset-s4">30 seats remain</span></div></div><div class="card-action"><a href="#!" class="waves-effect waves-light btn-flat red white-text" name="' + data[i].id + '" id="deleteGame">Delete</a><a href="#!" class="waves-effect waves-light btn-flat black white-text" name="' + data[i].id + '"id="pickWinner">Pick Winner</a></div></div>';
    };
    $('#content').append(menu);
}

const renderClosedManager = function(data){
    console.log(data.length)
    var menu = '<div class="row" ><div class="col s2 nav"><ul><li><button class="col s12 waves-effect waves-light btn-large black text-white" id="createGame">Create Webinar</a></li><li><a class="col s12 waves-effect waves-light btn-large black text-white" id="viewActiveGames">View Active Webinars</a></li><li><a class="col s12 waves-effect waves-light btn-large black text-white disabled" id="viewClosedGames">View Closed Webinars</a></li></ul> </div>'
    $('#content').empty();
    if (data.length == 0){
        menu += '<div class="col s10"><h3 class="center-align"> There are no closed games </h3></div></div>'
        $('#content').append(menu);
    }
    for (let i = 0; i < data.length; i++){
        menu += '<div class="card small left" id="gamecard"><div class="card-image"> <img id="image" src="' + data[i].image_location + '"><span class="card-title">' + data[i].game_name + '</span></div><div class="card-content"><div class="row"><p class="col s12 center-align">' + data[i].description + '</p></div><div class="row"><span class="col s4 left-align">$' + data[i].price + '.00</span><span class="col s4 offset-s4">30 seats remain</span></div></div><div class="card-action"><a href="#!" class="waves-effect waves-light btn-flat red white-text" name="' + data[i].id + '" id="deleteGame">Delete</a><a href="#!" class="waves-effect waves-light btn-flat black white-text" name="' + data[i].id + '"id="pickWinner">Pick Winner</a></div></div>';
    };
    $('#content').append(menu);
}

const renderSignIn = function() {
    $('.modal').empty();
    $('.modal').append(`<div class="modal-content">
                            <h4 class="modal-header-content">Sign In</h4>
                            <form class="col s12">
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input placeholder="" id="user_name" type="text" class="validate">
                                        <label for="user_name">Username</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input id="password" type="password" class="validate">
                                        <label for="password">Password</label>
                                    </div>
                                </div>
                            </form>
                            <div class="modal-footer">
                                <a href="#!" class="left" id="forgot">Forgot Username or Password</a>
                                <a href="#!" class="modal-close waves-effect waves-white btn-flat black white-text" id="signin">Sign-in</a>
                            </div>
                        </div>    `);
}

//toggle signup modal
const renderSignUp = function(){
    $('.modal').empty();
    $('.modal').append(`<div class="modal-content">
                            <h4 class="modal-header-content">Sign In</h4>
                            <form class="col s12">
                                <div class="row">
                                    <div class="input-field col s6">
                                        <input placeholder="" id="first_name" type="text" class="validate">
                                        <label for="first_name">Fist Name</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <input placeholder="" id="last_name" type="text" class="validate">
                                        <label for="Last_name">Last Name</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input id="address1" type="text" class="validate">
                                        <label for="address1">Address Line 1</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input id="address2" type="text" class="validate">
                                        <label for="address2">Address Line 2</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s6">
                                        <input id="city" type="text" class="validate">
                                        <label for="city">City</label>
                                    </div>
                                    <div class="input-field col s2">
                                        <input id="state" type="text" class="validate">
                                        <label for="state">State</label>
                                    </div>
                                    <div class="input-field col s4">
                                        <input id="zip" type="number" class="validate">
                                        <label for="zip">Zip Code</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input id="phone" type="tel" class="validate">
                                        <label for="phone">Phone Number</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input id="email" type="email" class="validate">
                                        <label for="email" data-error="need valid email" data-success="valid email">Email Address</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                    <input id="password" type="password" class="validate">
                                    <label for="password">Password</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                    <input id="confpassword" type="password" class="validate">
                                    <label for="password">Confirm Password</label>
                                    </div>
                                </div>
                            </form>
                            <div class="modal-footer">
                                <a href="#!" class="waves-effect waves-light-grey btn-flat black white-text" id="signup">Signup</a>
                            </div>
                        </div>    `);
}

const renderCreateGame = function (){
    $('.modal').empty();
    $('.modal').append(`<div class="modal-content">
                            <h4 class="modal-header-content">Create Game</h4>
                            <form class="col s12" action="/upload" method="post" enctype="multipart/form-data">
                                <div class="file-field input-field">
                                    <div class="btn">
                                        <span>File</span>
                                        <input type="file" id="upload_image" multiple>
                                    </div>
                                    <div class="file-path-wrapper">
                                        <input class="file-path validate" type="text" value="upload_image" placeholder="Upload one or more files">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input placeholder="" id="game_name" type="text" class="validate">
                                        <label for="game_name">Game Name</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s3">
                                        <i class="material-icons prefix">attach_money</i>
                                        <input id="cost" type="number" class="validate">
                                        <label for="cost">Game Cost</label>
                                    </div>
                                    <div class="input-field col s2">
                                        <input id="seats" type="number" class="validate">
                                        <label for="seats">Seats</label>
                                    </div>
                                    <div class="input-field col s2">
                                        <input id="freebies" type="number" class="validate">
                                        <label for="freebies">Free Seats</label>
                                    </div>
                                    <div class="input-field col s5">
                                        <textarea id="description" class="materialize-textarea"></textarea>
                                        <label for="description">Description</label>
                                    </div>
                                </div>
                            </form>
                            <div class="modal-footer">
                                <a href="#!" class="waves-effect waves-white btn-flat black white-text" id="checkGameCreate">Create Game</a>
                            </div>
                        </div>    `);
}

//obtain all the games in the database
const getGames = function(view, status){
    $.ajax({
        url: '/api/games',
        method: 'GET'
    }).then(function(response){
        render(response);
    });
}

//obtain all the games in the database
const getGamesManager = function(view, status){
    $.ajax({
        url: '/api/games',
        method: 'GET'
    }).then(function(response){
        renderManager(response);
    });
}      

const getRetiredGames = function(view, status){
    $.ajax({
        url: `/api/games/closed`,
        method: 'GET'
    }).then(function(response){
        renderClosedManager(response);
    });
}

function sendFile(image, form) {  
    console.log(image);
    var game_name = form.find('#game_name').val();
    var cost = form.find('#cost').val();
    var description = form.find('#description').val();
    var seats = form.find('#seats').val();
    var freebies = form.find('#freebies').val();
    $.ajax({
        method: 'POST',
        url: '/upload',
        data: image,
        processData: false,
        contentType: false,
        }).then(function(response) {
            $('#card_modal').modal('open')
            $('#card_modal').empty();
            $('#card_modal').append(`</div><div class="card small" id="card_sample">
                            <div class="card-image">
                                <img id="image" src="media/gun.jpg">
                                <span class="card-title">${game_name}</span>
                            </div>
                            <div class="card-content">
                                <div class="row">
                                    <p class="col s12 center-align">${description}</p>
                                </div>
                                <div class="row">
                                    <span class="col s4 left-align">$${cost}.00</span>
                                    <span class="col s4 offset-s4">${seats}</span>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                                <a href="#!" class="modal-close waves-effect waves-light btn-flat red white-text">Cancel</a>
                                <a href="#!" class="waves-effect waves-light btn-flat black white-text" id="confirmGameCreate">Create</a>
                            </div>    `)
        }
        );
}

const renderSeatSelection = function(data){
    $('#modal').modal('open');
    $('#modal').empty();
    $('#modal').append(`<div class="row">
                            <h4 class="center purchaseHeader">Select a Seat</h4>
                        </div>
                        <div class="row" id="seats">
                        `)
    for(let i = 0; i < data.length; i++){
        if(data[i].available == true){
            $(`<label class="col s2"><input type="checkbox" class="filled-in" name="${data[i].id}"/><span>  Seat ${data[i].seat + 1 + " "}</span></label`).appendTo('#seats')
        } else {
            $(`<label class="col s2"><input type="checkbox" disabled="disabled" name=${data[i]/id}/><span>  Seat ${data[i].seat + 1 + " "}</span></label>`).appendTo('#seats')
        }
    }
    $('#modal').append(`<div class="row">
                            <div class="col s5">
                            <a class="waves-effect waves-light btn-large" id="purchaseSeat">Purchase</a>
                            </div>
                        </div>`)
}

const signIn = function(username, password){
    console.log(username);
    console.log(password);
    if (username == "admin@txsportsmansparadise.com" && password == "Setting2020!"){
        console.log(username)
        console.log(password)
        getGamesManager();
    }
}

const renderWinner = function(data){
    $('#modal').modal('open');
    $('#modal').empty();
    $('#modal').append(`<div class="row">
                            <div class="col s12 center">
                                <h4> And the winner is... </hr>
                                <h5>Seat ${data.seat + 1}</h5>
                                <h5>Player Test</h5>
                            </div>
                        </div>`)
}
//render page when site loads
$(document).ready(function(){
    $('.modal').modal();
    getGames();
});

$('#signup').click(function(){
    $('#modal').modal('open');
    renderSignUp();
});

$('#signin').click(function(){
    $('#modal').modal('open');
    renderSignIn();
})

$(document).on('click', '#createGame', function(){
    $('#modal').modal('open');
    renderCreateGame();
})  

$(document).on('click', '#viewClosedGames', function(){
    getRetiredGames();
})

$(document).on('click', '#viewActiveGames', function(){
    getGamesManager();
})

$('#modal').on('click', '#checkGameCreate', function(){
    const form = $(this).closest('.modal');
    var file = form.find('#upload_image').get(0).files;

    sendFile(file, form);
    console.log("testing");
})

$('#card_modal').on('click', '#confirmGameCreate', function(){
    var game_name = $('#modal').find('#game_name').val();
    var cost = $('#modal').find('#cost').val();
    var description = $('#modal').find('#description').val();
    var seats = $('#modal').find('#seats').val();
    var freebies = $('#modal').find('#freebies').val();
    var freebieArray = [];
    var gameid;
    
    const game = {game_name: game_name, price: cost, description:description, image_location: "media/gun.jpg", active: true};
   
    $.ajax({
        url: '/games/create',
        method: 'POST',
        data: game,
        timeout:5000
    }).then(function(response){
        gameid = response.id;
        console.log(gameid);
        for (let i=0; i < freebies; i++){
            var freeseat;
            freeseat = (Math.floor(Math.random() * Math.floor(seats)));
            for (let k=0; k < freebieArray.length; k++){
                if (freeseat == freebieArray[k]){
                    freebieArray.push(Math.floor(Math.random() * Math.floor(seats)));
                } 
            }
            freebieArray.push(freeseat);
        }
        for (let l=0; l < seats; l++){
            var isfree = false;
            for (m=0; m < freebieArray.length; m++){
                console.log((freebieArray[m] == l))
                if (freebieArray[m] == l) {
                    isfree = true;
                } 
            }
            var seatdetails = {seat: l, isfree: isfree, available: true, GameId: gameid};
            console.log(seatdetails);
            $.ajax({
                url: '/seats/create',
                method: 'POST',
                data: seatdetails,
                timeout:5000
            }).then(function(response){
                $('.modal').modal('close');
                getGames();
            });
        }
    })
})

$(document).on('click', '#purchaseSeat', function(){
    var id = $(this).attr('name');
    $.ajax({
        url: `api/seats/${id}`,
        method: 'GET'
    }).then(function(response){
        renderSeatSelection(response);
    });
})

$('#modal').on('click', '#signin', function(){
    var username = $('#modal').find('#user_name').val();
    var password = $('#modal').find('#password').val();
    signIn(username, password)
})

$('#content').on('click', '#pickWinner', function(){
    var gameid = $(this).attr('name');
    var winner;
    $.ajax({
        url: `api/seats/${gameid}`,
        method: 'GET'
    }).then(function(response){
        winner = (Math.floor(Math.random() * Math.floor(response.length)));
        renderWinner(response[winner]);
    });
})

$('#modal').on('click', '#signup', function(e){
    e.preventDefault();
    var fname = $('#modal').find('#first_name').val();
    var lname = $('#modal').find('#last_name').val();
    var add1 = $('#modal').find('#address1').val();
    var add2 = $('#modal').find('#address2').val();
    var city = $('#modal').find('#city').val();
    var state = $('#modal').find('#state').val();
    var zip = $('#modal').find('#zip').val();
    var phone = $('#modal').find('#phone').val();
    var email = $('#modal').find('#email').val();
    var password = $('#modal').find('#password').val();
    var confpassword = $('#modal').find('#confpassword').val();
    if (password === confpassword){ 
        console.log('true');
        var user = { user_fname: fname, user_lname: lname, address: add1, address2: add2, city: city, state: state, zip: zip, phone: phone, email: email, passowrd: password}
        $.ajax({
            url: '/user/create',
            method: 'POST',
            data: user,
            timeout:5000
        }).then(function(response){
            $('.modal').modal('close');
            M.toast({html: 'User Created'})
        });
    } else {
        console.log(false);
        M.toast({html: 'Passwords do not match'})
    }
});