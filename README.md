# react-admin-dashboard v1.0

**Live demo**: 



## Folder Structure

### base folder: /src:

-   **/assets**:
    /icons: SVGs icons
    other assets (i.e. images)

-   **/components**:
    generic components, or components that will be used by multiple routes
    i.e.: form components, tables, cards

-   **/hooks**:
    every hook should be in this folder, and its name should start with the prefix "use":
    i.e.: useSidebar, useQuery, etc.

-   **/resources**:


-   **/routes**:
   

    **/service**:
    all the events interacting with backend data should be in this folder
    -   server  save the http server path here
    -   LoginService
    -   SignupService



## Current dependencies:

[react-hook-form](https://www.npmjs.com/package/react-hook-form): form handling.

[react-jss](https://www.npmjs.com/package/react-jss): styles.

[react-router-dom](https://www.npmjs.com/package/react-router-dom): routing.

[simple-flexbox](https://www.npmjs.com/package/simple-flexbox): flexbox utility.

