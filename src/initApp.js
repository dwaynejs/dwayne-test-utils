import { initApp as init, removeApp } from 'dwayne';

export function initApp(block, container) {
  let times = 0;

  return () => {
    if (++times === 1) {
      global.$app = init(block, container);
      global.$container = container;
    } else if (times === 2) {
      global.$app = null;
      global.$container = null;

      removeApp(container);
    }
  };
}
