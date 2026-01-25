import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from '../pages/Home';
import EmojiLogin from '../components/Login';

const Routers = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<EmojiLogin />} />
                    {/* <Route path="/about" element={<About />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="*" element={<Error />} /> */}
                </Routes>
            </Router>
        </div>
    )
}

export default Routers;