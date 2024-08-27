import styles from "../../css/JobPostListFilter.module.css";

interface Option {
  id: string;
  label: string;
  values: string[];
}

interface JobPostListFilterProps {
  filterOptions: Option[];
}
const JobPostListFilter = ({ filterOptions }: JobPostListFilterProps) => {
  return (
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
                  </div>
                </div>
              </div>
              <div className={styles.select}>
                <div className={styles.button}>
                  <div className={styles.horizontalContainer1}>
                    <div className={styles.textInput1} />
                    <div className={styles.label}>입사 형태</div>
                    <div className={styles.textInput2} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.horizontalContainer3}>
              {filterOptions.map((option) => (
                <div key={option.id} className={styles.container}>
                  <div className={styles.text}>{option.label}</div>
                  <div className={styles.card}>
                    {option.values.map((value, index) => (
                      <div key={index} className={styles.button5}>
                        <div className={styles.div8}>{value}</div>
                        <div className={styles.textInput6} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostListFilter;
