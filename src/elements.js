import { JSDOM } from 'jsdom';
import { Elem } from 'dwayne';

const HTML = '<html><head></head><body></body></html>';

const { document } = new JSDOM(HTML).window;

const doc = new Elem(document);
const html = new Elem(document.documentElement);
const head = new Elem(document.head);
const body = new Elem(document.body);

export { doc, html, head, body };
