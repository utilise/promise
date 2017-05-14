var expect = require('chai').expect
  , promise = require('./')

describe('promise', function() {
  
  it('should create promise', function() {
    var p = promise()
    expect(p instanceof Promise).to.eql(true)
  })

  it('should resolve promise with args', function(done) {
    var fn = function(d){ result = d }
      , p = promise()
      , result

    p.then(fn)
    p.resolve('foo')

    setTimeout(function(){ expect(result).to.eql('foo') }, 10)
    setTimeout(done, 20)
  })

  it('should reject promise with args', function(done) {
    var fn = function(d){ result = d }
      , p = promise()
      , result

    p.catch(fn)
    p.reject('baz')

    setTimeout(function(){ expect(result).to.eql('baz') }, 10)
    setTimeout(done, 20)
  })

  it('should resolve promise with value', function(done) {
    var fn = function(d){ result = d }
      , p = promise('foo')
      , result

    p.then(fn)

    setTimeout(function(){ expect(result).to.eql('foo') }, 10)
    setTimeout(done, 20)
  })

})