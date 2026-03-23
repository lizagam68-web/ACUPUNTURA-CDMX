'use client';

export const ContactButton = () => {
  const handleContact = () => {
    // 1. Avisamos a Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID || 'AW-11004313271/NfInCOvXyIkYEPfNq_4p',
      });
    }
    
    // 2. Abrimos el contacto humano (WhatsApp de Acupuntura CDMX)
    const phoneNumber = "525552520615";
    const message = encodeURIComponent("Deseo iniciar mi proceso en Acupuntura CDMX");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <button onClick={handleContact} className="btn-aqua">
      Agendar mi sesión
    </button>
  );
};
