import { createTheme, type Theme } from '@mui/material/styles';

export type Mode = 'dark' | 'light';

// Palette mirrors the original navy + teal design, expressed as an MUI theme.
const palettes = {
  dark: {
    bg: '#0a192f',
    paper: '#112240',
    primary: '#64ffda',
    text: '#ccd6f6',
    muted: '#8892b0',
  },
  light: {
    bg: '#f8fafc',
    paper: '#ffffff',
    primary: '#0d9488',
    text: '#334155',
    muted: '#64748b',
  },
} as const;

export function getTheme(mode: Mode): Theme {
  const c = palettes[mode];

  return createTheme({
    palette: {
      mode,
      primary: { main: c.primary, contrastText: mode === 'dark' ? '#0a192f' : '#ffffff' },
      background: { default: c.bg, paper: c.paper },
      text: { primary: c.text, secondary: c.muted },
    },
    typography: {
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      h1: { fontWeight: 800, letterSpacing: '-1px' },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 700 },
      button: { textTransform: 'none', fontWeight: 600 },
    },
    shape: { borderRadius: 8 },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: { transition: 'background-color .3s ease, color .3s ease' },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: { paddingInline: 24, paddingBlock: 11 },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            border: `1px solid ${mode === 'dark' ? 'rgba(100,255,218,0.2)' : 'rgba(13,148,136,0.25)'}`,
            transition: 'transform .25s ease, box-shadow .25s ease',
            '&:hover': { transform: 'translateY(-6px)' },
          },
        },
      },
    },
  });
}

// Monospace accent font used for eyebrows / tags, matching the original.
export const MONO = "'SF Mono', 'Fira Code', 'Consolas', monospace";
