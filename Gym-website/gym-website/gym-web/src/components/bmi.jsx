import React, {useState} from 'react'
import "./bmi.css"


const BMICalculator = () =>{
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState("");
    const [category, setCategory] = useState("");

    const calculateBmi = () =>{
        if (weight && height) {
            const weightKgs = parseFloat(weight);
            const heightMts = parseFloat(height) / 100;
            const bmiVal = weightKgs / (heightMts * heightMts);
            setBmi(bmiVal.toFixed(2));

            if(bmiVal < 18.5){
                setCategory("Underweight");
            }
            else if((18.5<= bmiVal) && (bmiVal<= 24.9)){
                setCategory("Normal weight")
            }
            else if((24.9<= bmiVal) && (bmiVal<= 29.9)){
                setCategory("Overweight")
            }
            else{
                setCategory("Obese")
            }
        }
    };



  return (
    <>
    <div className="bmi-section">
        <div className="bmi-info">
            <h1>What is <span>BMI?</span></h1>
            <p>The BMI, or Body Mass Index, is a numerical measure of a person's body weight in relation to their height. It is commonly used as a simple and quick screening tool to categorize individuals into different weight status categories.  </p>
        </div>
        <div className="bmi-container">
            <h1>Calculate your <span>BMI</span></h1>
            <p>Quickly determinate your Body Mass Index with our precise tools.</p>
            <div className="bmi-input">
                <input type='text' className='weight-input' placeholder='Weight/kg' value={weight} onChange={(e) => setWeight (e.target.value)}/>
                <input type='text' className='height-input' placeholder="Height/cm" value={height} onChange={(e) => setHeight (e.target.value)}/>
            </div>
            <div className="bmi-output">
                {bmi && <p>Your BMI is: {bmi} ({category})</p>}
            </div>
            <button className='bmi-button' onClick={calculateBmi}>Calculate</button>
        </div>
    </div>
    </>
  )
}

export default BMICalculator