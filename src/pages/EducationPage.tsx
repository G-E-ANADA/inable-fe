import { FunctionComponent, useState, useEffect } from "react";
import styles from "../css/Education.module.css";
import Header from "../components/Header";
import EducationSNB from "../components/EducationSNB";
import jobInfoDummy_1 from "../asset/jobInfoDummy_1.svg";
import jobInfoDummy_2 from "../asset/jobInfoDummy_2.svg";
import jobInfoDummy_1_inner_2 from "../asset/jobInfoDummy_1_inner_2.svg";
import jobInfoDummy_1_inner_3 from "../asset/jobInfoDummy_1_inner_3.svg";
import jobInfoDummy_1_inner_4 from "../asset/jobInfoDummy_1_inner_4.svg";
import leftBtn from "../asset/leftBtn.svg";
import rightBtn from "../asset/rightBtn.svg";
import cancelBtn from "../asset/cancelBtn.svg";

type MyPageSNBMenu = "INFO" | "JOB_INFO" | "COMMUNITY";

const EducationPage: FunctionComponent = () => {
  const [selectedMenu, setSelectedMenu] = useState("JOB_INFO");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    jobInfoDummy_1,
    jobInfoDummy_1_inner_2,
    jobInfoDummy_1_inner_3,
    jobInfoDummy_1_inner_4,
  ];

  // 현재 보여지는 이미지의 인덱스를 추적하는 상태를 추가합니다.
  const [currentIndex, setCurrentIndex] = useState(0);

  // 다음 이미지로 넘어가는 함수입니다.
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // 이전 이미지로 돌아가는 함수입니다.
  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 모달 바깥을 클릭했을 때 모달이 닫히도록 처리
  useEffect(() => {
    if (isModalOpen) {
      const handleOutsideClick = (e: any) => {
        if (e.target.className === styles.modalBackground) {
          closeModal();
        }
      };
      document.addEventListener("click", handleOutsideClick);
      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }
  }, [isModalOpen]);

  const handleMenuSelect = (menu: MyPageSNBMenu) => {
    setSelectedMenu(menu);
  };

  return (
    <>
      <Header />
      <div className={styles.contentContainer}>
        <EducationSNB
          handleMenuSelect={handleMenuSelect}
          selectedMenu={selectedMenu}
        />
        {selectedMenu === "INFO" && <div>1</div>}
        {selectedMenu === "JOB_INFO" && (
          <div className={styles.tip}>
            <div className={styles.tipWrapper}>
              <div className={styles.tip1}>{`취업 정보 & TIP`}</div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup} onClick={openModal}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src={jobInfoDummy_1}
                />
                <div className={styles.ai}>
                  AI 도우미를 활용하여 취업 성공하기
                </div>
              </div>
              <div className={styles.frameGroup}>
                <img className={styles.frameItem} alt="" src={jobInfoDummy_2} />
                <div className={styles.ai}>8월 최신 취업 정보</div>
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.frameInner} />
                <div className={styles.ai}>업로드 예정</div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.frameInner} />
                <div className={styles.ai}>업로드 예정</div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.frameInner} />
                <div className={styles.ai}>업로드 예정</div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.frameInner} />
                <div className={styles.ai}>업로드 예정</div>
              </div>
            </div>
          </div>
        )}
        {selectedMenu === "COMMUNITY" && <div>2</div>}

        {isModalOpen && (
          <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
              <div className={styles.modalContentContainer}>
                <div className={styles.modalLabel}>
                  AI 도우미를 활용하여 취업 성공하기
                </div>
                <div className={styles.content}>
                  <div className={styles.cardContainer}>
                    <img
                      className={styles.modalPassBtn}
                      onClick={handlePrevious}
                      alt=""
                      src={leftBtn}
                    />

                    <div className={styles.frameGroup}>
                      <img
                        className={styles.modalContentImg}
                        alt=""
                        src={images[currentIndex]}
                      />
                    </div>

                    <img
                      className={styles.modalPassBtn}
                      onClick={handleNext}
                      alt=""
                      src={rightBtn}
                    />
                  </div>
                  <div className={styles.modalLabel}>
                    {currentIndex + 1}/{images.length}
                  </div>
                </div>
              </div>
              <img
                className={styles.cancelIcon}
                onClick={closeModal}
                alt=""
                src={cancelBtn}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EducationPage;
