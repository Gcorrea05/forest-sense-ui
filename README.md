# Forest Sense Ui

Crie uma nova experiência de frontend para o OPERATOR INTELLIGENCE, uma plataforma de acompanhamento de operações florestais.

Atue como Product Designer sênior e desenvolvedor frontend. Não quero apenas uma interface bonita: quero uma aplicação intuitiva, consistente e funcional para uma apresentação de premiação, com atenção especial à experiência do gestor e do operador da máquina.

IMPORTANTE: este é um redesenho independente do frontend. Já temos backend e banco funcionando. Não recrie o backend, não crie outro banco e não tente integrar serviços externos nesta primeira entrega.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. OBJETIVO E LIBERDADE CRIATIVA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

O produto conecta duas decisões:

GESTOR: “Quais máquinas precisam da minha atenção e quais indicadores devem orientar o desempenho?”

OPERADOR: “Como está minha operação agora, o que saiu do esperado e o que preciso observar?”

Você tem liberdade para mudar layout, fluxo, componentes, tipografia, cores, paleta, gradientes, navegação e organização das informações.

Não reproduza automaticamente screenshots anteriores. Elas servem apenas para compreender funcionalidades, não como um desenho obrigatório.

Quero uma identidade própria, refinada e contemporânea. Evite aparência de template administrativo genérico ou de página institucional.

O resultado deve ser uma aplicação utilizável, não uma landing page, uma imagem de dashboard ou uma apresentação com molduras de dispositivos.

O nome é OPERATOR INTELLIGENCE. “Operação florestal” é o contexto, não uma substituição do nome. Não utilize o logotipo oficial da John Deere nem renomeie a marca para “AI”.

Toda a interface deve estar em português brasileiro.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. REFERÊNCIAS VISUAIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Explore estas referências antes de definir a direção visual:

https://www.inspora.design/
https://refero.design/
https://shadergradient.co/
https://pro.cult-ui.com/templates
https://spell.sh/

Use-as para estudar composição, hierarquia, detalhes de interação, superfícies, transições e acabamento. Não copie uma interface inteira nem dependa de componentes pagos.

Direção desejada: tecnologia aplicada à operação, clareza, confiança, precisão e personalidade.

Você não precisa deixar tudo verde. Pode trabalhar com superfícies neutras claras, grafite, verde profundo, acentos luminosos e gradientes discretos. Escolha uma combinação coerente, em vez de misturar todos esses recursos.

Desejo temas claro e escuro realmente desenhados, não apenas cores invertidas.

Gradientes e movimento podem aparecer em áreas de identidade, abertura e pequenos destaques. Não coloque fundos animados, fotografias carregadas ou transparência excessiva atrás dos gráficos e tabelas.

Evite:
- Neon, glow e bordas em todos os componentes.
- Gráficos circulares meramente decorativos.
- Florestas como papel de parede de toda a aplicação.
- Tipografia pequena para fazer mais conteúdo caber.
- Muitos cards repetindo as mesmas informações.
- Animações que atrasem ações ou disputem atenção com alertas.
- Visual cinematográfico que prejudique leitura operacional.

Quero uma interface bonita porque está bem resolvida, não porque está cheia de efeitos.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. ESTRUTURA DO PRODUTO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

O Gestor possui somente três áreas principais:

1. Todas as máquinas.
2. Ranking.
3. Metas e métricas.

Consultas salvas, detalhes e histórico são recursos dentro dessas áreas, não novos módulos no menu.

O OnePager é uma experiência separada, vinculada a uma máquina.

Não criar menus de usuários, relatórios genéricos, dispositivos, integrações, configurações técnicas, editor de fórmulas ou chat com IA.

Abrir OnePager deve ser uma ação contextual da máquina, sem obrigar o usuário a repetir sua escolha em outra tela.

Na prévia, abrir diretamente o Gestor, com dados locais. Não criar uma barreira de cadastro ou uma falsa autenticação.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. GESTOR — TODAS AS MÁQUINAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

O dashboard deve permitir entender rapidamente:
- Quais máquinas estão operando.
- Quais estão prontas ou encerraram a operação.
- Quais têm alertas que exigem atenção.
- Qual consulta está sendo exibida.
- Como acessar os dados e o OnePager de uma máquina.

Ofereça visualização em lista e em blocos. A alternância deve preservar filtros, ordenação e seleção.

Inclua busca por máquina e filtros de família, situação e fonte de dados. Os filtros avançados devem ficar recolhidos ou em um painel de consulta, sem transformar o topo em uma parede de controles.

Permita nomear, salvar, reaplicar e excluir consultas. Na prévia, isso pode ser persistido localmente.

Separe claramente:
- Simulação.
- Dados históricos.

Dados históricos não podem aparecer como máquinas conectadas ao vivo. Não utilizar “Últimos 7 dias” se os dados apresentados pertencem a outro período.

Não confundir estado da operação com severidade:
uma máquina pode estar “Em operação” e, ao mesmo tempo, ter um alerta crítico.

Em cada máquina, apresentar identificação, família, situação e informações essenciais. Priorizar leitura rápida, sem colocar todos os gráficos em todos os cartões.

A ação “Ver dados” abre um detalhe contextual, preservando a consulta e a posição da página. Esse detalhe deve incluir um log de alertas com:
- Momento ou etapa.
- Métrica.
- Valor observado.
- Referência.
- Severidade.
- Situação de ciência.
- Explicação do desvio.

Incluir “Abrir OnePager” nesse contexto.

Resumos do dashboard devem acompanhar os filtros. Não calcular uma pontuação média misturando grupos incompatíveis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. RANKING — POR PONTUAÇÃO, NÃO PRODUÇÃO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Esta é uma regra central do produto:

O ranking NÃO é ordenado por volume produzido, combustível total ou número de etapas percorridas.

Ele é baseado em uma pontuação de desempenho de 0 a 100, calculada pelas métricas escolhidas e pelos pesos definidos pelo gestor.

Cada métrica recebe uma nota de atendimento à referência. A pontuação da etapa é a soma das notas ponderadas pelos pesos.

O sentido da referência varia:
- Uma métrica pode exigir atingir um mínimo.
- Outra pode exigir permanecer abaixo de um máximo.
- Produzir mais ou consumir mais não têm o mesmo significado.

Comparar apenas máquinas da mesma família, com os mesmos critérios e etapas válidas comparáveis. Não dar vantagem a quem começou antes.

Exibir:
- Posição.
- Máquina.
- Pontuação em pontos.
- Cobertura ou base da comparação.
- Acesso à explicação da nota.

Usar barras horizontais ou tabela bem resolvida. Evitar pódios decorativos gigantes.

Ao consultar uma pontuação, mostrar a contribuição de cada métrica: nota, peso e contribuição final.

O Gestor e o OnePager devem usar o MESMO cálculo e o MESMO estado. Não criar rankings divergentes entre telas.

O ranking deve realmente responder às escolhas do gestor.

Exemplo obrigatório para validar o comportamento:
Máquina A: nota 100 em volume e 80 em combustível.
Máquina B: nota 80 em volume e 100 em combustível.

Com volume 80% e combustível 20%:
A = 96 pontos; B = 84 pontos.

Com volume 20% e combustível 80%:
A = 84 pontos; B = 96 pontos.

Não force uma troca de posições em qualquer mudança. Quando os desempenhos forem equivalentes, a classificação pode permanecer igual.

Dados ausentes não viram zero nem “excelente desempenho”. Mostrar “Sem base suficiente” quando a comparação não for válida.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. METAS E MÉTRICAS — SIMPLES E EXPLICÁVEL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

O gestor deve fazer apenas duas coisas:
1. Selecionar quais métricas serão acompanhadas.
2. Distribuir seus pesos na pontuação.

Não mostrar expressões, SQL, códigos internos, perfis técnicos, versões de regra ou formulários de programação.

Organizar por família: Forwarder e Harvester.

Cada métrica deve ter:
- Nome compreensível.
- Explicação curta.
- Unidade.
- Referência esperada, somente para consulta.
- Seleção.
- Peso editável.

Usar slider acompanhado de campo numérico, permitindo precisão.

Mostrar claramente o total dos pesos. Para salvar, o total deve ser 100%. Não redistribuir valores silenciosamente. Pode existir uma ação explícita “Distribuir igualmente”.

Distinguir:
- Configuração aplicada.
- Alterações ainda não salvas.
- Prévia do impacto.

Enquanto o gestor edita, apresentar uma comparação “Atual × Proposta”, usando as mesmas observações. Ao salvar, aplicar os critérios ao ranking compartilhado.

As alterações recalculam a comparação atual, mas não reescrevem observações, alertas ou registros de ciência anteriores.

Confirmar descarte somente quando houver alterações realmente não salvas. Não usar confirm() nativo do navegador como fluxo habitual.

Botões claros: “Salvar alterações” e “Descartar alterações”.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. ONEPAGER — TELA DA MÁQUINA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

O operador não deve encontrar um dashboard administrativo reduzido.

O OnePager abre diretamente na máquina e apresenta uma ação principal:
“INICIAR OPERAÇÃO”.

Antes de iniciar, mostrar a máquina pronta e uma apresentação clara do que será acompanhado. Não exigir seleção de perfil, versão, consulta ou período.

Depois de iniciar, a simulação avança automaticamente.

Cabeçalho compacto:
- Identificação da máquina.
- Estado da operação.
- Identificação discreta de simulação.
- Histórico.
- Preferências visuais.
- Tela cheia.
- Retorno ao Gestor na prévia, sem depender do botão voltar do navegador.

EXATAMENTE DOIS CARDS DE INDICADORES:
1. Volume movimentado, em m³.
2. Combustível do bloco, em L.

Não adicionar cards de garradas, consumo horário, score ou outros indicadores no topo.

Abaixo, manter quatro áreas principais:
- Volume da operação: gráfico.
- Ranking por pontuação: gráfico.
- Combustível: gráfico.
- Mapa do percurso: visualização.

A organização preferencial é:
Linha superior: Volume + Ranking.
Linha inferior: Combustível + Mapa.

Você pode ajustar proporções e hierarquia, preservando esses quatro conteúdos e os dois cards.

O ranking destaca a própria máquina, mas continua sendo por pontuação, nunca por produção.

O mapa representa um percurso esquemático simulado. Não usar um mapa satélite como se houvesse GPS real. Criar um percurso visualmente elegante, com talhões e posição atual coerente com a etapa.

Gráficos precisam de unidade, período ou etapa e referências legíveis. Não inventar horários incompatíveis com uma simulação de aproximadamente um minuto.

Projetar o OnePager para 1920×1080 e 1366×768, sem rolagem geral em uso normal. Não resolver falta de espaço tornando tudo minúsculo.

Oferecer tema claro/escuro e personalização discreta do destaque visual. Essas escolhas não podem mudar as cores semânticas de alerta.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
8. ALERTAS E INSIGHTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

O alerta deve ser compreendido rapidamente:
“O que aconteceu?”
“Qual valor saiu da referência?”
“Qual é a informação relevante para o operador?”

Atenção: amarelo/âmbar.
Crítico: vermelho, com contraste e destaque forte.
Não depender apenas da cor: usar título, ícone e texto.

Exemplo de estrutura:
“Consumo acima da referência”
“33 L nesta etapa. Referência: até 20 L.”

Usar uma faixa de alerta claramente prioritária. Não pintar todos os indicadores de vermelho se apenas uma métrica está em desvio.

Pode haver pulsação lenta e discreta na borda. Não fazer a tela inteira piscar nem criar efeito estroboscópico. Respeitar preferência por movimento reduzido.

A ação “CIENTE”:
- Registra a ciência.
- Interrompe o destaque animado.
- Não apaga o alerta.
- Não declara o desvio resolvido.

Mostrar recuperação e ciência como eventos diferentes.

Se houver vários alertas, destacar o mais importante e permitir consultar os demais sem empilhar faixas que ocupem metade da tela.

Os insights aparecem somente no OnePager. Não criar aba de IA no Gestor.

Na prévia, usar orientações determinísticas baseadas nos eventos simulados. Não dizer que houve geração por IA quando ela não está conectada. Reservar no modelo de dados a origem do texto para futura integração.

Não inventar causas mecânicas ou recomendações sem fundamento nos dados.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
9. DADOS COERENTES E INTERAÇÕES REAIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Usar estas 14 máquinas na prévia:

Forwarders: FW 36, FW 37, FW 38, FW 41, FW 42 e FW 43.
Harvesters: HV 59, HV 60, HV 61, HV 62, HV 67, HV 68, HV 69 e HV 70.

Operadores, quando aparecerem, devem ser identificados como fictícios. Não usar dados pessoais reais.

Criar fixtures determinísticas, com diferenças de desempenho entre máquinas. Evitar números aleatórios mudando a cada renderização.

A simulação deve ter uma sequência coerente:
normalidade → atenção → desvio crítico → recuperação → leitura ausente → encerramento.

Gráficos, cards, mapa, ranking e histórico devem derivar dos mesmos eventos. Não hardcodar uma história diferente em cada componente.

O avanço automático pertence à simulação. Não transformar dados históricos em uma falsa transmissão ao vivo.

A prévia deve permitir:
- Iniciar uma operação individual.
- Iniciar a frota simulada com confirmação.
- Acompanhar progresso.
- Registrar ciência.
- Consultar histórico.
- Reiniciar uma operação encerrada.
- Alterar pesos e observar o impacto no ranking.
- Manter as escolhas do gestor ao navegar.

Se Gestor e OnePager abrirem em abas diferentes, sincronizar o estado demonstrativo entre elas. Alterar pesos no Gestor deve atualizar o OnePager sem recarregamento manual.

Não criar botões que apenas mostrem “em breve” ou notificações falsas de sucesso.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
10. ARQUITETURA E INTEGRAÇÃO FUTURA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Construir com React e TypeScript, componentes reutilizáveis, estilos organizados e tokens de design.

Pode utilizar bibliotecas adequadas para gráficos, ícones e componentes, desde que o resultado não pareça um template sem personalização.

Separar:
- Componentes visuais.
- Estado compartilhado.
- Fixtures da prévia.
- Cálculo de pontuação demonstrativo.
- Camada de acesso a dados.

Criar uma interface de serviço que permita trocar o adaptador local por um cliente REST posteriormente.

O projeto existente usa FastAPI e MySQL. A API será a fonte de verdade na integração real.

Nesta entrega:
- Não criar Supabase ou banco no Lovable Cloud.
- Não gerar migrations.
- Não alterar autenticação ou backend existentes.
- Não pedir nem incluir senha de banco, segredo JWT ou conteúdo de .env.
- Não colocar credenciais no bundle frontend.
- Não inventar contratos de endpoints.
- Não conectar APIs pagas ou serviços de IA na nuvem.

O backend atual roda localmente. Não presumir que ele estará acessível pela prévia hospedada do Lovable.

A aplicação deve funcionar integralmente em modo de prévia sem depender dessa conexão.

Persistir somente dados demonstrativos e preferências locais. Documentar como restaurar o cenário inicial.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
11. ACABAMENTO E CRITÉRIOS DE ENTREGA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A aplicação não deve exibir:
“Em construção”, “M7”, “Patch”, “Roteiro de apresentação”, instruções ao apresentador ou avisos técnicos permanentes.

Isso não significa esconder a natureza dos dados: preservar identificações discretas como “Simulação”, “Percurso simulado” e a origem verdadeira das orientações.

Cuidar também dos estados:
carregando, vazio, sem resultado, sem leitura, erro, salvando, salvo, operação pronta, em andamento e encerrada.

Usar navegação por teclado, foco visível, labels acessíveis, contraste adequado e alvos de interação confortáveis.

Antes de concluir, testar:
1. Lista e blocos preservam a mesma consulta.
2. “Ver dados” abre o histórico correto.
3. Somente dois cards aparecem no topo do OnePager.
4. O ranking usa pontos e responde aos pesos.
5. Forwarder não compete com Harvester.
6. Alterar pesos não apaga alertas anteriores.
7. “Ciente” não significa “Resolvido”.
8. O mapa acompanha a mesma simulação dos gráficos.
9. Tema claro e escuro mantêm legibilidade.
10. Todas as telas possuem caminhos claros de retorno.
11. Não há sobreposição, texto cortado ou rolagem horizontal indevida.
12. A interface continua responsiva enquanto a simulação avança.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
12. EXECUÇÃO DO PEDIDO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Escolha uma direção visual consistente e implemente a experiência navegável.

Você pode reorganizar o fluxo para reduzir cliques e tornar o produto mais lógico. Preserve as regras do domínio, não o desenho antigo.

Construa por componentes e valide cada fluxo durante a implementação, mas entregue uma experiência integrada, não um conjunto de telas desconectadas.

Não pare em uma proposta textual, moodboard ou página inicial bonita. Quero usar o Gestor, alterar os critérios, abrir o OnePager e perceber as consequências das minhas ações.

Ao final, descreva brevemente:
- A direção visual escolhida.
- O fluxo principal.
- Onde editar o tema.
- Onde ficam os dados demonstrativos.
- Como substituir o adaptador local pelo backend existente.

O objetivo é um produto com personalidade e clareza: o gestor entende o desempenho, o operador entende sua operação, e ambos confiam no que a interface apresenta.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0b52a5d8-9417-4ea8-abef-3474d752552d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
