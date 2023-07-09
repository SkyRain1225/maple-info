import React, { useEffect, useState } from 'react';

import { Footer, RankingHeader, RankingTable } from '~/components';

import * as S from './Main.styled';

interface IFetchData {
  streamer: string;
  nickname: string;
  avatar: string;
  server: string;
  job: string;
  level: string;
  exp: string;
  guild: string;
  vote: string;
}

const Main = () => {
  const [data, setData] = useState<IFetchData[]>([]);
  const [expinfo, setExpInfo] = useState();

  useEffect(() => {
    const fetchExp = async () => {
      try {
        const response = await fetch('../.././data/exp.json');
        const jsonData = await response.json();
        setExpInfo(jsonData);
      } catch (error) {
        console.error('Error: fetching exp failed');
      }
    };
    fetchExp();

    const fetchData = async () => {
      try {
        const response = await fetch('../.././data/data.json');
        const jsonData = await response.json();
        const sortedData = jsonData.sort((b: IFetchData, a: IFetchData) => {
          const levelA = parseInt(a.level.replace('Lv.', ''));
          const levelB = parseInt(b.level.replace('Lv.', ''));

          if (levelA === levelB) {
            const expA = parseInt(a.exp.replace(/,/g, ''));
            const expB = parseInt(b.exp.replace(/,/g, ''));
            return expA - expB;
          }

          return levelA - levelB;
        });

        setData(sortedData);
      } catch (error) {
        console.error('Error: fetching data failed');
      }
    };

    fetchData();
  }, []);

  return (
    <S.Container>
      <RankingHeader />

      {data.map((item, index) => (
        <RankingTable
          number={index + 1}
          key={item.nickname}
          streamer={item.streamer}
          nickname={item.nickname}
          avatar={item.avatar}
          server={item.server}
          job={item.job}
          level={item.level}
          exp={item.exp.replace(/,/g, '')}
          guild={item.guild}
          vote={item.vote}
          expinfo={expinfo}
        />
      ))}
      <Footer />
    </S.Container>
  );
};

export default Main;
