import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Question from './pages/Question.tsx/Question';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/question" element={<Question/>}/>
            </Routes>
        </Router>
    );
};

export default App;