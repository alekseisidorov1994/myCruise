class IfDirective extends Directive{
    updateTemplate(newState){
        return true
    }
    applyUpdate(newState){
        if(!newState.card[this.config]){
            this.element.remove()
        }
    }
   
}