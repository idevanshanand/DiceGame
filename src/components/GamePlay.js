import { styled } from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { useState } from "react";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);
  
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max-min) + min);
};

const roleDice = () => {
    // If number is not selected we will return
    if(!selectedNumber){
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev) => randomNumber);

    if(selectedNumber === randomNumber){
      setScore((prev) => prev + randomNumber);
    }
    else{
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
};

  const resetScore = () => {
    setScore(0);
  }

  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError}/>
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <Button className="btnStart" onClick={resetScore}>Reset</Button>
        <button 
        onClick={() => setShowRules((prev) => !prev)}
        className="btnStart"
        >{showRules ? "Hide" : "Show"} Rules</button>
      </div>
      {showRules && <Rules/>}
      </MainContainer>
    );
}

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 10px;

.top-section{
  display: flex;
  justify-content: space-around;
  align-items: end;
}

.btns{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 25px;
}
`

const Button = styled.button`
  background-color: white;
  border: 1px solid black;
  color: black;

  &:hover{
    background-color: black;
    border: 1px solid transparent;
    color: white;
`