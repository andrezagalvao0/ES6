(() => {
    this.name = 'arrow function';
    const getNameArrowFn = () => this.name;

    function getName(){
        return this.name;
    }

    const user = {
        name: 'Nome no objeto de execução', //\só vai ser exibido pela function getName
        getNameArrowFn,
        getName
    }

    console.log(user.getNameArrowFn()); //Exibição do arrow function
    console.log(user.getName()); //função normal

})();