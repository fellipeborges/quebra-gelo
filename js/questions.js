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
    }
];
