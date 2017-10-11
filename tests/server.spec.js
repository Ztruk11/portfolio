const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");

chai.use(chaiHttp);
const expect = chai.expect;

app.listen(8080);

describe("server.js", function() {
  this.timeout(5000);

  it("responds to /", () => {
    return chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(err).not.exist;
        expect(res).to.have.status(200);
      });
  });

  it("Contains portfolio", () => {
    return chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(JSON.stringify(res.text)).to.contain("Portfolio");
      });
  });

});
    process.exit(0);