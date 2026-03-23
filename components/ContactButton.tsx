'use client';

export const ContactButton = () => {
  const handleWhatsAppClick = () => {
    // 1. Disparamos la conversión a Google Ads (ID actualizado de tu imagen)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-985455568/4Y21CM2X24YcENC389UD', // Tu Tag exacto
        'event_callback': () => console.log("Conversión registrada con éxito.")
      });
    }

    // 2. Mensaje humano para el ejecutivo
    const mensaje = encodeURIComponent(
      "Hola, deseo agendar una sesión de valoración en Acupuntura CDMX (Benito Juárez). Busco restaurar mi equilibrio y enfoque."
    );
    
    // 3. Redirección a WhatsApp
    window.open(`https://wa.me/5215500000000?text=${mensaje}`, "_blank");
  };

  return (
    <button onClick={handleWhatsAppClick} className="btn-aqua">
      Agendar mi sesión
    </button>
  );
};
