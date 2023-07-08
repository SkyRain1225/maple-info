import React from 'react';

import * as S from './RankingHeader.styled';

const RankingHeader = () => {
  return (
    <S.Container>
      <div>순위</div>
      <div>캐릭터 정보</div>
      <div>레벨</div>
      <div>경험치</div>
      <div>인기도</div>
      <div>길드</div>
    </S.Container>
  );
};

export default RankingHeader;
