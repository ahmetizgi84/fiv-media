import { Layout, Row, Col, Typography } from "antd";

import MobileMenuButton from "./MobileMenuButton";
import SearchButton from "./SearchButton";

const { Header } = Layout;
const { Title, Link } = Typography;

const Navbar = () => {
  return (
    <Row style={{ borderBottom: "1px solid var(--c-border)" }}>
      <Col span={18} offset={3}>
        <Header className="navbar_header">
          <Title style={{ margin: 0 }} level={4}>
            FivMedia
          </Title>
          <ul className="navbar_menu">
            <li>
              <Link onClick={(e) => e.preventDefault()}>HOME</Link>
            </li>
            <li>
              <Link onClick={(e) => e.preventDefault()}>PAGES</Link>
            </li>
            <li>
              <Link onClick={(e) => e.preventDefault()}>PORTFOLIO</Link>
            </li>
            <li>
              <Link onClick={(e) => e.preventDefault()}>BLOGS</Link>
            </li>
            <li>
              <Link onClick={(e) => e.preventDefault()}>SHOP</Link>
            </li>
            <li>
              <Link onClick={(e) => e.preventDefault()}>CONTACT</Link>
            </li>
          </ul>
          <SearchButton />

          <MobileMenuButton />
        </Header>
      </Col>
    </Row>
  );
};

export default Navbar;
