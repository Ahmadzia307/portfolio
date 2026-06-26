import { Box, Container, Typography, type BoxProps } from '@mui/material';
import { type ReactNode } from 'react';
import { MONO } from '../theme';

interface Props extends BoxProps {
  id: string;
  num?: string;
  title?: string;
  alt?: boolean;
  children: ReactNode;
}

/** Standard page section: vertical padding, optional alt background, numbered title. */
export default function Section({ id, num, title, alt = false, children, ...rest }: Props) {
  return (
    <Box
      component="section"
      id={id}
      sx={{ py: { xs: 9, md: 12.5 }, bgcolor: alt ? 'background.paper' : 'transparent' }}
      {...rest}
    >
      <Container>
        {title && (
          <Typography
            variant="h2"
            sx={{ fontSize: 'clamp(1.6rem,4vw,2rem)', mb: 6, display: 'flex', alignItems: 'center', gap: 1.5 }}
          >
            {num && (
              <Box component="span" sx={{ color: 'primary.main', fontFamily: MONO, fontSize: '1.2rem', fontWeight: 500 }}>
                {num}
              </Box>
            )}
            {title}
          </Typography>
        )}
        {children}
      </Container>
    </Box>
  );
}
