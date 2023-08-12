import { ChevronDown, ChevronUp, Check } from 'react-bootstrap-icons';
import * as Select from '@radix-ui/react-select';
import { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SelectLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const { i18n } = useTranslation();

  useEffect(() => {
    const language = getLanguage();
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
  }, []);

  const handleChangeLanguage = useCallback((lng: string) => {
    setCurrentLanguage(lng);
    i18n.changeLanguage(lng);
  }, []);

  const getLanguage = () => i18n.language.substring(0, 2) || window.localStorage.i18nextLng || 'en';

  return (
    <Select.Root defaultValue={currentLanguage} onValueChange={handleChangeLanguage} value={currentLanguage}>
      <Select.Trigger
        className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-black text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
        aria-label="Food">
        <Select.Value placeholder="Select a language" />
        <Select.Icon className="text-violet11">
          <ChevronDown />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal className="z-[999]">
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
                value="en">
                <Select.ItemText>English</Select.ItemText>
                <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                  <Check />
                </Select.ItemIndicator>
              </Select.Item>

              {/* GE */}
              <Select.Item
                className="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
                value="de">
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

export default SelectLanguage;
