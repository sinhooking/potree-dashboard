import React, { useState } from 'react';
import { Drawer, Button } from 'antd';

const useDrawer = () => {
    const [visible, setVisible] = useState(false);

    const handler = (bool) => setVisible(bool);
    
    return [visible, handler];
}

const DefaultDrawer = () => {
    const [visible, handler] = useDrawer();

    const showDrawer = () => handler(true);
    const onClose = () => handler(false);
    
    return (
        <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
    );
}

export default DefaultDrawer;
