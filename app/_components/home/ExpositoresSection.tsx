export default function ExpositoresSection() {
  return (
    <section className="expositor-section" id="expositores">
      <div className="container expositor-grid">
        <div className="reveal">
          <div className="section-badge">Expositores</div>
          <h2 className="section-title">Sua marca no centro dos negócios do agro</h2>
          <p className="section-lead">
            Espaços comerciais para empresas que querem vender, ativar marca, captar clientes e se posicionar em uma
            feira com público qualificado.
          </p>
          <div className="expo-benefits">
            <span>Stands comerciais</span>
            <span>Ativações de marca</span>
            <span>Networking regional</span>
            <span>Visibilidade institucional</span>
          </div>
        </div>
        <form className="premium-form reveal" aria-label="Formulário de interesse para expositores">
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
