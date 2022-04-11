import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Card, Link, Container, Typography } from '@mui/material';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { RegisterForm } from '../sections/authentication/register';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Register() {
  return (
    <RootStyle title="إنضم إلى حيك">
      <AuthLayout>
        هل لديك حساب بالفعل؟ &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to="/login">
          تسجيل الدخول
        </Link>
      </AuthLayout>

      <SectionStyle sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
          إنضم إلى حيك وإكتشف جوارك
        </Typography>
        <img alt="register" src="/static/illustrations/illustration_register.png" />
      </SectionStyle>

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              استمتع بمنطقتك مجانا مع باب الحارة
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              مجاني تماما. لا حاجة لبطاقة الائتمان.
            </Typography>
          </Box>

          <RegisterForm />

          <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
            من خلال التسجيل ، أوافق على&nbsp;
            <Link underline="always" color="textPrimary">
              شروط الخدمة
            </Link>
            &nbsp;و&nbsp;
            <Link underline="always" color="textPrimary">
              سياسة الخصوصية
            </Link>
            .
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{
              mt: 3,
              textAlign: 'center',
              display: { sm: 'none' }
            }}
          >
            هل لديك حساب بالفعل؟&nbsp;
            <Link underline="hover" to="/login" component={RouterLink}>
              تسجيل الدخول
            </Link>
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
