# Lab 8 - Starter
1) I would fit it into a Github Action that runs every time code is pushed, so that testing could be automatically conducted on whatever code that were changed.
2) No, because e2e test is used to test high level behaviour of the app by emulating users' actions, whereas checking the return value of a function is conducted in lower level testing.
3) I would use e2e tests instead of unit test, because writing and sending messages is a user behaviour likely utilizing multiple functions of the application which is beyond the scope of unit tests which address testing single function.
4) Yes, I would use a unit test, since maximum input length is one aspect of the user input function therefore it could be covered by a unit test. 