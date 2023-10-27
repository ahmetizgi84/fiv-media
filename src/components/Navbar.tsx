import { List, XLg } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { SelectLanguage } from '.';
import { useTranslation } from 'react-i18next';
import  {useState} from 'react'


const menuItems = ['about', 'contact', 'services'];

const Navbar = () => {
  const { t } = useTranslation();
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="shadow-md w-full sticky top-0 left-0 right-0 z-50 bg-[#1d1d1d]  homesection">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          <Link to="/">
            <p className="m-0 text-3xl font-bold">ETMedia</p>
          </Link>
          <ul className="hidden md:flex items-center m-0 uppercase">
            {menuItems.map(menuItem => (
              <li key={menuItem}>
                <Link
                  to={`/${menuItem}`}
                  className="pl-12 text-sm font-semibold tracking-wider hover:transition hover:duration-150 hover:ease-in-out hover:underline-offset-4 hover:underline hover:translate-x-1">
                  {t(`navbar.${menuItem}`)}
                </Link>
              </li>
            ))}

            <li className="pl-12 text-sm font-semibold tracking-wider">
              <SelectLanguage />
            </li>
          </ul>
          <button className="block md:hidden rounded-md border border-gray-400 px-1.5 py-1.5 z-50" onClick={handleClick}>
            {!nav  ?  <List size={18} /> : <XLg /> }
          </button>
         
        </div>
      </div>

     
     
      <div className={
          !nav
            ? "hidden "
            : "absolute top-0 left-0 w-full h-96 bg-[#1d1d1d] flex flex-col  justify-center items-center  "
        }>

<div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center justify-center">
        <div className="flex  items-center py-6  flex-col ">
          <Link to="/">
            <p className=" flex md:hidden m-0 text-3xl font-bold ml-14">ETMedia</p>
          </Link>
          <ul className="flex md:hidden items-center m-0 uppercase flex-col gap-5">
            {menuItems.map(menuItem => (
              <li key={menuItem}>
                <Link
                  to={`/${menuItem}`}
                  className="pl-12 text-sm font-semibold tracking-wider hover:transition hover:duration-150 hover:ease-in-out hover:underline-offset-4 hover:underline hover:translate-x-1">
                  {t(`navbar.${menuItem}`)}
                </Link>
              </li>
            ))}

            <li className="pl-12 text-sm font-semibold tracking-wider">
              <SelectLanguage />
            </li>
          </ul>
         
         
          </div>
          </div>

     </div> 
      
    

    </div>
    
  );
};

export default Navbar;
