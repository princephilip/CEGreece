const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)

const SENDGRID_API_KEY = functions.config().sendgrid.key

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);

exports.firestoreEmail = functions.firestore
                            .document('ContactInfos/{ContactInfoId}')
                            .onCreate(snap => {
                                return sgMail.send({
                                    to: 'christembassygreece@gmail.com',
                                    from: `${snap.data().name} <${snap.data().email}>`,
                                    subject: 'Christ Embassy Greece',
                                    text: 'Welcome to Christ Embassy Greece!',
                                    html: '<p>Welcome to Christ Embassy Greece!</p>',
                                    templateId: 'd-ee1d07ae0d644c8685e9757a0b2e9587',
                                    dynamic_template_data: {
                                        subject: snap.data().subject,
                                        name: snap.data().name,
                                        message: snap.data().message,
                                        country: snap.data().country,
                                        email: snap.data().email,
                                        phone: snap.data().phone
                                    },
                                    
                                })
                                .then( ()=> console.log('email sent'))
                                .catch(err => console.log(err))
                            
                            })
