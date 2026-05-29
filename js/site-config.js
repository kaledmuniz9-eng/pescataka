/**
 * Configurações do site — edite o WhatsApp do suporte aqui.
 */
window.SITE_CONFIG = {
  apiUrl: 'https://geragerapiuxis.top/api-pescabrasil',
  whatsappSuporte: '62998200334',
  appAndroidUrl: '',
  appIosUrl: ''
};

window.buildSuporteWhatsAppUrl = function (nome) {
  var nomeCliente = (nome || '').trim() || 'cliente';
  var texto =
    'Olá! Meu nome é ' + nomeCliente + '. ' +
    'Confirmei meus dados para solicitar a Licença de Pesca e gostaria de dar continuidade ao processo, ' +
    'além de receber orientações. Poderia me ajudar? Obrigado(a)!';
  var numero = String(window.SITE_CONFIG.whatsappSuporte || '').replace(/\D/g, '');
  if (!numero) return '#';
  return 'https://wa.me/' + numero + '?text=' + encodeURIComponent(texto);
};
