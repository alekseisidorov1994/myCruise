class Store{
    constructor(){
        this.state = null
        this.callbacks = []
    }
    setInitialState(value){
        this.state = {
        ...value}
    }
    removeElement(item){
        this.state.cards.splice( this.state.cards.findIndex(card => card.id === item.id), 1);
        this.registerOnChange();
       
    }
    registerOnChange(){
        this.callbacks.forEach(callback => callback(this.state))
    }
    addCallback(callback){
        this.callbacks.push(callback)
    }

}