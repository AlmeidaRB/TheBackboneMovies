// testing IMDB collection

describe("Movie Collection", function () {
  beforeEach(function () {
    this.movieCollection = new MovieCollection();
    // this.movieStub = sinon.stub(this.movieCollection, 'save');
  });
  it("should be an instance of MovieModel Class", function () {
    expect(this.movieCollection).is.instanceof(MovieCollection);
  });
  it("should have correct url", function () {
    expect(this.movieCollection.url).to.be.ok;
    expect(this.movieCollection.url).to.be.equal("http://tiy-fee-rest.herokuapp.com/collections/rachflicks2");
  });
});
