import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const isLoggedIn = (cookie?: { accessToken }): boolean => {
  if (cookie) {
    const { accessToken } = cookie;
    return !!accessToken;
  }
  return !!cookies.get('accessToken');
};

export const createRandomName = () => {
  return (
    adj[Math.floor(Math.random() * adj.length)] +
    ' ' +
    noun[Math.floor(Math.random() * noun.length)] +
    (Math.random() * 1000).toFixed(0)
  );
};

const adj = [
  '행복한',
  '굵은',
  '굶은',
  '배고픈',
  '비싼',
  '혼자신난',
  '존예보스',
  '혼자잘노는',
  '탐스러운',
  '치킨먹는',
  '화려한',
  '상큼한',
  '못생긴',
  '잘생긴',
  '멍청한',
  '사랑받는',
  '쭉쭉빵빵',
  '가성비충',
  '마당을 떠난',
  '대단한',
  '귀여운',
  '말썽쟁이',
  '롯데리아',
  '장염걸린',
  '영롱한',
  '반짝반짝',
  '호불호 없는',
  '반짝반짝',
  '응큼한',
  '발 안 씻는',
  '케찹도둑',
  '레전드',
  '구수한',
  '빛나는',
  '예의없는',
  '손버릇 나쁜',
  '돈 많은',
  '파산한',
  '진짜',
  '폭주하는',
  '흥분한',
  '알콜중독',
  '약쟁이',
  '인사하는',
  '활활타는',
  '튼튼한',
  '말랑한',
  '공격적인',
  '탈주하는',
  '이상한',
];
const noun = [
  '암탉',
  '타조',
  '불곰',
  '사자',
  '병뚜껑',
  '고양이',
  '강아지',
  '고래',
  '젓가락',
  '대머리',
  '설거지',
  '모기',
  '라떼',
  '돈가스',
  '스윙칩',
  '이슬람인',
  '힌두인',
  '유인원',
  '우유',
  '시럽',
  '딸기',
  '망치',
  '포크레인',
  '주걱',
  '포도',
  '사과',
  '멍멍이',
  '호랑이',
  '머저리',
  '과부',
  '포카칩',
  '치토스',
  '아이스크림',
  '타미',
  '준수',
  '수민',
  '현커',
  '해원',
  '선비',
  '곰방대',
  '지게차',
  '사슴벌레',
  '풍뎅이',
  '부먹충',
  '마법사',
  '만수르',
  '콧물',
  '장발장',
  '기차',
  '조랑말',
];