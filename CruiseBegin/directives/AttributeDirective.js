class AttributeDirective extends Directive{
    updateTemplate(newState){
        return true
    }
    applyUpdate(newState){
        
        const congif = JSON.parse(this.config)
        for(const [key, value] of Object.entries(congif)){
            this.element.setAttribute(key,newState.card[value])
        }
    }
   
}