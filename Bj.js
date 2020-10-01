var dealerPoint = 0;
var userPoint = 0;
var vals = [1,2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
var seeds = ["cuori", "picche", "fiori", "quadri"];
var staycontrol = false;
var startcontrol = false;

var Card = function(){
    this.val = vals[Math.floor(Math.random() * vals.length)]; 
    this.seme = seeds[Math.floor(Math.random() * seeds.length)];  
}

Card.prototype.cardText = function(){
    return this.val + " " + this.seme;
}

function makeCard (who, c, coperta){
    var node = document.createElement("div");
    node.innerText = c.cardText();
    var att = document.createAttribute("class");
    att.value = "carta";
    node.setAttributeNode(att);
    document.getElementsByClassName("cardBox")[who].appendChild(node);
    if(coperta == true){
        var att = document.createAttribute("id");
        att.value = "coperta";
        node.setAttributeNode(att);
        node.innerText = " ";
    }
}

function calcPoint(n, who){
    if(typeof (n) === typeof 1) return n;
            else if(n != "A") return 10;
                else if(n + 11 >= 21) return 1;
                    else return 11;
    return n
}

function draw(){
    if(userPoint<21 && staycontrol == false && startcontrol == true){
        var card = new Card();
        makeCard(1, card, false);
        userPoint += calcPoint(card.val, userPoint);
        document.getElementById("ypt").innerText = "Your Point = " + userPoint;
        if(userPoint >= 21){
            stay();
        }
    } else {
        stay();
    }
}

function stay(){
    if(staycontrol == false && startcontrol == true){
        staycontrol = true;
        document.getElementsByClassName("cardBox")[0].removeChild(document.getElementById("coperta"));
        do{
            let card = new Card();
            makeCard(0, card, false);
            dealerPoint += calcPoint(card.val, dealerPoint);
            document.getElementById("dpt").innerText = "Dealer Point = " + dealerPoint; 
            if(userPoint > 21) break;      
        }while(dealerPoint < userPoint );
        let winner;
        if(userPoint == dealerPoint) winner = "PUSH";
        else if (userPoint > 21) winner = "BUST";
        else if (userPoint > dealerPoint || dealerPoint > 21) winner = "WIN";     
        else if (userPoint == 21) winner = "BLACKJACK";
        else if (userPoint < dealerPoint) winner = "LOST"; 
        document.getElementById("statoPartita").innerText = winner;
    }
}

function start(){
    if(startcontrol == false){ 
        startcontrol = true;
        let card = new Card();        
        draw();
        makeCard(0, card, false);
            dealerPoint += calcPoint(card.val, dealerPoint);
            document.getElementById("dpt").innerText = "Dealer Point = " + dealerPoint;
        draw();
        makeCard(0, card, true);
        staycontrol = false;
    } else {
        for(i=0; i<10; i++){
            let el = document.getElementsByClassName("carta");
            document.removeChild(el);
            staycontrol = false;
        }

    }
}var dealerPoint = 0;
var userPoint = 0;
var vals = [1,2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
var seeds = ["cuori", "picche", "fiori", "quadri"];
var staycontrol = false;
var startcontrol = false;

var Card = function(){
    this.val = vals[Math.floor(Math.random() * vals.length)]; 
    this.seme = seeds[Math.floor(Math.random() * seeds.length)];  
}

Card.prototype.cardText = function(){
    return this.val + " " + this.seme;
}

function makeCard (who, c, coperta){
    var node = document.createElement("div");
    node.innerText = c.cardText();
    var att = document.createAttribute("class");
    att.value = "carta";
    node.setAttributeNode(att);
    document.getElementsByClassName("cardBox")[who].appendChild(node);
    if(coperta == true){
        var att = document.createAttribute("id");
        att.value = "coperta";
        node.setAttributeNode(att);
        node.innerText = " ";
    }
}

function calcPoint(n, who){
    if(typeof (n) === typeof 1) return n;
            else if(n != "A") return 10;
                else if(n + 11 >= 21) return 1;
                    else return 11;
    return n
}

function draw(){
    if(userPoint<21 && staycontrol == false && startcontrol == true){
        var card = new Card();
        makeCard(1, card, false);
        userPoint += calcPoint(card.val, userPoint);
        document.getElementById("ypt").innerText = "Your Point = " + userPoint;
        if(userPoint >= 21){
            stay();
        }
    } else {
        stay();
    }
}

function stay(){
    if(staycontrol == false && startcontrol == true){
        staycontrol = true;
        document.getElementsByClassName("cardBox")[0].removeChild(document.getElementById("coperta"));
        do{
            let card = new Card();
            makeCard(0, card, false);
            dealerPoint += calcPoint(card.val, dealerPoint);
            document.getElementById("dpt").innerText = "Dealer Point = " + dealerPoint; 
            if(userPoint > 21) break;      
        }while(dealerPoint < userPoint );
        let winner;
        if(userPoint == dealerPoint) winner = "PUSH";
        else if (userPoint > 21) winner = "BUST";
        else if (userPoint > dealerPoint || dealerPoint > 21) winner = "WIN";     
        else if (userPoint == 21) winner = "BLACKJACK";
        else if (userPoint < dealerPoint) winner = "LOST"; 
        document.getElementById("statoPartita").innerText = winner;
    }
}

function start(){
    if(startcontrol == false){ 
        startcontrol = true;
        let card = new Card();        
        draw();
        makeCard(0, card, false);
            dealerPoint += calcPoint(card.val, dealerPoint);
            document.getElementById("dpt").innerText = "Dealer Point = " + dealerPoint;
        draw();
        makeCard(0, card, true);
        staycontrol = false;
    } else {
        for(i=0; i<10; i++){
            let el = document.getElementsByClassName("carta");
            document.removeChild(el);
            staycontrol = false;
        }

    }
}
