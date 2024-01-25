import '../styles/globals.css'
import '../Styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/custom.css';
import '../Styles/App.css';
import Navbar from '../components/navbar'; 
import Footer from '../components/footer';

function App({Component, pageProps})
{
  
  return (
  <>
      <Navbar />
      <Component {...pageProps} />
      <Footer></Footer>
      </>
  );
}
export default App;

