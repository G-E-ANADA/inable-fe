import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import LinkItem from "./LinkItem";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const navLinks = [
  { to: "/", text: "AI 도우미" },
  { to: "/", text: "채용 정보" },
  { to: "/", text: "채용 지도" },
  { to: "/", text: "나의 정보" },
  { to: "/", text: "교육 정보" },
];

const loginLink = [{ to: "/login", text: "로그인" }];

const Header = ({}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>
            <Logo text="InAble" />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Navigation links={navLinks}></Navigation>
          </Item>
        </Grid>
        <Grid item xs>
          <Item>
            <LinkItem to={loginLink[0].to} text={loginLink[0].text}></LinkItem>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
