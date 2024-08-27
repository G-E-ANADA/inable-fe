import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";
import styles from "../../css/JobPostListFilter.module.css";
import { jobPostListSelectOptions } from "../../types/PostDataType";

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

  const handleSelectChange =
    (filter: string) => (event: SelectChangeEvent<string>) => {
      const value = event.target.value;
      setSelectedFilters((prev) => ({
        ...prev,
        [filter]: value,
      }));
      onFilterChange(filter, value);
    };

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
              <FormControl
                sx={{ m: 1, minWidth: 120 }}
                size="small"
                style={{ marginLeft: "0" }}
              >
                <InputLabel id="empType-label">고용 형태</InputLabel>
                <Select
                  labelId="empType-label"
                  id="empType-select"
                  value={selectedFilters["empType"] || ""}
                  label="고용 형태"
                  onChange={handleSelectChange("empType")}
                >
                  {jobPostListSelectOptions
                    .find((option) => option.id === "empType")
                    ?.values.map((value) => (
                      <MenuItem key={value} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              <FormControl
                sx={{ m: 1, minWidth: 120 }}
                size="small"
                style={{ marginLeft: "0" }}
              >
                <InputLabel id="enterType-label">입사 형태</InputLabel>
                <Select
                  labelId="enterType-label"
                  id="enterType-select"
                  value={selectedFilters["enterType"] || ""}
                  label="입사 형태"
                  onChange={handleSelectChange("enterType")}
                >
                  {jobPostListSelectOptions
                    .find((option) => option.id === "enterType")
                    ?.values.map((value) => (
                      <MenuItem key={value} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
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
