const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 80;

app.use('/', express.static(path.join(__dirname, 'dist')));
app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});