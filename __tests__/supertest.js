const request = require('supertest');
const path = require('path');

const server = 'http://localhost:3000';

// require app to test
// const app = require('../server/app.js');
//const request = supertest(app);


/**
 * Read the docs! https://www.npmjs.com/package/supertest
 */
describe('Route integration', () => {


  describe("Test example", () => {
    test("GET /", (done) => {
      return request(server)
        .get("/signup")
        .then((result) => {
          console.log('ST RESULT:', result.status);
          expect(result.status).toBe(200);
          console.log('')
        })
        // .expect('Content-Type', /text\/html/)
        // .expect(200)
        // More logic goes here
    });
    // More things come here
  });

  it('gets the test endpoint', () => {
    return request(server)
    .get('/signup')
    .expect('Content-Type', /application\/json/)
    .expect(200);
  })

  // it('post request to signup & get a 200 responce', () => {
  //   return request(server)
  //     .get('/signup')
  //     .expect('Content-Type', /application\/json/)
  //     .expect(200);
  // });



  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', async () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });

  describe('Testing Signup Route', () => {
    
    // test user
    const testUser = [
      {
        username: 'testuser',
        pasword: 'password123',
        email: 'test@jest.com'
      }
    ];

    // anything we want to happen before each test should go here
    beforeEach(() => {
      console.log('a new test is about to start...');
    });


    it('post request to signup & get a 200 responce', () => {
      return request(server)
        .get('/signup')
        .expect('Content-Type', /application\/json/)
        .expect(200);
    });

    it('post signup with missing data is rejected', () => {
      // writeTestFile(testMarkets);
      // return request(server)
      //   .get('/markets')
      //   .then((res) => {
      //     expect(res.body).toEqual(testMarkets);
      //   });
    });

    it('post signup with correct data gets makes a new user', () => {
      // writeTestFile(testMarkets);
      // return request(server)
      //   .get('/markets')
      //   .then((res) => {
      //     expect(res.body).toEqual(testMarkets);
      //   });
    });

    it('newly created user exists in database', () => {
      // writeTestFile(testMarkets);
      // return request(server)
      //   .get('/markets')
      //   .then((res) => {
      //     expect(res.body).toEqual(testMarkets);
      //   });
    });

    it('post with duplicate username returns an already taken message', () => {
      // writeTestFile(testMarkets);
      // return request(server)
      //   .get('/markets')
      //   .then((res) => {
      //     expect(res.body).toEqual(testMarkets);
      //   });
    });

    // CLEANUO

    // delete the created user


    // describe('PUT', () => {
    //   it('responds with 200 status and application/json content type', () => {
    //     return request(server)
    //       .put('/markets')
    //       .send(testMarkets)
    //       .expect('Content-Type', /application\/json/)
    //       .expect(200);
    //   });

    //   it('responds with the updated market list', () => {
    //     return request(server)
    //       .put('/markets')
    //       .send(testMarkets)
    //       .then((res) => {
    //         expect(res.body).toEqual(testMarkets);
    //       });
    //   });

    //   it('responds to invalid request with 400 status and error message in body', () => {
    //     return request(server)
    //       .put('/markets')
    //       .send('this should break')
    //       .expect(400)
    //       .then((res) => {
    //         console.log('RES BODY:', res.body);
    //         expect(res.body.error).not.toEqual(undefined);
    //       });
    //   });
    // });
  });



  /*
  describe('Testing Login Route', () => {
      // test user
      const testUser = [
        {
          username: 'testuser',
          pasword: 'password123',
          email: 'test@jest.com'
        }
      ];

      // anything we want to happen before each test should go here
      beforeEach(() => {
        console.log('a new test is about to start...');
      });


    // TEST GET CALLS
    describe('GET', () => {  

        it('getting to login endpoint gets a 200 responce', () => {
        //   return request(server)
        //     .get('/signup')
        //     .expect('Content-Type', /application\/json/)
        //     .expect(200);
        // });
      });
    });

    describe('PUT', () => {
      it('posting to login with missing data retuns an error', () => {
        // return request(server)
        //   .put('/markets')
        //   .send(testMarkets)
        //   .expect('Content-Type', /application\/json/)
        //   .expect(200);
      });

      it('posting to login with a wrong username / pw gets an error', () => {
        // return request(server)
        //   .put('/markets')
        //   .send(testMarkets)
        //   .then((res) => {
        //     expect(res.body).toEqual(testMarkets);
        //   });
      });

      it('posting to login with good username / pass returns a successful login', () => {
        // return request(server)
        //   .put('/markets')
        //   .send('this should break')
        //   .expect(400)
        //   .then((res) => {
        //     console.log('RES BODY:', res.body);
        //     expect(res.body.error).not.toEqual(undefined);
        //   });
      });
    });

  });
  */


});
