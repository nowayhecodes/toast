import { Toast } from '../lib/index';

describe('Toast suite', () => {
  it('should respond with a list of posts', (done) => {
    const result = Toast.get('https://jsonplaceholder.typicode.com/posts');
    console.log(result);
    done();
  });
});
