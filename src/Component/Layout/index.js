import { Outlet } from 'react-router-dom';
import './index.scss';
import Sidebar from '../Sidebar';

const Layout = () => {
   return (
    <div className='App'> 
      <Sidebar />
      <div className='page'>
         <span className='tags top-tags'>
            &alt;body&gt;
         </span>

         <Outlet />

         <span className='tags bottom-tags'>
            &alt;body&gt;
            <br />
            <span className='bottom-tag-html'>
            &alt;/html&gt;
            </span>
         </span>
      </div>
    </div>
   )
}

export default Layout