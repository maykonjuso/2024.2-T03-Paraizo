import Image from "next/image";
import { useEffect, useState } from "react";

export default function ServicosSection() {
  const services = [
    {
      title: "Fisioterapia em geral",
      description:
        "A fisioterapia é uma especialidade de saúde que atua na prevenção, diagnóstico e tratamento de disfunções do movimento. Por meio de técnicas manuais, exercícios terapêuticos e recursos tecnológicos, nossos tratamentos visam restaurar a função, aliviar dores e promover a reabilitação integral, contribuindo para uma melhor qualidade de vida.",
      image: "/ex1.jpg",
    },
    {
      title: "Kinesio Taping",
      description:
        "O Kinesio Taping é uma técnica terapêutica que utiliza fitas elásticas para apoiar músculos e articulações, reduzindo a dor e facilitando a recuperação funcional. Estudos demonstram que essa abordagem melhora a circulação sanguínea e a drenagem linfática, sendo amplamente empregada em tratamentos esportivos e reabilitação.",
      image: "/ex2.jpg",
    },
    {
      title: "Acupuntura",
      description:
        "A acupuntura, prática milenar da medicina tradicional chinesa, utiliza agulhas finas aplicadas em pontos específicos do corpo para restabelecer o equilíbrio energético. Essa técnica é reconhecida por aliviar dores, reduzir inflamações e promover o bem-estar físico e mental, sendo eficaz em diversas condições clínicas.",
      image: "/ex3.jpg",
    },
    {
      title: "Dry Needling",
      description:
        "O Dry Needling consiste na inserção de agulhas finas em pontos gatilho musculares para reduzir a tensão e aliviar dores. Diferente da acupuntura, essa técnica foca na desativação de pontos específicos de tensão, contribuindo para a melhora da função muscular e acelerando a reabilitação.",
      image: "/ex4.jpg",
    },
    {
      title: "Ventosaterapia",
      description:
        "A ventosaterapia utiliza ventosas para criar sucção na pele, estimulando a circulação e promovendo a liberação de tensões musculares. Essa abordagem auxilia na redução da dor, no alívio de inflamações e no aceleramento do processo de recuperação, proporcionando um efeito relaxante e terapêutico.",
      image: "/ex5.jpg",
    },
    {
      title: "RPG",
      description:
        "A Reeducação Postural Global (RPG) é uma técnica que busca corrigir desequilíbrios posturais por meio de alongamentos e exercícios específicos. Ao identificar e tratar as causas dos desalinhamentos, a RPG promove uma melhoria na postura, reduz dores crônicas e contribui para o bem-estar geral.",
      image: "/ex6.jpg",
    },
    {
      title: "Reflexologia",
      description:
        "A reflexologia baseia-se na aplicação de pressão em pontos reflexos dos pés, mãos ou orelhas, os quais correspondem a diferentes órgãos e sistemas do corpo. Essa técnica estimula a circulação, reduz o estresse e promove um estado geral de relaxamento e equilíbrio.",
      image: "/ex7.jpg",
    },
    {
      title: "Podal Pilates",
      description:
        "O Podal Pilates é uma modalidade focada no fortalecimento, alongamento e equilíbrio dos pés e tornozelos, essenciais para uma postura saudável. Por meio de exercícios direcionados, essa prática melhora a estabilidade e previne lesões, atuando como base para movimentos mais seguros e eficazes.",
      image: "/ex8.jpg",
    },
    {
      title: "Massoterapia",
      description:
        "A massoterapia utiliza diversas técnicas de massagem para relaxar os músculos, melhorar a circulação e aliviar tensões. Essa prática terapêutica não só promove o bem-estar físico, mas também reduz o estresse e acelera o processo de recuperação muscular.",
      image: "/ex9.jpg",
    },
    {
      title: "Maitland",
      description:
        "A técnica Maitland aplica mobilizações articulares passivas com precisão, visando diminuir a dor e aumentar a amplitude de movimento. Essa abordagem personalizada é essencial na reabilitação de condições musculoesqueléticas, adaptando-se às necessidades específicas de cada paciente.",
      image: "/ex10.jpg",
    },
    {
      title: "Home Care",
      description:
        "O serviço de Home Care oferece atendimento domiciliar de fisioterapia e reabilitação, garantindo cuidados personalizados no conforto do lar. Essa modalidade promove a continuidade do tratamento, facilitando a recuperação e proporcionando um ambiente familiar e acolhedor.",
      image: "/ex11.jpg",
    },
  ];


  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Use useEffect para iniciar o slide automático
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Altere 3000 para o tempo desejado (em milissegundos)

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, []);
  return (
    <section id="servicos" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="mb-10 text-center">
          <h2 className="text-lg text-paraizo-cyan font-semibold tracking-wide uppercase">
            Serviços
          </h2>
          <p className="mt-2 text-4xl leading-9 font-extrabold tracking-tight text-gray-900">
            Nossos Tratamentos
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="min-w-full max-w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                    {/* Insira a imagem do serviço abaixo */}
                    <Image
                      src={service.image}
                      alt={`Imagem de ${service.title}`}
                      width={1600}
                      height={500}
                      className="w-full h-96 object-cover rounded-lg mb-4"
                    />

                    <h3 className="text-2xl font-semibold text-gray-900 mt-16">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-lg text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botão Anterior */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-paraizo-cyan text-white p-2 rounded-full hover:bg-paraizo-cyan-dark transition-colors"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Botão Próximo */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-paraizo-cyan text-white p-2 rounded-full hover:bg-paraizo-cyan-dark transition-colors"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
