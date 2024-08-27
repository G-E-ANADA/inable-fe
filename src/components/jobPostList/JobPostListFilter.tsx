import { useEffect, useState } from "react";
import styles from "../../css/JobPostListFilter.module.css";

interface Option {
  id: string;
  label: string;
  values: string[];
}

interface JobPostListFilterProps {
  filterOptions: Option[];
  onFilterChange: (filter: string, value: string) => void;
}
const JobPostListFilter = ({
  filterOptions,
  onFilterChange,
}: JobPostListFilterProps) => {
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string;
  }>({});

  useEffect(() => {
    const initialFilters: { [key: string]: string } = {};
    filterOptions.forEach((option) => {
      if (option.values.length > 0) {
        const defaultValue = option.values[0];
        initialFilters[option.id] = defaultValue;
        onFilterChange(option.id, defaultValue);
      }
    });
    setSelectedFilters(initialFilters);
  }, []);

  const handleButtonClick = (filter: string, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filter]: value,
    }));
    onFilterChange(filter, value);
  };

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
                      <div
                        key={index}
                        className={`${styles.button5} ${
                          selectedFilters[option.id] === value
                            ? styles.selected
                            : ""
                        }`}
                        onClick={() => handleButtonClick(option.id, value)}
                      >
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
