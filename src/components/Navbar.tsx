import { List, ChevronDown, ChevronUp, Check } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import * as Select from '@radix-ui/react-select';

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
            Select
            <li className="pl-12 text-sm font-semibold tracking-wider">
              <RadixSelect />
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

const RadixSelect = () => {
  const handleChange = (lang: string) => {
    console.log('lang: ', lang);
  };

  return (
    <Select.Root defaultValue="english" onValueChange={handleChange}>
      <Select.Trigger
        className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-black text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
        aria-label="Food">
        <Select.Value placeholder="Select a language" />
        <Select.Icon className="text-violet11">
          <ChevronDown />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden bg-black rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
            <ChevronUp />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-[5px]">
            {/* EN */}
            <Select.Group>
              <Select.Label className="px-[25px] text-xs leading-[25px] text-mauve11">Select Language</Select.Label>
              <Select.Item
                className="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
                value="english">
                <Select.ItemText>English</Select.ItemText>
                <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                  <Check />
                </Select.ItemIndicator>
              </Select.Item>

              {/* GE */}
              <Select.Item
                className="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
                value="german">
                <Select.ItemText>Deutch</Select.ItemText>
                <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                  <Check />
                </Select.ItemIndicator>
              </Select.Item>
            </Select.Group>

            <Select.Separator className="h-[1px] bg-violet6 m-[5px]" />
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
            <ChevronDown />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
