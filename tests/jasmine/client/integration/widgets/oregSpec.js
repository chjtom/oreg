describe('creating a widget', function() {
    beforeEach(function(){

    });

    it('should add pumbanolla size', function() {
        $('button.pumbanolla').click();
    });

    it('clicking the button adds a tanga', function() {
        $('button.tanga').click();
        /*
        var newDivs = $('div.widget');
        expect(newDivs.length).toEqual(0);

        $('button.createWidget').click();
        newDivs = $('div.widget');
        expect(newDivs.length).toEqual(1);
        */
    });

    it('clicking the buttons saves a new widget', function() {
        var col = WidgetCollection.find({size:"pumbanolla"}).fetch();
        expect(col[0].size).toBe('pumbanolla');
    });

    it('clicking is tanga saved', function() {
        var col = WidgetCollection.find({size:"tanga"}).fetch();
        expect(col[0].size).toBe('tanga');
    });
});