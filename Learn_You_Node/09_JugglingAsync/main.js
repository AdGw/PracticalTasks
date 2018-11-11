var bl = require("bl");
var http = require("http");
var count = 2;

function readURL(count) {
  http.get(
    process.argv[count],
    (callback = response => {
      response.pipe(
        bl((err, data) => {
          if (err) throw err;
          console.log(data.toString());
          readURL(count + 1);
        })
      );
    })
  );
}

readURL(count);
