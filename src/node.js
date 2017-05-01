import { doc } from './elements';
import { initApp as init } from './initApp';

export * from './elements';
export * from './deferTest';

export function initApp(block) {
  return init(block, doc.create('div'));
}
