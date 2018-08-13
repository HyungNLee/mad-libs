$(document).ready(function() {

    $("#formOne").submit(function(event) {
      var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

      blanks.forEach(function(blank) {
        var userInput = $("input#" + blank).val();
        $("." + blank).text(userInput);
      });

      // var person1Input = $("input#person1").val();
      // var person2Input = $("input#person2").val();
      // var animalInput= $("input#animal").val();
      // var exclamationInput = $("input#exclamation").val();
      // var verbInput = $("input#verb").val();
      // var nounInput = $("input#noun").val();

      // $(".person1").text(person1Input);
      // $(".person2").text(person2Input);
      // $(".animal").text(animalInput);
      // $(".exclamation").text(exclamationInput);
      // $(".verb").text(verbInput);
      // $(".noun").text(nounInput);

    //   var length = person1Input.length;
    //
    // if (person1Input.length != 0 && person2Input.length != 0 &&
    //   animalInput.length != 0 && exclamationInput.length != 0 &&
    //   verbInput.length != 0 && nounInput.length != 0) {
    //   $("#errorMessage").hide();
    //   $("#story").show();
    // } else {
    //   $("#story").hide();
    //   $("#errorMessage").show();
    // }

    $("#story").show();

    event.preventDefault();
  });
});
