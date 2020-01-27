//create an array to store cart contents
let cart = [];

//render the inventory of items from the database
const render = function(data){
    $('#content').empty();
    if (data.length == 0) {
        $('#content').append(`<div class="col s12">
                                <h3 class="center-align">There are no games available at this time.</h3>
                             </div>`);
    } else {
        for (let i = 0; i < data.length; i++){
            $('#content').append(`<div class="col-lg-3">
                                    <div class="card">
                                        <img class="card-img-top" src="${data[i].image_location}" max-width="100%" max-height="100%" alt="Card image cap">
                                        <div class="card-body">
                                            <h5 class="card-title float-left">${data[i].game_name}</h5>
                                            <h5 class="card-title float-right">$${data[i].price}</h5>
                                            <br>
                                            <hr>
                                            <p class="card-text">${data[i].description}</p>
                                            <label for="order">Quantity:</label>
                                            <br>
                                            <div class="input-group mb-3 quantity float-left">
                                                <div class="input-group-prepend">
                                                    <button class="btn btn-outline-secondary minus" type="button" id="minus${data[i].id}"><i class="fas fa-minus"></i></button>
                                                </div>
                                                    <input type="text" class="form-control amount" value="0" id="amount${data[i].id}">
                                                <div class="input-group-append">
                                                    <button class="btn btn-primary plus" data-container="button" data-toggle="popover" data-placement="top" data-content="At inventory limit!" type="button" id="plus${data[i].id}"><i class="fas fa-plus"></i></button>
                                                </div>
                                            </div>
                                            <button class="btn btn-primary float-right submit" type="submit" id="submit${data[i].id}">Order</button>
                                        </div>
                                    </div>
                                </div>`);
        };
    };
};

//render manager view
const renderManager = function(data){
    console.log(data.length)
    var menu = '<div class="row" ><div class="col s2 nav"><ul><li><button class="col s12 waves-effect waves-light btn-large black text-white" id="createGame">Create Game</a></li><li><a class="col s12 waves-effect waves-light btn-large black text-white disabled" id="viewClosedGames">View Active Games</a></li><li><a class="col s12 waves-effect waves-light btn-large black text-white" id="viewClosedGames">View Closed Games</a></li></ul> </div>'
    $('#content').empty();
    if (data.length == 0){
        menu += '<div class="col s10"><h3 class="center-align"> There are no active games </h3></div></div>'
        $('#content').append(menu);
    }
    for (let i = 0; i < data.length; i++){
        menu += '<div class="col s10"> <div class="card position-relative"> <img class="card-img-top" src="${data[i].image_location}" max-width="100%" max-height="100%" alt="Card image cap"> <div class="card-body"><h5 class="card-title float-left">${data[i].product_name}</h5><h5 class="card-title float-right">$${data[i].price}</h5><br><hr><p class="card-text">${data[i].description}</p><p>Current Stock: ${data[i].stock_quantity}</p><button class="btn btn-primary float-right addStock" type="submit" id="addStock${data[i].id}">Add Stock</button><br></div></div></div>)';
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
                                <a href="#!" class="modal-close waves-effect waves-white btn-flat black white-text">Sign-in</a>
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
                            </form>
                            <div class="modal-footer">
                                <a href="#!" class="modal-close waves-effect waves-light-grey btn-flat black white-text">Signup</a>
                            </div>
                        </div>    `);
}

const renderCreateGame = function (){
    $('.modal').empty();
    $('.modal').append(`<div class="modal-content">
                            <h4 class="modal-header-content">Create Game</h4>
                            <form class="col s12" action="/upload" method="post" enctype="multipart/form-data">
                                <div class="file-field input-field">
                                    <div class="btn black white-text">
                                        <span>File</span>
                                        <input name="upload_image" type="file" class="upload"  id="upload_image" multiple="multiple">
                                    </div>
                                    <div class="file-path-wrapper">
                                        <input class="file-path validate" type="text" onchange=">
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
        renderManager(response);
    });
}

//obtain the quantity of a specific item
const getQuantity = function(event, id){
    event.preventDefault;
    $.ajax({
        url: `/api/products/${id}`,
        method: 'GET'
    }).then(function(response){
        //if increasing the quantity with the plus sign, go to increase quantity
        if (event.type === "click"){
            increaseQuantity(id, response.stock_quantity);
        //If increasing the quantity with the input field, go to set quantity    
        } else {
            setQuantity(id, response.stock_quantity);
        }
    });
}            

function sendFile(image) {  
    $.ajax({
        type: 'post',
        url: '/upload',
        data: image,
        processData: false,
        contentType: false,
        }).then(function(response) {
            console.log(response);
        }
        );
    return false;
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

$('#modal').on('click', '#checkGameCreate', function(){
    const form = $(this).closest('.modal');
    var file = form.find('#upload_image').get(0).files;
    var game_name = form.find('#game_name').val();
    var cost = form.find('#cost').val();
    var description = form.find('#description').val();
    var seats = form.find('#seats').val();
    var freebies = form.find('#freebies').val();
    console.log(file);
    sendFile(file);
    $('#card_modal').modal('open')
    $('#card_modal').empty();
    $('#card_modal').append(`</div><div class="card small" id="card_sample">
                            <div class="card-image">
                                <img id="image" src="">
                                <span class="card-title">${game_name}</span>
                            </div>
                            <div class="card-content">
                                <p class="col s12">${description}</p>
                                <span class="col s4">$${cost}</span>
                                <span class="col s4 offset-s4">${seats}</span>
                            </div>
                        </div>`)
})