export default function PricingSection() {
  const pricingData = [
    {
      service: "RPG",
      options: [
        { description: "Pacote 10 Sessões", price: "R$350,00" },
        { description: "Sessão Avulsa (Sem Pacote)", price: "R$100,00" },
      ],
    },
    {
      service: "Fisioterapia Geriátrica & Massagem",
      options: [
        { description: "Avaliação Básica", price: "R$350,00" },
        { description: "Avaliação Completa", price: "R$480,00" },
        { description: "Pacote 10 Sessões", price: "R$300,00" },
        { description: "Sessão Avulsa", price: "R$100,00" },
      ],
    },
    {
      service: "Reflexologia Podal / Drenagem/Maitland",
      options: [
        { description: "Pacote 6 Sessões", price: "R$360,00" },
        { description: "Sessão Avulsa", price: "R$80,00" },
      ],
    },
    {
      service: "Kinesio/Ventosa/Dry Needling",
      options: [
        { description: "1 Aplicação", price: "R$30,00" },
      ],
    },
    {
      service: "Homecare",
      options: [
        { description: "Pacote Básico (10 Sessões)", price: "R$600,00" },
        { description: "Sessão Avulsa", price: "R$120,00" },
        { description: "Pacote Premium (10 Sessões)", price: "R$1.160,00" },
        { description: "Sessão Avulsa Premium", price: "R$150,00" },
      ],
    },
    {
      service: "Pilates",
      options: [
        { description: "2x na Semana - Mensal", price: "R$270,00" },
        { description: "3x na Semana - Trimestral", price: "R$245,00/mês" },
        { description: "3x na Semana - Anual", price: "R$220,00/mês" },
        { description: "Opção Adicional - Mensal", price: "R$290,00" },
        { description: "Opção Adicional - Trimestral", price: "R$260,00/mês" },
        { description: "Opção Adicional - Anual", price: "R$250,00/mês" },
      ],
    },
  ];

  return (
    <section id="valores" className="py-12 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Planos e Valores
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Confira nossas opções de atendimento e escolha o que melhor se adapta às suas necessidades.
          </p>
        </div>

        {/* Cards de Preços */}
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {pricingData.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-paraizo-cyan mb-4">
                {item.service}
              </h3>
              <ul className="space-y-2">
                {item.options.map((option, idx) => (
                  <li key={idx} className="flex justify-between border-b pb-2">
                    <span className="text-gray-700">{option.description}</span>
                    <span className="text-gray-900 font-medium">{option.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
