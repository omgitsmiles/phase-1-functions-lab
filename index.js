// Code your solution in this file!
function distanceFromHqInBlocks(value) {
    const hq = 42;
    return Math.abs(value - hq);
}

function distanceFromHqInFeet(value) {
   return distanceFromHqInBlocks(value) * 264 ;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
  }

  function calculatesFarePrice(start, destination) {
     let fare = Math.abs(start - destination) * 264;
     if (fare <= 400) {
        return 0;
     } else if (fare > 400 && fare < 2000) {
        let discount  = fare - 400;
        return discount * .02
     } else if (fare > 2000 && fare < 2499) {
        return fare = 25
     } else if (fare > 2500) {
        return 'cannot travel that far'
     }
  }

  /*  if (value <= 400) {
    return 'This one is on me!';
  } else if (value > 400 && value < 2000) {
    return 'That will be twenty bucks.';
  } else if (value > 2000 && value < 2499) {
    return 'I will gladly take your thirty bucks.'
  } else if (value > 2500) {
    return 'No can do.'
  }
}*/