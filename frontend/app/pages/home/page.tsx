'use client'

import Image from "next/image";
import ServicosSection from "./components/services";
import PricingSection from "./components/prices";
import { useRouter } from "next/navigation";


export default function HomePage() {

    const router = useRouter();

    const login = () => {
        router.push('/pages/login');
    };
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            {/* Header */}
            <header className="bg-paraizo-cyan shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex-shrink-0">
                            <a href="#" className="text-2xl font-bold text-paraizo-cyan">
                                <Image src={'/logo-paraizo.svg'} alt="logo paraizo" width={50} height={50} />
                            </a>
                        </div>
                        <nav className="hidden md:flex space-x-10">
                            <a href="#inicio" className="text-base font-medium text-zinc-50 hover:text-zinc-200">
                                Início
                            </a>

                            <a href="#servicos" className="text-base font-medium text-zinc-50 hover:text-zinc-200">
                                Serviços
                            </a>

                            <a href="#sobre" className="text-base font-medium text-zinc-50 hover:text-zinc-200">
                                Sobre
                            </a>

                            <a href="#valores" className="text-base font-medium text-zinc-50 hover:text-zinc-200">
                                Planos e Valores
                            </a>
                            <a href="#faq" className="text-base font-medium text-zinc-50 hover:text-zinc-200">
                                FAQ
                            </a>
                            <a href="#agenda" className="text-base font-medium text-zinc-50 hover:text-zinc-200">
                                Agenda
                            </a>
                            <a href="#contato" className="text-base font-medium text-zinc-50 hover:text-zinc-200">
                                Contato
                            </a>
                            <a href="#localizacao" className="text-base font-medium text-zinc-50 hover:text-zinc-200">
                                Localização
                            </a>
                        </nav>
                        {/* Botão para mobile */}
                        <div className="md:hidden">
                            <button
                                type="button"
                                className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                            >
                                <span className="sr-only">Abrir menu</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                        <button onClick={login} type="button" className="text-zinc-950 bg-zinc-50 hover:bg-zinc-100 focus:ring-4 focus:outline-none focus:ring-zinc-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-zinc-50 dark:hover:bg-zinc-100 dark:focus:ring-zinc-200">
                            Fazer Login
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main>
                {/* Seção Hero */}
                <section id="inicio" className="bg-gray-100">
                    <div className="max-w-7xl mx-auto py-48 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                            Bem-vindo ao Espaço Janayna Paraizo
                        </h1>
                        <p className="mt-4 text-lg leading-6 text-gray-600">
                            Clínica de Fisioterapia Integrada no Gama, DF. Tratamentos especializados para melhorar sua qualidade de vida.
                        </p>
                        <div className="mt-8">
                            <a
                                href="#servicos"
                                className="mt-28 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-paraizo-cyan hover:bg-paraizo-cyan"
                            >
                                Conheça Nossos Serviços
                            </a>
                        </div>
                    </div>
                </section>
                <ServicosSection></ServicosSection>


                <section id="sobre" className="bg-gray-50 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center">
                        <div className="w-full lg:w-2/3 text-left">
                            <h2 className="text-base text-paraizo-cyan font-semibold tracking-wide uppercase">Sobre Nós</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                <strong>Quem Somos</strong> e <strong>Nossos Contexto</strong>
                            </p>
                            <p className="mt-14 mb-10 max-w-2xl text-xl text-gray-500 text-justify">
                                Fundada em <strong>2020</strong> pela fisioterapeuta <strong>Janayna Paraizo</strong>, nossa clínica está localizada no <strong>Gama</strong> – <strong>Distrito Federal</strong>, e tem como missão oferecer um tratamento <strong>integrado</strong> para melhorar a <strong>qualidade de vida</strong> dos nossos pacientes.
                                <br /><br />
                                Atualmente, operamos de <strong>terça a quinta-feira</strong>, com planos de expandir nosso atendimento para <strong>atender cada vez mais pessoas</strong>. Ao longo dessa jornada, enfrentamos desafios como a <strong>divulgação dos serviços</strong> e a <strong>organização dos dados dos pacientes</strong>, que, até então, eram geridos de forma <strong>manual</strong>. Mas não paramos por aí! Nossa solução inovadora integra o <strong>agendamento online</strong> e o <strong>cadastro digital</strong>, permitindo que nossa equipe <strong>otimize processos</strong> e concentre esforços no que realmente importa: o <strong>cuidado</strong> com você.
                                <br /><br />
                                Atendemos três segmentos principais: <strong>idosos</strong> que necessitam de acompanhamento contínuo, <strong>seus acompanhantes</strong> que cuidam do agendamento e transporte, e <strong>pacientes com tratamentos pontuais</strong> que buscam uma solução rápida e eficaz.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8">
                            <Image
                                src="/family.jpg"
                                alt="Familia"
                                className="rounded-lg shadow-lg object-cover w-full"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </section>


                <section id="faq" className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-10 text-center">
                            <h2 className="text-base text-paraizo-cyan font-semibold tracking-wide uppercase">Perguntas Frequentes</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Dúvidas Comuns
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="border-b pb-4">
                                <h3 className="text-lg font-medium text-gray-900">
                                    Como posso agendar uma consulta?
                                </h3>
                                <p className="mt-2 text-base text-gray-500">
                                    Você pode agendar sua consulta diretamente pelo nosso sistema online integrado ao Google Agenda ou entrar em contato conosco.
                                </p>
                            </div>
                            <div className="border-b pb-4">
                                <h3 className="text-lg font-medium text-gray-900">
                                    Quais tratamentos são oferecidos?
                                </h3>
                                <p className="mt-2 text-base text-gray-500">
                                    Oferecemos uma variedade de tratamentos, como Kinesio Taping, Acupuntura, Dry Needling, Ventosaterapia, RPG, entre outros, sempre com foco no tratamento integrado do corpo.
                                </p>
                            </div>
                            <div className="border-b pb-4">
                                <h3 className="text-lg font-medium text-gray-900">
                                    Como funciona a gestão dos dados dos pacientes?
                                </h3>
                                <p className="mt-2 text-base text-gray-500">
                                    Nossa plataforma centraliza as informações dos pacientes — desde o histórico clínico até os hábitos de vida — facilitando o acompanhamento dos tratamentos e descentralizando as tarefas administrativas.
                                </p>
                            </div>
                            <div className="border-b pb-4">
                                <h3 className="text-lg font-medium text-gray-900">
                                    O que está incluído na consulta?
                                </h3>
                                <p className="mt-2 text-base text-gray-500">
                                    Durante a consulta, além de um atendimento personalizado, realizamos uma avaliação completa para entender as necessidades do paciente e sugerir o tratamento mais adequado.
                                </p>
                            </div>
                            <div className="border-b pb-4">
                                <h3 className="text-lg font-medium text-gray-900">
                                    Quais formas de pagamento são aceitas?
                                </h3>
                                <p className="mt-2 text-base text-gray-500">
                                    Aceitamos pagamentos via cartão de crédito, transferência bancária e PIX. Também temos opções de parcelamento dependendo do serviço escolhido.
                                </p>
                            </div>
                            <div className="border-b pb-4">
                                <h3 className="text-lg font-medium text-gray-900">
                                    Vocês oferecem consultas online?
                                </h3>
                                <p className="mt-2 text-base text-gray-500">
                                    Sim! Oferecemos consultas online para pacientes que não podem comparecer presencialmente. Basta agendar pela nossa plataforma e escolher a opção de atendimento remoto.
                                </p>
                            </div>
                            <div className="border-b pb-4">
                                <h3 className="text-lg font-medium text-gray-900">
                                    Como posso saber o progresso do meu tratamento?
                                </h3>
                                <p className="mt-2 text-base text-gray-500">
                                    Acompanhamos o progresso do tratamento por meio de relatórios periódicos que são enviados para o paciente. Também é possível fazer uma consulta de acompanhamento a qualquer momento.
                                </p>
                            </div>
                            <div className="border-b pb-4">
                                <h3 className="text-lg font-medium text-gray-900">
                                    Existe alguma orientação para o pós-tratamento?
                                </h3>
                                <p className="mt-2 text-base text-gray-500">
                                    Sim! Após o tratamento, fornecemos orientações personalizadas para garantir o melhor resultado, incluindo exercícios e cuidados específicos.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                <PricingSection></PricingSection>

                <section id="agenda" className="bg-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-base text-paraizo-cyan font-semibold tracking-wide uppercase">Agenda</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Acompanhe também nossa disponibilidade
                        </p>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            Nossos horários vão de segunda a sabádo de 8h às 17h. Em caso de dúvidas por favor entrar em contato.
                        </p>
                        <div className="mt-12">
                            <iframe
                                src="https://calendar.google.com/calendar/embed?src=santosdodia@gmail.com&ctz=America%2FSao_Paulo"
                                className="w-full h-screen border-0"
                                loading="lazy"></iframe>
                        </div>
                    </div>
                </section>

                {/* Seção Contato */}
                {/* Seção Contato */}


                <section id="contato" className="bg-gray-100 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-base text-paraizo-cyan font-semibold tracking-wide uppercase">Contato</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Fale Conosco
                            </p>
                            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                                Entre em contato com a Dra. Janayna Paraizo para agendar uma consulta ou esclarecer suas dúvidas.
                            </p>
                        </div>

                        {/* Informações de Contato */}
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-gray-900">Espaço Janayna Paraizo</h3>
                                <p className="text-gray-600">Fisioterapeuta - Dra. Janayna Paraizo</p>
                                <p className="text-gray-600">Crefito 263359-F</p>
                                <p className="text-gray-600">
                                    Instagram:{" "}
                                    <a
                                        href="https://www.instagram.com/espacojanaynaparaizo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-paraizo-cyan hover:underline"
                                    >
                                        @espacojanaynaparaizo
                                    </a>
                                </p>
                                <p className="text-gray-600">Telefone: (61) 3384-5669 / (61) 98455-1055</p>
                                <p className="text-gray-600">
                                    Email:{" "}
                                    <a
                                        href="mailto:clinicaejparaizo@gmail.com"
                                        className="text-paraizo-cyan hover:underline"
                                    >
                                        clinicaejparaizo@gmail.com
                                    </a>
                                </p>
                                <p className="text-gray-600">
                                    Endereço: Área especial 20/21, setor central lado oeste, loja 39, Edifício Alternativo Center
                                </p>
                            </div>

                            {/* Formulário de Contato */}
                            <div>
                                <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                    <div>
                                        <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                                            Nome
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                id="first_name"
                                                name="first_name"
                                                autoComplete="given-name"
                                                className="py-3 px-4 block w-full shadow-sm focus:ring-paraizo-cyan focus:border-paraizo-cyan border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                                            Sobrenome
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                id="last_name"
                                                name="last_name"
                                                autoComplete="family-name"
                                                className="py-3 px-4 block w-full shadow-sm focus:ring-paraizo-cyan focus:border-paraizo-cyan border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                autoComplete="email"
                                                className="py-3 px-4 block w-full shadow-sm focus:ring-paraizo-cyan focus:border-paraizo-cyan border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                            Mensagem
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                className="py-3 px-4 block w-full shadow-sm focus:ring-paraizo-cyan focus:border-paraizo-cyan border border-gray-300 rounded-md"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <button
                                            type="submit"
                                            className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-paraizo-cyan hover:bg-paraizo-cyan focus:outline-none"
                                        >
                                            Enviar Mensagem
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Seção Localização */}
                {/* Seção Localização */}
                <section id="localizacao" className="bg-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-base text-paraizo-cyan font-semibold tracking-wide uppercase">Localização</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Estamos no Gama, DF
                        </p>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            Endereço: Qi 7 Lote 760 sala 6 Ed Gilbert, Setor de Indústria, Gama, DF
                        </p>
                        <div className="mt-6">
                            <iframe
                                src="https://www.google.com/maps?q=Qi%207%20Lote%20760%20sala%206%20Ed%20Gilbert,%20setor%20de%20ind%C3%BAstria,%20Gama,%20DF&output=embed"
                                className="w-full h-96 border-0"
                                // allowFullScreen="" 
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </section>



            </main>

            {/* Footer */}
            <footer className="bg-gray-800">
                <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-base text-gray-400">
                        &copy; 2025 Espaço Janayna Paraizo. Todos os direitos reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
}
