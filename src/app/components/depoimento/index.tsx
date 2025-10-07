export default function Depoimento() {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">

        {/* Cabeçalho */}
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">
            <div className="inline-block px-6 py-3 text-2xl font-bold text-black rounded-lg bg-gray-200 hover:cursor-pointer hover:bg-gray-300">
              Depoimentos
            </div>

            <p className="text-xl text-gray-700 md:text-center md:text-2xl">
              Veja o que nossos clientes dizem sobre nossos serviços.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

          {/* Coluna 1 */}
          <ul className="space-y-8">
            {/* Carla Menezes – mulher */}
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-black blur group-hover:opacity-50" />
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-200">
                  <div className="flex items-center space-x-4">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Carla Menezes" />
                    <div>
                      <h3 className="text-lg font-semibold text-black">Carla Menezes</h3>
                      <p className="text-gray-500 text-md">Gerente de RH</p>
                    </div>
                  </div>
                  <p className="leading-normal text-gray-700 text-md">
                    O AgendaPro transformou totalmente a forma como organizamos compromissos na empresa.
                    O sistema é leve, rápido e muito intuitivo.
                  </p>
                </div>
              </div>
            </li>

            {/* João Batista – homem */}
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-black blur group-hover:opacity-50" />
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-200">
                  <div className="flex items-center space-x-4">
                    <img src="https://randomuser.me/api/portraits/men/37.jpg" className="w-12 h-12 bg-center bg-cover border rounded-full" alt="João Batista" />
                    <div>
                      <h3 className="text-lg font-semibold text-black">João Batista</h3>
                      <p className="text-gray-500 text-md">Diretor de Escola Técnica</p>
                    </div>
                  </div>
                  <p className="leading-normal text-gray-700 text-md">
                    Com o BibliotecaPro conseguimos digitalizar todo o acervo da nossa biblioteca.
                    O sistema é robusto, fácil de usar e tem um suporte incrível.
                  </p>
                </div>
              </div>
            </li>

            {/* Renata Lopes – mulher */}
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-black blur group-hover:opacity-50" />
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-200">
                  <div className="flex items-center space-x-4">
                    <img src="https://randomuser.me/api/portraits/women/21.jpg" className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Renata Lopes" />
                    <div>
                      <h3 className="text-lg font-semibold text-black">Renata Lopes</h3>
                      <p className="text-gray-500 text-md">Empresária do setor hoteleiro</p>
                    </div>
                  </div>
                  <p className="leading-normal text-gray-700 text-md">
                    O Hotel Manager trouxe organização e clareza para a gestão do meu negócio.
                    Agora consigo acompanhar reservas, check-ins e relatórios financeiros em tempo real.
                  </p>
                </div>
              </div>
            </li>

            {/* Thiago Faria – homem */}
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-black blur group-hover:opacity-50" />
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-200">
                  <div className="flex items-center space-x-4">
                    <img src="https://randomuser.me/api/portraits/men/28.jpg" className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Thiago Faria" />
                    <div>
                      <h3 className="text-lg font-semibold text-black">Thiago Faria</h3>
                      <p className="text-gray-500 text-md">Gestor de Arena Esportiva</p>
                    </div>
                  </div>
                  <p className="leading-normal text-gray-700 text-md">
                    O Placar Arena é simplesmente sensacional. Mostramos os resultados ao vivo em telões,
                    aumentando a experiência dos atletas e do público.
                  </p>
                </div>
              </div>
            </li>
          </ul>

          {/* Coluna 2 */}
          <ul className="hidden space-y-8 sm:block">
            {/* Patrícia Azevedo – mulher */}
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-black blur group-hover:opacity-50" />
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-200">
                  <div className="flex items-center space-x-4">
                    <img src="https://randomuser.me/api/portraits/women/41.jpg" className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Patrícia Azevedo" />
                    <div>
                      <h3 className="text-lg font-semibold text-black">Patrícia Azevedo</h3>
                      <p className="text-gray-500 text-md">Consultora de Negócios</p>
                    </div>
                  </div>
                  <p className="leading-normal text-gray-700 text-md">
                    Wesley é um profissional extremamente dedicado.
                    O AgendaPro que ele desenvolveu já me trouxe muito mais organização no dia a dia.
                  </p>
                </div>
              </div>
            </li>

            {/* Marcos Vinícius – homem */}
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-black blur group-hover:opacity-50" />
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-200">
                  <div className="flex items-center space-x-4">
                    <img src="https://randomuser.me/api/portraits/men/53.jpg" className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Marcos Vinícius" />
                    <div>
                      <h3 className="text-lg font-semibold text-black">Marcos Vinícius</h3>
                      <p className="text-gray-500 text-md">Coordenador de TI</p>
                    </div>
                  </div>
                  <p className="leading-normal text-gray-700 text-md">
                    O BibliotecaPro se destacou pelo design moderno e pela facilidade de integração.
                    É simples, mas entrega muito valor.
                  </p>
                </div>
              </div>
            </li>

            {/* Sofia Martins – mulher */}
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-black blur group-hover:opacity-50" />
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-200">
                  <div className="flex items-center space-x-4">
                    <img src="https://randomuser.me/api/portraits/women/68.jpg" className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Sofia Martins" />
                    <div>
                      <h3 className="text-lg font-semibold text-black">Sofia Martins</h3>
                      <p className="text-gray-500 text-md">Proprietária de Pousada</p>
                    </div>
                  </div>
                  <p className="leading-normal text-gray-700 text-md">
                    Antes era um caos controlar reservas e despesas.
                    Depois do Hotel Manager, conseguimos organizar tudo e evitar prejuízos.
                  </p>
                </div>
              </div>
            </li>

            {/* Lucas Ferreira – homem */}
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-black blur group-hover:opacity-50" />
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-200">
                  <div className="flex items-center space-x-4">
                    <img src="https://randomuser.me/api/portraits/men/63.jpg" className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Lucas Ferreira" />
                    <div>
                      <h3 className="text-lg font-semibold text-black">Lucas Ferreira</h3>
                      <p className="text-gray-500 text-md">Organizador de Eventos Esportivos</p>
                    </div>
                  </div>
                  <p className="leading-normal text-gray-700 text-md">
                    O Placar Arena surpreendeu o público.
                    Estatísticas ao vivo deram um ar profissional ao campeonato.
                  </p>
                </div>
              </div>
            </li>
          </ul>

          {/* Coluna 3 */}
          <ul className="hidden space-y-8 lg:block">
            {/* Ana Carolina – mulher */}
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-black blur group-hover:opacity-50" />
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-200">
                  <div className="flex items-center space-x-4">
                    <img src="https://randomuser.me/api/portraits/women/72.jpg" className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Ana Carolina" />
                    <div>
                      <h3 className="text-lg font-semibold text-black">Ana Carolina</h3>
                      <p className="text-gray-500 text-md">Psicóloga</p>
                    </div>
                  </div>
                  <p className="leading-normal text-gray-700 text-md">
                    O AgendaPro trouxe mais clareza para meus atendimentos.
                    Com lembretes automáticos, reduzi as faltas de pacientes.
                  </p>
                </div>
              </div>
            </li>

            {/* Ricardo Almeida – homem */}
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-black blur group-hover:opacity-50" />
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-200">
                  <div className="flex items-center space-x-4">
                    <img src="https://randomuser.me/api/portraits/men/75.jpg" className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Ricardo Almeida" />
                    <div>
                      <h3 className="text-lg font-semibold text-black">Ricardo Almeida</h3>
                      <p className="text-gray-500 text-md">Diretor Acadêmico</p>
                    </div>
                  </div>
                  <p className="leading-normal text-gray-700 text-md">
                    O BibliotecaPro é hoje essencial para alunos e professores.
                    Simplesmente não imaginamos mais a escola sem ele.
                  </p>
                </div>
              </div>
            </li>

            {/* Fernanda Castro – mulher */}
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-black blur group-hover:opacity-50" />
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-200">
                  <div className="flex items-center space-x-4">
                    <img src="https://randomuser.me/api/portraits/women/77.jpg" className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Fernanda Castro" />
                    <div>
                      <h3 className="text-lg font-semibold text-black">Fernanda Castro</h3>
                      <p className="text-gray-500 text-md">Gerente de Hotel Boutique</p>
                    </div>
                  </div>
                  <p className="leading-normal text-gray-700 text-md">
                    O Hotel Manager não só organiza reservas,
                    mas também gera relatórios financeiros completos.
                  </p>
                </div>
              </div>
            </li>

            {/* Eduardo Paiva – homem */}
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-black blur group-hover:opacity-50" />
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-200">
                  <div className="flex items-center space-x-4">
                    <img src="https://randomuser.me/api/portraits/men/83.jpg" className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Eduardo Paiva" />
                    <div>
                      <h3 className="text-lg font-semibold text-black">Eduardo Paiva</h3>
                      <p className="text-gray-500 text-md">Árbitro e Técnico de Vôlei</p>
                    </div>
                  </div>
                  <p className="leading-normal text-gray-700 text-md">
                    O Placar Arena deu um novo nível aos nossos torneios.
                    Finalmente temos um sistema confiável para registrar pontos e sets em tempo real.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
