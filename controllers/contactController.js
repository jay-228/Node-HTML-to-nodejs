const Contact = require('../models/contact');

exports.getContactPage = (req, res) => {
  res.render('contact');
};

exports.submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.redirect('/contact');
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
