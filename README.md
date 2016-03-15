# chartDemo

Create a bar graph by using Angular directive

```html
<bar-chart user-data="userData" id="barChart1" width="600" height="400" label-y="Y label" label-x="Label x"></bar-chart>
```

Options are
```html
labelX: "string",
labelY: "string",
width: "integer",
height: "integer",
id: "string",
userData: "JSON object",
barColor: "hex colour eg #333",
highlightColor: "hex colour eg #333",
showAxisValues: "true/false, defaults to false"
```

```javascript
var userData = '[{"name": "Data 1","value": 1},{"name": "Data 2","value": 2},{"name": "Data 3","value": 3},{"name": "Data 4","value": 4}]';
```
