import React, { useState } from 'react';

// ContactForm - Minimalist & professional form integrating natively with page styling
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};

    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.message.trim()) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Format WhatsApp message
    const targetPhone = '5492236229328';
    const textMessage = `*CONSULTA DESDE LA WEB*

Nombre: ${formData.name.trim()}

Consulta:
${formData.message.trim()}`;

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    setFormData({ name: '', message: '' });
    setTimeout(() => setSubmitted(false), 9000);
  };

  const errorClass = "text-[10px] text-red-400 mt-1 font-sans flex items-center gap-1";

  return (
    <div className="liquid-glass rounded-3xl p-6 sm:p-8 h-full min-h-[400px] flex flex-col justify-between card-glow relative">
      <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col justify-between" noValidate>
        
        {/* Input fields */}
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-[11px] font-semibold text-[hsl(var(--fg-muted))] mb-1.5 uppercase tracking-wider">Nombre *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
              style={errors.name ? { borderColor: 'rgba(239, 68, 68, 0.4)', boxShadow: '0 0 8px rgba(239,68,68,0.1)' } : undefined}
              placeholder="Tu nombre"
            />
            {errors.name && (
              <p className={errorClass}>
                <span>⚠</span> Ingresá tu nombre
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-[11px] font-semibold text-[hsl(var(--fg-muted))] mb-1.5 uppercase tracking-wider">Mensaje *</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              maxLength={500}
              value={formData.message}
              onChange={handleChange}
              className="input-field resize-none min-h-[160px]"
              style={errors.message ? { borderColor: 'rgba(239, 68, 68, 0.4)', boxShadow: '0 0 8px rgba(239,68,68,0.1)' } : undefined}
              placeholder="Describí tu problema o consulta técnica (máx. 500 caracteres)..."
            />
            {errors.message && (
              <p className={errorClass}>
                <span>⚠</span> Ingresá tu mensaje
              </p>
            )}
          </div>
        </div>

        {/* Submit & Status */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={submitted}
            className="btn-press w-full rounded-xl text-xs font-bold uppercase tracking-wider py-3.5 flex items-center justify-center gap-2 select-none disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none"
            style={{ background: 'hsl(var(--fg))', color: 'hsl(var(--bg))' }}
          >
            {submitted ? (
              <span>Enviado ✓</span>
            ) : (
              <>
                {/* WhatsApp Logo */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Iniciar chat por WhatsApp</span>
              </>
            )}
          </button>

          {submitted && (
            <div className="text-xs text-emerald-400 text-center font-sans mt-2.5 flex items-center justify-center gap-1.5 animate-pulse">
              <span>✓</span> Abriendo WhatsApp... ¡Gracias por tu consulta!
            </div>
          )}
        </div>

      </form>
    </div>
  );
};

export default ContactForm;
