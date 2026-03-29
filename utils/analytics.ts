export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID?.split('/')[0] || 'AW-985455568';
    (window as any).gtag('config', googleAdsId, {
      page_path: url,
    });
    if (process.env.NEXT_PUBLIC_GA_ID) {
      (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: url,
      });
    }
  }
};

export const trackConversion = (callback?: () => void) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    const sendTo = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID || 'AW-985455568/4Y21CM2X24YcENC389UD';
    
    // Usamos un timeout de seguridad por si el callback de Google falla
    const timeout = setTimeout(() => {
      if (callback) callback();
    }, 1000);

    (window as any).gtag('event', 'conversion', {
      'send_to': sendTo,
      'event_callback': () => {
        clearTimeout(timeout);
        console.log("Conversión registrada con éxito.");
        if (callback) callback();
      }
    });
  } else {
    if (callback) callback();
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
  const mensaje = encodeURIComponent(
    `Hola Liz, busco una ${servicio} en Acupuntura CDMX para recuperar mi equilibrio.`
  );
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`;

  // 1. Reportamos a Google Ads con callback para asegurar el tracking
  trackConversion(() => {
    // 2. Acción de apertura después del tracking
    window.open(url, "_blank");
  });
};
