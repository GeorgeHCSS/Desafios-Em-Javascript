//Em uma disputa de tiro, uma Catapulta, operando durante 5 Rodadas de 15 minutos cada, lança 300 pedras. Quantas pedras lançará em 8 rodadas de 7 minutos cada?

//Inicio da Rodada
rodadas = 5
duracao = 15
pedras = 300

//Segunda Rodada
rodadas2 = 8
duracao2 = 7
pedras2 = ((rodadas2 * duracao2)*pedras)/(rodadas*duracao)

console.log("A catapulta lançou "+ pedras2 +" pedras em "+rodadas2+" rodadas de "+duracao2+" minutos.")


