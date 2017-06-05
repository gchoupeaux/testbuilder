/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.

var expect = chai.expect;
/*
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.

  it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
*/

describe('Diner\'s Club', function() {
  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
  };
  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });
  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  it('has a prefix of 4 and a length of 13', function() {
    expect(detectNetwork('4123456789012')).to.equal('Visa');
  });
  it('has a prefix of 4 and a length of 16', function() {
    expect(detectNetwork('4123456789012345')).to.equal('Visa');
  });
  it('has a prefix of 4 and a length of 19', function() {
    expect(detectNetwork('4123456789012345678')).to.equal('Visa');
  });

});

describe('MasterCard', function() {
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  });
});

describe('Discover', function() {

  //{name: 'Discover', prefixes: [6011,644,645,646,647,648,649,65], lenNum: [16,19]},
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011123456789012')).to.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011123456789012345')).to.equal('Discover');
  });
  it('has a prefix of 644 and a length of 16', function() {
    expect(detectNetwork('6441123456789012')).to.equal('Discover');
  });
  it('has a prefix of 644 and a length of 19', function() {
    expect(detectNetwork('6441123456789012345')).to.equal('Discover');
  });
  it('has a prefix of 645 and a length of 16', function() {
    expect(detectNetwork('6451123456789012')).to.equal('Discover');
  });
  it('has a prefix of 645 and a length of 19', function() {
    expect(detectNetwork('6451123456789012345')).to.equal('Discover');
  });
  it('has a prefix of 646 and a length of 16', function() {
    expect(detectNetwork('6461123456789012')).to.equal('Discover');
  });
  it('has a prefix of 646 and a length of 19', function() {
    expect(detectNetwork('6461123456789012345')).to.equal('Discover');
  });
  it('has a prefix of 647 and a length of 16', function() {
    expect(detectNetwork('6471123456789012')).to.equal('Discover');
  });
  it('has a prefix of 647 and a length of 19', function() {
    expect(detectNetwork('6471123456789012345')).to.equal('Discover');
  });
  it('has a prefix of 648 and a length of 16', function() {
    expect(detectNetwork('6481123456789012')).to.equal('Discover');
  });
  it('has a prefix of 648 and a length of 19', function() {
    expect(detectNetwork('6481123456789012345')).to.equal('Discover');
  });
  it('has a prefix of 649 and a length of 16', function() {
    expect(detectNetwork('6491123456789012')).to.equal('Discover');
  });
  it('has a prefix of 649 and a length of 19', function() {
    expect(detectNetwork('6491123456789012345')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6591123456789012')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6559112345678901234')).to.equal('Discover');
  });

});

describe('Maestro', function() {

  //{name: 'Maestro', prefixes: [5018,5020,5038,6304], lenNum: [12,13,14,15,16,17,18,19]},
  // Write full test coverage for the Maestro card
  it('has a prefix of 5018 and a length of 12', function() {
    expect(detectNetwork('501812345678')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 13', function() {
    expect(detectNetwork('5018123456783')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 14', function() {
    expect(detectNetwork('50181234567834')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 15', function() {
    expect(detectNetwork('501812345678345')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 16', function() {
    expect(detectNetwork('5018123456783456')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 17', function() {
    expect(detectNetwork('50181234567834567')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 18', function() {
    expect(detectNetwork('501812345678345678')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 19', function() {
    expect(detectNetwork('5018123456783456789')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 12', function() {
    expect(detectNetwork('502012345678')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 13', function() {
    expect(detectNetwork('5020123456783')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 14', function() {
    expect(detectNetwork('50201234567834')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 15', function() {
    expect(detectNetwork('502012345678345')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 16', function() {
    expect(detectNetwork('5020123456783456')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 17', function() {
    expect(detectNetwork('50201234567834567')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 18', function() {
    expect(detectNetwork('502012345678345678')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 19', function() {
    expect(detectNetwork('5020123456783456789')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 12', function() {
    expect(detectNetwork('503812345678')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 13', function() {
    expect(detectNetwork('5038123456783')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 14', function() {
    expect(detectNetwork('50381234567834')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 15', function() {
    expect(detectNetwork('503812345678345')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 16', function() {
    expect(detectNetwork('5038123456783456')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 17', function() {
    expect(detectNetwork('50381234567834567')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 18', function() {
    expect(detectNetwork('503812345678345678')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 19', function() {
    expect(detectNetwork('5038123456783456789')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 12', function() {
    expect(detectNetwork('630412345678')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 13', function() {
    expect(detectNetwork('6304123456783')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 14', function() {
    expect(detectNetwork('63041234567834')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 15', function() {
    expect(detectNetwork('630412345678345')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 16', function() {
    expect(detectNetwork('6304123456783456')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 17', function() {
    expect(detectNetwork('63041234567834567')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 18', function() {
    expect(detectNetwork('630412345678345678')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 19', function() {
    expect(detectNetwork('6304123456783456789')).to.equal('Maestro');
  });

});

describe('China UnionPay', function() {
  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  const prefixes = range(622126,622925).concat(range(624,626)).concat(range(6282,6288));
  const lens = range(16,19);
  let cardNumber = '';

  for (let len of lens){
    for (let prefix of prefixes){
      it(`has a prefix of ${prefix} and a length of ${len}`, function() {
        expect(detectNetwork(bluidCardNum(prefix,len))).to.equal('China UnionPay');
      });
    }
  }

});

describe('Switch', function() {
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  const prefixes = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];
  const lens = [16,18,19];

  for (let len of lens){
    for (let prefix of prefixes){
      it(`has a prefix of ${prefix} and a length of ${len}`, function() {
        expect(detectNetwork(bluidCardNum(prefix,len))).to.equal('Switch');
      });
    }
  }

});
