describe("Purchase", function() {
  describe("create", function() {
    it("creates a new instance of Purchase", function() {
      var testPurchase = Purchase.create();
      Purchase.isPrototypeOf(testPurchase).should.equal(true); 
    });
    it("initializes the purchase", function() {
      var testPurchase = Purchase.create("corvette", "100000");
      testPurchase.item.should.equal("corvette");
      testPurchase.cost.should.equal("100000");
    });
  });
});

describe("Category", function() {
  describe("create", function() {
    it("creates an instance of Category", function() {
      var testCategory = Category.create();
      Category.isPrototypeOf(testCategory).should.equal(true);
    });
    it("initializes the category", function() {
      var testCategory = Category.create("cars");
      testCategory.cat.should.equal("cars");
    });
  });
});
