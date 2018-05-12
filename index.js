// Code your solution in this file

/*function inside(drivers,match) {
  return drivers === match;
}*/


function findMatching(drivers, match) {
  let matchyBois = drivers.filter(function(matches) {
    return matches === match;
  } );
  return matchyBois;
}
