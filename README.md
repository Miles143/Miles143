#Miles143 #Bible #Charity
This Page is a Non-profit organization page, we've spent much of our time building from the ground up, our Foundation is key here. We are a religious based non-profit organization, that provides help successfully gaining housing, whether temporary or permanent, we feed the homeless with care packages throughout the city, and on sunday at 3pm at 132 Leota St Indianapolis, IN 46202 working closely with our friends from Meet Me Under The Bridge, we also help with clothing whenever possible. We do accept donations which can be sent to Patrick Michael McMahon Corp. Feel free to email/: omnibus19apnea@icloud.com

THIS IS STRICTLY FOR PURPOSES OF THE CREATOR AND FAMILY OF, THIS IS PARTIAL TO THE LICENSE CREATED FOR THIS "APP, PC, TELEPHONE, TELEPHONE NUMBER, AND ASSORTED USB DEVICES, OWNED AND OPPERARTED BY THE CREATOR (PMM). 
THE PURPOSE OF THIS AND INCLUDED FILES IS AT/FOR THE CREATORS DISCRESSION.
23JAN2023 Patrick Michael McMahon. REFER TO LICENSE LAST DATED. This Is Strictly For the Creator and Family of, if interested please contact the creator and Mr.Patrick Michael McMahon would/will be glad to assist in and or about any matters concerning this file and included files pertaining and but not limited to the License Key, this key is NOT for Duplication Purposes, NOR is THIS Key for SALE OR DISTRIBUTION.
A Key can be made if contacted appropraitely. PLEASE REFER TO THIS LAST DATED LICENSE AS A GUIDE OR "CODE OF CONDUCT" Have a Great Day and Than You for checking out my GitHub Page. #Bible
<img width="336" height="73" alt="image" src="https://github.com/user-attachments/assets/02feb0b0-d572-4d07-9a29-3f1de2418a02" />
# Contact Card Widget

This project contains a simple HTML/JavaScript contact card widget that can be toggled on and off.  
It stores contact information in `localStorage` and displays it in a fixed-position card on the page.

## Features
- Toggleable contact card
- Uses `localStorage` to persist data
- Fixed-position UI
- Pure HTML, CSS, and JavaScript (no dependencies)

## Example Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Contact Info</title>
  <style>
    #contact-card {
      max-width: 300px;
      padding: 20px;
      border: 2px solid #333;
      border-radius: 10px;
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #f9f9f9, #e0e0e0);
      box-shadow: 3px 3px 10px rgba(0,0,0,0.1);
      color: #222;
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      display: none;
    }

    #toggle-contact {
      position: fixed;
      bottom: 20px;
      right: 340px;
      padding: 10px 15px;
      font-family: Arial, sans-serif;
      font-size: 14px;
      cursor: pointer;
      z-index: 9999;
    }
  </style>
</head>
<body>

  <button id="toggle-contact">Show Contact Info</button>
  <div id="contact-card"></div>

  <script>
    const contact = {
      name: "Patrick Michael McMahon",
      title: "Patrick Michael McMahon",
      company: "Patrick Michael McMahon Corp",
      phone: "+1 (317) 457-****",
      email: "******.com",
      website: "******.com"
    };

    if (!localStorage.getItem('contactInfo')) {
      localStorage.setItem('contactInfo', JSON.stringify(contact));
    }

    const savedContact = JSON.parse(localStorage.getItem('contactInfo')) || contact;

    const card = document.getElementById('contact-card');
    card.innerHTML = `
      <h2 style="margin-top:0; margin-bottom:10px;">${savedContact.name}</h2>
      <p style="margin: 5px 0; font-weight: bold;">${savedContact.title}</p>
      <p style="margin: 5px 0;">${savedContact.company}</p>
      <p style="margin: 5px 0;">Phone: <a href="tel:${savedContact.phone}">${savedContact.phone}</a></p>
      <p style="margin: 5px 0;">Email: <a href="mailto:${savedContact.email}">${savedContact.email}</a></p>
      <p style="margin: 5px 0;">Website: <a href="${savedContact.website}" target="_blank">${savedContact.website}</a></p>
    `;

    const toggleBtn = document.getElementById('toggle-contact');
    toggleBtn.addEventListener('click', () => {
      const isHidden = card.style.display === 'none';
      card.style.display = isHidden ? 'block' : 'none';
      toggleBtn.textContent = isHidden ? 'Hide Contact Info' : 'Show Contact Info';
    });
  </script>
</body>
</html>
