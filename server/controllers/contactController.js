const pool = require('../db');

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const createContactSubmission = async (req, res) => {
  try {
    let { firstName, lastName, email, phone, projectDetails } = req.body;

    firstName = firstName?.trim();
    lastName = lastName?.trim();
    email = email?.trim().toLowerCase();
    phone = phone?.trim() || null;
    projectDetails = projectDetails?.trim() || null;

    if (!firstName || !lastName || !email) {
      return res.status(400).json({
        error: 'First name, last name, and email are required.',
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        error: 'Please provide a valid email address.',
      });
    }

    const query = `
      INSERT INTO contacts (first_name, last_name, email, phone, project_details)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, first_name, last_name, email, phone, project_details, created_at
    `;

    const values = [firstName, lastName, email, phone, projectDetails];
    const result = await pool.query(query, values);

    return res.status(201).json({
      message: 'Contact form submitted successfully.',
      submission: result.rows[0],
    });
  } catch (error) {
    console.error('Error creating contact submission:', error);
    return res.status(500).json({
      error: 'Server error. Please try again later.',
    });
  }
};

module.exports = {
  createContactSubmission,
};