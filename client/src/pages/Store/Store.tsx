import React from "react";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "./StoreItem";
import storeItems from "../Basket/items.json";

export function Store() {
  return (
    <>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}