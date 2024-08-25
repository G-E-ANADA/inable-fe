import { FunctionComponent } from "react";
import styles from "../css/Community.module.css";
import { Checkbox } from "@mui/material";

const Community = () => {
  return (
    <div className={styles.div}>
      <div className={styles.parent}>
        <div className={styles.div1}>{`내가 쓴 글 `}</div>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.checkboxParent}>
                <div className={styles.checkbox}>
                  <div className={styles.padding}>
                    <Checkbox color="primary" size="medium" />
                  </div>
                </div>
                <div className={styles.text1}>전체 선택</div>
              </div>
              <div className={styles.button}>
                <div className={styles.base}>
                  <div className={styles.button1}>삭제</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.headWrapper}>
              <div className={styles.head}>
                <div className={styles.frameGroup}>
                  <div className={styles.checkbox}>
                    <div className={styles.padding}>
                      <Checkbox color="primary" size="medium" />
                    </div>
                  </div>
                  <div className={styles.wrapper}>
                    <div className={styles.div3}>취업</div>
                  </div>
                  <div className={styles.group}>
                    <div className={styles.div1}>
                      면접 잘 보는 방법이 궁금해요
                    </div>
                    <div className={styles.container}>
                      <div className={styles.div5}>2024.07.04 18:14:00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.headWrapper}>
              <div className={styles.head}>
                <div className={styles.frameGroup}>
                  <div className={styles.checkbox}>
                    <div className={styles.padding}>
                      <Checkbox color="primary" size="medium" />
                    </div>
                  </div>
                  <div className={styles.wrapper}>
                    <div className={styles.div3}>취업</div>
                  </div>
                  <div className={styles.group}>
                    <div className={styles.div1}>
                      면접 잘 보는 방법이 궁금해요
                    </div>
                    <div className={styles.container}>
                      <div className={styles.div5}>2024.07.04 18:14:00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.headWrapper}>
              <div className={styles.head}>
                <div className={styles.frameGroup}>
                  <div className={styles.checkbox}>
                    <div className={styles.padding}>
                      <Checkbox color="primary" size="medium" />
                    </div>
                  </div>
                  <div className={styles.wrapper}>
                    <div className={styles.div3}>취업</div>
                  </div>
                  <div className={styles.group}>
                    <div className={styles.div1}>
                      면접 잘 보는 방법이 궁금해요
                    </div>
                    <div className={styles.container}>
                      <div className={styles.div5}>2024.07.04 18:14:00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Community;
