[![My Skills](https://skillicons.dev/icons?i=js,swift)](https://skillicons.dev)

Allows me to redirect some websites to others that I like more (for whatever reason).

Unfortunatelly [userscripts](https://github.com/quoid/userscripts) does not achieve the exact same behavior. The redirection when using it is slightly slower.

An alternative is [redirect-web](https://github.com/mshibanami/redirect-web) which is amazing but I think it's easier to add the rules by code than by an interface.

Therefore I decided to write an iOS Safari Extension. This may serve as inspiration for others.

All the relevant code is inside [content.js](https://github.com/Andre113/OtaRedirect/blob/main/OtaRedirect%20Extension/Resources/content.js). The redirection is done entirely with javascript.
