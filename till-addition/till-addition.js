// Please do not change the name of this function
function tillAddition (cash) {
  const denominations = {
    '1p': 0.01,
    '2p': 0.02,
    '5p': 0.05,
    '10p': 0.10,
    '20p': 0.20,
    '50p': 0.50,
    '£1': 1.00,
    '£2': 2.0,
    '£5': 5.00,
    '£10': 10.00,
    '£20': 20.00,
    '£50': 50.00,

  }
  const cashTotal = Object.entries(cash).reduce((acc, [denomination, count])=> {
    if (denominations.hasOwnProperty(denomination)) {
      acc += denominations[denomination] * count;
    }
    return acc;
  }, 0 )
  if (cashTotal === 0) {
    return 'you got no moneys'
  }
  return `£${cashTotal}`
};


module.exports = tillAddition;
