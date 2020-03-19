import React, { useState } from "react";
import { Table, Divider } from "antd";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: text => <Link>{text}</Link>
  },
  {
    title: "Phone",
    dataIndex: "phone"
  },
  {
    title: "Status",
    dataIndex: "status"
  },
  {
    title: "Base",
    dataIndex: "base"
  },
  {
    title: "Owner",
    dataIndex: "bikeOwner"
  }
];
const data = [
  {
    key: "1",
    name: "Patrick Otieno",
    phone: 718714785,
    status: "Active",
    base: "Kilo",
    bikeOwner: "George Okello"
  },
  {
    key: "2",
    name: "Kip Cyrus",
    phone: 726158347,
    status: "Active",
    base: "Stage",
    bikeOwner: "Patrick Nyatindo"
  },
  {
    key: "3",
    name: "Frank Franco",
    phone: 723743698,
    status: "Active",
    base: "Milimani",
    bikeOwner: "Patrick Nyatindo"
  }
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: record => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name
  })
};

export default function AudienceTable() {
  // eslint-disable-next-line no-unused-vars
  const [selectionType, setSelectionType] = useState("checkbox");

  return (
    <div>
      <Divider />

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
}
