import React from "react";
import { Card } from "antd";

export default function Loading() {
  return (
    <div>
      <Card style={{ width: "100%", marginTop: 16 }} loading></Card>
      <Card style={{ width: "100%", marginTop: 16 }} loading></Card>
      <Card style={{ width: "100%", marginTop: 16 }} loading></Card>
      <Card style={{ width: "100%", marginTop: 16 }} loading></Card>
    </div>
  );
}
