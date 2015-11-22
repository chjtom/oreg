describe('creating a widget', function() {
    beforeEach(function(){});

    it('should add pumbanolla size', function() {
        $('button.pumbanolla').click();
    });
    /*
    it('clicking the button adds a div', function() {
        var newDivs = $('div.widget');
        expect(newDivs.length).toEqual(0);

        $('button.createWidget').click();
        newDivs = $('div.widget');
        expect(newDivs.length).toEqual(1);
    });
    */

    it('clicking the buttons saves a new widget', function() {
      var widget = WidgetCollection.findOne();
      expect(widget.size).toBe('pumbanölla');
    });
});