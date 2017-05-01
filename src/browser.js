import { initApp as init } from './initApp';
import { doc } from 'dwayne';

export { doc, html, body, head } from 'dwayne';
export * from './deferTest';

export function initApp(block) {
  return init(block, doc.create('div'));
}
