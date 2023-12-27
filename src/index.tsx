import { createRoot } from 'react-dom/client';
import { App } from './components/App';
const container = document.getElementById('root');
if (!container) {
  throw new Error('add div with #root to the public/index.html')
}
const root = createRoot(container);
root.render(<App />);