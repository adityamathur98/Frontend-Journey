import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0a0e21;
  padding-top: 60px;
  padding-bottom: 80px;
  min-height: 100vh;
`;

export const Title = styled.h1`
  text-align: center;
  color: #ffffff;
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 500;
  margin: 0px;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const BmiLevelsImage = styled.img`
  width: 90%;
  margin-top: 20px;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    width: 80%;
    margin-top: 40px;
    margin-bottom: 45px;
    max-width: 700px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1d1e33;
  width: 90%;
  border-radius: 8px;
  padding: 30px 35px;
  max-width: 500px;
`;

export const MeasurementsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MeasurementCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0a0e21;
  width: 46.5%;
  border-radius: 8px;
  padding: 30px;
`;

export const Measurement = styled.p`
  color: #ffffff;
  font-family: "Roboto";
  font-size: 24px;
  font-weight: 500;
  margin: 0px;
  margin-bottom: 15px;
`;

export const MeasurementValue = styled.p`
  color: #ffffff;
  font-family: "Roboto";
  font-size: 52px;
  font-weight: 600;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const Unit = styled.span`
  font-size: 20px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 25px;
  margin-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background-color: #1d1e33;
  font-size: 26px;
  font-weight: bold;
  width: 50px; /* Increased width */
  height: 50px; /* Increased height */
  border: 2px solid #ffffff;
  border-radius: 50%; /* Circular buttons */
  margin: 0 8px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #30345e;
    transform: scale(1.1); /* Small hover effect */
  }

  &:active {
    transform: scale(0.95); /* Click effect */
  }
`;

export const ResultContent = styled.p`
  color: #4ade80;
  font-family: "Roboto";
  font-size: 36px;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const ResultText = styled.span`
  font-size: 56px;
  font-weight: 700;
`;
