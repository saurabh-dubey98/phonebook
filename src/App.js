import { useContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import GlobalStyles from "./GlobalStyles";
import { Container, SignoutButton } from './components';
import { SignIn, SignUp, Phonebook } from './pages';
import { AuthContext } from './context/AuthContext';

function App() {
  const { userUID } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userUID) {
      console.log(userUID);
      navigate('/')
    } else {
      navigate('/signin');
    }
  }, [userUID]);

  return <>
    <GlobalStyles />
    <Container>
      <h1>PhoneBook</h1>
      {userUID && <SignoutButton />}
      <Routes>
        <Route path="/" element={<Phonebook />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Container>
  </>;
}

export default App;