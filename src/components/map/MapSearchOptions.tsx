import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import styled from "styled-components";
import { mapSearchOptions, MapSearchCriteria } from "../../types/PostDataType";

interface MapSearchOptionsProps {
  mapSearchCriteria: MapSearchCriteria;
  handleChange: (e: SelectChangeEvent<string>) => void;
}

const MapSearchOptions = ({
  mapSearchCriteria,
  handleChange,
}: MapSearchOptionsProps) => {
  return (
    <>
      <StyledContainer>
        {mapSearchOptions.map((opt) => (
          <FormControl
            key={opt.id}
            sx={{ m: 1, minWidth: 120 }}
            size="small"
            style={{ marginLeft: "0" }}
          >
            <InputLabel id={`${opt.id}-label`}>{opt.label}</InputLabel>
            <Select
              name={opt.id}
              value={mapSearchCriteria[opt.id as keyof MapSearchCriteria] || ""}
              onChange={handleChange}
              label={opt.label}
              labelId={`${opt.id}-label`}
            >
              {opt.values.map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
      </StyledContainer>
    </>
  );
};

export default MapSearchOptions;

const StyledContainer = styled.div`
  width: 1040px;
  margin-bottom: 40px;
  min-width: 1040px;
`;
