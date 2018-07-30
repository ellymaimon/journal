import { Entry } from './journal';
import './styles.css';

$(document).ready(function() {
  $("#journal-form").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    var entry = new Entry(title, body);
    var entryLength = entry.entryLength();
    var vowelAmount = entry.vowels();
    var consontantAmount = entry.consonants();
    $("#results").text("Amount of Words: " + entryLength);
    $("#amountOfVowels").text("Amount of Vowels: " + vowelAmount);
    $("#amountOfConsonants").text("Amount of Consonants: " + consontantAmount);
  });
});
