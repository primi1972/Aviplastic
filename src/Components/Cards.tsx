import { ThemeProvider } from "@emotion/react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[800],
    },
  },
});

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <>    
    <CardMedia
        sx={{ height: 140 }}
        image="https://imgs.search.brave.com/uWH8o3pw24ELeSfLLhoYXO_4gYv-NV6xk_znlrX6CJ4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJ0YWcuY29t/L3dhbGxwYXBlci9m/dWxsL2MvOS82Lzgx/MTc3My1nb3JnZXJv/dXMtbmFydXRvLXNo/aXBwdWRlbi13YWxs/cGFwZXItZm9yLWRl/c2t0b3AtMjU2MHgx/NDQwLmpwZw"
        title="Naruto Shippuden"
      />
    <CardContent>

      <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
        Titulo de Tarjeta
      </Typography>
      <Typography variant="h5" component="div">
        Titulo
      </Typography>
      <Typography variant="body2">
        Pequeño texto.
        <br />
        {'"otro pequeño texto"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" variant="outlined">Leer Mas...</Button>
      <Button size="small" variant="outlined">Que mas...</Button>
    </CardActions>
  </>
);

export default function Home() {
	const handleTodo = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      todo: { value: string };
    };
    alert(target.todo.value);
  };
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ my: 5 }}>
        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "row", gap: 2 }}
          onSubmit={handleTodo}
        >
          <Card variant="outlined">{card}</Card>
        </Box>
      </Container>
    </ThemeProvider>
  );
}