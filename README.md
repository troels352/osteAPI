# OsteAPI Dokumentation

## Resurser

**Get /cheeses**


Resursen repræsentere alle oste i kartoteket.
Resursen er formateret på følgende måde:

```JSON
[{

    "Varenr": number,
    "Navn": string,
    "Pris": number,
    "Type": string,
    "Producent": string,
    "Antal": number,
    Beskrivelse": {
        "tekst": string,
        "smag": string,
        "vægt": number,
        "billede": string,

    }
},{

    ...
}]
```

**GET /cheeses/\<varenummer>**

Resursen repræsentere en enkelt ost i kartoteket.
Resursen er formateret på følgende måde:

```JSON
{

    "Varenr": number,
    "Navn": string,
    "Pris": number,
    "Type": string,
    "Producent": string,
    "Antal": number,
    Beskrivelse": {
        "tekst": string,
        "smag": string,
        "vægt": number,
        "billede": string,

    }
},{

    ...
}
```


**POST /login**

Resursen vartager log-ind information og returnerer et AccesToken.
Resursens request body er formateret på følgende måde:


```JSON
{
    "Username": string,
    "Password": string,
    
}
```

Resursens response er formateret på følgende måde:

```JSON
{
    "AccesToken": string
}
```

AccesToken er en 512 bit HEX streng, genereret med randomBytes.