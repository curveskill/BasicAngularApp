import { MakeJsonPipe } from './make-json.pipe';

describe('MakeJsonPipe', () => {
  it('create an instance', () => {
    const pipe = new MakeJsonPipe();
    expect(pipe).toBeTruthy();
  });
});
