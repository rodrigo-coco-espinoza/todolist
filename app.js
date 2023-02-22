const
  express = require( "express" ),
  bodyParser = require( "body-parser" ),
  app = express();

let
  items = [ "Lavarse los dientes", "Desayunar" ];

app.set( "view engine", "ejs" );
app.use( bodyParser.urlencoded( { exteneded: true }));

app.get( "/", function( req, res ){
  let
    today = new Date(),
    options = {
      weekday: "long",
      day: "numeric",
      month: "long"
    },
    day = today.toLocaleDateString( "en-US", options );

  res.render( "lists", { kinfOfDay: day, itemList: items });
});

app.post( "/", function( req, res ){
  let
    item = req.body.newItem;

  items.push(item);
  res.redirect( "/" );
});

app.listen( 3000, function(){
  console.log( "Server started on port 3000." );
});
