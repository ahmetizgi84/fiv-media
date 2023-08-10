import { List } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { SelectLanguage } from '.';

const menuItems = ['about', 'contact', 'products', 'testimonials'];

const Navbar = () => {
  return (
    <div className="shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          <Link to="/">
            <p className="m-0 text-xl font-bold">ETMedia</p>
          </Link>
          <ul className="hidden md:flex items-center m-0 uppercase">
            {menuItems.map(menuItem => (
              <li key={menuItem}>
                <Link
                  to={`/${menuItem}`}
                  className="pl-12 text-sm font-semibold tracking-wider hover:transition hover:duration-150 hover:ease-in-out hover:underline-offset-4 hover:underline hover:translate-x-1">
                  {menuItem}
                </Link>
              </li>
            ))}

            <li className="pl-12 text-sm font-semibold tracking-wider">
              <SelectLanguage />
            </li>
          </ul>

          <button className="block md:hidden rounded-md border border-gray-400 px-1.5 py-1.5">
            <List size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
