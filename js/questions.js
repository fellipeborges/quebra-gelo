const categories = ['hypothetical', 'fun', 'experiences', 'preferences', 'reflection'];

const questions = [
    {
        category: 'hypothetical',
        i18n: {
            pt: "Se você pudesse ter qualquer superpoder, qual seria?",
            en: "If you could have any superpower, what would it be?",
            es: "Si pudieras tener cualquier superpoder, ¿cuál sería?",
            fr: "Si vous pouviez avoir n'importe quel superpouvoir, lequel choisiriez-vous ?",
            zh: "如果你能拥有任何超能力，你会选择什么？"
        }
    },
    {
        category: 'fun',
        i18n: {
            pt: "Qual foi o pior corte de cabelo que você já teve?",
            en: "What was the worst haircut you've ever had?",
            es: "¿Cuál fue el peor corte de pelo que has tenido?",
            fr: "Quelle a été la pire coupe de cheveux que vous ayez jamais eue ?",
            zh: "你剪过最糟糕的发型是什么？"
        }
    },
    {
        category: 'hypothetical',
        i18n: {
            pt: "Se você fosse um animal, qual seria e por quê?",
            en: "If you were an animal, which one would you be and why?",
            es: "Si fueras un animal, ¿cuál serías y por qué?",
            fr: "Si vous étiez un animal, lequel seriez-vous et pourquoi ?",
            zh: "如果你是一种动物，你会是什么？为什么？"
        }
    },
    {
        category: 'fun',
        i18n: {
            pt: "Qual é o fato mais inútil que você conhece?",
            en: "What's the most useless fact you know?",
            es: "¿Cuál es el dato más inútil que conoces?",
            fr: "Quel est le fait le plus inutile que vous connaissez ?",
            zh: "你知道的最没用的冷知识是什么？"
        }
    },
    {
        category: 'preferences',
        i18n: {
            pt: "Qual filme você pode assistir várias vezes sem cansar?",
            en: "What movie can you watch over and over without getting tired of it?",
            es: "¿Qué película puedes ver una y otra vez sin cansarte?",
            fr: "Quel film pouvez-vous regarder encore et encore sans vous lasser ?",
            zh: "哪部电影你可以反复看而不觉得腻？"
        }
    },
    {
        category: 'preferences',
        i18n: {
            pt: "Qual habilidade você gostaria de aprender?",
            en: "What skill would you like to learn?",
            es: "¿Qué habilidad te gustaría aprender?",
            fr: "Quelle compétence aimeriez-vous apprendre ?",
            zh: "你想学什么技能？"
        }
    },
    {
        category: 'preferences',
        i18n: {
            pt: "O que você faz melhor do que a maioria das pessoas?",
            en: "What do you do better than most people?",
            es: "¿Qué haces mejor que la mayoría de las personas?",
            fr: "Que faites-vous mieux que la plupart des gens ?",
            zh: "你做什么事比大多数人都好？"
        }
    },
    {
        category: 'preferences',
        i18n: {
            pt: "Qual é o seu hobby favorito que pouca gente sabe?",
            en: "What's your favorite hobby that few people know about?",
            es: "¿Cuál es tu pasatiempo favorito que poca gente conoce?",
            fr: "Quel est votre passe-temps favori que peu de gens connaissent ?",
            zh: "你有什么别人不知道的爱好？"
        }
    },
    {
        category: 'experiences',
        i18n: {
            pt: "Qual é o lugar dos seus sonhos para visitar?",
            en: "What's your dream place to visit?",
            es: "¿Cuál es el lugar de tus sueños para visitar?",
            fr: "Quel est le lieu de vos rêves à visiter ?",
            zh: "你最想去的地方是哪里？"
        }
    },
    {
        category: 'fun',
        i18n: {
            pt: "Qual foi a comida mais estranha que você já experimentou?",
            en: "What's the strangest food you've ever tried?",
            es: "¿Cuál es la comida más extraña que has probado?",
            fr: "Quel est l'aliment le plus étrange que vous ayez jamais goûté ?",
            zh: "你吃过最奇怪的食物是什么？"
        }
    },
    {
        category: 'preferences',
        i18n: {
            pt: "Você prefere praia, montanha ou cidade?",
            en: "Do you prefer the beach, the mountains, or the city?",
            es: "¿Prefieres playa, montaña o ciudad?",
            fr: "Préférez-vous la plage, la montagne ou la ville ?",
            zh: "你更喜欢海滩、山还是城市？"
        }
    },
    {
        category: 'experiences',
        i18n: {
            pt: "Qual foi sua melhor memória de viagem?",
            en: "What's your best travel memory?",
            es: "¿Cuál es tu mejor recuerdo de viaje?",
            fr: "Quel est votre meilleur souvenir de voyage ?",
            zh: "你最美好的旅行记忆是什么？"
        }
    },
    {
        category: 'preferences',
        i18n: {
            pt: "O que te faz perder a noção do tempo?",
            en: "What makes you lose track of time?",
            es: "¿Qué te hace perder la noción del tiempo?",
            fr: "Qu'est-ce qui vous fait perdre la notion du temps ?",
            zh: "什么事情让你忘记时间？"
        }
    },
    {
        category: 'reflection',
        i18n: {
            pt: "Qual pequeno hábito mudou sua vida?",
            en: "What small habit changed your life?",
            es: "¿Qué pequeño hábito cambió tu vida?",
            fr: "Quelle petite habitude a changé votre vie ?",
            zh: "哪个小习惯改变了你的生活？"
        }
    },
    {
        category: 'reflection',
        i18n: {
            pt: "Pelo que você é grato hoje?",
            en: "What are you grateful for today?",
            es: "¿Por qué estás agradecido hoy?",
            fr: "De quoi êtes-vous reconnaissant aujourd'hui ?",
            zh: "今天你对什么心怀感激？"
        }
    },
    {
        category: 'reflection',
        i18n: {
            pt: "O que felicidade significa para você?",
            en: "What does happiness mean to you?",
            es: "¿Qué significa la felicidad para ti?",
            fr: "Que signifie le bonheur pour vous ?",
            zh: "幸福对你来说意味着什么？"
        }
    },
    {
        category: 'hypothetical',
        i18n: {
            pt: "Você preferiria explorar o espaço ou o fundo do mar?",
            en: "Would you rather explore outer space or the deep sea?",
            es: "¿Preferirías explorar el espacio o el fondo del mar?",
            fr: "Préféreriez-vous explorer l'espace ou les profondeurs de l'océan ?",
            zh: "你更愿意探索太空还是深海？"
        }
    },
    {
        category: 'fun',
        i18n: {
            pt: "Você é mais uma pessoa matutina ou noturna?",
            en: "Are you more of a morning person or a night owl?",
            es: "¿Eres más una persona madrugadora o nocturna?",
            fr: "Êtes-vous plutôt du matin ou du soir ?",
            zh: "你是早起的人还是夜猫子？"
        }
    },
    {
        category: 'hypothetical',
        i18n: {
            pt: "Você preferiria viajar para o passado ou para o futuro?",
            en: "Would you rather travel to the past or to the future?",
            es: "¿Preferirías viajar al pasado o al futuro?",
            fr: "Préféreriez-vous voyager dans le passé ou dans le futur ?",
            zh: "你更愿意穿越到过去还是未来？"
        }
    },
    {
        category: 'hypothetical',
        i18n: {
            pt: "Se você ganhasse na loteria amanhã, qual seria a primeira coisa que faria?",
            en: "If you won the lottery tomorrow, what's the first thing you'd do?",
            es: "Si ganaras la lotería mañana, ¿qué sería lo primero que harías?",
            fr: "Si vous gagniez à la loterie demain, quelle serait la première chose que vous feriez ?",
            zh: "如果你明天中了彩票，你会做的第一件事是什么？"
        }
    },
    {
        category: 'reflection',
        i18n: {
            pt: "Qual foi o melhor conselho que você já recebeu?",
            en: "What's the best advice you've ever received?",
            es: "¿Cuál es el mejor consejo que has recibido?",
            fr: "Quel est le meilleur conseil que vous ayez jamais reçu ?",
            zh: "你收到过最好的建议是什么？"
        }
    },
    {
        category: 'hypothetical',
        i18n: {
            pt: "Se você pudesse jantar com qualquer pessoa, viva ou morta, quem seria?",
            en: "If you could have dinner with anyone, alive or dead, who would it be?",
            es: "Si pudieras cenar con cualquier persona, viva o muerta, ¿quién sería?",
            fr: "Si vous pouviez dîner avec n'importe qui, vivant ou mort, qui choisiriez-vous ?",
            zh: "如果你能和任何人共进晚餐，无论在世与否，你会选谁？"
        }
    },
    {
        category: 'experiences',
        i18n: {
            pt: "Qual foi a coisa mais espontânea que você já fez?",
            en: "What's the most spontaneous thing you've ever done?",
            es: "¿Cuál es la cosa más espontánea que has hecho?",
            fr: "Quelle est la chose la plus spontanée que vous ayez jamais faite ?",
            zh: "你做过最随性的事是什么？"
        }
    },
    {
        category: 'preferences',
        i18n: {
            pt: "Qual música você poderia ouvir pelo resto da vida?",
            en: "What song could you listen to for the rest of your life?",
            es: "¿Qué canción podrías escuchar por el resto de tu vida?",
            fr: "Quelle chanson pourriez-vous écouter pour le reste de votre vie ?",
            zh: "哪首歌你可以听一辈子？"
        }
    },
    {
        category: 'hypothetical',
        i18n: {
            pt: "Se você pudesse morar em qualquer época da história, qual escolheria?",
            en: "If you could live in any era of history, which would you choose?",
            es: "Si pudieras vivir en cualquier época de la historia, ¿cuál elegirías?",
            fr: "Si vous pouviez vivre à n'importe quelle époque de l'histoire, laquelle choisiriez-vous ?",
            zh: "如果你能生活在历史上的任何时代，你会选择哪个？"
        }
    },
    {
        category: 'fun',
        i18n: {
            pt: "Qual foi o sonho mais estranho que você já teve?",
            en: "What's the strangest dream you've ever had?",
            es: "¿Cuál es el sueño más extraño que has tenido?",
            fr: "Quel est le rêve le plus étrange que vous ayez jamais fait ?",
            zh: "你做过最奇怪的梦是什么？"
        }
    },
    {
        category: 'hypothetical',
        i18n: {
            pt: "O que você faria se não precisasse trabalhar para viver?",
            en: "What would you do if you didn't have to work for a living?",
            es: "¿Qué harías si no necesitaras trabajar para vivir?",
            fr: "Que feriez-vous si vous n'aviez pas besoin de travailler pour vivre ?",
            zh: "如果不需要为生计工作，你会做什么？"
        }
    },
    {
        category: 'reflection',
        i18n: {
            pt: "Qual é o seu maior medo irracional?",
            en: "What's your biggest irrational fear?",
            es: "¿Cuál es tu mayor miedo irracional?",
            fr: "Quelle est votre plus grande peur irrationnelle ?",
            zh: "你最大的非理性恐惧是什么？"
        }
    },
    {
        category: 'hypothetical',
        i18n: {
            pt: "Se você pudesse dominar instantaneamente um instrumento, qual seria?",
            en: "If you could instantly master any instrument, which would it be?",
            es: "Si pudieras dominar instantáneamente un instrumento, ¿cuál sería?",
            fr: "Si vous pouviez maîtriser instantanément un instrument, lequel serait-ce ?",
            zh: "如果你能立刻精通一种乐器，你会选哪种？"
        }
    },
    {
        category: 'experiences',
        i18n: {
            pt: "Qual foi a maior aventura da sua vida até agora?",
            en: "What's the greatest adventure of your life so far?",
            es: "¿Cuál ha sido la mayor aventura de tu vida hasta ahora?",
            fr: "Quelle a été la plus grande aventure de votre vie jusqu'à présent ?",
            zh: "到目前为止你人生中最大的冒险是什么？"
        }
    },
    {
        category: 'reflection',
        i18n: {
            pt: "Se você pudesse mudar uma decisão do passado, qual seria?",
            en: "If you could change one decision from your past, what would it be?",
            es: "Si pudieras cambiar una decisión del pasado, ¿cuál sería?",
            fr: "Si vous pouviez changer une décision du passé, laquelle serait-ce ?",
            zh: "如果你能改变过去的一个决定，你会改变什么？"
        }
    },
    {
        category: 'preferences',
        i18n: {
            pt: "Qual série você recomendaria para qualquer pessoa?",
            en: "What TV show would you recommend to anyone?",
            es: "¿Qué serie le recomendarías a cualquier persona?",
            fr: "Quelle série recommanderiez-vous à n'importe qui ?",
            zh: "你会向任何人推荐哪部电视剧？"
        }
    },
    {
        category: 'hypothetical',
        i18n: {
            pt: "Se você fosse escrever um livro, sobre o que seria?",
            en: "If you were to write a book, what would it be about?",
            es: "Si fueras a escribir un libro, ¿de qué trataría?",
            fr: "Si vous deviez écrire un livre, de quoi parlerait-il ?",
            zh: "如果你要写一本书，它会是关于什么的？"
        }
    },
    {
        category: 'reflection',
        i18n: {
            pt: "Qual foi o presente mais significativo que você já recebeu?",
            en: "What's the most meaningful gift you've ever received?",
            es: "¿Cuál es el regalo más significativo que has recibido?",
            fr: "Quel est le cadeau le plus significatif que vous ayez jamais reçu ?",
            zh: "你收到过最有意义的礼物是什么？"
        }
    },
    {
        category: 'reflection',
        i18n: {
            pt: "Se você pudesse ter uma conversa com seu eu de 10 anos atrás, o que diria?",
            en: "If you could talk to your self from 10 years ago, what would you say?",
            es: "Si pudieras hablar con tu yo de hace 10 años, ¿qué le dirías?",
            fr: "Si vous pouviez parler à votre moi d'il y a 10 ans, que lui diriez-vous ?",
            zh: "如果你能和十年前的自己对话，你会说什么？"
        }
    },
    {
        category: 'reflection',
        i18n: {
            pt: "Qual é a comida que te lembra infância?",
            en: "What food reminds you of your childhood?",
            es: "¿Qué comida te recuerda a tu infancia?",
            fr: "Quel aliment vous rappelle votre enfance ?",
            zh: "哪种食物让你想起童年？"
        }
    },
    {
        category: 'hypothetical',
        i18n: {
            pt: "Se sua vida fosse um filme, qual seria o gênero?",
            en: "If your life were a movie, what genre would it be?",
            es: "Si tu vida fuera una película, ¿de qué género sería?",
            fr: "Si votre vie était un film, quel en serait le genre ?",
            zh: "如果你的人生是一部电影，它会是什么类型的？"
        }
    },
    {
        category: 'reflection',
        i18n: {
            pt: "Qual foi a maior lição que você aprendeu com um erro?",
            en: "What's the biggest lesson you've learned from a mistake?",
            es: "¿Cuál es la mayor lección que aprendiste de un error?",
            fr: "Quelle est la plus grande leçon que vous avez tirée d'une erreur ?",
            zh: "你从一个错误中学到的最大教训是什么？"
        }
    },
    {
        category: 'fun',
        i18n: {
            pt: "Qual foi o momento mais engraçado que você já passou?",
            en: "What's the funniest moment you've ever experienced?",
            es: "¿Cuál fue el momento más gracioso que has vivido?",
            fr: "Quel est le moment le plus drôle que vous ayez jamais vécu ?",
            zh: "你经历过最搞笑的瞬间是什么？"
        }
    },
    {
        category: 'reflection',
        i18n: {
            pt: "O que você faria se não tivesse medo de falhar?",
            en: "What would you do if you weren't afraid of failing?",
            es: "¿Qué harías si no tuvieras miedo de fracasar?",
            fr: "Que feriez-vous si vous n'aviez pas peur d'échouer ?",
            zh: "如果你不怕失败，你会做什么？"
        }
    },
    {
        category: 'reflection',
        i18n: {
            pt: "Que livro ou filme mudou sua perspectiva sobre a vida?",
            en: "What book or movie changed your perspective on life?",
            es: "¿Qué libro o película cambió tu perspectiva sobre la vida?",
            fr: "Quel livre ou film a changé votre vision de la vie ?",
            zh: "哪本书或哪部电影改变了你对生活的看法？"
        }
    },
    {
        category: 'reflection',
        i18n: {
            pt: "Como você se imagina daqui a 10 anos?",
            en: "Where do you see yourself in 10 years?",
            es: "¿Cómo te imaginas dentro de 10 años?",
            fr: "Comment vous imaginez-vous dans 10 ans ?",
            zh: "你想象中十年后的自己是什么样的？"
        }
    },
    {
        category: 'reflection',
        i18n: {
            pt: "Qual é a sua lembrança favorita da infância?",
            en: "What's your favorite childhood memory?",
            es: "¿Cuál es tu recuerdo favorito de la infancia?",
            fr: "Quel est votre souvenir d'enfance préféré ?",
            zh: "你最喜欢的童年回忆是什么？"
        }
    },
    {
        category: 'reflection',
        i18n: {
            pt: "Qual parte da sua personalidade você mais protege?",
            en: "What part of your personality do you protect the most?",
            es: "¿Qué parte de tu personalidad proteges más?",
            fr: "Quelle partie de votre personnalité protégez-vous le plus ?",
            zh: "你最保护自己性格中的哪一面？"
        }
    },
    {
        category: 'reflection',
        i18n: {
            pt: "Quando você se sente mais você mesmo?",
            en: "When do you feel the most like yourself?",
            es: "¿Cuándo te sientes más tú mismo?",
            fr: "Quand vous sentez-vous le plus vous-même ?",
            zh: "什么时候你觉得最像自己？"
        }
    },
    {
        category: 'reflection',
        i18n: {
            pt: "Qual legado você gostaria de deixar no mundo?",
            en: "What legacy would you like to leave in the world?",
            es: "¿Qué legado te gustaría dejar en el mundo?",
            fr: "Quel héritage aimeriez-vous laisser au monde ?",
            zh: "你希望给世界留下什么样的遗产？"
        }
    },
    {
        category: 'reflection',
        i18n: {
            pt: "O que você aprendeu sobre relacionamentos observando seus pais?",
            en: "What did you learn about relationships by watching your parents?",
            es: "¿Qué aprendiste sobre las relaciones observando a tus padres?",
            fr: "Qu'avez-vous appris sur les relations en observant vos parents ?",
            zh: "观察父母，你学到了什么关于人际关系的道理？"
        }
    },
    {
        category: 'hypothetical',
        i18n: {
            pt: "Se você pudesse viver em qualquer cidade do mundo, qual escolheria?",
            en: "If you could live in any city in the world, which would you choose?",
            es: "Si pudieras vivir en cualquier ciudad del mundo, ¿cuál elegirías?",
            fr: "Si vous pouviez vivre dans n'importe quelle ville du monde, laquelle choisiriez-vous ?",
            zh: "如果你能住在世界上任何一个城市，你会选哪个？"
        }
    },
    {
        category: 'experiences',
        i18n: {
            pt: "Qual foi o melhor show ou evento ao vivo que você já foi?",
            en: "What's the best concert or live event you've ever been to?",
            es: "¿Cuál fue el mejor concierto o evento en vivo al que has ido?",
            fr: "Quel est le meilleur concert ou événement en direct auquel vous ayez assisté ?",
            zh: "你参加过的最棒的演唱会或现场活动是什么？"
        }
    },

    // ── hypothetical (new) ──────────────────────────────────────────

    {
        category: 'hypothetical',
        i18n: {
            pt: "Se você pudesse falar qualquer idioma fluentemente da noite para o dia, qual escolheria?",
            en: "If you could fluently speak any language overnight, which would you choose?",
            es: "Si pudieras hablar cualquier idioma con fluidez de la noche a la mañana, ¿cuál elegirías?",
            fr: "Si vous pouviez parler couramment n'importe quelle langue du jour au lendemain, laquelle choisiriez-vous ?",
            zh: "如果你能一夜之间流利地说任何语言，你会选择哪种？"
        }
    },
    {
        category: 'hypothetical',
        i18n: {
            pt: "Se você pudesse trocar de vida com alguém por um dia, quem seria?",
            en: "If you could swap lives with someone for a day, who would it be?",
            es: "Si pudieras intercambiar tu vida con alguien por un día, ¿quién sería?",
            fr: "Si vous pouviez échanger votre vie avec quelqu'un pour une journée, qui choisiriez-vous ?",
            zh: "如果你能和某人交换一天的生活，你会选谁？"
        }
    },
    {
        category: 'hypothetical',
        i18n: {
            pt: "Você preferiria ser invisível ou poder ler mentes?",
            en: "Would you rather be invisible or be able to read minds?",
            es: "¿Preferirías ser invisible o poder leer mentes?",
            fr: "Préféreriez-vous être invisible ou pouvoir lire dans les pensées ?",
            zh: "你更愿意隐身还是能读心术？"
        }
    },
    {
        category: 'hypothetical',
        i18n: {
            pt: "Se você pudesse criar uma lei que todos teriam que seguir, qual seria?",
            en: "If you could create one law that everyone had to follow, what would it be?",
            es: "Si pudieras crear una ley que todos tuvieran que seguir, ¿cuál sería?",
            fr: "Si vous pouviez créer une loi que tout le monde devrait suivre, quelle serait-elle ?",
            zh: "如果你能制定一条所有人都必须遵守的法律，它会是什么？"
        }
    },
    {
        category: 'hypothetical',
        i18n: {
            pt: "Você preferiria nunca mais precisar dormir ou nunca mais precisar comer?",
            en: "Would you rather never need to sleep again or never need to eat again?",
            es: "¿Preferirías no necesitar dormir nunca más o no necesitar comer nunca más?",
            fr: "Préféreriez-vous ne plus jamais avoir besoin de dormir ou ne plus jamais avoir besoin de manger ?",
            zh: "你更愿意永远不用睡觉还是永远不用吃饭？"
        }
    },
    {
        category: 'hypothetical',
        i18n: {
            pt: "Você preferiria poder voar ou poder se teletransportar?",
            en: "Would you rather be able to fly or be able to teleport?",
            es: "¿Preferirías poder volar o poder teletransportarte?",
            fr: "Préféreriez-vous pouvoir voler ou pouvoir vous téléporter ?",
            zh: "你更愿意能飞还是能瞬间移动？"
        }
    },
    {
        category: 'hypothetical',
        i18n: {
            pt: "Se uma bola de cristal pudesse revelar uma verdade sobre seu futuro, o que você gostaria de saber?",
            en: "If a crystal ball could reveal one truth about your future, what would you want to know?",
            es: "Si una bola de cristal pudiera revelar una verdad sobre tu futuro, ¿qué te gustaría saber?",
            fr: "Si une boule de cristal pouvait révéler une vérité sur votre avenir, que voudriez-vous savoir ?",
            zh: "如果一个水晶球能揭示关于你未来的一个真相，你想知道什么？"
        }
    },
    {
        category: 'hypothetical',
        i18n: {
            pt: "Se você pudesse viver dentro de qualquer série, filme ou jogo, qual escolheria?",
            en: "If you could live inside any TV show, movie, or game, which would you choose?",
            es: "Si pudieras vivir dentro de cualquier serie, película o juego, ¿cuál elegirías?",
            fr: "Si vous pouviez vivre dans n'importe quelle série, film ou jeu, lequel choisiriez-vous ?",
            zh: "如果你能生活在任何电视剧、电影或游戏中，你会选哪个？"
        }
    },

    // ── fun (new) ───────────────────────────────────────────────────

    {
        category: 'fun',
        i18n: {
            pt: "Qual é o talento mais inútil que você tem?",
            en: "What's the most useless talent you have?",
            es: "¿Cuál es el talento más inútil que tienes?",
            fr: "Quel est le talent le plus inutile que vous possédez ?",
            zh: "你拥有的最没用的才能是什么？"
        }
    },
    {
        category: 'fun',
        i18n: {
            pt: "Qual foi a maior mentira inocente que você já contou?",
            en: "What's the biggest white lie you've ever told?",
            es: "¿Cuál es la mayor mentira piadosa que has contado?",
            fr: "Quel est le plus gros mensonge innocent que vous ayez jamais raconté ?",
            zh: "你说过最大的善意谎言是什么？"
        }
    },
    {
        category: 'fun',
        i18n: {
            pt: "Você canta no chuveiro? Qual é a sua música preferida para isso?",
            en: "Do you sing in the shower? What's your go-to song?",
            es: "¿Cantas en la ducha? ¿Cuál es tu canción preferida para eso?",
            fr: "Chantez-vous sous la douche ? Quelle est votre chanson préférée pour ça ?",
            zh: "你在淋浴时唱歌吗？你最喜欢唱什么歌？"
        }
    },
    {
        category: 'fun',
        i18n: {
            pt: "Qual é a sua melhor imitação?",
            en: "What's your best impression or impersonation?",
            es: "¿Cuál es tu mejor imitación?",
            fr: "Quelle est votre meilleure imitation ?",
            zh: "你最拿手的模仿是什么？"
        }
    },
    {
        category: 'fun',
        i18n: {
            pt: "Qual é a coisa mais estranha que você já pesquisou na internet?",
            en: "What's the strangest thing you've ever searched for on the internet?",
            es: "¿Cuál es la cosa más extraña que has buscado en internet?",
            fr: "Quelle est la chose la plus étrange que vous ayez jamais cherchée sur internet ?",
            zh: "你在网上搜过最奇怪的东西是什么？"
        }
    },
    {
        category: 'fun',
        i18n: {
            pt: "Já mandou uma mensagem para a pessoa errada? O que aconteceu?",
            en: "Have you ever sent a text to the wrong person? What happened?",
            es: "¿Alguna vez enviaste un mensaje a la persona equivocada? ¿Qué pasó?",
            fr: "Avez-vous déjà envoyé un message à la mauvaise personne ? Que s'est-il passé ?",
            zh: "你有没有把消息发错人过？发生了什么？"
        }
    },
    {
        category: 'fun',
        i18n: {
            pt: "Qual foi a situação mais constrangedora que você já viveu em público?",
            en: "What's the most embarrassing situation you've experienced in public?",
            es: "¿Cuál fue la situación más vergonzosa que viviste en público?",
            fr: "Quelle est la situation la plus embarrassante que vous ayez vécue en public ?",
            zh: "你在公共场合经历过最尴尬的事是什么？"
        }
    },
    {
        category: 'fun',
        i18n: {
            pt: "Se você tivesse que comer apenas um alimento pelo resto da vida, qual seria?",
            en: "If you had to eat only one food for the rest of your life, what would it be?",
            es: "Si tuvieras que comer solo un alimento por el resto de tu vida, ¿cuál sería?",
            fr: "Si vous deviez manger un seul aliment pour le reste de votre vie, lequel serait-ce ?",
            zh: "如果你余生只能吃一种食物，你会选什么？"
        }
    },
    {
        category: 'fun',
        i18n: {
            pt: "Já fingiu não estar em casa quando alguém tocou a campainha?",
            en: "Have you ever pretended not to be home when someone rang the doorbell?",
            es: "¿Alguna vez fingiste no estar en casa cuando alguien tocó el timbre?",
            fr: "Avez-vous déjà fait semblant de ne pas être chez vous quand quelqu'un a sonné ?",
            zh: "有人按门铃时你有没有假装不在家？"
        }
    },
    {
        category: 'fun',
        i18n: {
            pt: "Qual é a pior piada que você sabe, mas conta mesmo assim?",
            en: "What's the worst joke you know but tell anyway?",
            es: "¿Cuál es el peor chiste que sabes pero cuentas de todas formas?",
            fr: "Quelle est la pire blague que vous connaissez mais racontez quand même ?",
            zh: "你知道最冷的笑话是什么（但你还是会讲）？"
        }
    },
    {
        category: 'fun',
        i18n: {
            pt: "Já riu em uma hora totalmente inapropriada? O que aconteceu?",
            en: "Have you ever laughed at a totally inappropriate moment? What happened?",
            es: "¿Alguna vez te reíste en un momento totalmente inapropiado? ¿Qué pasó?",
            fr: "Avez-vous déjà ri à un moment totalement inapproprié ? Que s'est-il passé ?",
            zh: "你有没有在完全不合适的时候笑出来？发生了什么？"
        }
    },
    {
        category: 'fun',
        i18n: {
            pt: "Qual foi o apelido mais estranho que você já teve?",
            en: "What's the strangest nickname you've ever had?",
            es: "¿Cuál es el apodo más extraño que has tenido?",
            fr: "Quel est le surnom le plus étrange que vous ayez jamais eu ?",
            zh: "你有过最奇怪的绰号是什么？"
        }
    },
    {
        category: 'fun',
        i18n: {
            pt: "Qual moda ou trend do passado você seguiu e hoje tem vergonha?",
            en: "What past trend or fashion did you follow that you're embarrassed about today?",
            es: "¿Qué moda o tendencia del pasado seguiste y hoy te avergüenza?",
            fr: "Quelle mode ou tendance du passé avez-vous suivie et dont vous avez honte aujourd'hui ?",
            zh: "你过去追过什么潮流或时尚，现在觉得很丢脸？"
        }
    },
    {
        category: 'fun',
        i18n: {
            pt: "Qual é a coisa mais engraçada que uma criança já te disse?",
            en: "What's the funniest thing a child has ever said to you?",
            es: "¿Cuál es la cosa más graciosa que un niño te ha dicho?",
            fr: "Quelle est la chose la plus drôle qu'un enfant vous ait jamais dite ?",
            zh: "小孩子对你说过最搞笑的话是什么？"
        }
    },

    // ── experiences (new) ───────────────────────────────────────────

    {
        category: 'experiences',
        i18n: {
            pt: "Qual foi a coisa mais corajosa que você já fez?",
            en: "What's the bravest thing you've ever done?",
            es: "¿Cuál es la cosa más valiente que has hecho?",
            fr: "Quelle est la chose la plus courageuse que vous ayez jamais faite ?",
            zh: "你做过最勇敢的事是什么？"
        }
    },
    {
        category: 'experiences',
        i18n: {
            pt: "Já conheceu alguém famoso? Como foi?",
            en: "Have you ever met someone famous? What was it like?",
            es: "¿Alguna vez conociste a alguien famoso? ¿Cómo fue?",
            fr: "Avez-vous déjà rencontré quelqu'un de célèbre ? Comment c'était ?",
            zh: "你见过名人吗？感觉如何？"
        }
    },
    {
        category: 'experiences',
        i18n: {
            pt: "Qual foi a refeição mais memorável da sua vida?",
            en: "What was the most memorable meal of your life?",
            es: "¿Cuál fue la comida más memorable de tu vida?",
            fr: "Quel a été le repas le plus mémorable de votre vie ?",
            zh: "你人生中最难忘的一顿饭是什么？"
        }
    },
    {
        category: 'experiences',
        i18n: {
            pt: "Já fez algo que jurou que nunca faria?",
            en: "Have you ever done something you swore you'd never do?",
            es: "¿Alguna vez hiciste algo que juraste que nunca harías?",
            fr: "Avez-vous déjà fait quelque chose que vous aviez juré de ne jamais faire ?",
            zh: "你有没有做过自己发誓绝不会做的事？"
        }
    },
    {
        category: 'experiences',
        i18n: {
            pt: "Qual foi a experiência mais marcante que você teve com um desconhecido?",
            en: "What's the most memorable experience you've had with a stranger?",
            es: "¿Cuál fue la experiencia más memorable que tuviste con un desconocido?",
            fr: "Quelle est l'expérience la plus marquante que vous ayez eue avec un inconnu ?",
            zh: "你和陌生人之间最难忘的经历是什么？"
        }
    },
    {
        category: 'experiences',
        i18n: {
            pt: "Qual foi a maior mudança que você já fez na sua vida?",
            en: "What's the biggest change you've ever made in your life?",
            es: "¿Cuál fue el mayor cambio que has hecho en tu vida?",
            fr: "Quel est le plus grand changement que vous ayez jamais fait dans votre vie ?",
            zh: "你在生活中做过的最大改变是什么？"
        }
    },
    {
        category: 'experiences',
        i18n: {
            pt: "Qual é a história mais inacreditável que aconteceu com você?",
            en: "What's the most unbelievable story that has happened to you?",
            es: "¿Cuál es la historia más increíble que te ha pasado?",
            fr: "Quelle est l'histoire la plus incroyable qui vous soit arrivée ?",
            zh: "发生在你身上最不可思议的故事是什么？"
        }
    },
    {
        category: 'experiences',
        i18n: {
            pt: "Já passou por uma situação em que a sorte te salvou?",
            en: "Have you ever been in a situation where luck saved you?",
            es: "¿Alguna vez estuviste en una situación en la que la suerte te salvó?",
            fr: "Avez-vous déjà vécu une situation où la chance vous a sauvé ?",
            zh: "你有没有经历过运气救了你的时刻？"
        }
    },
    {
        category: 'experiences',
        i18n: {
            pt: "Qual foi o trabalho ou projeto que mais te deu orgulho?",
            en: "What job or project are you most proud of?",
            es: "¿Cuál fue el trabajo o proyecto del que más te sientes orgulloso(a)?",
            fr: "Quel travail ou projet vous a rendu le/la plus fier/fière ?",
            zh: "你最引以为豪的工作或项目是什么？"
        }
    },
    {
        category: 'experiences',
        i18n: {
            pt: "Já fez uma viagem sozinho(a)? Como foi a experiência?",
            en: "Have you ever traveled alone? How was the experience?",
            es: "¿Alguna vez viajaste solo(a)? ¿Cómo fue la experiencia?",
            fr: "Avez-vous déjà voyagé seul(e) ? Comment était l'expérience ?",
            zh: "你独自旅行过吗？体验如何？"
        }
    },
    {
        category: 'experiences',
        i18n: {
            pt: "Qual foi o hobby mais inusitado que você já tentou?",
            en: "What's the most unusual hobby you've ever tried?",
            es: "¿Cuál es el pasatiempo más inusual que has intentado?",
            fr: "Quel est le loisir le plus inhabituel que vous ayez jamais essayé ?",
            zh: "你尝试过最不寻常的爱好是什么？"
        }
    },
    {
        category: 'experiences',
        i18n: {
            pt: "Qual foi a coisa mais difícil que você já aprendeu a fazer?",
            en: "What's the hardest thing you've ever learned to do?",
            es: "¿Cuál es la cosa más difícil que has aprendido a hacer?",
            fr: "Quelle est la chose la plus difficile que vous ayez apprise à faire ?",
            zh: "你学过最难的事情是什么？"
        }
    },
    {
        category: 'experiences',
        i18n: {
            pt: "Já participou de algo competitivo? Como foi?",
            en: "Have you ever participated in something competitive? How did it go?",
            es: "¿Alguna vez participaste en algo competitivo? ¿Cómo te fue?",
            fr: "Avez-vous déjà participé à quelque chose de compétitif ? Comment ça s'est passé ?",
            zh: "你参加过什么竞赛吗？结果如何？"
        }
    },
    {
        category: 'experiences',
        i18n: {
            pt: "Qual foi a coisa mais legal que você fez recentemente pela primeira vez?",
            en: "What's the coolest thing you've done recently for the first time?",
            es: "¿Cuál es la cosa más genial que hiciste recientemente por primera vez?",
            fr: "Quelle est la chose la plus cool que vous avez faite récemment pour la première fois ?",
            zh: "你最近第一次做的最酷的事是什么？"
        }
    },
    {
        category: 'experiences',
        i18n: {
            pt: "Qual foi a coisa mais gentil que alguém já fez por você?",
            en: "What's the kindest thing someone has ever done for you?",
            es: "¿Cuál es la cosa más amable que alguien ha hecho por ti?",
            fr: "Quelle est la chose la plus gentille que quelqu'un ait jamais faite pour vous ?",
            zh: "别人为你做过最善良的事是什么？"
        }
    },

    // ── preferences (new) ───────────────────────────────────────────

    {
        category: 'preferences',
        i18n: {
            pt: "Você prefere café ou chá?",
            en: "Do you prefer coffee or tea?",
            es: "¿Prefieres café o té?",
            fr: "Préférez-vous le café ou le thé ?",
            zh: "你更喜欢咖啡还是茶？"
        }
    },
    {
        category: 'preferences',
        i18n: {
            pt: "Você prefere um jantar em casa ou em um restaurante?",
            en: "Do you prefer dinner at home or at a restaurant?",
            es: "¿Prefieres una cena en casa o en un restaurante?",
            fr: "Préférez-vous dîner à la maison ou au restaurant ?",
            zh: "你更喜欢在家吃饭还是去餐厅？"
        }
    },
    {
        category: 'preferences',
        i18n: {
            pt: "Você prefere livro físico ou e-book?",
            en: "Do you prefer physical books or e-books?",
            es: "¿Prefieres libros físicos o e-books?",
            fr: "Préférez-vous les livres papier ou les e-books ?",
            zh: "你更喜欢纸质书还是电子书？"
        }
    },
    {
        category: 'preferences',
        i18n: {
            pt: "Qual é a sua comfort food favorita?",
            en: "What's your favorite comfort food?",
            es: "¿Cuál es tu comida reconfortante favorita?",
            fr: "Quel est votre plat réconfortant préféré ?",
            zh: "你最喜欢的安慰食物是什么？"
        }
    },
    {
        category: 'preferences',
        i18n: {
            pt: "Qual cheiro te traz boas lembranças?",
            en: "What smell brings back good memories for you?",
            es: "¿Qué olor te trae buenos recuerdos?",
            fr: "Quelle odeur vous rappelle de bons souvenirs ?",
            zh: "什么气味能唤起你的美好回忆？"
        }
    },
    {
        category: 'preferences',
        i18n: {
            pt: "Você prefere assistir filmes no cinema ou em casa?",
            en: "Do you prefer watching movies at the theater or at home?",
            es: "¿Prefieres ver películas en el cine o en casa?",
            fr: "Préférez-vous regarder des films au cinéma ou à la maison ?",
            zh: "你更喜欢在电影院看电影还是在家看？"
        }
    },
    {
        category: 'preferences',
        i18n: {
            pt: "Se pudesse receber um ano de assinatura grátis de qualquer serviço, qual escolheria?",
            en: "If you could get a free one-year subscription to any service, which would you choose?",
            es: "Si pudieras recibir un año de suscripción gratis a cualquier servicio, ¿cuál elegirías?",
            fr: "Si vous pouviez obtenir un an d'abonnement gratuit à n'importe quel service, lequel choisiriez-vous ?",
            zh: "如果你能免费获得任何服务的一年订阅，你会选哪个？"
        }
    },
    {
        category: 'preferences',
        i18n: {
            pt: "Você prefere frio ou calor?",
            en: "Do you prefer cold or hot weather?",
            es: "¿Prefieres el frío o el calor?",
            fr: "Préférez-vous le froid ou la chaleur ?",
            zh: "你更喜欢冷天还是热天？"
        }
    },
    {
        category: 'preferences',
        i18n: {
            pt: "Qual é a sua estação do ano favorita e por quê?",
            en: "What's your favorite season and why?",
            es: "¿Cuál es tu estación del año favorita y por qué?",
            fr: "Quelle est votre saison préférée et pourquoi ?",
            zh: "你最喜欢的季节是什么？为什么？"
        }
    },
    {
        category: 'preferences',
        i18n: {
            pt: "Você prefere planejar tudo com antecedência ou ser espontâneo(a)?",
            en: "Do you prefer planning everything ahead or being spontaneous?",
            es: "¿Prefieres planear todo con anticipación o ser espontáneo(a)?",
            fr: "Préférez-vous tout planifier à l'avance ou être spontané(e) ?",
            zh: "你更喜欢提前计划一切还是随性而为？"
        }
    },
    {
        category: 'preferences',
        i18n: {
            pt: "Qual é a sua forma favorita de relaxar depois de um dia cansativo?",
            en: "What's your favorite way to unwind after a tiring day?",
            es: "¿Cuál es tu forma favorita de relajarte después de un día agotador?",
            fr: "Quelle est votre façon préférée de vous détendre après une journée fatigante ?",
            zh: "累了一天之后，你最喜欢的放松方式是什么？"
        }
    },
    {
        category: 'preferences',
        i18n: {
            pt: "Você prefere viajar de avião, trem ou carro?",
            en: "Do you prefer traveling by plane, train, or car?",
            es: "¿Prefieres viajar en avión, tren o coche?",
            fr: "Préférez-vous voyager en avion, en train ou en voiture ?",
            zh: "你更喜欢坐飞机、火车还是自驾旅行？"
        }
    },

    // ── reflection (new) ────────────────────────────────────────────

    {
        category: 'reflection',
        i18n: {
            pt: "O que você mais valoriza em uma amizade?",
            en: "What do you value most in a friendship?",
            es: "¿Qué es lo que más valoras en una amistad?",
            fr: "Qu'est-ce que vous appréciez le plus dans une amitié ?",
            zh: "你在友谊中最看重什么？"
        }
    },
    {
        category: 'reflection',
        i18n: {
            pt: "Qual qualidade você mais admira em outras pessoas?",
            en: "What quality do you admire most in other people?",
            es: "¿Qué cualidad admiras más en otras personas?",
            fr: "Quelle qualité admirez-vous le plus chez les autres ?",
            zh: "你最欣赏别人的什么品质？"
        }
    }
];
