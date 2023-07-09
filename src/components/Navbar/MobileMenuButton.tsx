import {
  MenuOutlined,
  HomeOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Dropdown, Button, Input } from "antd";
import type { MenuProps } from "antd";

const { Search } = Input;

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: "Pages",
    key: "pages",
    icon: <AppstoreOutlined />,
    disabled: false,
  },
  {
    label: "Portfolio",
    key: "portfolio",
    icon: <AppstoreOutlined />,
    disabled: false,
  },
  {
    label: "Blogs",
    key: "blogs",
    icon: <AppstoreOutlined />,
    disabled: false,
  },
  {
    label: "Contact",
    key: "contact",
    icon: <AppstoreOutlined />,
    disabled: false,
  },
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

const MobileMenuButton = () => {
  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      className="mobile_menu_button"
    >
      <Button icon={<MenuOutlined />} onClick={(e) => e.preventDefault()} />
    </Dropdown>
  );
};

export default MobileMenuButton;
