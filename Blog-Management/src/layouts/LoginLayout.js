/**
 * 2018-1-09 Jifeng Cheng
 * login page
 */

import React from 'react';
import { Layout, Form, Input, Icon, Button, Checkbox } from 'antd';
import styles from './LoginLayout.less';

const { Content } = Layout;
const FormItem = Form.Item;

class LoginLayout extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Content className={styles.bgimg}>
          <Form className={styles.login_form}>
            <FormItem>
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            </FormItem>
            <FormItem>
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            </FormItem>
            <FormItem>
                <Checkbox>Remember me</Checkbox>
              <Button type="primary" htmlType="submit" className={styles.login_form_button}>
                Log in
              </Button>
            </FormItem>
          </Form>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>
          Copyright ©2016 Created by Chengjifeng
        </Footer> */}
      </Layout>
    )
  }
}

export default LoginLayout;
