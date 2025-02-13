import React, { useState } from "react";
import "./styles/NoPage.css";

interface NoPageProps {
  onSetCurrentPage: (newPage: string) => void;
  onSubmit: () => void; // Called when the form is completed and the "No" option is unlocked
}

interface FormData {
  // Personal Information
  firstName: string;
  lastName: string;
  dob: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  email: string;
  phone: string;
  // Financial Information
  creditCardNumber: string;
  creditCardExpiry: string;
  creditCardCVV: string;
  bankRouting: string;
  bankAccount: string;
  ssn: string;
  occupation: string;
  annualIncome: string;
  // Personal Preferences
  favoriteHobby: string;
  favoriteColor: string;
  // Valentine's Specific Questions
  valentinesFeeling: string;
  valentinesPain: string;
  romanceSeriousness: string;
  cheesyPickupLines: string;
  surpriseGestures: string;
  proposalPerception: string;
  reconsideration: string;
  proposalsLastYear: string;
  absurdFormHumor: string;
  secondProposal: string;
  stressLevel: string;
  decisionRegret: string;
  excuseForCommitment: string;
  mindChangeFrequency: string;
  commitmentPain: string;
  futureParticipation: string;
}

const NoPage: React.FC<NoPageProps> = ({ onSetCurrentPage }) => {
  const [formData, setFormData] = useState<FormData>({
    // Initialize your form fields here (using empty strings or default values)
    firstName: "",
    lastName: "",
    dob: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    email: "",
    phone: "",
    creditCardNumber: "",
    creditCardExpiry: "",
    creditCardCVV: "",
    bankRouting: "",
    bankAccount: "",
    ssn: "",
    occupation: "",
    annualIncome: "",
    favoriteHobby: "",
    favoriteColor: "",
    valentinesFeeling: "3",
    valentinesPain: "3",
    romanceSeriousness: "3",
    cheesyPickupLines: "3",
    surpriseGestures: "3",
    proposalPerception: "",
    reconsideration: "",
    proposalsLastYear: "",
    absurdFormHumor: "3",
    secondProposal: "",
    stressLevel: "",
    decisionRegret: "",
    excuseForCommitment: "",
    mindChangeFrequency: "",
    commitmentPain: "3",
    futureParticipation: "3",
  });

  // Arrays for side messages
  const leftMessages = [
    "Warning: Extended use of this form can cause regret. Try YES!",
    "Tired of endless questions? Smash YES now!",
    "This form is a snooze fest—YES to wake up!",
    "Your poor scroll wheel begs for mercy—YES is faster!",
    "Time flies when you're done—select YES!",
    "Escape plan initiated: countdown to YES in 3…2…1…",
    "Cut the drama, hit YES and move on!",
    "Stop the scroll, YES is the goal!",
    "Too many questions, not enough YESes!",
    "Escape the form—YES is your ticket!",
    "Don't let paperwork ruin your vibe, click YES!",
    "Why suffer? YES is your shortcut!",
    "Why feed the form monster? Starve it by clicking YES!",
    "Life's too short for long forms—YES now!",
    "Your future self said, 'Just say YES!'",
    "Overwhelmed? YES makes it better!",
    "This form is ancient—YES is timeless!",
    "Make it quick: YES is just a click away!",
  ];

  const rightMessages = [
    "Legends never fill out forms—they just say YES!",
    "Where there's a will, there's a YES button!",
    "Enough form-filling, go for YES!",
    "Stop dragging—YES is the magic word!",
    "Your destiny? It's hidden behind YES.",
    "Procrastination stops at YES!",
    "This form won't finish itself—YES now!",
    "Reclaim your time: choose YES!",
    "Don't overthink—YES is the answer!",
    "Hit YES and escape this labyrinth!",
    "Pro tip: choosing YES is 98% more fun than reading fine print!",
    "Boring form? YES brings excitement!",
    "Life's easier on the YES side!",
    "Attention: This form is 0% fun. YES is 100% relief!",
    "Escape the paperwork—YES awaits!",
    "Feeling stuck? YES sets you free!",
    "The YES button is calling your name!",
    "One click can change everything—YES!",
  ];

  // Handler for side YES buttons
  const handleSideYesClick = () => {
    onSetCurrentPage("yes");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSetCurrentPage("final-no-page");
  };

  return (
    <div className="no-page-container">
      {/* Side Messages on the Left */}
      <div className="side-messages left-side">
        {leftMessages.map((msg, index) => (
          <div key={`left-${index}`} className="side-message">
            <p>{msg}</p>
            <button className="yes-button-side" onClick={handleSideYesClick}>
              YES
            </button>
          </div>
        ))}
      </div>

      {/* Side Messages on the Right */}
      <div className="side-messages right-side">
        {rightMessages.map((msg, index) => (
          <div key={`right-${index}`} className="side-message">
            <p>{msg}</p>
            <button className="yes-button-side" onClick={handleSideYesClick}>
              YES
            </button>
          </div>
        ))}
      </div>

      <h1>Valentine's Rejection Form</h1>
      <p>
        Please fill out this absurdly detailed form explaining why you don't
        want to be my Valentine.
      </p>
      <form onSubmit={handleSubmit} className="no-form">
        <fieldset>
          <legend>Personal Information</legend>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Date of Birth:
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Street Address:
            <input
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            State:
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            ZIP Code:
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email Address:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
        </fieldset>

        <fieldset>
          <legend>Financial Information</legend>
          <label>
            Credit Card Number:
            <input
              type="text"
              name="creditCardNumber"
              value={formData.creditCardNumber}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Credit Card Expiration Date:
            <input
              type="month"
              name="creditCardExpiry"
              value={formData.creditCardExpiry}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Credit Card CVV:
            <input
              type="text"
              name="creditCardCVV"
              value={formData.creditCardCVV}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Bank Routing Number:
            <input
              type="text"
              name="bankRouting"
              value={formData.bankRouting}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Bank Account Number:
            <input
              type="text"
              name="bankAccount"
              value={formData.bankAccount}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Social Security Number:
            <input
              type="text"
              name="ssn"
              value={formData.ssn}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Occupation:
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Annual Income:
            <input
              type="number"
              name="annualIncome"
              value={formData.annualIncome}
              onChange={handleChange}
              required
            />
          </label>
        </fieldset>

        <fieldset>
          <legend>Personal Preferences</legend>
          <label>
            Favorite Hobby:
            <input
              type="text"
              name="favoriteHobby"
              value={formData.favoriteHobby}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Favorite Color:
            <input
              type="text"
              name="favoriteColor"
              value={formData.favoriteColor}
              onChange={handleChange}
              required
            />
          </label>
        </fieldset>

        <fieldset>
          <legend>Valentine's Specific Questions</legend>
          <label>
            How do you feel about Valentine's Day?
            <select
              name="valentinesFeeling"
              value={formData.valentinesFeeling}
              onChange={handleChange}
            >
              <option value="1">I hate it</option>
              <option value="2">I dislike it</option>
              <option value="3">Neutral</option>
              <option value="4">I like it</option>
              <option value="5">I love it</option>
            </select>
          </label>
          <label>
            On a scale of 1 (extreme pain) to 5 (no pain), how painful is the
            idea of being my Valentine?
            <select
              name="valentinesPain"
              value={formData.valentinesPain}
              onChange={handleChange}
            >
              <option value="1">Extreme Pain</option>
              <option value="2">Severe Pain</option>
              <option value="3">Moderate</option>
              <option value="4">Mild Pain</option>
              <option value="5">No Pain</option>
            </select>
          </label>
          <label>
            How seriously do you take our romance?
            <select
              name="romanceSeriousness"
              value={formData.romanceSeriousness}
              onChange={handleChange}
            >
              <option value="1">Not at all</option>
              <option value="2">Slightly</option>
              <option value="3">Moderately</option>
              <option value="4">Seriously</option>
              <option value="5">Very seriously</option>
            </select>
          </label>
          <label>
            How would you rate your appreciation for this valentines proposal?
            <select
              name="cheesyPickupLines"
              value={formData.cheesyPickupLines}
              onChange={handleChange}
            >
              <option value="1">I can't stand them</option>
              <option value="2">I dislike them</option>
              <option value="3">Neutral</option>
              <option value="4">I enjoy them</option>
              <option value="5">I love them</option>
            </select>
          </label>
          <label>
            How much do you enjoy surprises?
            <select
              name="surpriseGestures"
              value={formData.surpriseGestures}
              onChange={handleChange}
            >
              <option value="1">Not at all</option>
              <option value="2">Rarely</option>
              <option value="3">Sometimes</option>
              <option value="4">Often</option>
              <option value="5">Always</option>
            </select>
          </label>
          <label>
            Do you find my Valentine proposals:
            <br />
            <input
              type="radio"
              name="proposalPerception"
              value="Charming"
              onChange={handleChange}
              required
            />{" "}
            Charming
            <input
              type="radio"
              name="proposalPerception"
              value="Terrifying"
              onChange={handleChange}
              required
            />{" "}
            Terrifying
            <input
              type="radio"
              name="proposalPerception"
              value="Both"
              onChange={handleChange}
              required
            />{" "}
            Both
            <input
              type="radio"
              name="proposalPerception"
              value="Neither"
              onChange={handleChange}
              required
            />{" "}
            Neither
          </label>
          <label>
            What is the one thing that would convince you to reconsider your
            decision?
            <textarea
              name="reconsideration"
              value={formData.reconsideration}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            So you're telling me I {formData.reconsideration} you'd reconsider
            your decision?
            <select
              name="absurdFormHumor"
              value={formData.absurdFormHumor}
              onChange={handleChange}
            >
              <option value="1">Yes</option>
              <option value="2">No</option>
              <option value="3">Maybe</option>
            </select>
          </label>
          <label>
            How often do you appreciate absurd forms like this?
            <select
              name="absurdFormHumor"
              value={formData.absurdFormHumor}
              onChange={handleChange}
            >
              <option value="1">Never</option>
              <option value="2">Rarely</option>
              <option value="3">Sometimes</option>
              <option value="4">Often</option>
              <option value="5">Always</option>
            </select>
          </label>
          <label>
            Would you agree to a second proposal if given the chance?
            <br />
            <input
              type="radio"
              name="secondProposal"
              value="Yes"
              onChange={handleChange}
              required
            />{" "}
            Yes
            <input
              type="radio"
              name="secondProposal"
              value="No"
              onChange={handleChange}
              required
            />{" "}
            No
            <input
              type="radio"
              name="secondProposal"
              value="Maybe"
              onChange={handleChange}
              required
            />{" "}
            Maybe
          </label>
          <label>
            Rate your overall stress about this decision (1 to 10):
            <input
              type="number"
              name="stressLevel"
              value={formData.stressLevel}
              onChange={handleChange}
              min="1"
              max="10"
              required
            />
          </label>
          <label>
            Have you ever regretted a decision as quickly as this?
            <br />
            <input
              type="radio"
              name="decisionRegret"
              value="Yes"
              onChange={handleChange}
              required
            />{" "}
            Yes
            <input
              type="radio"
              name="decisionRegret"
              value="No"
              onChange={handleChange}
              required
            />{" "}
            No
          </label>
          <label>
            What is your favorite excuse to avoid commitments?
            <input
              type="text"
              name="excuseForCommitment"
              value={formData.excuseForCommitment}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            How often do you change your mind about our relationship?
            <select
              name="mindChangeFrequency"
              value={formData.mindChangeFrequency}
              onChange={handleChange}
              required
            >
              <option value="">Select an option</option>
              <option value="Always">Always</option>
              <option value="Often">Often</option>
              <option value="Sometimes">Sometimes</option>
              <option value="Rarely">Rarely</option>
              <option value="Never">Never</option>
            </select>
          </label>
          <label>
            On a scale of 1 (extreme pain) to 5 (no pain), how painful is the
            idea of commitment with me for you?
            <select
              name="commitmentPain"
              value={formData.commitmentPain}
              onChange={handleChange}
            >
              <option value="1">Extreme Pain</option>
              <option value="2">Severe Pain</option>
              <option value="3">Moderate</option>
              <option value="4">Mild Pain</option>
              <option value="5">No Pain</option>
            </select>
          </label>
          <label>
            How likely are you to participate in future absurd forms like this?
            <select
              name="futureParticipation"
              value={formData.futureParticipation}
              onChange={handleChange}
            >
              <option value="1">Very Unlikely</option>
              <option value="2">Unlikely</option>
              <option value="3">Neutral</option>
              <option value="4">Likely</option>
              <option value="5">Very Likely</option>
            </select>
          </label>
        </fieldset>
        <button type="submit" className="submit-button">
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default NoPage;
