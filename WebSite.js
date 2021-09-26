let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

console.log(menu)
console.log(navbar)
menu.onclick = () => {
    menu.classList.toggle('.fa-times');
    navbar.classList.toggle('active');
}
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);

})

//<<<<<<<<<<<<<<< MENU TAB>>>>>>>>>>>>//
const menuTabs = document.querySelector('.menu-tabs');

const lunchBtn = document.getElementById('lunchBtn');

const dinnerBtn = document.getElementById('dinnerBtn');

const dessertBtn = document.getElementById('dessertBtn');

const drinkBtn = document.getElementById('drinkBtn');

const lunch = document.getElementById('lunch');

const dinner = document.getElementById('dinner');

const dessert = document.getElementById('dessert');

const drink = document.getElementById('drink');


lunchBtn.addEventListener('click', function(e) {


    if (e.target.classList.contains('active')) {
        removeLunchButtonActive();
    } else {
        lunch.classList.add('active');
        removeLunchButtonActive();

    }

});

function removeLunchButtonActive() {
    dinner.classList.remove('active');
    dessert.classList.remove('active');
    drink.classList.remove('active');
}



dinnerBtn.addEventListener('click', function(e) {


    if (e.target.classList.contains('active')) {
        removeDinnerButtonActive();
    } else {
        dinner.classList.add('active');
        removeDinnerButtonActive();

    }

});

function removeDinnerButtonActive() {
    lunch.classList.remove('active');
    dessert.classList.remove('active');
    drink.classList.remove('active');
}


dessertBtn.addEventListener('click', function(e) {


    if (e.target.classList.contains('active')) {
        removeDessertButtonActive();
    } else {
        dessert.classList.add('active');
        removeDessertButtonActive();

    }

});

function removeDessertButtonActive() {
    dinner.classList.remove('active');
    lunch.classList.remove('active');
    drink.classList.remove('active');
}


drinkBtn.addEventListener('click', function(e) {


    if (e.target.classList.contains('active')) {
        removeDrinkButtonActive();
    } else {
        drink.classList.add('active');
        removeDrinkButtonActive();

    }

});

function removeDrinkButtonActive() {
    dinner.classList.remove('active');
    dessert.classList.remove('active');
    lunch.classList.remove('active');
}

menuTabs.addEventListener('click', function(e) {
    if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
        const target = e.target.getAttribute("id");
        menuTabs.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
    }
});
// <<<<<<<<<<<<<MENU TAB END>>>>>>>>>>>>>>>>>>


///////////////MENU ACTIVE SIDEBAR/////////////



function toggleMenu() {
    const menuToggle = document.querySelector('.navbar a')
    menuToggle.classList.toggle('active')



}






////////API///////////////////////

fetch("https://api.documenu.com/v2/restaurant/4068705373999617?key=07764c93b97aeddbf30dba9a447ee9c0")
    .then(response => {
        return response.json();
    })
    .then(function(data) {
        addLunch(data.result.menus[0].menu_sections)
        addDinner(data.result.menus[0].menu_sections)
        addDesert(data.result.menus[0].menu_sections)
        addDrink(data.result.menus[0].menu_sections)
    })
    .catch(err => {
        console.log(err);
    });


function addLunch(lunch) {
    const lunchCard1 =
        `
    <div class="menu-item-box">


    <img src="https://images.unsplash.com/photo-1619526881387-832bb7967226?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="">
    <h3>${lunch[5].menu_items[3].name}</h3>
    <span class="price">$${lunch[5].menu_items[3].price}</span>
    <div class="stars">
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
    </div>
    <a href="#" class="btn">Order now</a>

</div>
    `
    const lunchCard2 =
        `
    <div class="menu-item-box">


    <img src="https://images.unsplash.com/photo-1582034986517-30d163aa1da9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" id="chicken">
    <h3>${lunch[8].menu_items[7].name}</h3>
    <span class="price">$${lunch[8].menu_items[7].price}</span>
    <div class="stars">
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
    </div>
    <a href="#" class="btn">Order now</a>

</div>
    `

    const lunchCard3 =
        `
    <div class="menu-item-box">


    <img src="https://images.unsplash.com/photo-1525351484163-7529414344d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="">
    <h3>${lunch[6].menu_items[6].name}</h3>
    <span class="price">$${lunch[6].menu_items[6].price}</span>
    <div class="stars">
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
    </div>
    <a href="#" class="btn">Order now</a>

</div>
    `

    document.querySelector("#lunch .box-container").innerHTML += lunchCard1;
    document.querySelector("#lunch .box-container").innerHTML += lunchCard2;
    document.querySelector("#lunch .box-container").innerHTML += lunchCard3;

}

function addDinner(dinner) {
    const dinnerCard1 =
        `
    <div class="menu-item-box">


    <img src="https://images.unsplash.com/photo-1625943555419-56a2cb596640?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="">
    <h3>${dinner[8].menu_items[13].name}</h3>
    <span class="price">$${dinner[8].menu_items[13].price}</span>
    <div class="stars">
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
    </div>
    <a href="#" class="btn">Order now</a>

</div>
    `
    const dinnerCard2 =
        `
    <div class="menu-item-box">


    <img src="https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" alt="">
    <h3>${dinner[6].menu_items[14].name}</h3>
    <span class="price">$${dinner[6].menu_items[14].price}</span>
    <div class="stars">
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
    </div>
    <a href="#" class="btn">Order now</a>

</div>
    `

    const dinnerCard3 =
        `
    <div class="menu-item-box">


    <img src="https://images.unsplash.com/photo-1546039907-7fa05f864c02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="">
    <h3>${dinner[6].menu_items[7].name}</h3>
    <span class="price">$${dinner[6].menu_items[7].price}</span>
    <div class="stars">
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
    </div>
    <a href="#" class="btn">Order now</a>

</div>
    `

    document.querySelector("#dinner .box-container").innerHTML += dinnerCard1;
    document.querySelector("#dinner .box-container").innerHTML += dinnerCard2;
    document.querySelector("#dinner .box-container").innerHTML += dinnerCard3;

}

function addDesert(dessert) {
    const dessertCard1 =
        `
    <div class="menu-item-box">


    <img src="https://images.unsplash.com/photo-1617305855058-336d24456869?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzc2VydHN8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" class="img">

    <h3>${dessert[11].menu_items[27].name}</h3>
    <span class="price">$${dessert[11].menu_items[27].price}</span>
    <div class="stars">
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
    </div>
    <a href="#" class="btn">Order now</a>

</div>
    `
    const dessertCard2 =
        `
    <div class="menu-item-box">


    <img src="https://images.unsplash.com/photo-1586985288123-2495f577c250?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGVzc2VydHN8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">

    <h3>${dessert[11].menu_items[23].name}</h3>
    <span class="price">$${dessert[11].menu_items[23].price}</span>
    <div class="stars">
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
    </div>
    <a href="#" class="btn">Order now</a>

</div>
    `

    const dessertCard3 =
        `
    <div class="menu-item-box">


    <img src="https://images.unsplash.com/photo-1590080876477-fa40830fe6f9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnRzfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">

    <h3>${dessert[11].menu_items[42].name}</h3>
    <span class="price">$${dessert[11].menu_items[42].price}</span>
    <div class="stars">
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
    </div>
    <a href="#" class="btn">Order now</a>

</div>
    `

    document.querySelector("#dessert .box-container").innerHTML += dessertCard1;
    document.querySelector("#dessert .box-container").innerHTML += dessertCard2;
    document.querySelector("#dessert .box-container").innerHTML += dessertCard3;

}

function addDrink(drink) {
    const drinkCard1 =
        `
    <div class="menu-item-box">


    <img src="https://images.unsplash.com/photo-1631503190221-0f6a15367926?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHJpbmtzfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">


    <h3>${drink[2].menu_items[21].name}</h3>
    <span class="price">$${drink[2].menu_items[21].price}</span>
    <div class="stars">
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
    </div>
    <a href="#" class="btn">Order now</a>

</div>
    `
    const drinkCard2 =
        `
    <div class="menu-item-box">


    <img src="https://images.unsplash.com/photo-1594584697907-4181579de394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" alt="" id="cocktail">
    

    <h3>${drink[2].menu_items[40].name}</h3>
    <span class="price">$${drink[2].menu_items[40].price}</span>
    <div class="stars">
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
    </div>
    <a href="#" class="btn">Order now</a>

</div>
    `

    const drinkCard3 =
        `
    <div class="menu-item-box">


    <img src="https://images.unsplash.com/photo-1541807120430-f3f78c281225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="" id="drinkİmage">


    <h3>${drink[2].menu_items[25].name}</h3>
    <span class="price">$${drink[2].menu_items[25].price}</span>
    <div class="stars">
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
        <i class="fa fa-star"> </i>
    </div>
    <a href="#" class="btn">Order now</a>

</div>
    `

    document.querySelector("#drink .box-container").innerHTML += drinkCard1;
    document.querySelector("#drink .box-container").innerHTML += drinkCard2;
    document.querySelector("#drink .box-container").innerHTML += drinkCard3;

}
////////////API END////////////