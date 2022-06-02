# JackOfNoTrades-discord-bot
Version of CommonCrayon's discordJSBot (https://github.com/CommonCrayon/discordJSbot) & mchalton ts-discord-bot (https://github.com/mchalton/ts-discord-bot). 

Cloned a version to mess around with it and add some additional features.

Uses MongoDB to store information about the bot.

## Changelog (Improvements made):
    - Add two new commands (/register & /unregister).
        - The user can register a flag with the server which will appear in the 10man.
        - Register yourself with your country ISO flag.
        - No fake flags. Represent your country!
        - You can find the ISO code of your country here: (https://www.translatorscafe.com/cafe/ISO-3166-Country-Codes.htm)
        - Examples of registering your country:
            - "/register IE" (Ireland)
            - "/register DE" (Germany)
            - "/register DK" (Denmark)
            - "/register NL" (Netherlands)
            - "/register AU" (Australia)
    - Add index to Yes list (So you know what position you are)
    - Add 'Copy IP' button to copy to clipboard (for connect server IP & password)
    - Add clickable connect button to launch game & server automatically
    - Improve text & format on embedded message
        - Formatted the countdown timer text to make it easier to read
    - Add 'Jack of no Trades' Thumbnail to embedded message
    - Add lucky shamrock for the Irish
