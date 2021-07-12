const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/details', (req, res) => {
    res.send(
        [
            {
                'id' :1,
                'image': 'https://placeimg.com/64/64/1',
                'name'  : '강윤묵 / 화정신문',
                'title': '테스트',
                'content': '테스트입니다',
                'date': '2021-07-09'
              },
              {
                'id' :2,
                'image': 'https://placeimg.com/64/64/2',
                'name'  : '김윤수 / 대구신문',
                'title': '테스트2', 
                'content': '테스트2입니다',
                'date': '2021-07-09'
              },
              {
                'id' :3,
                'image': 'https://placeimg.com/64/64/3',
                'name'  : '김재백 / 대구신문',
                'title': '테스트3',
                'content': '테스트3입니다',
                'date': '2021-07-09'
              }
        ]
    );
})
app.listen(port, () => console.log(`Listening on port ${port}`));