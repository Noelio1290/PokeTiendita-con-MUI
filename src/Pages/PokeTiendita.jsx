import Container from "@mui/material/Container";
import Grid2 from '@mui/material/Unstable_Grid2';
import Typography from "@mui/material/Typography";

const PokeTiendita = () => {
    <div className="poke-tiendita">
        <Container>
            <Typography
                  variant='h4'
                  component="h2"
                  marginTop={5}
                  marginBottom={3}
                >
                  -Items.
                </Typography>
            <Grid2 container spacing={3}
            >
            </Grid2>
        </Container>
    </div>
};

export default PokeTiendita