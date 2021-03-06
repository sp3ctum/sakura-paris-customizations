import { words } from "./frequency/frequency";
import * as page from "./utils/page";

function replaceWithExactLink(wordDiv) {
  // point to e.g.
  // https://sakura-paris.org/dict/広辞苑/exact/自動運動
  const text = wordDiv.querySelector(".word-title-text").textContent;
  const dict = page.currentDict().text;
  const word = words(text)?.[0];
  if (word) {
    const exact = page.wordLink(dict, word);
    wordDiv.querySelector(".word-permalink").href = exact;
  }
}

function fixLinks() {
  const links = page.wordDefinitionDivs();
  links.forEach((w) => replaceWithExactLink(w));
}

window.addEventListener("DOMNodeInserted", fixLinks);
window.addEventListener("load", fixLinks);
