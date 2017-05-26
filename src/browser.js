import { initApp as init } from './initApp';
import { doc } from 'dwayne';

export { doc, html, body, head } from 'dwayne';
export * from './';

export function initApp(block) {
  return init(block, doc.create('div'));
}
