const imagemin = require('imagemin');
const imageminGifsicle = require('imagemin-gifsicle');
const fs = require('fs')

(function compress () {
  try {
    imagemin(
      ['./example.gif'],
      './',
      {
        use: [
          imageminGifsicle({
            optimizationLevel: 3,
          }),
        ],
      }
    ).then((files) => {
      const file = files[0];
      console.log(file.data.length);
      fs.writeFile('./example-min.gif', file.data, (err) => {
        if (err) {
          console.log(err);
        }
        console.log('The file has been saved!');
      });
    })
    .catch(e =>{
      console.log('promise error', e.stack);
    })
  } catch (e) {
    console.log(e.stack);
  }
})()

