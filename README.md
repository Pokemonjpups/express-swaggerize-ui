This is a fork so I can remove some of the styling and hopefully add some new features.

### express-swaggerize-ui
express-swaggerize-ui is an node express middleware to show swagger-ui 3 for your local (or external) api.

#### Installation

```
npm install --save express-swaggerize-ui
```

#### Usage

```
const express   = require('express');
const app       = express();
const swaggerUi = require('express-swaggerize-ui');

app.use('/docs.json', function (req, res) {
  res.json(require('./path/to/swaggerize/docs.json'));
});
app.use('/docs', swaggerUi());

app.listen(3000);

```

#### Generate swagger doc.json

[express-swagger-generator](https://github.com/pgroot/express-swagger-generator)
