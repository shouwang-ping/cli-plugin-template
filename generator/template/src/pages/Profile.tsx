import React, { useEffect, useState } from 'react';
import { ModalComp } from '../../@ping/dolphin-ui/modal'
import { Button, Layout } from 'antd';

// 自定义内置hooks
import {useBtnLoading} from '../../@ping/react-home/hooks/my'

const Profile = () => {
  debugger
  const [vis1, setVis1] = useState(false)
  const [vis2, setVis2] = useState(false)
  const [loadingState, start, onSuccess] = useBtnLoading()
  const [loadingState2, start2] = useBtnLoading()

  useEffect(() => {

  }, [])
  
  const add = () => {
    start(5000)
    setVis1(true)
  }
  const { Content } = Layout
  return (
    <Layout>
      <Content style={{ margin: '20px', backgroundColor: '#fff' }}>
        个人中心 & 设置
        <Button loading={loadingState} onClick={add}>新镇权限1</Button>
        <Button loading={loadingState2} onClick={() => {
          start2(1000)
          setVis2(true)
        }}>延迟1s完成</Button>
        <Button loading={loadingState} onClick={() => {
          setTimeout(() => {
            onSuccess()
          }, 2000)
        }}>2s成功</Button>

        <ModalComp
          title={"弹框一"}
          visible={vis1}
          onOk={(value: any) => {
            console.log(value, '获取输入值1')
          }}
          onCancel={
            (value: any) => {
              console.log("1取消了-回调值：", value)
            }
          }
        >

        </ModalComp>
        <ModalComp
          title={"弹框二"}
          visible={vis2}
          onOk={(value: any) => {
            console.log(value, '获取输入值2')
          }}
          onCancel={
            (value: any) => {
              console.log("2取消了-回调值：", value)
            }
          }
        >

        </ModalComp>
      </Content>
      <Content>
        此页面仅游客可见
        <Button>换肤</Button>
      </Content>
      <Content>
        此页面仅会员可见
      </Content>
      <Content>
        此页面仅管理员可见
      </Content>
    </Layout>
  )
}
export default Profile;