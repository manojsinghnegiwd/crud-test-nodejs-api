const expect = require('chai').expect;
const request = require('request');

describe('User API', () => {
  describe('CREATE USER', () => {
    describe('Create user validation ERROR', () => {
      describe('Create user missing field', () => {
        const payload = {
          firstName: "",
          lastName: "Doe",
          email: "johndoe@recraftrelic.com",
          password: "johndoe",
          employeeNo: "213"
        }
  
        it('Status', done => {
          request.post('http://localhost:3000/user', {
            json: payload
          }, (_, response) => {
            expect(response.statusCode).to.equal(400)
            done()
          })
        })
  
        it('Message', done => {
          request.post('http://localhost:3000/user', {
            json: payload
          }, (_, response) => {
            expect(response.body.errors.firstName[0]).to.equal('First Name is required')
            done()
          })
        })
      })

      describe('Create user invalid email field', () => {
        const payload = {
          firstName: "",
          lastName: "Doe",
          email: "johndoe",
          password: "johndoe",
          employeeNo: "213"
        }
  
        it('Status', done => {
          request.post('http://localhost:3000/user', {
            json: payload
          }, (_, response) => {
            expect(response.statusCode).to.equal(400)
            done()
          })
        })
  
        it('Message', done => {
          request.post('http://localhost:3000/user', {
            json: payload
          }, (_, response) => {
            expect(response.body.errors.email[0]).to.equal('Email is invalid')
            done()
          })
        })
      })
    })

    it('Create user SUCCESS', done => {
      request.post('http://localhost:3000/user', {
        json: {
          firstName: "John",
          lastName: "Doe",
          email: "johndoe@recraftrelic.com",
          password: "johndoe",
          employeeNo: "213"
        }
      }, (_, response) => {
        expect(response.statusCode).to.equal(200)
        done()
      })
    })
  })
})