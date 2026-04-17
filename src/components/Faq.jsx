import React from "react";
import "./Faq.css";

export default function Faq() {
  return (
    <div className="faq-page">
      <div className="faq-container">
        <h1>Frequemtly Asked questions</h1>
        <p className="faq-subtitle">
          Everything you need to know about our loan services
        </p>
        <div className="faq-list">
          <details className="faq-item">
            <summary>How fast can I get approved?</summary>
            <p>Most applicants receive an instant decision within 60 seconds</p>
          </details>
          <details className="faq-item">
            <summary>Do you check credit score?</summary>
            <p>Most applicants receive an instant decision within 60 seconds</p>
          </details>
          <details className="faq-item">
            <summary>What documnets do i need?</summary>
            <p>Most applicants receive an instant decision within 60 seconds</p>
          </details>
          <details className="faq-item">
            <summary>Can i pay off early?</summary>
            <p>Most applicants receive an instant decision within 60 seconds</p>
          </details>
          <details className="faq-item">
            <summary>is my information secure?</summary>
            <p>Most applicants receive an instant decision within 60 seconds</p>
          </details>
          <details className="faq-item">
            <summary>What if I have bad credit?</summary>
            <p>Most applicants receive an instant decision within 60 seconds</p>
          </details>
        </div>
      </div>
    </div>
  );
}
