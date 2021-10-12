import styled from "styled-components";

export const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  width: 100%;
  min-width: 736px;
`;

export const StyledGridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
  margin-bottom: 20px;
  background-color: ${(props) => props.bgColor};
  &:hover {
    cursor: pointer;
  }
  .card-title {
    min-height: 48px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .card-text {
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
  .card-body {
    padding: 10px;
  }
`;

export const StyledResults = styled.h1`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-left: 20px;
  margin-top: 20px;
`;