describe('Addresses', function(){
  it("creates a new address with the given specifications", function(){
    var testAddress = new Address("123 Main St", "Test City", "Test State");
    expect(testAddress.street).to.equal("123 Main St");
    expect(testAddress.city).to.equal("Test City");
    expect(testAddress.state).to.equal("Test State");
  });

  it("adds the fullAddress method to all addresses", function() {
     var testAddress = new Address("123 Main St", "Test City","Test State");
     expect(testAddress.fullAddress()).to.equal("123 Main St, Test City, Test State");
   });
});
