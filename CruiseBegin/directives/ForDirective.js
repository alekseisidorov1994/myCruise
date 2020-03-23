class ForDirective extends Directive{
    updateTemplate(newState){
        return true
    }
    applyUpdate(newState){
        const config = JSON.parse(this.config)
        const componentClass = registerCom.getComponentByName(config.component)
        newState[config.collection].forEach(item => {
            const component = new componentClass(item)
            this.element.append(component.render())
        })
    }
   
}