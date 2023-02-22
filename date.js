exports.getDate = function() {
  const
    today = new Date(),
    options = {
      weekday: "long",
      day: "numeric",
      month: "long"
    };
  return today.toLocaleDateString( "es-ES", options );
};

exports.getDay = function() {
  const
    today = new Date(),
    options = {
      weekday: "long",
    };
  return today.toLocaleDateString( "es-CL", options );
};
