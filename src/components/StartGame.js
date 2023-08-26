const StartGame = ({toggle}) => {
  return (
    <div className='startParent'>
      <img src='/images/dices.png' alt='img' />

      <div className='startChild'>
        <h1>Dice Game</h1>
        <button className='btnStart' onClick={toggle}>Play Now</button>
      </div>
    </div>
  );
}

export default StartGame;