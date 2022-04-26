import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './index.css';
import { CheckMx } from "../../@ping/butterfly-ui-react/components/checkMx/index";
import { DragDiv } from "../../@ping/butterfly-ui-react/components/DragDiv";

const { Header, Content, Footer, Sider } = Layout;

import { useAccess } from 'umi';

const Index = () => {
  const access = useAccess();
  let aa = '{"name": "qq", "age": "12"}, {"name": "dfgdg", "age": "fdff"}'
  let bb = `[${aa}]`
  console.log(bb);

  console.log(JSON.parse(bb), '完美');

  return (
    <>
      <DragDiv></DragDiv>
      <CheckMx></CheckMx>
      <Content style={{ margin: '24px 16px 0' }}>
        <a href="http://blog.lgf196.top/ant-simple-pro-document/">ant-simple-pro 文档</a>
        <a href="https://lgf196.top/react/login">ant-simple-pro登录  lgf@163.com & 123456</a>
        <a href="">Fre 小而美的前端框架</a>
        <a href="">花裤衩</a>
        <a href="">难凉热血</a>
        <a href="https://cheng_haohao.oschina.io/reactadmin/#/login">react admin1</a>
        <a href="https://sxfad.github.io/react-admin/build">react admin2</a>
        <h1>{access.btn ? '有权限' : '没权限'}</h1>
      </Content>

      <CopyToClipboard text={"文本为饿反反复复"}
          onCopy={() => alert('复制成功,ctrl+v进行粘贴')}>
          <button>复制</button>
      </CopyToClipboard>
    </>
  )
}
export default Index;