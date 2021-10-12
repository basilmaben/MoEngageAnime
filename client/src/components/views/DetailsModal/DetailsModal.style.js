import styled from "styled-components";

export const StyledModal = styled.div`
  .modal-dialog {
    max-width: 90%;
    height: 90%;
  }
  .modal-content {
    height: 100%;
  }
  .card-img-top {
    margin-bottom: 20px;
    object-fit: cover;
  }
  .modal-body {
    background-color: ${(props) => props.bgColor};
    overflow-y: scroll;
  }
  .card-title {
    min-height: 48px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: initial !important;
    -webkit-box-orient: vertical;
  }
  .card-text {
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: initial !important;
    -webkit-box-orient: vertical;
  }
`;