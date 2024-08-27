export interface JobPostListData {
  id: string;
  busplaName: string;
  cntctNo: string;
  compAddr: string;
  empType: string;
  enterType: string;
  jobNm: string;
  offerregDt: string;
  regDt: string;
  regagnName: string;
  reqCareer: string;
  reqEduc: string;
  rno: string;
  rnum: string;
  salary: string;
  salaryType: string;
  termDate: string;
  reqMajor?: string;
  envBothHands: string;
  envEyesight: string;
  envLiftPower: string;
  envLstnTalk: string;
  envStndWalk: string;
  envHandwork: string;
  reqLicens?: string;
  latitude: number;
  longitude: number;
  area: string;
  startDate: string;
  endDate: string;
  searchRegion: string;
  searchJobCategory: string;
  searchEnvBothHands: string;
  searchEnvEyesight: string;
  searchEnvLiftPower: string;
  searchEnvLstnTalk: string;
  compLogoUrl: string;
  postId: number;
}

export interface EduPostListData {
  id: string;
  category: string;
  title: string;
  organization: string;
  date: string;
  content: string;
}

export interface MapSearchCriteria {
  searchRegion: string;
  searchJobCategory: string;
  empType: string;
  salaryType: string;
  searchEnvBothHands: string;
  searchEnvEyesight: string;
  searchEnvLiftPower: string;
}

export interface ListSearchCriteria {
  empType: string;
  enterType: string;
  searchRegion: string;
  searchJobCategory: string;
  searchEnvLstnTalk: string;
  searchEnvEyesight: string;
  searchEnvLiftPower: string;
  searchEnvBothHands: string;
}

export interface PostListColumn {
  id: string;
  label: string;
  width?: string;
  colAlign: "inherit" | "left" | "center" | "right" | "justify";
  rowAlign: "inherit" | "left" | "center" | "right" | "justify";
}

export const jobPostListColumns: PostListColumn[] = [
  {
    id: "busplaName",
    label: "사업장명",
    width: "180px",
    colAlign: "center",
    rowAlign: "center",
  },
  {
    id: "area",
    label: "사업장 주소",
    width: "200px",
    colAlign: "center",
    rowAlign: "center",
  },
  {
    id: "empType",
    label: "고용 형태",
    width: "90px",
    colAlign: "center",
    rowAlign: "center",
  },
  {
    id: "searchJobCategory",
    label: "모집 직종",
    width: "150px",
    colAlign: "center",
    rowAlign: "center",
  },
  {
    id: "salaryType",
    label: "임금 형태",
    width: "100px",
    colAlign: "center",
    rowAlign: "center",
  },
  {
    id: "searchEnvLstnTalk",
    label: "듣고 말하기",
    width: "110px",
    colAlign: "center",
    rowAlign: "center",
  },
  {
    id: "searchEnvEyesight",
    label: "시력",
    width: "80px",
    colAlign: "center",
    rowAlign: "center",
  },
  {
    id: "searchEnvLiftPower",
    label: "드는힘",
    width: "90px",
    colAlign: "center",
    rowAlign: "center",
  },
  {
    id: "searchEnvBothHands",
    label: "손작업",
    width: "90px",
    colAlign: "center",
    rowAlign: "center",
  },
  {
    id: "termDate",
    label: "모집 기간",
    width: "190px",
    colAlign: "center",
    rowAlign: "center",
  },
];

export const eduPostListColumns: PostListColumn[] = [
  {
    id: "category",
    label: "분류",
    width: "100px",
    colAlign: "center",
    rowAlign: "center",
  },
  {
    id: "title",
    label: "제목",
    width: "200px",
    colAlign: "center",
    rowAlign: "center",
  },
  {
    id: "organization",
    label: "등록기관",
    width: "200px",
    colAlign: "center",
    rowAlign: "center",
  },
  {
    id: "date",
    label: "등록일",
    width: "110px",
    colAlign: "center",
    rowAlign: "center",
  },
];

export const jobPostListSelectOptions = [
  {
    id: "empType",
    label: "고용 형태",
    values: ["무관", "계약직", "상용직", "시간제"],
  },
  {
    id: "enterType",
    label: "입사 형태",
    values: ["무관", "신입", "경력"],
  },
];

export const jobPostListSearchOptions = [
  {
    id: "searchRegion",
    label: "근무 위치",
    values: [
      "전체",
      "서울특별시",
      "경기도",
      "인천광역시",
      "강원도",
      "충청북도",
      "충청남도",
      "세종시",
      "대전광역시",
      "전라북도",
      "전라남도",
      "광주광역시",
      "경상북도",
      "경상남도",
      "부산광역시",
      "대구광역시",
      "울산광역시",
      "제주특별자치도",
    ],
  },
  {
    id: "searchJobCategory",
    label: "모집 직종",
    values: [
      "무관",
      "정리/청소원",
      "사무/사무보조",
      "단순종사",
      "주방/식품",
      "경비/관리",
      "요양보호/사회복지/의료",
      "마케팅/판매",
      "상담/서비스",
      "연구/검사",
      "운전/조작/제어/건설",
      "예술/디자인/공예",
      "교육",
    ],
  },
  {
    id: "searchEnvLstnTalk",
    label: "듣고 말하기",
    values: ["무관", "간단한 듣고 말하기", "어려움 없음", "어려움"],
  },
  {
    id: "searchEnvEyesight",
    label: "시력",
    values: [
      "무관",
      "일상적 활동 가능",
      "비교적 큰 인쇄물 가능",
      "아주 작은 글씨 가능",
    ],
  },
  {
    id: "searchEnvLiftPower",
    label: "드는힘",
    values: ["무관", "5Kg 이내 가능", "5~20Kg 이내 가능", "20Kg 이상 가능"],
  },
  {
    id: "searchEnvBothHands",
    label: "손작업",
    values: ["무관", "양손작업 가능", "한손보조작업 가능", "한손작업 가능"],
  },
];

export const mapSearchOptions = [
  {
    id: "searchRegion",
    label: "지역",
    values: [
      "무관",
      "서울특별시",
      "경기도",
      "인천광역시",
      "강원도",
      "충청북도",
      "충청남도",
      "세종시",
      "대전광역시",
      "전라북도",
      "전라남도",
      "광주광역시",
      "경상북도",
      "경상남도",
      "부산광역시",
      "대구광역시",
      "울산광역시",
      "제주특별자치도",
    ],
  },
  {
    id: "empType",
    label: "고용 형태",
    values: ["무관", "계약직", "상용직", "시간제"],
  },
  {
    id: "searchJobCategory",
    label: "모집 직종",
    values: [
      "무관",
      "정리/청소원",
      "사무/사무보조",
      "단순종사",
      "주방/식품",
      "경비/관리",
      "요양보호/사회복지/의료",
      "마케팅/판매",
      "상담/서비스",
      "연구/검사",
      "운전/조작/제어/건설",
      "예술/디자인/공예",
      "교육",
    ],
  },
  {
    id: "salaryType",
    label: "임금 형태",
    values: ["무관", "시급", "일급", "월급", "연봉"],
  },
  {
    id: "searchEnvBothHands",
    label: "양손",
    values: ["무관", "양손작업", "한손보조작업", "한손작업"],
  },
  {
    id: "searchEnvEyesight",
    label: "시력",
    values: [
      "무관",
      "일상적 활동 가능",
      "비교적 큰 인쇄물 가능",
      "아주 작은 글씨 가능",
    ],
  },
  {
    id: "searchEnvLiftPower",
    label: "드는힘",
    values: ["무관", "5Kg 이내", "5~20Kg 이내", "20Kg 이상"],
  },
];
