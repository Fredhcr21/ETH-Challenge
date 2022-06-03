# Transaction Checker v2

* subscribe to the topic 'pendingTransactions' of the Ethereum publisher
    * Peding Transactions are transactions that have just been set out, not yet confirmed 
    * All sorts of events get broadcasted to the network by a publisher
    * As a subscriber we can choose what topic we want to subscribe to 
* Wait a set time for the transation to be verified
* Retreive said transaction and make same checks as before 