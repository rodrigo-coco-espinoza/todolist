const
  express = require( "express" ),
  bodyParser = require( "body-parser" ),
  app = express();

app.set( "view engine", "ejs" );

app.get( "/", function( req, res ){
  var
    today = new Date(),
    day = "";

  switch ( today.getDay() ) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      console.log(" Error: current day is equal to " + today.getDate() );
    }

  res.render( "lists", { kinfOfDay: day });
});

app.listen( 3000, function(){
  console.log("Server started on port 3000.");
});
