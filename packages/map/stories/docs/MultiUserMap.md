## Multi User Map

This is main component of hesaba-time-dimension with custom style added to it's component

This Component isn't difference from Basic Map but this example shows how data you provide change ui. Basic data has structure like this:

```
[
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "time": 1596231750000,
          "id": "9353506508",
          "color": "red"
        },
        "geometry": {
          "type": "GeometryCollection",
          "geometries": [
            {
              "type": "Point",
              "coordinates": [51.33673858642578, 35.76498031616211]
            },
            {
              "type": "LineString",
              "coordinates": [
                [51.33673858642578, 35.76498031616211],
                [51.33673858642578, 35.76498031616211],
                [51.33673858642578, 35.76498031616211],
                [51.33673858642578, 35.76498031616211],
                [51.33673858642578, 35.76498031616211],
                [51.33673858642578, 35.76498031616211],
                [51.33673858642578, 35.76498031616211],
                [51.33673858642578, 35.76498031616211],
                [51.33673858642578, 35.76498031616211],
                [51.33673858642578, 35.76498031616211],
                [51.33673858642578, 35.76498031616211],
                [51.33673858642578, 35.76498031616211],
                [51.33673858642578, 35.76498031616211],
                [51.33673858642578, 35.76498031616211],
                [51.33673858642578, 35.76498031616211]
              ]
            }
          ]
        }
        ....
  },
  ["9353506508"],
  { "9353506508": "red" }
]
```

As you see the latest part of this array shows array of user so if your data has multiple like this 
```js 
 { "9127002671": "red", "9353506508": "blue", "9195609526": "green" }
```
user your map looks like this: