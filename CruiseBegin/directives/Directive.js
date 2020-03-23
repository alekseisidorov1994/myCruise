class Directive{
    constructor(element, config, state) {
        this.element = element
        this.config = config
        this.renderedState = null
    }
    updateTemplate(newState){
        return true
    }
    applyUpdate(newState){}
    render(newState){
        if(this.updateTemplate(newState)){
            this.applyUpdate(newState)
            this.renderedState = newState
        }
    }
}