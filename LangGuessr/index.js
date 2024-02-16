import {franc} from 'franc';
const langs = require('langs');
 
console.log(franc('Alle menslike wesens word vry'));

const langCode = franc('日本語であそぼ');

const langage = langs.where('3', langCode);

console.log(langage);