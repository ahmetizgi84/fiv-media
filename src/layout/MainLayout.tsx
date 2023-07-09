import { FC, ReactNode, CSSProperties } from "react";
import { Layout, Space } from "antd";
import Navbar from "@/components/Navbar/Navbar";

const { Footer, Content } = Layout;

interface Props {
  children: ReactNode;
}

const layoutStyle: CSSProperties = {
  //   backgroundColor: "#d1d1d1",
  background: "var(--c-bg)",
};

const contentStyle: CSSProperties = {
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  //   backgroundColor: "#108ee9",
};

const footerStyle: CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "var(--c-subBg)",
};

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout style={layoutStyle}>
        <Navbar />
        <Content style={contentStyle}>{children}</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Space>
  );
};

export default MainLayout;
