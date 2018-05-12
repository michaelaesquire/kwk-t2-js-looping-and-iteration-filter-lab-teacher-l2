// Code your solution in this file

function inside(drivers) {
  return drivers > 10;
}


function findMatching(drivers, match) {
  let matchyBois = drivers.filter(inside(drivers) );
  return matchyBois;
}
