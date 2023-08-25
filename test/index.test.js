const app = require('../app');
const User = require('../models/User');
const request = require('supertest');

describe('POST /add-user', () => {
  afterEach(() => {
    jest.restoreAllMocks(); // Restores all mocks after each test
  });

  it('should return "User already exists" when trying to create an existing user', async () => {
    const mocker = jest.spyOn(User, 'findOne');
    mocker.mockReturnValue({ username: 'existingUser', password: 'existingUser' });

    let res = await request(app).post('/add-user').send({
      username: 'existingUser',
      password: 'existingUser',
    });

    expect(mocker).toHaveBeenCalled();
    expect(res.status).toBe(200);
    expect(res.text).toBe('User already exists');
  });
  
});