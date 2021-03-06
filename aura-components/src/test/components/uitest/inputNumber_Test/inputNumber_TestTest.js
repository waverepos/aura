({
    selectors: {
        input: 'input'
    },
    testChangeEventSource: {
        test: [
            function (component) {
                this.inputValue(component.find('Number2'), 1)
            },
            function (component) {
                var eventSource = component.get('v.eventSource');
                var eventValue = component.get('v.eventValue');
                $A.test.assertEquals('ui:inputNumber', eventSource, 'Event source should be ui:inputNumber.');
                $A.test.assertEquals(1, eventValue, 'Event value is not matching.');
            }
        ]
    },

    inputValue: function (component, value) {
        var elm = component.getElement();
        var input = elm.querySelector(this.selectors.input);
        input.value = value;
        $A.test.fireDomEvent(input, "input");
    }
})