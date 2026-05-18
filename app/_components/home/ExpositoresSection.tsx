const BENEFITS = [
  'Stands premium',
  'Ativações de marca',
  'Networking regional',
  'Visibilidade institucional',
  'Público qualificado',
  'Negócios no campo',
];

export default function ExpositoresSection() {
  return (
    <section className="expositor-section premium-exhibitors" id="expositores">
      <div className="container expositor-grid">
        <div className="reveal">
          <div className="section-badge">Expositores</div>
          <h2 className="section-title">
            Sua marca no centro dos <span className="highlight">negócios do agro</span>
          </h2>
          <p className="section-lead">
            Estrutura comercial para empresas que querem vender, ativar marca, captar clientes
            e se posicionar em uma feira com presença regional forte e estética de evento nacional.
          </p>
          <div className="expo-benefits">
            {BENEFITS.map((benefit) => (
              <span key={benefit}>{benefit}</span>
            ))}
          </div>
        </div>
        <form className="premium-form reveal" aria-label="Formulário de interesse para expositores">
          <div className="form-header">
            <span>Comercial CampoAgro</span>
            <strong>Receba as opções de participação</strong>
          </div>
          <label className="form-group">
            <span>Nome</span>
            <input type="text" name="nome" placeholder="Seu nome" />
          </label>
          <label className="form-group">
            <span>Empresa</span>
            <input type="text" name="empresa" placeholder="Nome da empresa" />
          </label>
          <label className="form-group">
            <span>Contato</span>
            <input type="tel" name="telefone" placeholder="WhatsApp" />
          </label>
          <label className="form-group">
            <span>Interesse</span>
            <select name="interesse">
              <option>Quero ser expositor</option>
              <option>Quero patrocinar</option>
              <option>Quero saber sobre ingressos</option>
            </select>
          </label>
          <label className="form-group full">
            <span>Mensagem</span>
            <textarea name="mensagem" rows={4} placeholder="Conte rapidamente o que você procura" />
          </label>
          <button className="btn-primary" type="button">
            Enviar interesse
          </button>
        </form>
      </div>
    </section>
  );
}
