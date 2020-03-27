const { app, port } = require('./app');

app.listen(port, () => {
  console.log(`O servidor backend está listado na porta ${port}`);
});
