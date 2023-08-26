import React, { useState } from "react";
import { TextField, Button, Typography, Stack } from "@mui/material";
//import BMI from '../assets/images/BMI.jpg';
const BMICalculator = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  const calculateBMI = () => {
    if (weight !== 0 && height !== 0) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
    } else {
      alert("Please enter valid values");
    }
  };

  const getBmiCategory = () => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Normal weight";
    } else if (bmi >= 15 && bmi < 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  };

  return (
    <div>
      <Typography variant="h4" align="center">
        BMI Calculator
      </Typography>
      <Stack spacing={2} padding={2} width="50%" margin="auto">
        <TextField
          id="weight"
          label="Weight (in kg)"
          type="number"
          placeholder="0"
          onChange={(e) => setWeight(e.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              calculateBMI();
            }
          }}
        />
        <TextField
          id="height"
          label="Height (in cm)"
          type="number"
          placeholder="0"
          onChange={(e) => setHeight(e.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              calculateBMI();
            }
          }}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ backgroundColor: 'orange' }}
          onClick={() => calculateBMI()}
        >
          Calculate
        </Button>

        {bmi !== 0 && (
          <Stack
            sx={{
              backgroundColor: "#f4f4f6",
              borderRadius: "4px",
              padding: "16px",
            }}
            spacing={1}
          >
            <Typography variant="h5">
              Your BMI is :{" "}
              <span style={{ color: "primary", fontWeight: "bold" }}>
                {`${bmi} kg/m\u00B2`}
              </span>
            </Typography>
            <Typography variant="h5">
              BMI Category :{" "}
              <span style={{ color: "primary", fontWeight: "bold" }}>
                {getBmiCategory()}
              </span>
            </Typography>
          </Stack>
        )}
      </Stack>
    </div>
  );
};

export default BMICalculator;
