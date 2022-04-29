import React from 'react';
import { Button } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { DownOutlined } from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Notice from './Notice';

class Banner extends React.PureComponent {
  state = {
    isNoticeVis: true
  }

  goAnchorPoint = (elemId) => {
    let anchorH = document.getElementById(elemId).offsetTop
    if(document.documentElement.scrollTop){
        document.documentElement.scrollTop=anchorH
    }else if(document.body.scrollTop){
        document.body.scrollTop=anchorH
    }else{
        document.documentElement.scrollTop=anchorH
        document.body.scrollTop=anchorH
    }
  }

  componentDidUpdate() {
    setTimeout(() => {
      // this.setState({isNoticeVis: false})
    }, 8000);
  }

  render() {
    const { ...currentProps } = this.props;
    const { dataSource } = currentProps;
    delete currentProps.dataSource;
    delete currentProps.isMobile;
    
    return (
      <div {...currentProps} {...dataSource.wrapper}>
        <Notice isNoticeVis={true} />
        <QueueAnim
          key="QueueAnim"
          type={['bottom', 'top']}
          delay={200}
          {...dataSource.textWrapper}
        >
          <div key="title" {...dataSource.title}>
            {typeof dataSource.title.children === 'string' &&
            true ? (
              < img src={'./public/img/log.png'} width="100%" alt="img" />
            ) : (
              dataSource.title.children
            )}
          </div>
          <div key="content" {...dataSource.content} style={{fontSize: "24px"}}>
            {dataSource.content.children}
          </div>
          <Button style={{marginLeft: "40px"}} ghost key="button" {...dataSource.button} onClick={() => { window.open("http://xhuntermng.alipay.com", '_blank'); }}>
            {dataSource.button.children}
          </Button>
          <Button help key="button" className='help' disabled>
            <span>帮助手册</span><span style={{fontSize: "14px"}}>(建设中)</span>
          </Button>
        </QueueAnim>
        <TweenOne
          animation={{
            y: '-=20',
            yoyo: true,
            repeat: -1,
            duration: 1000,
          }}
          className="banner0-icon"
          key="icon"
        >
          <DownOutlined onClick={() => { this.goAnchorPoint('Feature0_0') }} />
        </TweenOne>
      </div>
    );
  }
}
export default Banner;