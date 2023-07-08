const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs');

const app = express();
const PORT = 4000;

const getUserInfo = async nickname => {
  try {
    return await axios.get(`https://maplestory.nexon.com/N23Ranking/World/Total?c=${nickname}`);
  } catch (error) {
    console.error(error);
  }
};

app.get('/', async (req, res) => {
  fs.readFile('./data/members.json', 'utf8', async (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error: cannot read JSON file');
      return;
    }

    try {
      const members = JSON.parse(data);
      let result = [];

      for (const [streamer, nickname] of Object.entries(members)) {
        await getUserInfo(nickname).then(res => {
          const $ = cheerio.load(res.data);
          const avatar = $('.search_com_chk > .left > .char_img > img').attr('src');
          const server = $('.search_com_chk > .left > dl > dt > a > img').attr('src');
          const job = $('.search_com_chk > .left > dl > dd').text();
          const level = $('.search_com_chk > td:eq(2)').text();
          const exp = $('.search_com_chk > td:eq(3)').text();
          const guild = $('.search_com_chk > td:eq(5)').text();
          const vote = $('.search_com_chk > td:eq(4)').text();

          result.push({
            streamer: streamer,
            nickname: nickname,
            avatar,
            server,
            job,
            level,
            exp,
            guild,
            vote,
          });
        });
      }

      const jsonData = JSON.stringify(result, null, 2);

      fs.writeFile('./data/data.json', jsonData, 'utf8', err => {
        if (err) {
          console.error(err);
          res.status(500).send('Error: cannot write JSON file');
        } else {
          res.send('Member search complete!');
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error: cannot parse JSON file');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
