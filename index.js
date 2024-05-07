// Parameters with definitions
const velecity = { value:10000, unit: 'km/h' }; // velocity (km/h)
const acceleration = { value:3, unit: 'm/s^2'  }; // acceleration (m/s^2)
const duration = { value:3600, unit:'s' }; // seconds (1 hour)
const intialDistance = { value: 0, unit: 'km' }; // distance (km)
const fuelAmount = { value: 5000, unit: 'kg' }; // remaining fuel (kg)
const fuelBurnRate = { value: 0.5, unit: 'kg/s'}; // fuel burn rate (kg/s)

// Function to calculate new velocity based on acceleartion
const calcNewVelelocity = (acceleration, velocity, duration) => {
  // Validate input parameters
  if (typeof acceleration !== 'number' || typeof velocity !== 'number' || typeof duration !== 'number'){
    throw new Error ('Invalid input parameters for calcNewVelocity function');
  }
  //Calculate new velocity based on acceleration
  const calcNewVelelocity = velocity + (acceleration * duration);
  return calcNewVelelocity;
}

// Validate input parameters
if (velocity.unit !== 'km/h' || acceleration.unit !== 'm/s^2' || duration.unit !== 's' || intialDistance.unit !== 'km' || fuelAmount.unit !== 'kg' || fuelBurnRate.unit !== 'kg/s'){
  throw new Error ('Invalid unit of measurement for one or more input parameters');
}
// Convert units to a common unit (m/s, m, kg)
const velocityInMeterPerSecond = velocity.value / 3.6;
const intialDistanceInMeters = intialDistance.value * 1000;

// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (vel, acc, time) => { 
  return vel + (acc*time)
}

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






