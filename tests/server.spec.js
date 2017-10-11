const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");

chai.use(chaiHttp);
const expect = chai.expect;

app.listen(8080);

describe("server.js", function() {
  this.timeout(5000);

  it("responds to /", done => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(err).not.exist;
        expect(res).to.have.status(200);
        done();
      });
  });

  it("Contains portfolio", done => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(JSON.stringify(res.text)).to.contain("Portfolio");
        done();
      });
  });
});
