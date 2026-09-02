import React, { useState } from 'react';
import { CONTACT_INFO } from '../data';
import { LeadFormData } from '../types';
import { Send, MessageCircle, Phone, Globe, ShieldCheck, CheckCircle2, Clock, MapPin, Building2 } from 'lucide-react';

interface LeadFormProps {
  initialIndustry?: string;
  initialChannel?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({ initialIndustry = '', initialChannel = '' }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    companyName: '',
    phone: '',
    whatsapp: '',
    email: '',
    website: '',
    state: '',
    city: '',
    zipCode: '',
    industry: initialIndustry || 'Commercial Cleaning',
    goal: 'Contratos comerciais',
    channels: initialChannel ? [initialChannel] : ['Quero uma análise completa'],
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const industriesList = [
    'Commercial Cleaning',
    'Construction',
    'Painting',
    'Remodeling',
    'Flooring',
    'Facility Services',
    'Property Services',
    'Landscaping',
    'Professional Services',
    'Other / Outro Segmento',
  ];

  const goalsList = [
    'Novos clientes',
    'Contratos comerciais',
    'Subcontratos',
    'Parcerias B2B',
    'Leads',
    'Oportunidades privadas',
    'Oportunidades governamentais',
    'Tráfego pago',
    'Não tenho certeza',
  ];

  const availableChannels = [
    'Portais Privados',
    'Parcerias B2B',
    'E-mails',
    'Tráfego Pago',
    'Licitações / Governo',
    'Quero uma análise completa',
  ];

  const handleChannelToggle = (ch: string) => {
    setFormData((prev) => {
      const exists = prev.channels.includes(ch);
      if (exists) {
        return { ...prev, channels: prev.channels.filter((c) => c !== ch) };
      } else {
        return { ...prev, channels: [...prev.channels, ch] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission handling
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const constructWhatsAppMessage = () => {
    const text = `*Solicitação de Análise de Empresa - Sales For Brazilians*
• *Nome:* ${formData.fullName}
• *Empresa:* ${formData.companyName}
• *Segmento:* ${formData.industry}
• *Localização:* ${formData.city} - ${formData.state} (ZIP: ${formData.zipCode})
• *Objetivo:* ${formData.goal}
• *Canais de Interesse:* ${formData.channels.join(', ')}
• *Mensagem:* ${formData.notes || 'Gostaria de uma análise completa para minha empresa.'}`;

    return `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-[#090A0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 18: Final CTA Pre-Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FFDF00] block mb-3">
            Análise Comercial Gratuita
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight mb-4">
            Sua próxima oportunidade pode estar em um canal que sua empresa ainda não explorou.
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto mb-4">
            Vamos entender sua empresa, sua região e seus objetivos para identificar quais estratégias podem fazer sentido para sua captação.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15171B] border border-[#202329] text-xs text-zinc-400">
            <Clock className="w-3.5 h-3.5 text-[#009C3B]" />
            <span>Desde 2022 ajudando empresários brasileiros a encontrar novos caminhos no mercado americano.</span>
          </div>
        </div>

        {/* Section 19: Form Container & Company Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#15171B] border border-[#202329] shadow-2xl">
            <div className="mb-6 pb-6 border-b border-[#202329]">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Vamos conhecer sua empresa?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Preencha as informações abaixo para que nossos especialistas preparem um diagnóstico prévio da sua operação.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-[#090A0C] border border-[#009C3B]/50 text-center space-y-4 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-[#009C3B]/20 text-[#009C3B] border border-[#009C3B]/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">
                  Informações Recebidas com Sucesso!
                </h4>
                <p className="text-sm text-zinc-300 max-w-md mx-auto">
                  A equipe da <strong>SALES FOR BRAZILIANS</strong> já recebeu sua solicitação e entrará em contato para analisar os melhores caminhos de captação.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={constructWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#009C3B] hover:bg-[#008532] shadow-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Acelerar Atendimento via WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-zinc-400 hover:text-white underline"
                  >
                    Enviar outro formulário
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. Personal & Company Names */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Silva"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0C] border border-[#202329] focus:border-[#FFDF00] text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Nome da Empresa *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Apex Cleaning Services LLC"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0C] border border-[#202329] focus:border-[#FFDF00] text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* 2. Contacts: Phone, WhatsApp, Email */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Telefone nos EUA *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (000) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0C] border border-[#202329] focus:border-[#FFDF00] text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      WhatsApp (com código) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1..."
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0C] border border-[#202329] focus:border-[#FFDF00] text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      E-mail Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="contato@suaempresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0C] border border-[#202329] focus:border-[#FFDF00] text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* 3. Location: State, City, ZIP Code */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Estado onde atua *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: FL, GA, MA, NJ, TX..."
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0C] border border-[#202329] focus:border-[#FFDF00] text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Cidade Principal *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Orlando, Atlanta, Boston..."
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0C] border border-[#202329] focus:border-[#FFDF00] text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      ZIP Code Principal *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: 32801"
                      value={formData.zipCode}
                      onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0C] border border-[#202329] focus:border-[#FFDF00] text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* 4. Industry & Goal */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Segmento da Empresa *
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0C] border border-[#202329] focus:border-[#FFDF00] text-sm text-white focus:outline-none transition-colors"
                    >
                      {industriesList.map((ind) => (
                        <option key={ind} value={ind} className="bg-[#15171B] text-white">
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      O que você busca? *
                    </label>
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0C] border border-[#202329] focus:border-[#FFDF00] text-sm text-white focus:outline-none transition-colors"
                    >
                      {goalsList.map((g) => (
                        <option key={g} value={g} className="bg-[#15171B] text-white">
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 5. Website (Optional) */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    Website ou Instagram da Empresa (opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="https://suaempresa.com ou @instagram"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0C] border border-[#202329] focus:border-[#FFDF00] text-sm text-white focus:outline-none transition-colors"
                  />
                </div>

                {/* 6. Channels of Interest Checkboxes */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-2">
                    Quais canais você tem interesse? (Selecione quantos desejar)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {availableChannels.map((ch) => {
                      const isChecked = formData.channels.includes(ch);
                      return (
                        <button
                          type="button"
                          key={ch}
                          onClick={() => handleChannelToggle(ch)}
                          className={`p-2.5 rounded-lg text-left text-xs font-medium transition-colors border flex items-center gap-2 ${
                            isChecked
                              ? 'bg-[#009C3B]/20 border-[#009C3B] text-white font-semibold'
                              : 'bg-[#090A0C] border-[#202329] text-zinc-400 hover:text-white'
                          }`}
                        >
                          <span
                            className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[10px] ${
                              isChecked ? 'bg-[#009C3B] text-black font-bold' : 'border border-zinc-600'
                            }`}
                          >
                            {isChecked ? '✓' : ''}
                          </span>
                          <span>{ch}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 7. Notes */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    Conte um pouco sobre sua empresa e o que você está buscando:
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tempo de atuação, serviços prestados, porte atual da equipe ou cidades que deseja atender..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0C] border border-[#202329] focus:border-[#FFDF00] text-sm text-white focus:outline-none transition-colors"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#FFDF00] to-[#e6c800] hover:from-[#ffe633] hover:to-[#ffd700] shadow-lg shadow-[#FFDF00]/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>{isSubmitting ? 'Enviando...' : 'QUERO ANALISAR MINHA EMPRESA'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact Details & Credibility Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-[#15171B] border border-[#202329] space-y-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFDF00] block mb-1">
                  Atendimento Direto
                </span>
                <h4 className="text-xl font-extrabold text-white">
                  SALES FOR BRAZILIANS
                </h4>
                <span className="text-xs text-zinc-400 font-medium">Desde 2022</span>
              </div>

              <div className="space-y-3 text-xs text-zinc-300 pt-2 border-t border-[#202329]">
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#090A0C] border border-[#202329] hover:border-[#009C3B] transition-colors group"
                >
                  <MessageCircle className="w-5 h-5 text-[#009C3B] group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-zinc-500 text-[10px] block">WhatsApp Comercial</span>
                    <strong className="text-white group-hover:text-[#009C3B] transition-colors">
                      {CONTACT_INFO.phone}
                    </strong>
                  </div>
                </a>

                <a
                  href={`tel:+${CONTACT_INFO.phoneRaw}`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#090A0C] border border-[#202329] hover:border-zinc-600 transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#FFDF00]" />
                  <div>
                    <span className="text-zinc-500 text-[10px] block">Telefone nos EUA</span>
                    <strong className="text-white">{CONTACT_INFO.phone}</strong>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-[#090A0C] border border-[#202329]">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <div>
                    <span className="text-zinc-500 text-[10px] block">Website Oficial</span>
                    <strong className="text-white">{CONTACT_INFO.website}</strong>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#090A0C] border border-[#202329] text-xs text-zinc-400 space-y-2">
                <div className="flex items-center gap-2 text-zinc-200 font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#009C3B]" />
                  <span>Garantia de Privacidade</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Seus dados comerciais são protegidos com total confidencialidade e utilizados exclusivamente para elaborar o diagnóstico de canais da sua empresa.
                </p>
              </div>
            </div>

            {/* Quick WhatsApp Action Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-[#15171B] border border-emerald-800/40 text-center space-y-3">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                Prefere conversar agora?
              </span>
              <p className="text-xs text-zinc-300">
                Fale diretamente com nossa equipe no WhatsApp sem precisar esperar.
              </p>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#009C3B] hover:bg-[#008532] shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
