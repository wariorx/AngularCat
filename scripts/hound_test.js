console.log("imported");
// Instantiate the Bloodhound suggestion engine
var persons = new Bloodhound({
    datumTokenizer: function (datum) {
    return Bloodhound.tokenizers.whitespace(datum.value);
  },
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  remote: {
    wildcard: '%QUERY',
      url: window.location.protocol + "//" + window.location.host + '/Home/PersonQuery?query=%QUERY',
      transform: function (response) {
          console.log("EXECUTING");
      // Map the remote source JSON array to a JavaScript object array
          return $.map(response,
            function (person) {
                return {
                  fName: person.fName,
                  lName: person.lName,
                  id: person.id
                };
      });
    }
  }
});

// Instantiate the Typeahead UI
$('.typeahead').typeahead(null, {
  hint: true,
  highlight: true,
  displayKey: 'fName',
  source: persons,
    templates: {
        header: [
            '<div class="list-group search-results-dropdown">'
        ], 
        suggestion: function (person) {
            return '<div><b>ID:</b> ' + person.id + ' <b>fName:</b> ' + person.fName + ' <b>lName:</b> ' + person.lName + '</div>';
        }
    }
});

//maybe?
//$('.typeahead').focus() = persons;
console.log("reached end ");

console.log($('.typeahead'));

$('.typeahead').focusout(function () {
    console.log(persons);
});
