class TextDirective extends Directive{
    updateTemplate(newState){
        return true
    }
    applyUpdate(newState){

        if(this.element.dataset.text[0] === '@'){
            this.element.textContent = this.element.dataset.text.slice(1)
        }else{
            this.element.textContent = newState.card[this.config]
            this.renderedState = newState
        }
    }
    
}