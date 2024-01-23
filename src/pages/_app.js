import '../styles/globals.css'
import '../Styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/custom.css';
import '../Styles/App.css';
import Navbar from '../components/navbar'; // Adjust the path as necessary

function App({Component, pageProps})
{
  
  return (
  <>
      <Navbar />
      <Component {...pageProps} />
  </>
  );
}
export default App;

