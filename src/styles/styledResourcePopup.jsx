import styled from "styled-components";

const Popup = styled.div`
  width:56% ;
  border-radius: 10px;
  padding: 1%;
  margin: auto;
  margin-top: 3%;
  border: 1px solid rgb(201, 201, 201);
  height:  70%;
  button{
    border-radius: 50px;
    padding: 7px 20px;
    background-color: rgb(27, 126, 255);
    color: white;
    border: none;
    margin: 0 0 0 84.5%;
    cursor: pointer;
  }
`;
const HR = styled.div`
  width: 103.5%;
  margin-left: -1.90%;
  margin-top: 1% ;
`;
const Top = styled.div`
  display: flex;
  p{
    font-size: 130%;
    /* border: 1px solid red; */
    width: 95%;
    margin-top: -0.5%;
  }
  img{
    width: 20px;
    height: 20px;
    cursor: pointer;
    /* margin: 0 0 0 85%; */
    hover{
      cursor: pointer;
      border-radius: 50px;
      background-color: rgb(209, 209, 209);
    }
  }
`;
const Content = styled.div`
  height: 300px;
  overflow-y: scroll;
  /* border: 1px solid blue; */
`;
const SubContent = styled.div`
  display: flex;
`;
const LeftCon = styled.div`
  width: 85%;
  line-height:5px;
  /* border: 1px solid red; */
  h4 {
    hover {
      color: rgb(27, 126, 255);
      text-decoration: underline;
      cursor: pointer;
    }
  }
  p {
    color: gray;
  }
`;
const RightCon = styled.div`
  display: flex;
  img{
    width: 20px;
    margin: 15%;
    height: 20px;
    padding: 10%;
    /* border: 3px solid red; */
    hover{
      cursor: pointer;
      border-radius: 50px;
      background-color: rgb(209, 209, 209);
    }
  }
`;
const Bottom = styled.div`
  display: flex;
`;
const LeftB = styled.div`
  width: 85%;
  line-height:5px;
  color: rgb(27, 126, 255);
  span {
    hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
const RightB = styled.div`
  margin: 3% 0 0 -1%;
`;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  span{
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }
`;

// .span:before {
//   position: absolute;
//   content: "";
//   height: 26px;
//   width: 26px;
//   left: 4px;
//   bottom: 4px;
//   background-color: white;
//   -webkit-transition: .4s;
//   transition: .3s;
// }
// input:checked + .span {
//   background-color: green;
// }
// input:focus + .span {
//   box-shadow: 0 0 1px #2196F3;
// }
// input:checked + .span:before {
//   -webkit-transform: translateX(26px);
//   -ms-transform: translateX(26px);
//   transform: translateX(26px);
// }
// .span.round {
//   border-radius: 34px;
// }
// .span.round:before {
//   border-radius: 50%;
// }

export {
  Popup,
  HR,
  Top,
  Content,
  SubContent,
  LeftCon,
  RightCon,
  Bottom,
  LeftB,
  RightB,
  Switch,
};