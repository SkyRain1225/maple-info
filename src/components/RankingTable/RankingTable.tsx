import React, { useEffect, useState } from 'react';

import * as S from './RankingTable.styled';

export interface RankingTableProps {
  number: number;
  streamer: string;
  nickname: string;
  avatar: string;
  server: string;
  job: string;
  level: string;
  exp: string;
  guild: string;
  vote: string;
  expinfo: any;
}

const RankingTable = ({
  number,
  streamer,
  nickname,
  avatar,
  server,
  job,
  level,
  exp,
  guild,
  vote,
  expinfo,
}: RankingTableProps) => {
  const [expPercentage, setExpPercentage] = useState();

  useEffect(() => {
    if (level && expinfo) {
      const levels = parseInt(level.replace('Lv.', ''));
      const expResult = expinfo[levels].replace(/,/g, '');
      setExpPercentage(expResult);
    }
  }, [level, expinfo]);

  return (
    <S.Container>
      <div className="ranking_number">{number}</div>
      <div className="left_info">
        <div className="user_avatar">
          <img className="avatar_img" src={avatar} alt="캐릭터 BG" />
        </div>

        <div className="user_info">
          <div className="streamer">{streamer}</div>
          <div className="user_nickname">
            <img className="user_server" src={server} alt="캐릭터 BG" />
            {nickname}
          </div>
          <div>{job}</div>
        </div>
      </div>
      <div>{level}</div>
      <div className="user_exp">
        ({((parseInt(exp) / parseInt(expPercentage!)) * 100).toFixed(2)}%)
      </div>
      <div>{vote}</div>
      <div>{guild}</div>
    </S.Container>
  );
};

export default RankingTable;
