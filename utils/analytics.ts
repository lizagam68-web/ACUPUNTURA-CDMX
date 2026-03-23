export const trackConversion = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    // Google Ads Conversion
    (window as any).gtag('event', 'conversion', {
      'send_to': process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID || 'AW-11004313271/NfInCOvXyIkYEPfNq_4p', 
      'event_callback': () => console.log("Señal de éxito enviada a Google Ads")
    });

    // GA4 Event: Click en WhatsApp
    (window as any).gtag('event', 'whatsapp_click', {
      'event_category': 'Engagement',
      'event_label': 'WhatsApp Button Click'
    });
  }
};

export const trackFormSubmission = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'form_submission', {
      'event_category': 'Contact',
      'event_label': 'Form Submitted'
    });
  }
};

export const trackAppointmentScheduled = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'appointment_scheduled', {
      'event_category': 'Conversion',
      'event_label': 'Cita Agendada'
    });
  }
};
