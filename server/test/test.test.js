import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index.js';

let should = chai.should();
chai.use(chaiHttp);

describe('Users', () => {
	let agent = chai.request.agent(app)

	describe('/POST /login', () => {
    	it('it should POST a user with name and password', (done) => {
			agent
    		    .post('/login')
    			.send({ email: 'kucukyildizbatuhan@gmail.com', password: '123'  })
    			.end((err, res) => {
    				res.should.have.status(200);
    				res.body.should.be.a('object');
    				res.body.should.have.property('type');
    				res.body.should.have.property('message');
    				res.body.type.should.be.eql(true);
    				done();
    			});
    		});
    	});
});