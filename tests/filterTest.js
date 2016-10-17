describe('phone number format filter', function(){ 
	beforeEach(module('phoneFormat')); //load module
		
        var phFormat;    
        beforeEach(inject(function($filter){ //initialize your filter
        	phFormat = $filter('phFormat',{});
        }));
        
        it('Should return the county name', function(){  //write individual tests
            expect(phFormat('+16692228585')).toBe('usa'); //pass
            expect(phFormat('+919722332547')).toBe('in'); //pass
            expect(phFormat('+442071234567')).toBe('uk');//pass
            expect(phFormat('+611300880067')).toBe('au');//pass
            expect(phFormat('+868003314331')).toBe('ch');//pass
            expect(phFormat('+27119785313')).toBe('sa');//pass
        }); 
    
    
})