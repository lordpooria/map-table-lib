const data = require("./packages/map/stories/data2.json");

const init = new Date().getTime();

// const mergedData = data[0].features.reduce((acc, cur) => {
//   if (cur.properties.time in acc) {
//     acc[cur.properties.time].features.push(cur);
//     return acc;
//   }

//   return {
//     ...acc,
//     [cur.properties.time]: { time: cur.properties.time, features: [cur] },
//   };
// }, {});

// const sorted = Object.values(mergedData).sort((a, b) =>
//   a.time > b.time ? 1 : -1
// );

const mergedData = data[0].features.reduce((acc, cur) => {
  if (cur.properties.time) {
    if (cur.properties.time in acc) {
      acc[cur.properties.time].features.push(cur);
      return acc;
    }

    return {
      ...acc,
      [cur.properties.time]: {
        time: cur.properties.time,
        features: [cur],
      },
    };
  }
  return acc;
}, {});

const formattedData = Object.values(mergedData).sort((a, b) =>
  a.time > b.time ? 1 : -1
);

var fs = require("fs");
fs.writeFile("test.json", JSON.stringify(formattedData), function (err) {
  if (err) {
    console.log(err);
  }
});
