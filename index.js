// Code your solution in this file

/*function inside(drivers,match) {
  return drivers === match;
}*/


function findMatching(drivers, match) {
  let matchyBois = drivers.filter(function(matches) {
    let doubleCheck = match.toLowerCase();
    if (matches === match) {
        return matches === match;
    }
    else if (matches === doubleCheck) {
        return matches === doubleCheck;
    }
  } );
  return matchyBois;
}

function fuzzyMatch() {
  
}