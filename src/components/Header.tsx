import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LinkItem from "./LinkItem";
import Logo from "./Logo";
import Navigation from "./Navigation";

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
      <Grid container spacing={3} padding={2}>
        <Grid item xs>
          <Logo text="InAble" />
        </Grid>
        <Grid item xs={5}>
          <Navigation links={navLinks}></Navigation>
        </Grid>
        <Grid item xs>
          <LinkItem to={loginLink[0].to} text={loginLink[0].text}></LinkItem>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
