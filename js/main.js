// cubs http://main.tvgu1jdkm2wvqi.maxcdn-edge.com/wp-content/uploads/2016/SLH/mlb_primary/chicago_cubs_1946-1947.png
// dodgers https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Los_Angeles_Dodgers_logo.svg/1200px-Los_Angeles_Dodgers_logo.svg.png
// cardinals https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/St._Louis_Cardinals_logo.svg/806px-St._Louis_Cardinals_logo.svg.png
// giants http://bakerstadvertising.com/wp-content/uploads/2016/10/SFGiantstemplate-2.png
// braves https://i.pinimg.com/originals/76/a6/0a/76a60a8fd6d07afe77cf5b9c62bfac36.png
// pirtaes http://vector.me/files/images/7/4/74451/pittsburgh_pirates.png
// nationals https://s3-us-west-2.amazonaws.com/scorestream-team-profile-pictures/teamPic11763-13586-jiwwmg.png
// reds https://seeklogo.com/images/C/cincinnati-reds-logo-EB78B84501-seeklogo.com.png
// brewers http://2.bp.blogspot.com/-8fkSjTX7Mb0/UZP3aBHLkAI/AAAAAAAAPts/Zcvn8Vk5WoE/s1600/Milwaukee_Brewers_Alternate_Logo.svg.png
// marlins https://www.printyourbrackets.com/mlb-logos/miami-marlins-logo.png
// padres  http://cdn.bleacherreport.net/images/team_logos/328x328/san_diego_padres.png
// rockies https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Colorado_Rockies_logo.svg/1200px-Colorado_Rockies_logo.svg.png
// diammondbacks http://www.grayflannelsuit.net/blog/wp-content/uploads/2012/02/arizona-diamondbacks-alternate-logo-2007.gif

//Create the same three objects, with the same four properties, using a constructor notation.
function Teams(name, logo, championships, seasons){
  this.name = name;
  this.logo = logo;
  this.championships = championships;
  this.seasons = seasons;
}
//var yankees = new Teams("yankees","https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Yankees_logo.svg/891px-Yankees_logo.svg.png", 27, 114)
//var orioles = new Teams("orioles", "https://i.pinimg.com/originals/75/1c/e0/751ce0cdda7c82febe74e840742a0353.png", 3, 117)
//var redsox = new Teams("red sox", "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/RedSoxPrimary_HangingSocks.svg/1200px-RedSoxPrimary_HangingSocks.svg.png", 8, 116)
//var bluejays = new Teams("blue jays", "https://i.pinimg.com/originals/3a/c4/91/3ac491bc1f03750236f6a1d691251146.png", 2, 40)
//var mets = new Teams("mets", "https://s3-us-west-2.amazonaws.com/scorestream-team-profile-pictures/teamPic11774-881-3gxs5d.png", 2, 56)
//var phillies = new Teams("phillies", "http://upload.wikimedia.org/wikipedia/en/thumb/8/84/Philadelphia_Phillies.svg/1200px-Philadelphia_Phillies.svg.png", 2, 131)

//console.log(yankees, orioles, redsox, bluejays, mets, phillies);



//Add to a method each literal object, that multiplies two numbers and returns the product.
var yankees = {
  name: "yankees",
  championships: 27,
  seasons: 114,
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Yankees_logo.svg/891px-Yankees_logo.svg.png",
  champp: function() {
    return this.championships / this.seasons
  }
}

var orioles = {
  name: "orioles",
  championships: 3,
  seasons: 117,
  logo: "https://i.pinimg.com/originals/75/1c/e0/751ce0cdda7c82febe74e840742a0353.png",
  champp: function() {
    return this.championships / this.seasons
  }
}

var redsox = {
  name: "red sox",
  championships: 8,
  seasons: 116,
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/RedSoxPrimary_HangingSocks.svg/1200px-RedSoxPrimary_HangingSocks.svg.png",
  champp: function() {
    return this.championships / this.seasons
  }
}


var bluejays = {
  name: "blue jays",
  championships: 2,
  seasons: 40,
  logo: "https://i.pinimg.com/originals/3a/c4/91/3ac491bc1f03750236f6a1d691251146.png",
  champp: function() {
    return this.championships / this.seasons
  }
}

var rays = {
  name: "rays",
  championships: 0,
  seasons: 19,
  logo: "http://vector.me/files/images/7/4/74447/tampa_bay_devil_rays.png",
  champp: function() {
    return this.championships / this.seasons
  }
}

var indians = {
  name: "indians",
  championships: 6,
  seasons: 116,
  logo: "https://www.velosano.org/VeloSano/media/velosano-2016/partner-logos-color/indians.png?ext=.png",
  champp: function() {
    return this.championships / this.seasons
  }
}

var twins = {
  name: "twins",
  championships: 3,
  seasons: 116,
  logo: "http://main.tvgu1jdkm2wvqi.maxcdn-edge.com/wp-content/uploads/2016/SLH/mlb_alternate/minnesota_twins_2015-pres_a.png",
  champp: function() {
    return this.championships / this.seasons
  }
}

var tigers = {
  name: "tigers",
  championships: 4,
  seasons: 116,
  logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Detroit-tigers-logo-2016.png",
  champp: function() {
    return this.championships / this.seasons
  }
}

var royals = {
  name: "royals",
  championships: 2,
  seasons: 48,
  logo: "https://seeklogo.com/images/K/kansas-city-royals-logo-70318996E4-seeklogo.com.png",
  champp: function() {
    return this.championships / this.seasons
  }
}

var whitesox = {
  name: "white sox",
  championships: 3,
  seasons: 116,
  logo: "http://main.tvgu1jdkm2wvqi.maxcdn-edge.com/wp-content/uploads/2016/SLH/mlb_primary/chicago_white_sox_1917.png",
  champp: function() {
    return this.championships / this.seasons
  }
}


var rangers = {
  name: "rangers",
  championships: 0,
  seasons: 56,
  logo: "http://main.tvgu1jdkm2wvqi.maxcdn-edge.com/wp-content/uploads/2016/SLH/mlb_primary/texas_rangers_1984-1993.png",
  champp: function() {
    return this.championships / this.seasons
  }
}

var angels = {
  name: "angels",
  championships: 1,
  seasons: 0,
  logo: "http://cdn.bleacherreport.net/images/team_logos/328x328/los_angeles_angels.png",
  champp: function() {
    return this.championships / this.seasons
  }
}

var astros = {
  name: "astros",
  championships: 0,
  seasons: 55,
  logo: "https://upload.wikimedia.org/wikipedia/en/4/4c/Houston_Astros_logo.gif",
  champp: function() {
    return this.championships / this.seasons
  }
}

var athletics = {
  name: "athletics",
  championships: 9,
  seasons: 116,
  logo: "http://vector.me/files/images/7/4/74463/oakland_athletics.png",
  champp: function() {
    return this.championships / this.seasons
  }
}

var mariners = {
  name: "mariners",
  championships: 0,
  seasons: 40,
  logo: "http://images.footballfanatics.com/AppLogos/MLB/MLB_Seattle_Mariners_200x200_trans.png",
  champp: function() {
    return this.championships / this.seasons
  }
}

var cubs = {
  name: "cubs",
  championships: 3,
  seasons: 124,
  logo: "http://main.tvgu1jdkm2wvqi.maxcdn-edge.com/wp-content/uploads/2016/SLH/mlb_primary/chicago_cubs_1946-1947.png",
  champp: function() {
    return this.championships / this.seasons
  }
}

var dodgers = {
  name: "dodgers",
  championships: 6,
  seasons: 133,
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Los_Angeles_Dodgers_logo.svg/1200px-Los_Angeles_Dodgers_logo.svg.png",
  champp: function() {
    return this.championships / this.seasons
  }
}

var cardinals = {
  name: "cardinals",
  championships: 11,
  seasons: 125,
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/St._Louis_Cardinals_logo.svg/806px-St._Louis_Cardinals_logo.svg.png",
  champp: function() {
    return this.championships / this.seasons
  }
}

var giants = {
  name: "giants",
  championships: 8,
  seasons: 134,
  logo: "http://bakerstadvertising.com/wp-content/uploads/2016/10/SFGiantstemplate-2.png",
  champp: function() {
    return this.championships / this.seasons
  }
}


var pirates = {
  name: "pirates",
  championships: 5,
  seasons: 135,
  logo: "http://vector.me/files/images/7/4/74451/pittsburgh_pirates.png",
  champp: function() {
    return this.championships / this.seasons
  }
}

var nationals = {
  name: "nationals",
  championships: 0,
  seasons: 47,
  logo: "https://s3-us-west-2.amazonaws.com/scorestream-team-profile-pictures/teamPic11763-13586-jiwwmg.png",
  champp: function() {
    return this.championships / this.seasons
  }
}

var reds = {
  name: "reds",
  championships: 5,
  seasons: 127,
  logo: "https://seeklogo.com/images/C/cincinnati-reds-logo-EB78B84501-seeklogo.com.png",
  champp: function() {
    return this.championships / this.seasons
  }
}

var brewers = {
  name: "brewers",
  championships: 0,
  seasons: 47,
  logo: "http://2.bp.blogspot.com/-8fkSjTX7Mb0/UZP3aBHLkAI/AAAAAAAAPts/Zcvn8Vk5WoE/s1600/Milwaukee_Brewers_Alternate_Logo.svg.png",
  champp: function() {
    return this.championships / this.seasons
  }
}

var marlins = {
  name: "marlins",
  championships: 2,
  seasons: 24,
  logo: "https://www.printyourbrackets.com/mlb-logos/miami-marlins-logo.png",
  champp: function() {
    return this.championships / this.seasons
  }
}


var padres = {
  name: "padres",
  championships: 0,
  seasons: 48,
  logo: "http://cdn.bleacherreport.net/images/team_logos/328x328/san_diego_padres.png",
  champp: function() {
    return this.championships / this.seasons
  }
}

var rockies = {
  name: "rockies",
  championships: 0,
  seasons: 24,
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Colorado_Rockies_logo.svg/1200px-Colorado_Rockies_logo.svg.png",
  champp: function() {
    return this.championships / this.seasons
  }
}

var diamondbacks = {
  name: "d-backs",
  championships: 1,
  seasons: 19,
  logo: "http://www.grayflannelsuit.net/blog/wp-content/uploads/2012/02/arizona-diamondbacks-alternate-logo-2007.gif",
  champp: function() {
    return this.championships / this.seasons
  }
}


var mets = {
  name: "mets",
  championships: 2,
  seasons: 56,
  logo: "https://s3-us-west-2.amazonaws.com/scorestream-team-profile-pictures/teamPic11774-881-3gxs5d.png",
  champp: function() {
    return this.championships / this.seasons
  }
}

var phillies = {
  name:"phillies",
  championships: 2,
  seasons: 131,
  logo:"http://upload.wikimedia.org/wikipedia/en/thumb/8/84/Philadelphia_Phillies.svg/1200px-Philadelphia_Phillies.svg.png",
  champp: function() {
    return this.championships / this.seasons
    }

  }

console.log(yankees.champp()), (orioles.champp()), (redsox.champp())

//The constructor function, create a method that multiplies two numbers and returns the product.
function Team(name, championships, seasons, logo, champp) {
  this.name = name;
  this.logo = logo;
  this.championships = championships;
  this.seasons = seasons;
  this.champp = function() {
    return this.championships / this.seasons;
  };
}

//Add each constructor object to an array.
var teamsArray = [yankees, orioles, redsox, bluejays, rays, indians, twins, tigers, royals, whitesox, rangers, angels, astros, athletics, mariners, cubs, dodgers, cardinals, giants, pirates, nationals, reds, brewers, marlins, padres, rockies, diamondbacks, mets, phillies];

//Loop through the array of objects
for (var i = 0; i < teamsArray.length; i++){
   // for each one create an element to add the content to (one needs to be an image element).
   var newDiv = document.createElement("div");
   newDiv.className="newDiv";
   var newH2 = document.createElement("h2");
   var newLogo = document.createElement("img");
   var newSeasons = document.createElement("li");
   var newChampionships = document.createElement("li");
   var newChampp = document.createElement("li");
   console.log(newDiv, newH2, newLogo, newSeasons, newChampionships, newChampp);

//Still in the loop, create text nodes for each piece of content
    var newH2Text = document.createTextNode(teamsArray[i].name);
    // var newLogoText = document.createTextNode(teamsArray[i].logo);
    var newSeasonsText = document.createTextNode("Seasons:  " + teamsArray[i].seasons);
    var newChampionshipsText = document.createTextNode("Championships:  " + teamsArray[i].championships);
    var newChamppText = document.createTextNode("CWP:  " + Math.round(teamsArray[i].champp()*25)/25 + "%");
    console.log(newH2Text, newSeasonsText, newChampionshipsText, newChampp);



  //add to elements created
  newH2.appendChild(newH2Text);
  // newLogo.src(teamsArray[i].logo);
  newSeasons.appendChild(newSeasonsText);
  newChampionships.appendChild(newChampionshipsText);
  newChampp.appendChild(newChamppText);

  //Still in the loop, update the source and alt attributes of the image
    newLogo.src = teamsArray[i].logo;
    newLogo.alt = teamsArray.name + "   " + teamsArray[i].championships;

//Add the elements to the HTML so a user can view them.
    newDiv.appendChild(newH2);
    newDiv.appendChild(newLogo);
    newDiv.appendChild(newSeasons);
    newDiv.appendChild(newChampionships);
    newDiv.appendChild(newChampp);

    document.getElementById("display").appendChild(newDiv)
  }
