// src/components/SubscriptionCheckout/SubscriptionCheckout.js
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Subscription/Subscription.css";

const SubscriptionCheckout = () => {
  const [plan, setPlan] = useState("monthly");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiration, setCardExpiration] = useState("");
  const [cvv, setCvv] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);

  const planPrices = {
    monthly: 400,
    threeMonths: 300,
    annual: 200,
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // For demonstration purposes, logging the data
    console.log({
      plan,
      firstName,
      lastName,
      cardNumber,
      cardExpiration,
      cvv,
      postalCode,
    });

    // Show a message upon successful form submission
    alert(`Subscription Successful for the ${plan} plan!`);
    navigate("/Employer_profile");
  };

  const calculateTotal = () => {
    const planCost = planPrices[plan];
    const tax = planCost * 0.1; // Assume 10% tax for demonstration
    return planCost + tax;
  };

  return (
    <div className="checkout-container">
      <h2>Subscription Plans</h2>
      <p>Thank you for choosing us!</p>

      <form onSubmit={handleSubmit}>
        {/* Subscription Plan Selection */}
        <div>
          <h3>Confirm Your Billing Cycle</h3>
          <div>
            <input
              type="radio"
              id="monthly"
              name="plan"
              value="monthly"
              checked={plan === "monthly"}
              onChange={() => setPlan("monthly")}
            />
            <label htmlFor="monthly">Monthly - $400 / Month</label>
          </div>
          <div>
            <input
              type="radio"
              id="threeMonths"
              name="plan"
              value="threeMonths"
              checked={plan === "threeMonths"}
              onChange={() => setPlan("threeMonths")}
            />
            <label htmlFor="threeMonths">3 Months - $300 / Month</label>
          </div>
          <div>
            <input
              type="radio"
              id="annual"
              name="plan"
              value="annual"
              checked={plan === "annual"}
              onChange={() => setPlan("annual")}
            />
            <label htmlFor="annual">Annual - $200 / Month (Best Value)</label>
          </div>
        </div>

        {/* Personal Information */}
        <div>
          <h3>Billing Information</h3>
          <label>
            First Name
            <input
              type="text"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
          <label>
            Last Name
            <input
              type="text"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
          <label>
            Card Number
            <input
              type="text"
              placeholder="Enter your card number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </label>
          <label>
            Expiration Date (MM/YY)
            <input
              type="text"
              placeholder="MM/YY"
              value={cardExpiration}
              onChange={(e) => setCardExpiration(e.target.value)}
              required
            />
          </label>
          <label>
            CVV
            <input
              type="text"
              placeholder="Enter CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </label>
          <label>
            Postal Code
            <input
              type="text"
              placeholder="Enter postal code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />
          </label>
        </div>

        {/* Order Summary */}
        <div>
          <h3>Order Summary</h3>
          <p>Premium Subscription</p>
          <p>Monthly charges: ${planPrices[plan]} / month</p>
          <p>Taxes: ${(calculateTotal() - planPrices[plan]).toFixed(2)}</p>
          <p>Total today: ${calculateTotal().toFixed(2)}</p>
        </div>

        {/* Terms and Conditions */}
        <div>
          <input
            type="checkbox"
            checked={isAgreed}
            onChange={() => setIsAgreed(!isAgreed)}
            required
          />
          <label>
            By placing this order, you agree to our <a href="#">Terms of Service</a>.
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default SubscriptionCheckout;