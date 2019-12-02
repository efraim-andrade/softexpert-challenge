import matchMediaPolyfill from 'mq-polyfill';
import { cleanup } from '@testing-library/react';

export default function windowResizeMock() {
  beforeAll(() => {
    matchMediaPolyfill(window);

    window.resizeTo = function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
      }).dispatchEvent(new this.Event('resize'));
    };
  });

  afterEach(cleanup);
}
