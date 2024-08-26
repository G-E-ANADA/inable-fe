import { FunctionComponent } from "react";
import styles from "../css/JobPostListPage2.module.css";
import { SelectChangeEvent } from "@mui/material";

const JobPostListPage2: FunctionComponent = () => {
  return (
    <div className={styles.toBe}>
      <div className={styles.tableContainer}>
        <div className={styles.tableContainer1}>
          <div className={styles.table}>
            <div className={styles.textInput}>
              <div className={styles.div}>필터 검색</div>
            </div>
            <div className={styles.horizontalContainer}>
              <div className={styles.segmentedPicker}>
                <div className={styles.select}>
                  <div className={styles.button}>
                    <div className={styles.horizontalContainer1}>
                      <div className={styles.textInput1} />
                      <div className={styles.label}>고용 형태</div>
                      <div className={styles.textInput2} />
                      <img
                        className={styles.arrowdropdownfilledIcon}
                        alt=""
                        src="ArrowDropDownFilled.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.select}>
                  <div className={styles.button}>
                    <div className={styles.horizontalContainer1}>
                      <div className={styles.textInput1} />
                      <div className={styles.label}>입사 형태</div>
                      <div className={styles.textInput2} />
                      <img
                        className={styles.arrowdropdownfilledIcon}
                        alt=""
                        src="ArrowDropDownFilled.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.horizontalContainer3}>
                <div className={styles.container}>
                  <div className={styles.text}>근무 위치</div>
                </div>
                <div className={styles.container}>
                  <div className={styles.text}>모집 직종</div>
                </div>
                <div className={styles.container}>
                  <div className={styles.text}>듣고 말하기</div>
                </div>
                <div className={styles.container}>
                  <div className={styles.text}>시력</div>
                </div>
                <div className={styles.container}>
                  <div className={styles.text}>드는 힘</div>
                </div>
                <div className={styles.container}>
                  <div className={styles.text}>손작업</div>
                </div>
              </div>
              <div className={styles.horizontalContainer6}>
                <div className={styles.card}>
                  <div className={styles.card1}>
                    <div className={styles.textInput5}>
                      <div className={styles.kg}>전체</div>
                    </div>
                    <div className={styles.button5}>
                      <div className={styles.div8}>서울특별시</div>
                      <div className={styles.textInput6} />
                    </div>
                    <div className={styles.button5}>
                      <div className={styles.div8}>경기도</div>
                      <div className={styles.textInput6} />
                    </div>
                    <div className={styles.button5}>
                      <div className={styles.div8}>충청남도</div>
                      <div className={styles.textInput6} />
                    </div>
                    <div className={styles.button5}>
                      <div className={styles.div8}>충청북도</div>
                      <div className={styles.textInput6} />
                    </div>
                    <div className={styles.button5}>
                      <div className={styles.div8}>전라남도</div>
                      <div className={styles.textInput6} />
                    </div>
                    <div className={styles.button5}>
                      <div className={styles.div8}>전라북도</div>
                      <div className={styles.textInput6} />
                    </div>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.card3}>
                    <div className={styles.button5}>
                      <div className={styles.div8}>무관</div>
                      <div className={styles.textInput6} />
                    </div>
                    <div className={styles.textInputContainer}>
                      <div className={styles.kg}>정리/청소원</div>
                      <div className={styles.textInput6} />
                    </div>
                    <div className={styles.button5}>
                      <div className={styles.div8}>사무/사무보조</div>
                      <div className={styles.textInput6} />
                    </div>
                    <div className={styles.button5}>
                      <div className={styles.div8}>단순종사</div>
                      <div className={styles.textInput6} />
                    </div>
                    <div className={styles.button5}>
                      <div className={styles.div8}>주방/식품</div>
                      <div className={styles.textInput6} />
                    </div>
                    <div className={styles.button5}>
                      <div className={styles.div8}>경비/관리</div>
                      <div className={styles.textInput6} />
                    </div>
                    <div className={styles.button5}>
                      <div className={styles.div8}>요양보호/사회복지/의료</div>
                      <div className={styles.textInput6} />
                    </div>
                  </div>
                </div>
                <div className={styles.buttonContainer}>
                  <div className={styles.textInputContainer}>
                    <div className={styles.kg}>무관</div>
                    <div className={styles.textInput6} />
                  </div>
                  <div className={styles.button5}>
                    <div className={styles.div8}>간단한 듣고 말하기</div>
                    <div className={styles.textInput6} />
                  </div>
                  <div className={styles.button5}>
                    <div className={styles.div8}>어려움 없음</div>
                    <div className={styles.textInput6} />
                  </div>
                  <div className={styles.button5}>
                    <div className={styles.div8}>어려움</div>
                    <div className={styles.textInput6} />
                  </div>
                </div>
                <div className={styles.buttonContainer}>
                  <div className={styles.button5}>
                    <div className={styles.div8}>무관</div>
                    <div className={styles.textInput6} />
                  </div>
                  <div className={styles.textInputContainer}>
                    <div className={styles.kg}>일상적 활동 가능</div>
                    <div className={styles.textInput6} />
                  </div>
                  <div className={styles.button5}>
                    <div className={styles.div8}>비교적 큰 인쇄물 가능</div>
                    <div className={styles.textInput6} />
                  </div>
                  <div className={styles.button5}>
                    <div className={styles.div8}>아주 작은 글씨 가능</div>
                    <div className={styles.textInput6} />
                  </div>
                </div>
                <div className={styles.buttonContainer}>
                  <div className={styles.button5}>
                    <div className={styles.div8}>무관</div>
                    <div className={styles.textInput6} />
                  </div>
                  <div className={styles.textInputContainer}>
                    <div className={styles.kg}>5kg 이내 가능</div>
                    <div className={styles.textInput6} />
                  </div>
                  <div className={styles.button5}>
                    <div className={styles.div8}>5~20kg 이내 가능</div>
                    <div className={styles.textInput6} />
                  </div>
                  <div className={styles.button5}>
                    <div className={styles.div8}>20kg 이상 가능</div>
                    <div className={styles.textInput6} />
                  </div>
                </div>
                <div className={styles.buttonContainer}>
                  <div className={styles.horizontalContainer20}>
                    <div className={styles.div8}>무관</div>
                    <div className={styles.textInput6} />
                  </div>
                  <div className={styles.textInputContainer}>
                    <div className={styles.kg}>양손작업 가능</div>
                    <div className={styles.textInput6} />
                  </div>
                  <div className={styles.button5}>
                    <div className={styles.div8}>한손보조작업 가능</div>
                    <div className={styles.textInput6} />
                  </div>
                  <div className={styles.button5}>
                    <div className={styles.div8}>한손작업 가능</div>
                    <div className={styles.textInput6} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tableContainer2}>
          <div className={styles.textInput35}>
            <div className={styles.text}>검색결과</div>
            <div className={styles.select2}>
              <div className={styles.button}>
                <div className={styles.horizontalContainer1}>
                  <div className={styles.textInput1} />
                  <div className={styles.label}>마감순</div>
                  <div className={styles.textInput2} />
                  <img
                    className={styles.arrowdropdownfilledIcon}
                    alt=""
                    src="ArrowDropDownFilled.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tableContainer3}>
            <div className={styles.horizontalContainer23}>
              <div className={styles.button10}>
                <div className={styles.text}>사업장명</div>
              </div>
              <div className={styles.button11}>
                <div className={styles.text}>사업장 주소</div>
              </div>
              <div className={styles.container6}>
                <div className={styles.text}>고용형태</div>
              </div>
              <div className={styles.button12}>
                <div className={styles.text}>모집 직종</div>
              </div>
              <div className={styles.button13}>
                <div className={styles.text}>임금 형태</div>
              </div>
              <div className={styles.button14}>
                <div className={styles.text}>듣고 말하기</div>
              </div>
              <div className={styles.container7}>
                <div className={styles.text}>시력</div>
              </div>
              <div className={styles.container7}>
                <div className={styles.text}>드는 힘</div>
              </div>
              <div className={styles.container7}>
                <div className={styles.text}>손작업</div>
              </div>
              <div className={styles.button17}>
                <div className={styles.text}>모집 기간</div>
              </div>
            </div>
            <div className={styles.table1}>
              <div className={styles.horizontalContainer24}>
                <div className={styles.button10}>
                  <div className={styles.div45}>180-160-20</div>
                </div>
                <div className={styles.button11}>
                  <div className={styles.div46}>200-138-31</div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.div47}>계약직</div>
                </div>
                <div className={styles.button12}>
                  <div className={styles.div45}>160-160-0</div>
                </div>
                <div className={styles.button13}>
                  <div className={styles.div49}>월급</div>
                </div>
                <div className={styles.horizontalContainer28}>
                  <div className={styles.div50}>무관</div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.div50}>무관</div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.div50}>무관</div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.div50}>무관</div>
                </div>
                <div className={styles.button17}>
                  <div className={styles.div54}>2024-07-01~2024-07-10</div>
                </div>
              </div>
              <div className={styles.horizontalContainer24}>
                <div className={styles.button10}>
                  <div className={styles.div45}>한국환경보전원한국환</div>
                </div>
                <div className={styles.button11}>
                  <div className={styles.div46}>부산광역시 부산진구</div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.div57}>계약직</div>
                </div>
                <div className={styles.button12}>
                  <div className={styles.div45}>사무보조원</div>
                </div>
                <div className={styles.button13}>
                  <div className={styles.div57}>월급</div>
                </div>
                <div className={styles.horizontalContainer28}>
                  <div className={styles.div50}>간단히 가능</div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.div50}>일상</div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.div50}>5kg</div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.div50}>양손</div>
                </div>
                <div className={styles.button17}>
                  <div className={styles.div54}>2024-07-01~2024-07-10</div>
                </div>
              </div>
              <div className={styles.horizontalContainer24}>
                <div className={styles.button10}>
                  <div className={styles.div45}>한국환경보전원</div>
                </div>
                <div className={styles.button11}>
                  <div className={styles.div46}>{`서울특별시 성동구 `}</div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.div57}>계약직</div>
                </div>
                <div className={styles.button12}>
                  <div className={styles.div45}>사무보조원</div>
                </div>
                <div className={styles.button13}>
                  <div className={styles.div57}>월급</div>
                </div>
                <div className={styles.horizontalContainer28}>
                  <div className={styles.div50}>어려움 없음</div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.div50}>큰 인쇄물</div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.div50}>5~20kg</div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.div50}>한손보조</div>
                </div>
                <div className={styles.button17}>
                  <div className={styles.div54}>2024-07-01~2024-07-10</div>
                </div>
              </div>
              <div className={styles.horizontalContainer24}>
                <div className={styles.button10}>
                  <div className={styles.div45}>한국환경보전원</div>
                </div>
                <div className={styles.button11}>
                  <div className={styles.div46}>{`서울특별시 성동구 `}</div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.div57}>계약직</div>
                </div>
                <div className={styles.button12}>
                  <div className={styles.div45}>사무보조원</div>
                </div>
                <div className={styles.button13}>
                  <div className={styles.div57}>월급</div>
                </div>
                <div className={styles.horizontalContainer28}>
                  <div className={styles.div50}>어려움</div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.div50}>작은 글씨</div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.div50}>20kg이상</div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.div50}>한손</div>
                </div>
                <div className={styles.button17}>
                  <div className={styles.div54}>2024-07-01~2024-07-10</div>
                </div>
              </div>
              <div className={styles.horizontalContainer24}>
                <div className={styles.button10}>
                  <div className={styles.div45}>한국환경보전원</div>
                </div>
                <div className={styles.button11}>
                  <div className={styles.div46}>{`서울특별시 성동구 `}</div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.div57}>계약직</div>
                </div>
                <div className={styles.button12}>
                  <div className={styles.div45}>사무보조원</div>
                </div>
                <div className={styles.button13}>
                  <div className={styles.div57}>월급</div>
                </div>
                <div className={styles.horizontalContainer28}>
                  <div className={styles.div50}>무관</div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.div50}>일상</div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.div50}>5kg</div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.div50}>가능</div>
                </div>
                <div className={styles.button17}>
                  <div className={styles.div54}>2024-07-01~2024-07-10</div>
                </div>
              </div>
              <div className={styles.horizontalContainer24}>
                <div className={styles.button10}>
                  <div className={styles.div45}>한국환경보전원</div>
                </div>
                <div className={styles.button11}>
                  <div className={styles.div46}>{`서울특별시 성동구 `}</div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.div57}>계약직</div>
                </div>
                <div className={styles.button12}>
                  <div className={styles.div45}>사무보조원</div>
                </div>
                <div className={styles.button13}>
                  <div className={styles.div57}>월급</div>
                </div>
                <div className={styles.horizontalContainer28}>
                  <div className={styles.div50}>무관</div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.div50}>일상</div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.div50}>5kg</div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.div50}>가능</div>
                </div>
                <div className={styles.button17}>
                  <div className={styles.div54}>2024-07-01~2024-07-10</div>
                </div>
              </div>
              <div className={styles.horizontalContainer24}>
                <div className={styles.button10}>
                  <div className={styles.div45}>한국환경보전원</div>
                </div>
                <div className={styles.button11}>
                  <div className={styles.div46}>{`서울특별시 성동구 `}</div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.div57}>계약직</div>
                </div>
                <div className={styles.button12}>
                  <div className={styles.div45}>사무보조원</div>
                </div>
                <div className={styles.button13}>
                  <div className={styles.div57}>월급</div>
                </div>
                <div className={styles.horizontalContainer28}>
                  <div className={styles.div50}>무관</div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.div50}>일상</div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.div50}>5kg</div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.div50}>가능</div>
                </div>
                <div className={styles.button17}>
                  <div className={styles.div54}>2024-07-01~2024-07-10</div>
                </div>
              </div>
              <div className={styles.horizontalContainer24}>
                <div className={styles.button10}>
                  <div className={styles.div45}>한국환경보전원</div>
                </div>
                <div className={styles.button11}>
                  <div className={styles.div46}>{`서울특별시 성동구 `}</div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.div57}>계약직</div>
                </div>
                <div className={styles.button12}>
                  <div className={styles.div45}>사무보조원</div>
                </div>
                <div className={styles.button13}>
                  <div className={styles.div57}>월급</div>
                </div>
                <div className={styles.horizontalContainer28}>
                  <div className={styles.div50}>무관</div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.div50}>일상</div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.div50}>5kg</div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.div50}>가능</div>
                </div>
                <div className={styles.button17}>
                  <div className={styles.div54}>2024-07-01~2024-07-10</div>
                </div>
              </div>
              <div className={styles.horizontalContainer24}>
                <div className={styles.button10}>
                  <div className={styles.div45}>한국환경보전원</div>
                </div>
                <div className={styles.button11}>
                  <div className={styles.div46}>{`서울특별시 성동구 `}</div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.div57}>계약직</div>
                </div>
                <div className={styles.button12}>
                  <div className={styles.div45}>사무보조원</div>
                </div>
                <div className={styles.button13}>
                  <div className={styles.div57}>월급</div>
                </div>
                <div className={styles.horizontalContainer28}>
                  <div className={styles.div50}>무관</div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.div50}>일상</div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.div50}>5kg</div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.div50}>가능</div>
                </div>
                <div className={styles.button17}>
                  <div className={styles.div54}>2024-07-01~2024-07-10</div>
                </div>
              </div>
              <div className={styles.horizontalContainer102}>
                <div className={styles.button10}>
                  <div className={styles.div45}>한국환경보전원</div>
                </div>
                <div className={styles.button11}>
                  <div className={styles.div46}>{`서울특별시 성동구 `}</div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.div57}>계약직</div>
                </div>
                <div className={styles.button12}>
                  <div className={styles.div45}>사무보조원</div>
                </div>
                <div className={styles.button13}>
                  <div className={styles.div57}>월급</div>
                </div>
                <div className={styles.horizontalContainer28}>
                  <div className={styles.div50}>무관</div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.div50}>일상</div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.div50}>5kg</div>
                </div>
                <div className={styles.verticalContainer}>
                  <div className={styles.div50}>가능</div>
                </div>
                <div className={styles.button17}>
                  <div className={styles.div54}>2024-07-01~2024-07-10</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.pagination}>
        <img
          className={styles.paginationitemIcon}
          alt=""
          src={`<PaginationItem>.svg`}
        />
        <div className={styles.paginationitem}>
          <div className={styles.button21}>
            <div className={styles.label3}>1</div>
          </div>
        </div>
        <div className={styles.paginationitemIcon}>
          <div className={styles.rating}>
            <div className={styles.label3}>2</div>
          </div>
        </div>
        <div className={styles.paginationitemIcon}>
          <div className={styles.rating}>
            <div className={styles.label3}>3</div>
          </div>
        </div>
        <div className={styles.paginationitemIcon}>
          <div className={styles.rating}>
            <div className={styles.label3}>4</div>
          </div>
        </div>
        <div className={styles.paginationitemIcon}>
          <div className={styles.rating}>
            <div className={styles.label3}>5</div>
          </div>
        </div>
        <div className={styles.paginationitemIcon}>
          <div className={styles.rating}>
            <div className={styles.label3}>6</div>
          </div>
        </div>
        <div className={styles.paginationitemIcon}>
          <div className={styles.rating}>
            <div className={styles.label3}>7</div>
          </div>
        </div>
        <img
          className={styles.paginationitemIcon}
          alt=""
          src={`<PaginationItem>.svg`}
        />
      </div>
      <div className={styles.gnb}>
        <div className={styles.horizontalContainer111}>
          <img className={styles.logoIcon} alt="" src="logo.svg" />
          <div className={styles.horizontalContainer112}>
            <div className={styles.tab}>
              <div className={styles.text}>AI 도우미</div>
            </div>
            <div className={styles.tab1}>
              <b className={styles.div57}>채용 정보</b>
            </div>
            <div className={styles.tab}>
              <div className={styles.text}>채용 지도</div>
            </div>
            <div className={styles.tab}>
              <div className={styles.text}>나의 정보</div>
            </div>
            <div className={styles.tab}>
              <div className={styles.text}>교육 정보</div>
            </div>
          </div>
          <div className={styles.tab}>
            <div className={styles.text}>로그인</div>
          </div>
        </div>
      </div>
      <div className={styles.paragraphContainer}>
        <div className={styles.div136}>실시간 채용 정보</div>
        <div className={styles.div137}>실시간 채용 정보를 확인해 보세요</div>
      </div>
    </div>
  );
};

export default JobPostListPage2;
