import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Main from './components/main';
import LoadScripts from './components/load-scripts';
import Footer from './components/footer';

export default function App() {

    useEffect(() => {
        const scripts = [
            { src: "https://code.jquery.com/jquery-3.2.1.slim.min.js" },
            { textContent: `window.jQuery || document.write('<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>')` },
            { src: "https://getbootstrap.com/docs/4.0/assets/js/vendor/popper.min.js" },
            { src: "https://getbootstrap.com/docs/4.0/dist/js/bootstrap.min.js" },
            { src: "https://getbootstrap.com/docs/4.0/assets/js/vendor/holder.min.js" },
        ];
        ReactDOM.render(
            <LoadScripts scriptList={scripts} />,
            document.getElementById('scripts')
        );
    }, [])

    return (
        <div id="main">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}