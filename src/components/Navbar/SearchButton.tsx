import { SearchOutlined } from "@ant-design/icons";
import { Dropdown, Button, Input } from "antd";
import type { MenuProps } from "antd";

const { Search } = Input;

const items: MenuProps["items"] = [
  {
    label: (
      <Search
        placeholder="input search text"
        // onSearch={onSearch}
        style={{ width: 200 }}
      />
    ),
    key: "search",
  },
];

const SearchButton = () => {
  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      className="navbar_search_button"
    >
      <Button icon={<SearchOutlined />} onClick={(e) => e.preventDefault()} />
    </Dropdown>
  );
};

export default SearchButton;
