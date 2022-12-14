import { FC, FormEvent, useRef } from 'react';
import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import SignInMessage from '../../components/sign-in-message/sign-in-message';
import { SignInType } from '../../types/sign-in-type.enum';
import { useAppDispatch } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { AuthData } from '../../types/auth-data';
import { loginAction } from '../../store/api-actions';

type Props = {
  signInType?: SignInType;
}

const SignInPage: FC<Props> = (props) => {
  let { signInType } = props;
  signInType = signInType ?? SignInType.Regular;

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          {signInType === SignInType.Error ?
            <SignInMessage message={'Please enter a valid email address'}/> : null}
          {signInType === SignInType.Message ?
            <SignInMessage message={'We can’t recognize this email <br/> and password combination. Please try again.'}/> : null}
          <div className="sign-in__fields">
            <div className={`sign-in__field${signInType === SignInType.Error ? ' sign-in__field--error' : ''}`}>
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" ref={loginRef}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" ref={passwordRef}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default SignInPage;
