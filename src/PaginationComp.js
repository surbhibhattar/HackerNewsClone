import React from "react";
import { Pagination } from "react-bootstrap";
import "./PaginationComp.css";
export function PaginationComp(props) {
  return (
    <Pagination>
      <Pagination.Item
        active={props.pNo === 1 ? true : false}
        onClick={() => props.setPNo(1)}
      >
        {1}
      </Pagination.Item>
      <Pagination.Item
        active={props.pNo === 2 ? true : false}
        onClick={() => props.setPNo(2)}
      >
        {2}
      </Pagination.Item>
      <Pagination.Item
        active={props.pNo === 3 ? true : false}
        onClick={() => props.setPNo(3)}
      >
        {3}
      </Pagination.Item>
    </Pagination>
  );
}
