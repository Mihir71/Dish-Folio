

const JoinUs = () => {
  const list = [
    "Unlock a world of delicious possibilities",
    "Play with flavors and ingredients",
    "Reveal your culinary secrets",
    "Be aware of the dietary information",
    "Obtain expert cooking tips",
    "Accomplish a noteworthy rank"
  ]
  return (
    <>
    <div className="Join">
      <img src="https://www.thespruceeats.com/thmb/Q0schrGA1TOajpjDjCqLGipqcBA=/5101x3401/filters:fill(auto,1)/GettyImages-639389404-5c450e724cedfd00015b09d5.jpg" alt="Improve Your Skills" />
    </div>

    <div className="US">
         <h1>Expand your knowledge and proficiency</h1>
         {
          list.map((item, index) => (
            <p  className="skillitem"  key={index}>{item}</p>
          )

         )}
         <button className="SignUp">SIGN UP</button>
    </div>
    </>
  )
}

export default JoinUs