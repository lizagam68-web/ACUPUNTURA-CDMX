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

const WHATSAPP_NUMBER = "525552520615"; // Tu número actualizado

export const handleGlobalCTA = (servicio = "valoración") => {
  // 1. Reportamos a Google Ads (Para mantener el punto verde que logramos)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-985455568/4Y21CM2X24YcENC389UD',
    });
  }

  // 2. Mensaje personalizado según el servicio
  const mensaje = encodeURIComponent(
    `Hola Liz, busco una ${servicio} en Acupuntura CDMX para recuperar mi equilibrio.`
  );

  // 3. Acción de apertura
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`, "_blank");
};
