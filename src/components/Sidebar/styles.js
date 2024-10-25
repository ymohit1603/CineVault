import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10% 0',
  },
  image: {
    width: '70%',
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  genreImages: {
    filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'none',
  },
  bigText: {
    color: theme.palette.primary.main,
    fontSize: 30,
  },
  cinevaultLogo: {
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: '36px',
    color: '#222222', // Cinematic red
    textTransform: 'uppercase',
    letterSpacing: '2px',
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
}));
