const express = require('express');
const app = express();
const port = process.env.PORT || 80;

app.get('/', (req,res)=>{
  res.send('App is running in docker container...');
});

app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});