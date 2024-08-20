import { createRoot } from 'react-dom/client';
import './index.css';
import ModuleTest from './ModuleTest';
import FirstSlide from './components/FirstSlide/FirstSlide';

const root = createRoot(document.getElementById('root'));
root.render(<FirstSlide />);
