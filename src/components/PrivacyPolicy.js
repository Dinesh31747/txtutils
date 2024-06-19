import React from 'react';

function PrivacyPolicy(props) {
  return (
    <div id = 'piracyGlassBg' className="privacy-policy" style={{color: props.mode === 'dark'? 'white':'black'}}>
      <h1>Privacy Policy</h1>
      <p>Effective Date: [Insert Date]</p>
      <h2>Our Commitment to Your Privacy</h2>
      <p>
        We at Textils ("we," "us," or "our") are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose your information when you use our website Textil's.
      </p>
      <h2>We Do Not Collect or Store Personal Information</h2>
      <p>
        This website is designed to be privacy-focused. We do not collect or store any personal information from users. This means we don't track your browsing history, IP address, or any other information that could be used to identify you personally.
      </p>
      <h2>Limited Use of Cookies</h2>
      <p>
        We may use a small number of cookies to facilitate essential website functionality, such as session management. These cookies do not store any personal information and are automatically deleted when you close your browser.
      </p>
      <h2>Third-Party Services</h2>
      <p>
        We may use third-party services like analytics tools to understand how users interact with our website. These services may collect limited, non-personal information about your usage. We encourage you to review the privacy policies of any third-party services we use to learn more about their data practices.
      </p>
      <h2>Your Choices</h2>
      <p>
        Since we don't collect personal information, there's no need to opt out of any marketing communications or data sharing.
      </p>
      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on the Website.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at jataproludinesh9@gmail.com.
      </p>
    </div>
  );
}
export default PrivacyPolicy;
