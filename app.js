const
  express = require( "express" ),
  bodyParser = require( "body-parser" ),
  date = require( __dirname + "/date.js" ),
  app = express(),

  items = [ "Desayunar", "Lavarse los dientes" ];

app.set( "view engine", "ejs" );
app.use( bodyParser.urlencoded( { extended: true }));
app.use( express.static( "public" ));

app.get( "/", function( req, res ){
  let
    day = date.getDate();
  res.render( "lists", { listTitle: day, itemList: items });
});

app.post( "/", function( req, res ){
  let
    item = req.body.newItem;

  items.push(item);
  res.redirect( "/" );
});

app.get( "/about", function( req, res ){
  res.render( "about" );
})

app.listen( 3000, function(){
  console.log( "Server started on port 3000." );
});
