class ListenerDirective extends Directive{
    updateTemplate(newState){
        return true
    }
    applyUpdate(newState){
        const config = JSON.parse(this.config)
        Object.keys(config).forEach(listener =>{
            this.element.addEventListener(listener, event => {
                if(newState.handlers[config[listener]]){
                    newState.handlers[config[listener]](event)
                }
            })
        })
    }
   
}
