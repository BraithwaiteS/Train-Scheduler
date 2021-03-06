
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDAwn_oTqn4ASrgpzYHUrIeshR1u44i50w",
    authDomain: "train-tracker-2583e.firebaseapp.com",
    databaseURL: "https://train-tracker-2583e.firebaseio.com",
    projectId: "train-tracker-2583e",
    storageBucket: "train-tracker-2583e.appspot.com",
    messagingSenderId: "950007138711"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
   
//   $("#submitbtn").on("click", function(event) {
    $(document).ready(function(){
        $("#submitbtn").click(function(){

    //       var currentTime = moment();
    // console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

          console.log("btn clicked")
          event.preventDefault();

      var trainName = $("#trainname").val().trim();
      var trainDestination = $("#destination").val().trim();
      var trainTime = $("#traintime").val().trim();
      var trainFrequency = $("#frequency").val().trim();

      var newTrain= {
          name: trainName,
          destination: trainDestination,
          time: trainTime,
          frequency: trainFrequency

      };

      database.ref().push(newTrain);

      console.log(newTrain.name);
      console.log(newTrain.destination);
      console.log(newTrain.time);
      console.log(newTrain.frequency);

      alert("New Train Added");

      $("#trainname").val("");
      $("#destination").val("");
      $("#traintime").val("");
      $("#frequency").val("");

      });

      var dt = new Date();
          var time = dt.getHours() + ":" + dt.getMinutes();
          // alert(time);

      database.ref().on("child_added", function(childSnapshot){
        console.log(childSnapshot.val());

        var trainName = childSnapshot.val().name;
        var trainDestination = childSnapshot.val().destination;
        var trainTime = childSnapshot.val().time;
        var trainFrequency = childSnapshot.val().frequency;

        console.log(trainName);
        console.log(trainDestination);
        console.log(trainTime);
        console.log(trainFrequency);

        var minsAway = time - trainTime;
      // alert(minsAway);
     

      var newRow= $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(trainDestination),
        $("<td>").text(trainTime),
        $("<td>").text(trainFrequency),
        $("<td>").text(minsAway)
      );

      $("#table1 > tbody").append(newRow);
      
  })
})
