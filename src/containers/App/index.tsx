import * as React from 'react';
import { useForm, FieldError } from 'react-hook-form';
import * as yup from 'yup';
import styled, { ThemeProvider } from '../../styles/styled-components';
import DefaultTheme from '../../styles/themes';
import GlobalStyle from '../../styles/globalStyle';
import BgMobile from '../../images/bg-intro-mobile.png';
import BgDesktop from '../../images/bg-intro-desktop.png';
import ErrorIconSvg from '../../images/icon-error.svg';
import media from '../../styles/media';

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }): string => theme.colors.white};
  text-align: center;
  margin-top: 88px;
  margin-bottom: 0;
  ${media.desktop} {
    margin: 0 auto;
    font-size: 48px;
    text-align: left;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #e8e8e8;
  letter-spacing: 0.8px;
  text-align: center;
  line-height: 1.625;
  margin-bottom: 64px;
  margin-top: 24px;
  ${media.desktop} {
    text-align: left;
  }
`;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  background: url(${BgMobile});
  min-height: 100vh;
  padding: 0px 24px;
  ${media.desktop} {
    flex-direction: row;
    padding: 0px 128px;
    background: url(${BgDesktop});
    section {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 32px;
    }
  }
`;

const ButtonTry = styled.button`
  background: ${({ theme }): string => theme.colors.accentBlue};
  color: ${({ theme }): string => theme.colors.white};
  font-size: 16px;
  width: 100%;
  border: none;
  border-radius: 8px;
  padding: 16px 68px;
  line-height: 1.625;
  cursor: pointer;
  outline: none;
  box-shadow: 0 8px rgba(0, 0, 0, 0.15);
  :hover {
    opacity: 0.8;
  }
`;

const Form = styled.form`
  background: ${({ theme }): string => theme.colors.white};
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 24px;
  margin-top: 24px;
  box-shadow: 0 8px rgba(0, 0, 0, 0.15);
  margin-bottom: 72px;
  ${media.desktop} {
    padding: 40px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  .error {
    border: ${({ theme }): string => `1.5px solid ${theme.colors.primaryRed}`};
    color: ${({ theme }): string => theme.colors.primaryRed};
  }
  margin-bottom: 16px;
`;

const ErrorMessage = styled.p`
  margin: 0;
  color: ${({ theme }): string => theme.colors.primaryRed};
  font-weight: 600;
  font-size: 12px;
  text-align: right;
  margin-top: 4px;
`;

const Input = styled.input`
  outline: none;
  font-size: 16px;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  border: ${({ theme }): string => `1.5px solid ${theme.colors.grayishBlue}`};
  border-radius: 4px;
  padding: 16px;
  box-sizing: border-box;
  :focus {
    border: ${({ theme }): string => `1.5px solid ${theme.colors.darkBlue}`};
  }
  ::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const Button = styled.button`
  background: ${({ theme }): string => theme.colors.primaryGreen};
  padding: 20px 16px;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }): string => theme.colors.white};
  border: none;
  border-radius: 4px;
  letter-spacing: 1px;
  outline: none;
  box-shadow: 0 4px rgb(51, 183, 125);
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const TnC = styled.p`
  color: ${({ theme }): string => theme.colors.grayishBlue};
  font-size: 14px;
  text-align: center;
  line-height: 1.675;
  margin-bottom: 0;
  margin-top: 16px;
  a {
    color: ${({ theme }): string => theme.colors.primaryRed};
    text-decoration: none;
    font-weight: 700;
  }
`;

const ErrorIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 16px;
  top: 18px;
`;

const Footer = styled.footer`
  color: ${({ theme }): string => theme.colors.white};
  text-align: center;
  margin-top: -42px;
  font-size: 12px;
  a {
    color: ${({ theme }): string => theme.colors.white};
    font-weight: 700;
    text-decoration: none;
    transition: all 0.2s ease-out;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const App: React.FC = () => {
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .required('Firt Name cannot be empty')
      .trim(),
    lastName: yup
      .string()
      .required('Last Name cannot be empty')
      .trim(),
    email: yup
      .string()
      .email('Looks like this is not an email')
      .required('Email Address cannot be empty'),
    password: yup
      .string()
      .required('Password cannot be empty')
      .trim(),
  });
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  const onSubmit = handleSubmit((values) => {
    // eslint-disable-next-line no-console
    console.log(values);
  });

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <Wrapper>
        <section>
          <Title>Learn to code by watching others</Title>
          <Paragraph>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </Paragraph>
        </section>
        <section>
          <ButtonTry>
            <b>Try it free 7 days</b> then $20/mo. thereafter
          </ButtonTry>
          <Form onSubmit={onSubmit}>
            <InputWrapper>
              <Input
                className={errors.firstName && 'error'}
                ref={register}
                name="firstName"
                type="text"
                placeholder="First Name"
              />
              {errors.firstName && <ErrorIcon src={ErrorIconSvg} alt="error" />}
              {errors.firstName && (
                <ErrorMessage>
                  {(errors.firstName as FieldError).message}
                </ErrorMessage>
              )}
            </InputWrapper>
            <InputWrapper>
              <Input
                className={errors.lastName && 'error'}
                ref={register}
                name="lastName"
                type="text"
                placeholder="Last Name"
              />
              {errors.lastName && <ErrorIcon src={ErrorIconSvg} alt="error" />}
              {errors.lastName && (
                <ErrorMessage>
                  {(errors.lastName as FieldError).message}
                </ErrorMessage>
              )}
            </InputWrapper>
            <InputWrapper>
              <Input
                ref={register}
                className={errors.email && 'error'}
                name="email"
                type="email"
                placeholder="Email Address"
              />
              {errors.email && <ErrorIcon src={ErrorIconSvg} alt="error" />}
              {errors.email && (
                <ErrorMessage>
                  {(errors.email as FieldError).message}
                </ErrorMessage>
              )}
            </InputWrapper>
            <InputWrapper>
              <Input
                className={errors.password && 'error'}
                ref={register}
                name="password"
                type="password"
                placeholder="Password"
              />
              {errors.password && <ErrorIcon src={ErrorIconSvg} alt="error" />}
              {errors.password && (
                <ErrorMessage>
                  {(errors.password as FieldError).message}
                </ErrorMessage>
              )}
            </InputWrapper>
            <Button>CLAIM YOUR FREE TRIAL</Button>
            <TnC>
              By clicking the button, you are agreeing to our{' '}
              <a href="#a">Terms and Services</a>
            </TnC>
          </Form>
        </section>
      </Wrapper>

      <Footer>
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1"
          target="__blank"
        >
          Frontend Mentors
        </a>
        . Coded by <a target="__blank" href="https://amalcodes.com/">Alfian Akmal Hanantio.</a>
      </Footer>
    </ThemeProvider>
  );
};

export default App;
