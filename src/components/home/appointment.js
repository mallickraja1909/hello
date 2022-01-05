import React from "react";
import { TreeSelect } from 'antd';
import { Form, Input, Button,DatePicker  } from 'antd';
import '../home/appointment.css';

const { TreeNode } = TreeSelect;
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: '{label} is required!',
    types: {
      email: '{label} is not a valid email!',
      number: '{label} is not a valid number!',
    },
    number: {
      range: '{label} must be between {min} and {max}',
    },
  };
const Demo = () => {
    const onFinish = (values) => {
      console.log(values);
    };

    return(
        <div className="block contactBlock">
        <div className="container-fluid">
            <div className="titleHolder">
               <h1><strong>Request </strong>Appointment</h1>
            </div>
    
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item
          name={['user', 'name']}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'Phone']}
          label="Phone"
          rules={[
            {
              type: 'Phone',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'Email']}
          label="Email"
          rules={[
            {
              type: 'Email',
            },
          ]}
        >
            <Input/>
        </Form.Item>
        <Form.Item label="Date">
               <DatePicker />
      </Form.Item>
      <Form.Item  label="Departments">
      <TreeSelect
      showSearch
     
      style={{ width: '50%' }}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
    >
        <TreeNode value="parent 1"  title="DIAGNOSTIC"></TreeNode>
        <TreeNode value="parent 2" title="PSYCOLOGICAL"></TreeNode>
    </TreeSelect>
    </Form.Item>
    <Form.Item  label="Doctors">
      <TreeSelect
      showSearch
     
      style={{ width: '50%' }}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      placeholder="Please select"
    >
         <TreeNode value="parent 1"  title="DIAGNOSTIC"></TreeNode>
        <TreeNode value="parent 2" title="PSYCOLOGICAL"></TreeNode>
    </TreeSelect>
    </Form.Item>
               
        <Form.Item name={['user', 'introduction']} label="Introduction">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit ">
            Submit Now
          </Button>
        </Form.Item>
      </Form>
      </div>
      </div>
    );
  };

export default Demo;