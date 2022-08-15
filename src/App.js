import './App.css';
import Landing from './Components/landing';
import { Container } from '@mui/system';
import BusinessList from './Components/businessList';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {

  return (
    <Container maxWidth="md">
      <Routes>
        <Route path='/home' element={<Landing/>}/>
        <Route path='/business/:id' element={<BusinessList />}/>
        <Route path='*'
          element={<Navigate to="/home" replace/>}
         />
      </Routes>
    </Container>
  );
}

export default App;
