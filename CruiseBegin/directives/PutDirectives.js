class PutDirective extends Directive{
    applyUpdate(newState){
        const componentClass = registerCom.getComponentByName(this.config)
        const component = new componentClass()
        this.element.append(component.render())
        // console.log(this.renderedState);
    }
 
}