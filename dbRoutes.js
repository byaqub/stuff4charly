const mongoose = require('mongoose');
const Story = mongoose.model('stories');
const TestObject = mongoose.model('testObjects');

const objectDummy = {
  key1: 'value',
  key2:
    {
      key2key1: 'value',
      key2key2: 'value'
    },
  key3: 3
}

module.exports = (app) => {
  app.get('/test/object', async (req, res) => {
    const object = await new TestObject({ ...objectDummy }).save(err => console.log(err));
    res.redirect('/lawl');
  })

app.get('/lawl', (req,res) => {
  res.send('saved an object, hopefully');
})

  app.get('/test/:title', async (req, res) => {
    const story = await new Story({
      title: req.params.title
    }).save();
    res.redirect('/');
  });

}