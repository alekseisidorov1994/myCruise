class ClassDirective extends Directive{
    // constructor(element, config, state) {
    //     this.element = element
    //     this.config = config
    //     this.renderedState = state
    // }
    updateTemplate(newState){
        return true
    }
    applyUpdate(newState){
        const config = JSON.parse(this.config)

        for(let key of Object.keys(config)){
            if(config[key] === 'add'){
                this.element.classList.add(key)
            }

        }

    }
  
}