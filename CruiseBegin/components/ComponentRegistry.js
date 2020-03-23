class ComponentRegistry{
    constructor(){
        this.components = {}
    }
    registerComponent(component){
        this.components[component.name] = component
       
    }
    getComponentByName(name){
       return this.components[name]
    }
}