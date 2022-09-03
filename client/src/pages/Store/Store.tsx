import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "./StoreItem";
import storeItems from "../Basket/items.json";
import { useCategory } from './../../contexts/CategoryContext';
import { ICategoryData, ISubCategoryData } from './../../interfaces/dataInterface';

export function Store() {

  const { setClickedCategory, setClickedSubcategory } = useCategory()

  useEffect(() => {
    setClickedCategory({} as ICategoryData)
    setClickedSubcategory({} as ISubCategoryData)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
