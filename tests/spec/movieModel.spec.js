// testing IMDB model

describe("Movie Model", function () {
  beforeEach(function () {
    this.movieModel = new MovieListing();
    this.movieStub = sinon.stub(this.movieModel, 'save');
  });
  it("should be an instance of MovieModel Class", function () {
    expect(this.movieModel).is.instanceof(MovieListing);
  });
  it("should have correct urlRoot", function () {
    expect(this.movieModel.urlRoot).to.be.ok;
    expect(this.movieModel.urlRoot).to.be.equal("http://tiy-fee-rest.herokuapp.com/collections/rachflicks2");
  });
  it("should be able to add property to model", function () {
    expect(this.movieModel.attributes.title).to.not.be.ok;
    this.movieModel.set({title: "title9"});
    expect(this.movieModel.attributes.title).to.equal("title9");
  });
  it("should save my model when i call save", function () {
    this.movieModel.set({title: ''});
    this.movieModel.save();

    expect(this.movieStub).to.have.been.calledOnce;
    this.movieModel.set({synopsis: ''});
    this.movieModel.save();
    expect(this.movieStub).to.have.been.calledTwice;
  })

  it("should have a default photo", function () {
    expect(this.movieModel.attributes.poster).to.equal("http://placecage.com/200/200");
  })
});
