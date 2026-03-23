export const trackConversion = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-985455568/4Y21CM2X24YcENC389UD',
      'event_callback': () => console.log("Conversión registrada con éxito.")
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
