function getSleepHours(day) {
  day = day.toLowerCase();

  switch (day) {
    case 'monday':
    return 8;
    case 'tuesday':
    return 8;
    case 'wednesday':
    return 8;
    case 'thursday':
    return 8;
    case 'friday':
    return 9;
    case 'saturday':
    return 8;
    case 'sunday':
    return 8;
    default:
    return 'Error: Invalid day entered';
  }
}

function getActualSleepHours() {
  return getSleepHours('Monday') +
  getSleepHours('Tuesday') +
  getSleepHours('Wednesday') +
  getSleepHours('Thursday') +
  getSleepHours('Friday') +
  getSleepHours('Saturday') +
  getSleepHours('Sunday');
}

function getIdealSleepHours() {
  const idealHours = 8;
  return idealHours * 7;
}

function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    const overSleep = actualSleepHours - idealSleepHours;
    console.log(`You got more sleep than needed - ${overSleep} hour(s) over your ideal.`);
  } else {
    const underSleep = idealSleepHours - actualSleepHours;
    console.log(`You should get some rest - you are ${underSleep} hour(s) under your ideal.`);
  }
}

calculateSleepDebt();