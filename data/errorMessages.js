const settings = require("../settings");

module.exports = {
    //#MARKER Class 1xx (HTTP)
    "100": {
        "errorInternal": true,
        "errorMessage": {
            "en": "Internal Error in HTTP Server",
            "de": "Interner Error im HTTP Server",
            "ru": "Внутренняя ошибка в HTTP-сервере",
            "cs": "Interní chyba v HTTP serveru"
        },
        "causedBy": {
            "en": [
                `An error in the code - please contact me through one of the options on my website (${settings.info.author.website}) with the additional info.`
            ],
            "de": [
                `Ein Error im Quellcode - bitte kontaktiere mich durch eine der Möglichkeiten auf meiner Website (${settings.info.author.website}) mit den zusätzlichen Informationen.`
            ],
            "ru": [
                `Ошибка в коде - пожалуйста, свяжитесь со мной через одну из опций на моем сайте (${settings.info.author.website}) с дополнительной информацией.`
            ],
            "cs": [
                `Chyba v kódu - kontaktujte mě přes jedné z možností na mé webové stránce (${settings.info.author.website}) s dalšími informacemi.`
            ]
        }
    },
    "101": {
        "errorInternal": false,
        "errorMessage": {
            "en": "Request blocked by Rate Limiting",
            "de": "Anfrage blockiert durch Ratenbegrenzung",
            "ru": "Запрос заблокирован ограничением скорости",
            "cs": "Požadavek byl blokován omezením míry"
        },
        "causedBy": {
            "en": [
                `You have sent too many requests too quickly. The limit is ${settings.httpServer.rateLimiting} requests within ${settings.httpServer.timeFrame} ${settings.httpServer.timeFrame == 1 ? "second" : "seconds"}.\nIf you need more requests per minute, please contact me and we can try to figure things out: ${settings.info.author.website}`
            ],
            "de": [
                `Du hast zu viele Anfragen zu schnell gesendet. Das Limit ist ${settings.httpServer.rateLimiting} Anfragen innerhalb von ${settings.httpServer.timeFrame} ${settings.httpServer.timeFrame == 1 ? "Sekunde" : "Sekunden"}.\nWenn du mehr Anfragen pro Minute brauchst, kontaktiere mich bitte, damit wir es klären können: ${settings.info.author.website}`
            ],
            "ru": [
                `Вы отправили слишком много запросов слишком быстро. Лимит составляет ${settings.httpServer.rateLimiting} запросов в пределах ${settings.httpServer.timeFrame} ${settings.httpServer.timeFrame == 1 ? "секунда" : "секунды"}.\nЕсли Вам нужно больше запросов в минуту, пожалуйста, свяжитесь со мной, и мы попробуем разобраться в этом: ${settings.info.author.website}`
            ],
            "cs": [
                `Příliš rychle jste odeslali příliš mnoho žádostí. Limit je ${settings.httpServer.rateLimiting} požadavků v rámci ${settings.httpServer.timeFrame} ${settings.httpServer.timeFrame == 1 ? "sekunda" : "sekund"}.\n Pokud potřebujete více požadavků za minutu, kontaktujte mě a můžeme se domluvit: ${settings.info.author.website}`
            ]
        }
    },
    "102": {
        "errorInternal": false,
        "errorMessage": {
            "en": "Requested Endpoint not found",
            "de": "Angefragten Endpunkt nicht gefunden",
            "ru": "Запрашиваемая конечная точка не найдена",
            "cs": "Koncový bod nebyl nalezen"
        },
        "causedBy": {
            "en": [
                "You sent a request to the wrong URL."
            ],
            "de": [
                "Du hast eine Anfrage an die falsche URL gesendet."
            ],
            "ru": [
                "Вы отправили запрос на неправильный URL-адрес."
            ],
            "cs": [
                "Odeslali jste požadavek na špatnou URL adresu."
            ]
        }
    },
    "103": {
        "errorInternal": false,
        "errorMessage": {
            "en": "Disreputable IP Address",
            "de": "In schlechtem Ruf stehende IP Addresse",
            "ru": "Дискредитирующий IP-адрес",
            "cs": "Pochybná IP adresa"
        },
        "causedBy": {
            "en": [
                `${settings.info.name} has found your IP address to be disreputable and added it to the blacklist.\nThis is probably because you have shown malicious behavior like an attempted interruption of ${settings.info.name}'s service.\n\nIf you believe this was done in error, please contact me (${settings.info.author.website}) so we can sort things out.`,
            ],
            "de": [
                `${settings.info.name} ist aufgefallen, dass deine IP Addresse einen schlechten Ruf hat und hat sie in die Ignorierungsliste eingetragen.\nDas ist wahrscheinlich passiert, weil du böswilliges Verhalten gezeigt hast, wie beispielsweise eine Unterbrechung von ${settings.info.name}'s Betrieb.\n\nWenn du meinst, das wurde fälschlicherweise gemacht, bitte kontaktiere mich hier: (${settings.info.author.website}).`
            ],
            "ru": [
                `${settings.info.name} нашел ваш IP-адрес неблаговидным и добавил его в черный список.\nВероятно, это потому, что вы показали вредоносное поведение, например, попытку прерывания сервиса ${settings.info.name}.\n\nЕсли вы считаете, что это было сделано по ошибке, пожалуйста, свяжитесь со мной (${settings.info.author.website}), чтобы мы могли разобраться в этом.`
            ],
            "cs": [
                `${settings.info.name} zjistil, že vaše IP adresa má špatnou pověst a přidal ji na černou listinu.\nJe to pravděpodobně proto, že jste projevili škodlivé chování jako pokus o přerušení služby ${settings.info.name}.\n\nPokud si myslíte, že se to stalo omylem, kontaktujte mě (${settings.info.author.website}) abychom mohli věci vyřešit.`
            ]
        }
    },
    "104": {
        "errorInternal": true,
        "errorMessage": {
            "en": "Internal Error while calling Endpoint",
            "de": "Interner Error während des Aufrufs eines Endpunktes",
            "ru": "Внутренняя ошибка при вызове конечной точки",
            "cs": "Interní chyba při volání koncového bodu"
        },
        "causedBy": {
            "en": [
                `An error in the code - please contact me through one of the options on my website (${settings.info.author.website}) with the additional info.`
            ],
            "de": [
                `Ein Error im Quellcode - bitte kontaktiere mich durch eine der Möglichkeiten auf meiner Website (${settings.info.author.website}) mit den zusätzlichen Informationen.`
            ],
            "ru": [
                `Ошибка в коде - пожалуйста, свяжитесь со мной через одну из опций на моем сайте (${settings.info.author.website}) с дополнительной информацией.`
            ],
            "cs": [
                `Chyba v kódu - kontaktujte mě přes jedné z možností na mé webové stránce (${settings.info.author.website}) s dalšími informacemi.`
            ]
        }
    },
    "105": {
        "errorInternal": false,
        "errorMessage": {
            "en": "Malformed Joke",
            "de": "Falsch formatierter Witz",
            "ru": "Малоформальная шутка",
            "cs": "Malformovaný vtip"
        },
        "causedBy": {
            "en": [
                "This joke was formatted incorrectly."
            ],
            "de": [
                "Dieser Witz wurde nicht korrekt formatiert."
            ],
            "ru": [
                "Эта шутка была отформатирована неправильно."
            ],
            "cs": [
                "Tento vtip byl špatně formátován."
            ]
        }
    },
    "106": {
        "errorInternal": false,
        "errorMessage": {
            "en": "No matching joke found",
            "de": "Kein übereinstimmender Witz gefunden",
            "ru": "Шутка не найдена",
            "cs": "Nebyl nalezen žádný odpovídající vtip"
        },
        "causedBy": {
            "en": [
                "No jokes were found that match your provided filter(s)."
            ],
            "de": [
                "Keine Witze wurden gefunden, die den Filtern entsprechen."
            ],
            "ru": [
                "Не было найдено ни одной шутки, которая бы соответствовала вашему фильтру(ам)."
            ],
            "cs": [
                "Nebyly nalezeny žádné vtipy, které by odpovídaly zadaným filtrům."
            ]
        }
    },
    "107": {
        "errorInternal": false,
        "errorMessage": {
            "en": "Payload too large",
            "de": "Anfrageinhalt zu groß",
            "ru": "Слишком большое содержание запроса",
            "cs": "Datový obsah je příliš velký."
        },
        "causedBy": {
            "en": [
                `The provided payload exceeds the limit of ${settings.httpServer.maxPayloadSize} bytes (${(settings.httpServer.maxPayloadSize / 1024).toFixed(1)} kB).`
            ],
            "de": [
                `Der Anfrageinhalt ist größer als das Maximum von ${settings.httpServer.maxPayloadSize} bytes (${(settings.httpServer.maxPayloadSize / 1024).toFixed(1)} kB).`
            ],
            "ru": [
                `Содержимое запроса больше максимального значения ${settings.httpServer.maxPayloadSize} байт (${(settings.httpServer.maxPayloadSize / 1024).toFixed(1)} kB).`
            ],
            "cs": [
                `Poskytovaný datový obsah překračuje limit ${settings.httpServer.maxPayloadSize} bytes (${(settings.httpServer.maxPayloadSize / 1024).toFixed(1)} kB).`
            ]
        }
    },
    "108": {
        "errorInternal": false,
        "errorMessage": {
            "en": "URL too long",
            "de": "URL zu lang",
            "ru": "URL-адрес слишком длинный",
            "cs": "URL je moc dlouhá"
        },
        "causedBy": {
            "en": [
                `The URL (%1 characters) exceeds the maximum length of ${settings.httpServer.maxUrlLength} characters.`
            ],
            "de": [
                `Die angefragte URL (%1 Zeichen) überschreitet die Maximallänge von ${settings.httpServer.maxUrlLength} Zeichen.`
            ],
            "ru": [
                `Длина URL-адрес (%1 символов) превышает максимально допустимую длину в ${settings.httpServer.maxUrlLength} символа.`
            ],
            "cs": [
                `URL (% 1 znaků) překračuje maximální délku znaků ${settings.httpServer.maxUrlLength}.`
            ]
        }
    },
    "109": {
        "errorInternal": false,
        "errorMessage": {
            "en": "Contains invalid characters",
            "de": "Enthält unerlaubte Zeichen",
            "ru": "Содержит недопустимые символы",
            "cs": "Obsahuje neplatné znaky"
        },
        "causedBy": {
            "en": [
                `The joke submission contains invalid characters outside the Unicode range of 0x0000 to 0x0fff`
            ],
            "de": [
                `Der eingereichte Witz enthält unerlaubte Zeichen außerhalb des Unicode-Bereichs 0x0000 bis 0x0fff`
            ],
            "ru": [
                `Представленный анекдот содержит недопустимые символы вне диапазона Юникода от 0x0000 до 0x0fff`
            ],            
            "cs": [
                `Podání vtipu obsahuje neplatné znaky mimo rozsah Unicode od 0x0000 do 0x0fff.`
            ]
        }
    },
    "110": {
        "errorInternal": false,
        "errorMessage": {
            "en": "Submission blocked by Rate Limiting",
            "de": "Einreichung blockiert durch Ratenbegrenzung",
            "ru": "Представление заблокировано ограничением по тарифу",
            "cs": "Podání bylo blokováno omezením míry"
        },
        "causedBy": {
            "en": [
                `You have sent too many requests too quickly. The limit is ${settings.jokes.submissions.rateLimiting} submissions within ${settings.jokes.submissions.timeFrame} ${settings.jokes.submissions.timeFrame == 1 ? "second" : "seconds"}.\nIf you need to send more requests, please either wait for a bit or contact me and we can try to figure things out: ${settings.info.author.website}`
            ],
            "de": [
                `Du hast zu viele Anfragen zu schnell gesendet. Das Limit ist ${settings.jokes.submissions.rateLimiting} Einreichungen innerhalb von ${settings.jokes.submissions.timeFrame} ${settings.jokes.submissions.timeFrame == 1 ? "Sekunde" : "Sekunden"}.\nWenn du mehr Anfragen pro Minute brauchst, kontaktiere mich bitte, damit wir es klären können: ${settings.info.author.website}`
            ],
            "ru": [
                `Вы отправили слишком много запросов слишком быстро. Лимит - ${settings.jokes.submissions.rateLimiting} представления в пределах ${settings.jokes.submissions.timeFrame} ${settings.jokes.submissions.timeFrame == 1 ? "секунда" : "секунды" }.\nЕсли Вам нужно отправить больше запросов, пожалуйста, либо подождите немного, либо свяжитесь со мной, и мы попробуем разобраться в этом: ${settings.info.author.website}`
            ],
            "cs": [
                `Příliš rychle jste odeslali příliš mnoho žádostí. Limit je ${settings.jokes.submissions.rateLimiting} podání v rámci ${settings.jokes.submissions.timeFrame} ${settings.jokes.submissions.timeFrame == 1 ? "sekunda" : "sekund"}.\nPokud potřebujete poslat více požadavků, počkejte prosím chvilku nebo kontaktujte mě a můžeme se domluvit: ${settings.info.author.website}`
            ]
        }
    }
}
